interface CardProps {
  title: string
  description: string
  date: Date
}

export function Card({ title, description, date }: CardProps) {
  return (
    <div>
      <h2>{title}</h2>
      <span>{date.toISOString()}</span>
      <p>{description}</p>
    </div>
  )
}
