import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PREFIX } from './API';
import { RootState } from 'src/features/store/store';
import type { Order, OrderStatus } from '../../entities/types/order';
import { ServerErrors } from 'src/entities/types/serverErrors';

type Params = {
  products: Array<{
    id: string;
    quantity: number;
  }>;
  status?: OrderStatus;
};

export const orderApi = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({
    baseUrl: PREFIX,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).rootReducer.user.jwt;
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Order'],
  endpoints: (build) => ({
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

export const { useCreateOrderMutation } = orderApi;
