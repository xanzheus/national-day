import { APIResult } from 'pages'
import { toDateDay, toDateNumber, toMonth } from 'src/utils/date-formatter'
import { styled } from 'stitches.config'
import { Card, CardBody, CardSider, DateDay, DateNumber, GridWrapper, Month, SectionHeader } from './shared/Card'

const NextHolidays: React.FC<{ nextMonths: APIResult[] }> = ({ nextMonths }) => {
  const filteredHolidays = nextMonths?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper css={{ margin: '2rem auto' }}>
      <SectionHeader>Bulan Depan</SectionHeader>
      {filteredHolidays?.map(holiday => (
        <div style={{ marginTop: '.3rem' }} key={holiday.holiday_name}>
          <Month>{toMonth(holiday.holiday_date)}</Month>
          <Card>
            <CardSider>
              <DateDay>{toDateDay(holiday.holiday_date)}</DateDay>
              <DateNumber>{toDateNumber(holiday.holiday_date)}</DateNumber>
            </CardSider>
            <CardBody>{holiday.holiday_name}</CardBody>
          </Card>
        </div>
      ))}
    </GridWrapper>
  )
}

export default NextHolidays
