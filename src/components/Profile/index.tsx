import {
  FaBuilding,
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa'
import { HiUsers } from 'react-icons/hi'
import {
  ProfileContainer,
  ProfileContent,
  ProfileHeader,
  ProfileSocial,
  SocialsWrapper,
} from './styles'
import { Link } from 'react-router-dom'

export interface ProfileProps {
  variant: 'default' | 'post'
}

export function Profile({ variant }: ProfileProps = { variant: 'default' }) {
  return (
    <ProfileContainer>
      {variant === 'default' && (
        <img src="https://github.com/leonardospereira.png" alt="" />
      )}

      <ProfileContent>
        <ProfileHeader>
          {variant === 'default' ? (
            <h2>Leonardo Pereira</h2>
          ) : (
            <Link to="/">
              <FaChevronLeft />
              Voltar
            </Link>
          )}

          <a href="https://github.com/leonardospereira">
            github
            <FaExternalLinkAlt />
          </a>
        </ProfileHeader>

        {variant === 'default' ? (
          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        ) : (
          <h2>Post title</h2>
        )}

        <SocialsWrapper>
          <ProfileSocial>
            <FaGithub size={18} />
            <span>leonardospereira</span>
          </ProfileSocial>

          <ProfileSocial>
            {variant === 'default' ? (
              <>
                <FaBuilding size={18} />
                <span>Rocketseat</span>
              </>
            ) : (
              <>
                <FaCalendarDay size={18} />
                <span>1 day ago</span>
              </>
            )}
          </ProfileSocial>

          <ProfileSocial>
            {variant === 'default' ? (
              <>
                <HiUsers size={18} />
                <span>3 seguidores</span>
              </>
            ) : (
              <>
                <FaComment size={18} />
                <span>3 comments</span>
              </>
            )}
          </ProfileSocial>
        </SocialsWrapper>
      </ProfileContent>
    </ProfileContainer>
  )
}
