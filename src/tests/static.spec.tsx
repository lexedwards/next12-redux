import { screen, waitFor } from '@testing-library/react'
import { GetStaticPropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { providerRender } from 'test/providerRender'
import Static, { getStaticProps } from '~/pages/static'

describe('Home Page', () => {
  it('Should be defined', () => {
    expect(Static).toBeDefined()
  })

  it('Should render something', async () => {
    providerRender(<Static />)
    const loading = screen.getByText(/loading/i)
    expect(loading).toBeInTheDocument()
    await waitFor(() => expect(loading).not.toBeInTheDocument())
    const links = screen.getAllByRole('link')
    expect(links.length).toEqual(20)
  })
})

describe('Static Props', () => {
  it('Should be defined', () => {
    expect(getStaticProps).toBeDefined()
  })

  it('Should return no props', async () => {
    const context: GetStaticPropsContext<ParsedUrlQuery, PreviewData> = {}
    const props = await getStaticProps(context)
    // This is because extra props are being defined by a wrapper
    // testing for props would be using `expect.objectContaining`
    expect(props).toBeDefined()
  })
})
