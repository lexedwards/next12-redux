import { createApi } from '@reduxjs/toolkit/query/react'
import { HYDRATE } from 'next-redux-wrapper'
import { axiosBaseQuery } from '~/lib/axiosBaseQuery'

export const sampleAPI = createApi({
  reducerPath: 'sampleAPI',
  baseQuery: axiosBaseQuery({
    baseUrl: 'https://pokeapi.co/api/v2/',
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath]
    }
  },
  endpoints: builder => ({
    getPokemonList: builder.query<
      { results: Array<{ name: string; url: string }> },
      void
    >({
      query: () => ({ url: `pokemon/`, method: 'GET' }),
    }),
  }),
})

// Hooks for functional components and SSR

export const {
  useGetPokemonListQuery,
  util: { getRunningOperationPromises },
  endpoints: { getPokemonList },
} = sampleAPI
