import { FaBuilding, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileSocial,
  SocialsWrapper,
} from './styles'

export function Profile() {
  return (
    <ProfileContainer>
      <img src="https://github.com/leonardospereira.png" alt="" />

      <ProfileContent>
        <ProfileHeader>
          <h2>Leonardo Pereira</h2>

          <a href="https://github.com/leonardospereira">
            github
            <FaExternalLinkAlt />
          </a>
        </ProfileHeader>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <SocialsWrapper>
          <ProfileSocial>
            <FaGithub size={18} />
            <span>leonardospereira</span>
          </ProfileSocial>

          <ProfileSocial>
            <FaBuilding size={18} />
            <span>Rocketseat</span>
          </ProfileSocial>

          <ProfileSocial>
            <HiUsers size={18} />
            <span>3 seguidores</span>
          </ProfileSocial>
        </SocialsWrapper>
      </ProfileContent>
    </ProfileContainer>
  )
}
