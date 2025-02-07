import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PREFIX } from './API';
import { Category } from 'src/entities/types/category';
import { RootState } from 'src/features/store/store';
import { ServerErrors } from 'src/entities/types/serverErrors';
import { transformError } from 'src/shared/helpers/transformError';

type Params = {
  name: string;
  photo?: string;
};
export interface ICategoryResponse {
  data: Category[];
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

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  baseQuery: fetchBaseQuery({
    baseUrl: PREFIX,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).rootReducer.user.jwt;
      if (token) headers.set('authorization', `Bearer ${token}`);
      return headers;
    },
  }),
  tagTypes: ['Category'],
  endpoints: (build) => ({
    getCategories: build.query<ICategoryResponse, number>({
      query: (page = 1) => `/categories?${urlParams(page)}`,
      transformResponse: (response: ICategoryResponse) => response,
      providesTags: ['Category'],
    }),
    addCategory: build.mutation<Category, Params>({
      query: (data) => ({
        url: `/categories`,
        method: 'POST',
        body: data,
      }),
      transformErrorResponse: (e) => transformError(e),
      invalidatesTags: ['Category'],
    }),
    editCategory: build.mutation<Category, { params: Params; id: string }>({
      query: ({ params: data, id }) => ({
        url: `/categories/${id}`,
        method: 'PUT',
        body: data,
      }),
      transformErrorResponse: (e) => transformError(e),
      invalidatesTags: ['Category'],
    }),
    deleteCategory: build.mutation<Category, string>({
      query: (id) => ({
        url: `/categories/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Category'],
    }),
  }),
});

export const { useGetCategoriesQuery, useAddCategoryMutation, useEditCategoryMutation, useDeleteCategoryMutation } =
  categoryApi;
