import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'

import UpcomingHolidays from '@components/upcoming-holidays'
import { global, styled } from 'stitches.config'
import NextHolidays from '@components/next-holidays'

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

export interface Data {
  upcomings: APIResult[]
  nextMonths: APIResult[]
  previousMonths: APIResult[]
}

export const getStaticProps: GetStaticProps = async () => {
  const apiResult = (await (await fetch('https://api-harilibur.vercel.app/api')).json()) as APIResult[]

  const data: Data = {
    upcomings: [],
    nextMonths: [],
    previousMonths: []
  }

  const thisMonth = new Date().getMonth() + 1
  apiResult.filter(res => {
    const formattedHolidayMonth = new Date(res.holiday_date).getMonth() + 1

    if (formattedHolidayMonth === thisMonth) {
      data.upcomings.push(res)
    } else if (formattedHolidayMonth > thisMonth) {
      data.nextMonths.push(res)
    } else {
      data.previousMonths.push(res)
    }
  })

  return { props: { data } }
}

const Home: NextPage<{ data: Data }> = ({ data }) => {
  global({
    '#__next': {
      backgroundColor: '$gray1',
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23e2e2e2' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");`
    }
  })()

  return (
    <Container>
      <Head>
        <title>Hari Libur :)</title>
        <meta name="description" content="Daftar hari libur nasional." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UpcomingHolidays upcomings={data?.upcomings} />
      <NextHolidays nextMonths={data?.nextMonths} />
    </Container>
  )
}

export default Home
