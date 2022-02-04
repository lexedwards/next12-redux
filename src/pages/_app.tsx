import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { wrapper } from '~/lib/store'
import { Layout } from '~/layout/Main'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(MyApp)
