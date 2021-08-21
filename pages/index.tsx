import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import UpcomingHolidays from '@components/upcoming-holidays'
import { global, styled } from 'stitches.config'

const Container = styled('div', {
  minHeight: '100vh',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
})

export interface APIResult {
  holiday_date: string
  holiday_name: string
  is_national_holiday: boolean
}

const Home: NextPage<{ upcomings: APIResult[] }> = props => {
  global({
    '#__next': {
      backgroundColor: '$gray1'
    }
  })()

  return (
    <Container>
      <Head>
        <title>Hari Libur :)</title>
        <meta name="description" content="Daftar hari libur nasional." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UpcomingHolidays upcomings={props.upcomings} />
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const thisMonth = new Date().getMonth() + 1
  const upcomings = (await (
    await fetch(`https://api-harilibur.vercel.app/api?month=${thisMonth}`)
  ).json()) as APIResult[]

  return { props: { upcomings } }
}

export default Home
