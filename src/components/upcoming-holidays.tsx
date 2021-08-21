import { format } from 'date-fns'
import { id } from 'date-fns/locale'

import { APIResult } from 'pages'
import { styled } from 'stitches.config'

const GridWrapper = styled('section', {
  display: 'grid',
  gridTemplateRows: 'repeat(1, minmax(0, 1fr))',
  maxWidth: '32rem', // screen lg
  margin: '0 auto',
  width: '100%',
  gap: '.5rem'
})

const Card = styled('div', {
  width: '100%',
  display: 'flex',
  backgroundColor: '$gray6',
  borderRadius: '4px',
  boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
})

const CardBody = styled('div', {
  padding: '.5rem',
  display: 'flex',
  alignItems: 'center',
  fontSize: 'large'
})

const DateDay = styled('p', {
  fontSize: 'small'
})

const DateNumber = styled('div', {
  fontSize: 'xx-large',
  fontWeight: 'bold'
})

const CardSider = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '.3rem',
  width: '15%',
  backgroundColor: '$gray2'
})

const SectionHeader = styled('h2', {
  fontSize: 'x-large',
  margin: '1rem 0',
  fontWeight: 'bold'
})

const toDateNumber = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'd')
}

const toDateDay = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'EEEE', { locale: id })
}

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
