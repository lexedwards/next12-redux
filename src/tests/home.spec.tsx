import { screen } from '@testing-library/react'
import { providerRender } from 'test/providerRender'
import Home from '~/pages/index'

describe('Home Page', () => {
  it('Should be defined', () => {
    expect(Home).toBeDefined()
  })

  it('Should render something', async () => {
    providerRender(<Home />)
    const title = await screen.findAllByRole('heading')
    expect(title[0]).toHaveTextContent(/welcome to next.js!/i)
  })
})
