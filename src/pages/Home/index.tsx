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
          {Array.from({ length: 10 }).map((_, index) => (
            <Card
              key={index}
              title="teste"
              date={new Date()}
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium officiis, mollitia nobis nostrum modi a quia in odit consectetur nihil qui voluptas, ullam blanditiis accusamus neque nam, alias necessitatibus aperiam."
            />
          ))}
        </CardContainer>
      </HomeContainer>
    </div>
  )
}
