import AllHolidays from '@components/all-holidays'
import Navigation from '@components/navigation'
import type { GetStaticProps, NextPage } from 'next'
import { APIResult, getHolidays } from 'src/utils/fetcher'

export const getStaticProps: GetStaticProps = async () => {
  const data = await getHolidays('?year=2022')
  return { props: { data } }
}

const Year2002: NextPage<{ data: APIResult[] }> = ({ data }) => {
  return (
    <>
      <AllHolidays holidays={data} />
      <Navigation type="2022" />
    </>
  )
}

export default Year2002
