import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IUser, ViewSizeType } from '@/store/slices/users/types';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.filltext.com/' }),
  endpoints: (builder) => ({
    getData: builder.query<IUser[], ViewSizeType>({
      query: (count) => `?rows=${count}&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D`
    }),
  }),
})

export const { useGetDataQuery } = usersApi
