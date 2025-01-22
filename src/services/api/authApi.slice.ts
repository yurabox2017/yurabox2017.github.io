import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResult } from 'src/entities/types/authResult';
import { AuthLoginResult, SignInBody } from 'src/entities/types/signIn';
import { SignUpBody } from 'src/entities/types/signUp';
import { PREFIX } from './API';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: PREFIX }),
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
      async onQueryStarted(post, { dispatch, queryFulfilled }) {
        const { data } = await queryFulfilled;
        console.log(data);
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
