import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResult, SignUpBody } from 'src/entities/types/AuthUser';

export const newUserApi = createApi({
  reducerPath: 'registerUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://19429ba06ff2.vps.myjino.ru/api' }),
  endpoints: (build) => ({
    addNewUser: build.mutation<AuthResult, SignUpBody>({
      query: (user) => ({
        url: `/signup`,
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useAddNewUserMutation } = newUserApi;
