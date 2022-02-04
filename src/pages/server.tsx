import { InferGetServerSidePropsType, NextPage } from 'next'
import { PokemonInfo } from '~/features/sample/components/PokemonInfo'
import {
  getPokemonList,
  getRunningOperationPromises,
  useGetPokemonListQuery,
} from '~/features/sample/services/api'
import { wrapper } from '~/lib/store'

export const getServerSideProps = wrapper.getServerSideProps(
  store => async context => {
    store.dispatch(getPokemonList.initiate())

    await Promise.all(getRunningOperationPromises())
    return {
      props: {},
    }
  },
)

const SampleServerPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
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

export default SampleServerPage
