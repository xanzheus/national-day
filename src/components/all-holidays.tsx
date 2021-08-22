import { format } from 'date-fns'
import { toDateDay, toDateNumber, toMonth } from 'src/utils/date-formatter'
import { APIResult } from 'src/utils/fetcher'
import {
  Card,
  CardBody,
  CardSider,
  DateDay,
  DateNumber,
  GridWrapper,
  Month,
  MonthWrapper,
  SectionHeader
} from './shared/Card'

const AllHolidays = ({ holidays }: { holidays: APIResult[] }) => {
  const filteredHolidays = holidays.filter(holiday => holiday.is_national_holiday)

  const holidayResult = {}

  filteredHolidays.map(holiday => {
    const month = toMonth(holiday.holiday_date)

    // @ts-ignore
    holidayResult[month] ? holidayResult[month].push(holiday) : (holidayResult[month] = [holiday])
  })

  return (
    <GridWrapper>
      <SectionHeader>2022</SectionHeader>
      {Object.keys(holidayResult)?.map((month, index) => {
        return (
          <MonthWrapper key={month}>
            <Month>{month}</Month>
            {(Object.values(holidayResult)[index] as APIResult[])?.map(hdr => (
              <Card css={{ marginBottom: '.5rem' }} key={hdr.holiday_date}>
                <CardSider>
                  <DateDay>{toDateDay(hdr.holiday_date)}</DateDay>
                  <DateNumber>{toDateNumber(hdr.holiday_date)}</DateNumber>
                </CardSider>
                <CardBody>{hdr.holiday_name}</CardBody>
              </Card>
            ))}
          </MonthWrapper>
        )
      })}
    </GridWrapper>
  )
}

export default AllHolidays
