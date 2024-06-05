import { CardContainer, CardHeader } from './styles'
import { formatDate } from '../../utils/formatDate'

interface CardProps {
  number: number
  title: string
  description: string
  date: Date
}

export function Card({ number, title, description, date }: CardProps) {
  return (
    <CardContainer to={`/post/${number}`}>
      <CardHeader>
        <h2>{title}</h2>
        <span>{formatDate(date)}</span>
      </CardHeader>

      <p>{description}</p>
    </CardContainer>
  )
}
