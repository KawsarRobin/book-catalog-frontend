import { api } from '@/redux/api/apiSlice';

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
    }),
    addBook: builder.mutation({
      query: ({ data }) => ({
        url: `/books`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
    updateBook: builder.mutation({
      query: ({ id, data }) => ({
        url: `/books/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['books'],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useAddBookMutation,
  useSingleBookQuery,
  useUpdateBookMutation,
} = bookApi;
