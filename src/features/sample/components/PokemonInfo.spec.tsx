import { providerRender } from 'test/providerRender'
import { screen } from '@testing-library/react'
import { PokemonInfo } from './PokemonInfo'

describe('Pokemon Info Component', () => {
  it('Should be defined', () => {
    expect(PokemonInfo).toBeDefined()
  })

  const INIT = 'BULBASAUR'
  const LINK = 'http://pokemon.org/url'
  it('Should render the correct text', () => {
    providerRender(<PokemonInfo name={INIT} />)
    const actualEle = screen.getByText(/bulbasaur/i)
    expect(actualEle).toHaveTextContent(/bulbasaur/i)
  })

  it('Should render `go to` link', () => {
    providerRender(<PokemonInfo name={INIT} url={LINK} />)
    const actualEle = screen.getByText(/go to/i)
    expect(actualEle).toBeInTheDocument()
  })
})
