import { Header } from '../../components/Header'
import { CardContainer, HomeContainer, SearchInput } from './styles'
import { Profile } from '../../components/Profile'
import { Card } from '../../components/Card'
import { useContext } from 'react'
import { IssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const { issues, issuesCount } = useContext(IssuesContext)

  return (
    <div>
      <Header />

      <HomeContainer>
        <Profile variant="default" />
        <SearchInput>
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

          <input type="text" id="search" placeholder="Buscar conteúdo" />
        </SearchInput>

        <CardContainer>
          {issues &&
            issues.map((issue) => (
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
