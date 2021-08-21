import type { GetStaticProps, NextPage } from 'next'

import UpcomingHolidays from '@components/upcoming-holidays'
import NextHolidays from '@components/next-holidays'
import dataExtractor from 'src/utils/data-extractor'

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
    <>
      <UpcomingHolidays upcomings={extractedData?.upcomings} />
      <NextHolidays nextMonths={extractedData?.nextMonths} />
    </>
  )
}

export default Home
