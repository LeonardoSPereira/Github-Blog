import { Header } from '../../components/Header'
import { CardContainer, HomeContainer, SearchInput } from './styles'
import { Profile } from '../../components/Profile'
import { Card } from '../../components/Card'

export function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <Profile />
        <SearchInput>
          <label htmlFor="search">
            <span>Publicações</span>
            <span>6 publicações</span>
          </label>

          <input type="text" id="search" placeholder="Buscar conteúdo" />
        </SearchInput>

        <CardContainer>
          {Array.from({ length: 5 }).map((_, index) => (
            <Card
              key={index}
              title="JavaScript data types and data structures"
              date="1 day ago"
              description="Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Dynamic typing JavaScript is a loosely typed and dynamic language."
            />
          ))}
        </CardContainer>
      </HomeContainer>
    </div>
  )
}
