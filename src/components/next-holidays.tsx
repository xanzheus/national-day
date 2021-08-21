import { APIResult } from 'pages'
import { toDateDay, toDateNumber, toMonth } from 'src/utils/date-formatter'
import { styled } from 'stitches.config'
import { Card, CardBody, CardSider, DateDay, DateNumber, GridWrapper, SectionHeader } from './shared/Card'

const Month = styled('h3', {
  marginTop: '.3rem',
  fontSize: 'large'
})

const NextHolidays: React.FC<{ nextMonths: APIResult[] }> = ({ nextMonths }) => {
  const filteredHolidays = nextMonths?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper css={{ margin: '2rem auto' }}>
      <SectionHeader>Bulan Depan</SectionHeader>
      {filteredHolidays?.map(holiday => (
        <>
          <Month>{toMonth(holiday.holiday_date)}</Month>
          <Card key={holiday.holiday_name}>
            <CardSider>
              <DateDay>{toDateDay(holiday.holiday_date)}</DateDay>
              <DateNumber>{toDateNumber(holiday.holiday_date)}</DateNumber>
            </CardSider>
            <CardBody>{holiday.holiday_name}</CardBody>
          </Card>
        </>
      ))}
    </GridWrapper>
  )
}

export default NextHolidays
