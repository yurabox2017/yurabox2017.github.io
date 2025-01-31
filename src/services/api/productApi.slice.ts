import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PREFIX } from './API';
import type { Product } from 'src/entities/types/product';
import { productActions } from 'src/features/store/product.slice';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { RootState } from 'src/features/store/store';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: fetchBaseQuery({
    baseUrl: PREFIX,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).rootReducer.user.jwt;
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Product'],
  endpoints: (build) => ({
    getProducts: build.query<IProductsResponse, number>({
      query: (page = 1) => `/products?${urlParams(page)}`,
      providesTags: (result, error, page) =>
        result
          ? [
              ...result.data.map(({ id }) => ({ type: 'Product' as const, id })),
              { type: 'Product', id: 'PARTIAL-LIST' },
            ]
          : [{ type: 'Product', id: 'PARTIAL-LIST' }],
      // providesTags: ['Product'],
      transformResponse: (response: IProductsResponse) => response,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: ({ data: currentCash }, { data: newItems }) => {
        currentCash.push(...newItems);
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
      invalidatesTags: ['Product'],
    }),

    editProduct: build.mutation<Product, { params: Params; id: string }>({
      query: ({ params: data, id }) => ({
        url: `/products/${id}`,
        method: 'PUT',
        body: data,
      }),
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
} = productApi;
