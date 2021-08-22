import type { GetStaticProps, NextPage } from 'next'

import UpcomingHolidays from '@components/upcoming-holidays'
import NextHolidays from '@components/next-holidays'
import dataExtractor from 'src/utils/data-extractor'
import Navigation from '@components/navigation'
import { APIResult, getHolidays } from 'src/utils/fetcher'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getHolidays()

  return { props: { data } }
}

// TODO: add empty state

const Home: NextPage<{ data: APIResult[] }> = ({ data }) => {
  const extractedData = dataExtractor(data)

  return (
    <>
      <UpcomingHolidays upcomings={extractedData?.upcomings} />
      <NextHolidays nextMonths={extractedData?.nextMonths} />
      <Navigation type="now" />
    </>
  )
}

export default Home
