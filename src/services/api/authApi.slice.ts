import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResult } from 'src/entities/types/authResult';
import { AuthLoginResult, SignInBody } from 'src/entities/types/signIn';
import { SignUpBody } from 'src/entities/types/signUp';
import { baseUrl } from './API';
import { ServerErrors } from 'src/entities/types/serverErrors';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (build) => ({
    signUp: build.mutation<AuthResult, SignUpBody>({
      query: (data) => ({
        url: `/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    signIn: build.mutation<AuthLoginResult, SignInBody>({
      query: (data) => ({
        url: `/signin`,
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

export const { useSignUpMutation, useSignInMutation } = authApi;
