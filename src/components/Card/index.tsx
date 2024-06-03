import { CardContainer, CardHeader } from './styles'

interface CardProps {
  title: string
  description: string
  date: string
}

export function Card({ title, description, date }: CardProps) {
  return (
    <CardContainer to="/post/1">
      <CardHeader>
        <h2>{title}</h2>
        <span>{date}</span>
      </CardHeader>

      <p>{description}</p>
    </CardContainer>
  )
}
