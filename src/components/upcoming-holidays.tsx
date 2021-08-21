import { APIResult } from 'pages'
import { toDateDay, toDateNumber } from 'src/utils/date-formatter'
import { Card, CardBody, CardSider, DateDay, DateNumber, GridWrapper, SectionHeader } from './shared/Card'

const UpcomingHolidays: React.FC<{ upcomings: APIResult[] }> = ({ upcomings }) => {
  const filteredHolidays = upcomings?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper>
      <SectionHeader>Bulan ini</SectionHeader>
      {filteredHolidays?.map(holiday => (
        <Card key={holiday.holiday_name}>
          <CardSider>
            <DateDay>{toDateDay(holiday.holiday_date)}</DateDay>
            <DateNumber>{toDateNumber(holiday.holiday_date)}</DateNumber>
          </CardSider>
          <CardBody>{holiday.holiday_name}</CardBody>
        </Card>
      ))}
    </GridWrapper>
  )
}

export default UpcomingHolidays
