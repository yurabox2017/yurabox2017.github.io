import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PREFIX } from './API';
import { Category } from 'src/homeworks/ts1/3_write';

type Params = {
  name: string;
  photo?: string;
};

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
  endpoints: (build) => ({
    addCategory: build.mutation<any, Params>({
      query: (data) => ({
        url: `/categories`,
        method: 'POST',
        body: data,
      }),
    }),
    editCategory: build.mutation<any, Params>({
      query: (data) => ({
        url: `/categories`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

export const { useAddCategoryMutation, useEditCategoryMutation } = categoryApi;
