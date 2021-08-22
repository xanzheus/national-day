import { isAfterEvent, toDateDay, toDateNumber } from 'src/utils/date-formatter'
import { APIResult } from 'src/utils/fetcher'
import { Card, CardBody, CardSider, DateDay, DateNumber, GridWrapper, SectionHeader } from './shared/Card'

const UpcomingHolidays: React.FC<{ upcomings: APIResult[] }> = ({ upcomings }) => {
  const filteredHolidays = upcomings?.filter(upcome => upcome.is_national_holiday)

  return (
    <GridWrapper>
      <SectionHeader>Bulan Ini</SectionHeader>
      {filteredHolidays.length === 0 && (
        <Card>
          <CardBody css={{ color: '$gray11' }}>Tidak ada</CardBody>
        </Card>
      )}
      {filteredHolidays?.map(holiday => (
        <Card key={holiday.holiday_name} css={{ color: isAfterEvent(holiday.holiday_date) ? '$gray11' : '$gray12' }}>
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
