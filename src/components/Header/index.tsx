import { BackgroundEffectLeft } from '../../assets/BackgroundEffectLeft'
import { BackgroundEffectRight } from '../../assets/BackgroundEffectRight'
import { Logo } from '../../assets/Logo'
import { HeaderContainer } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <BackgroundEffectLeft />
      <Logo />
      <BackgroundEffectRight />
    </HeaderContainer>
  )
}
