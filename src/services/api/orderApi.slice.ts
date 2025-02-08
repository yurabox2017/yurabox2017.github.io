import type { Order, OrderStatus } from '../../entities/types/order';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { baseApi } from './baseApi';

type Params = {
  products: Array<{
    id: string;
    quantity: number;
  }>;
  status?: OrderStatus;
};

export interface IOrderResponse {
  data: Order[];
  pagination: {
    pageSize: number;
    pageNumber: number;
    total: number;
  };
}

const urlParams = (page: number) =>
  new URLSearchParams({
    pagination: JSON.stringify({
      pageSize: 30,
      pageNumber: page,
    }),
    sorting: JSON.stringify({ type: 'DESC', field: 'id' }),
  }).toString();

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrders: build.query<Order[], number>({
      query: (page = 1) => `/orders?${urlParams(page)}`,
      transformResponse: (response: IOrderResponse) => response.data,
    }),
    createOrder: build.mutation<Order, Params>({
      query: (data) => ({
        url: `/orders`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (error) => {
        if ('status' in error) {
          const serverErrors = error.data as ServerErrors;
          return serverErrors.errors[0]?.message;
        }
        return error;
      },
    }),
  }),
});

export const { useGetOrdersQuery, useCreateOrderMutation } = orderApi;
