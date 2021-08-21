import { format } from 'date-fns'
import { id } from 'date-fns/locale'

export const toDateNumber = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'd', { locale: id })
}

export const toDateDay = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'EEEE', { locale: id })
}

export const toMonth = (date: string) => {
  const _date = new Date(date)

  return format(_date, 'MMMM', { locale: id })
}
