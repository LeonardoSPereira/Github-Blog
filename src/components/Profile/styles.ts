import { styled } from 'styled-components'

export const ProfileContainer = styled.section`
  width: 100%;
  padding: 2rem 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background-color: ${(props) => props.theme['base-profile']};
  border-radius: 10px;
  box-shadow: 0px 2px 28px 0px rgba(0, 0, 0, 0.2);
  margin-top: -8rem;
  position: relative;

  img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 6px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
    margin-bottom: 0.5rem;
  }
`

export const ProfileContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  p {
    line-height: 160%;
    color: ${(props) => props.theme['base-text']};
    margin-bottom: 1.5rem;
  }
`

export const ProfileHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 160%;
    text-transform: uppercase;
    color: ${(props) => props.theme.blue};
    border-bottom: 1px solid transparent;

    svg {
      margin-top: -0.1rem;
    }

    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.blue};
      transition: border-bottom 0.2s;
    }
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.5rem;
`

export const ProfileSocial = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme['base-label']};
    margin-top: -0.1rem;
  }

  span {
    line-height: 160%;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
