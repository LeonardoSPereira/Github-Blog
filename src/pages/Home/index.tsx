import { Header } from '../../components/Header'
import { HomeContainer } from './styles'
import { Profile } from '../../components/Profile'

export function Home() {
  return (
    <div>
      <Header />

      <HomeContainer>
        <Profile />
      </HomeContainer>
    </div>
  )
}
