import { api } from '@/redux/api/apiSlice';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/users/signup`,
        method: 'POST',
        body: data,
      }),
    }),
    logIn: builder.mutation({
      query: ({ data }) => ({
        url: `/users/login`,
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useLogInMutation, useSignUpMutation } = userApi;
