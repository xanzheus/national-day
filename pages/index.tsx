import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import UpcomingHolidays from '@components/upcoming-holidays'
import { styled } from 'stitches.config'
import NextHolidays from '@components/next-holidays'
import ControlBar from '@components/control-bar'
import dataExtractor from 'src/utils/data-extractor'

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

export const getStaticProps: GetStaticProps = async () => {
  const data = (await (await fetch('https://api-harilibur.vercel.app/api')).json()) as APIResult[]

  return { props: { data } }
}

const Home: NextPage<{ data: APIResult[] }> = ({ data }) => {
  const extractedData = dataExtractor(data)

  return (
    <Container>
      <Head>
        <title>Hari Libur :)</title>
        <meta name="description" content="Daftar hari libur nasional." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ControlBar />
      <UpcomingHolidays upcomings={extractedData?.upcomings} />
      <NextHolidays nextMonths={extractedData?.nextMonths} />
    </Container>
  )
}

export default Home
