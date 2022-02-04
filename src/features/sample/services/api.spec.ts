import { renderHook } from '@testing-library/react-hooks'
import { makeStore } from '~/lib/store'
import { sampleAPI, useGetPokemonListQuery } from './api'
import mockPokemonList from 'mocks/handlers/sample/samplePokemon.json'
import { Wrapper } from 'test/providerRender'

describe('Sample API Spec', () => {
  it('Should be defined', () => {
    expect(sampleAPI).toBeDefined()
  })

  it('Should be return the endpoint data through the store', async () => {
    const store = makeStore()
    const actual = await store.dispatch(
      sampleAPI.endpoints.getPokemonList.initiate(),
    )
    expect(actual.data).toEqual(mockPokemonList)
    // Deeply nested **sigh**,
    // However, checks that endpoint is injected into the store
    expect(
      store.getState().sampleAPI.queries['getPokemonList(undefined)']?.data,
    ).toEqual(mockPokemonList)
  })

  it('Should correctly return data from the hook', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGetPokemonListQuery(),
      {
        wrapper: Wrapper,
      },
    )
    expect(result.current.isLoading).toEqual(true)
    await waitForNextUpdate()
    expect(result.current.isLoading).toEqual(false)
    expect(result.current.data).toEqual(mockPokemonList)
  })
})
