import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const url = process.env.REACT_APP_API_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: url }),
  endpoints: (builder) => ({
    setRegister: builder.mutation({
      query: (body) => ({
        url: 'user/registration',
        method: 'POST',
        body,
      }),
    }),
    setLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSetRegisterMutation, useSetLoginMutation } = authApi;
