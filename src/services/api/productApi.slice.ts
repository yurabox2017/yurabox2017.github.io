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

const urlParams = (pageSize: number, pageNumber: number) =>
  new URLSearchParams({
    pagination: JSON.stringify({
      pageSize: pageSize,
      pageNumber: pageNumber,
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
    getProducts: build.query<Product[], { pageSize?: number; pageNumber?: number }>({
      query: (params) => `/products?${urlParams(params.pageSize, params.pageNumber)}`,
      providesTags: ['Product'],
      transformResponse: (response: IProductsResponse) => response?.data,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCash, newItems) => {
        currentCash.push(...newItems);
      },
      forceRefetch: ({ currentArg, previousArg }) => {
        return currentArg.pageNumber !== previousArg.pageNumber;
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
