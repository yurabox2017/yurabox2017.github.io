import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './API';
import type { Product } from 'src/entities/types/product';
import { RootState } from 'src/features/store/store';
import { cartActions } from 'src/features/store/cart.slice';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { baseApi } from './baseApi';

export type Params = {
  name: string;
  photo?: string;
  desc?: string;
  oldPrice?: number;
  price: number;
  categoryId: string;
};

export interface IProductsResponse {
  data: Product[];
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

export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<IProductsResponse, number>({
      query: (page = 1) => `/products?${urlParams(page)}`,
      providesTags: ['Product'],
      transformResponse: (response: IProductsResponse) => response,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCash, newItem, { arg }) => {
        const page = arg;

        if (page === 1) return newItem;

        currentCash.data.unshift(...newItem.data);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg !== previousArg;
      },
    }),
    getProductById: build.query<Product, string>({
      query: (id) => `/products/${id}`,
      providesTags: ['Product'],
      transformErrorResponse: (error) => {
        if ('status' in error) {
          return error;
        }
      },
    }),
    addProduct: build.mutation<Product, Params>({
      query: (data) => ({
        url: `/products`,
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
      invalidatesTags: ['Product'],
    }),

    editProduct: build.mutation<Product, { params: Params; id: string }>({
      query: ({ params: data, id }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformErrorResponse: (error) => {
        if ('status' in error) {
          const serverErrors = error.data as ServerErrors;
          return serverErrors.errors[0]?.message;
        }
        return error;
      },
      invalidatesTags: ['Product'],
    }),
    deleteProduct: build.mutation<Product, string>({
      query: (id) => ({
        url: `/products/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(cartActions.delete(id));
        } catch (e) {
          alert('Не удалось удалить из корзины');
        }
      },
      invalidatesTags: ['Product'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useEditProductMutation,
  useLazyGetProductsQuery,
  useGetProductByIdQuery,
  useLazyGetProductByIdQuery,
  useDeleteProductMutation,
} = productApi;
