import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { global } from 'stitches.config'

function MyApp({ Component, pageProps }: AppProps) {
  global({
    '#__next': {
      color: '$gray12',
      backgroundColor: '$gray1',
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23343434' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E")`
    }
  })()

  return <Component {...pageProps} />
}
export default MyApp
