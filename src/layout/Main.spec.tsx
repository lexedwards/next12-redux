import { screen } from '@testing-library/react'
import { providerRender } from 'test/providerRender'
import { Layout } from './Main'

describe('Main Layout', () => {
  it('Should be defined', () => {
    expect(Layout).toBeDefined()
  })

  it('Should layout semantically', () => {
    providerRender(<Layout />)
    const header = screen.getByRole('banner')
    const main = screen.getByRole('main')
    const footer = screen.getByRole('contentinfo')

    expect(header).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })

  it('Should render in `main` component', () => {
    providerRender(
      <Layout>
        <p>TARGET</p>
      </Layout>,
    )
    const main = screen.getByRole('main')
    expect(main).toHaveTextContent(/target/i)
  })
})
