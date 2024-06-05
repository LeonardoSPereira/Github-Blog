import { useContext, useState } from 'react'
import { CardContainer, HomeContainer, SearchForm } from './styles'
import { IssueProps, IssuesContext } from '../../contexts/IssuesContext'
import { Profile } from '../../components/Profile'
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const searchIssuesFormSchema = z.object({
  query: z.string(),
})

type searchIssuesInputsType = z.infer<typeof searchIssuesFormSchema>

export function Home() {
  const [filteredIssues, setFilteredIssues] = useState<IssueProps[] | null>(
    null,
  )
  const { issues, issuesCount, searchIssues } = useContext(IssuesContext)

  const { register, handleSubmit } = useForm<searchIssuesInputsType>({
    resolver: zodResolver(searchIssuesFormSchema),
  })

  function handleSearchIssues({ query }: searchIssuesInputsType) {
    const filteredIssues = searchIssues(query)

    console.log(filteredIssues)

    if (filteredIssues !== null) {
      setFilteredIssues(filteredIssues)
    }
  }

  return (
    <div>
      <Header />

      <HomeContainer>
        <Profile variant="default" />

        <SearchForm onSubmit={handleSubmit(handleSearchIssues)}>
          <label htmlFor="search">
            <span>Publicações</span>
            <span>
              {issuesCount > 0
                ? issuesCount === 1
                  ? `${issuesCount} publicação`
                  : `${issuesCount} publicações`
                : 'Nenhuma publicação'}
            </span>
          </label>

          <input
            type="text"
            id="search"
            placeholder="Buscar conteúdo"
            {...register('query')}
          />
        </SearchForm>

        <CardContainer>
          {filteredIssues !== null
            ? filteredIssues.map((issue) => (
                <Card
                  key={issue.number}
                  number={issue.number}
                  title={issue.title}
                  description={issue.body}
                  date={issue.created_at}
                />
              ))
            : issues.map((issue) => (
                <Card
                  key={issue.number}
                  number={issue.number}
                  title={issue.title}
                  description={issue.body}
                  date={issue.created_at}
                />
              ))}
        </CardContainer>
      </HomeContainer>
    </div>
  )
}
