import { InferGetStaticPropsType, NextPage } from 'next'
import { PokemonInfo } from '~/features/sample/components/PokemonInfo'
import {
  getPokemonList,
  getRunningOperationPromises,
  useGetPokemonListQuery,
} from '~/features/sample/services/api'
import { wrapper } from '~/lib/store'

export const getStaticProps = wrapper.getStaticProps(store => async context => {
  store.dispatch(getPokemonList.initiate())

  await Promise.all(getRunningOperationPromises())

  return {
    props: {},
  }
})

const SampleStaticPage: NextPage<
  InferGetStaticPropsType<typeof getStaticProps>
> = () => {
  const { isLoading, data } = useGetPokemonListQuery()
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : data ? (
        data.results.map(pokemon => (
          <PokemonInfo key={pokemon.name} {...pokemon} />
        ))
      ) : null}
    </div>
  )
}

export default SampleStaticPage
