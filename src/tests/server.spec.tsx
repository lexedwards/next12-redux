import { screen, waitFor } from '@testing-library/react'
import { GetServerSidePropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { providerRender } from 'test/providerRender'
import Server, { getServerSideProps } from '~/pages/server'

describe('Home Page', () => {
  it('Should be defined', () => {
    expect(Server).toBeDefined()
  })

  it('Should render something', async () => {
    providerRender(<Server />)
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument()
    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const links = screen.getAllByRole('link')
    expect(links.length).toEqual(20)
  })
})

describe('Server Props', () => {
  it('Should be defined', () => {
    expect(getServerSideProps).toBeDefined()
  })

  it('Should return no props', async () => {
    const props = await getServerSideProps(
      {} as GetServerSidePropsContext<ParsedUrlQuery, PreviewData>,
    )
    expect(props).toBeDefined()
  })
})
