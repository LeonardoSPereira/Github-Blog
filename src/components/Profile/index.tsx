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
import { useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { formatDate } from '../../utils/formatDate'

export interface ProfileProps {
  variant: 'default' | 'post'
  postTitle?: string
  postUsername?: string
  postDate?: Date
  postComments?: number
  postURL?: string
}

interface GithubProfileProps {
  avatar_url: string
  name: string
  bio: string
  login: string
  company: string
  followers: number
  html_url: string
}

export function Profile({
  variant,
  postTitle,
  postUsername,
  postComments,
  postDate,
  postURL,
}: ProfileProps) {
  const [githubProfile, setGithubProfile] = useState<GithubProfileProps>()

  async function fetchGithubProfile() {
    const response = await api.get('/users/leonardospereira')

    setGithubProfile(response.data)
  }

  useEffect(() => {
    if (variant === 'default') {
      fetchGithubProfile()
    }
  }, [variant])

  return (
    <ProfileContainer>
      {variant === 'default' && <img src={githubProfile?.avatar_url} alt="" />}

      <ProfileContent>
        <ProfileHeader>
          {variant === 'default' ? (
            <h2>{githubProfile?.name}</h2>
          ) : (
            <Link to="/">
              <FaChevronLeft />
              Voltar
            </Link>
          )}

          <a
            href={variant === 'default' ? githubProfile?.html_url : postURL}
            target="_blank"
            rel="noreferrer"
          >
            github
            <FaExternalLinkAlt />
          </a>
        </ProfileHeader>

        {variant === 'default' ? (
          <p>{githubProfile?.bio}</p>
        ) : (
          <h2>{postTitle}</h2>
        )}

        <SocialsWrapper>
          <ProfileSocial>
            <FaGithub size={18} />
            <span>
              {variant === 'default' ? githubProfile?.login : postUsername}
            </span>
          </ProfileSocial>

          <ProfileSocial>
            {variant === 'default' ? (
              githubProfile?.company && (
                <>
                  <FaBuilding size={18} />
                  <span>{githubProfile.company}</span>
                </>
              )
            ) : (
              <>
                <FaCalendarDay size={18} />
                <span>{formatDate(postDate! ?? new Date())}</span>
              </>
            )}
          </ProfileSocial>

          <ProfileSocial>
            {variant === 'default' ? (
              <>
                <HiUsers size={18} />
                <span>
                  {githubProfile?.followers === 1
                    ? `${githubProfile?.followers} follower`
                    : `${githubProfile?.followers} followers`}
                </span>
              </>
            ) : (
              <>
                <FaComment size={18} />
                <span>
                  {postComments! > 0
                    ? postComments === 1
                      ? `${postComments} comentário`
                      : `${postComments} comentários`
                    : 'Nenhum comentário'}
                </span>
              </>
            )}
          </ProfileSocial>
        </SocialsWrapper>
      </ProfileContent>
    </ProfileContainer>
  )
}
