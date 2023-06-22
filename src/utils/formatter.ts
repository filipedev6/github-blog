import { formatDistanceToNow, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export const dateFormatter = (date: string) => {
  return formatDistanceToNow(parseISO(date), {
    locale: ptBR,
    addSuffix: true,
  })
}
