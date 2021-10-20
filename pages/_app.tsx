import '@fontsource/inter/variable.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import Layout from '@components/layout'
import ControlBar from '@components/control-bar'
import globalStyles from '@components/global-styles'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()

  return (
    <Layout>
      <Head>
        <title>National Day 🇮🇩</title>
        <meta name="description"
        <!-- App favicon -->
        <link rel="shortcut icon" href="https://ibb.co/hMg0ggY" />
         content="Daftar Hari Libur Nasional." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ControlBar />
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
