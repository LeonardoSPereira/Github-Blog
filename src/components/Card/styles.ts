import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled(Link)`
  max-width: 26rem;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background-color: ${(props) => props.theme['base-post']};
  color: ${(props) => props.theme['base-text']};
  border-radius: 10px;
  padding: 2rem;

  p {
    white-space: nowrap;
    overflow-y: hidden;
    text-overflow: ellipsis;
    line-height: 160%;
  }
`

export const CardHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1rem;

  h2 {
    font-size: 1.25rem;
    font-weight: bold;
    line-height: 160%;
    color: ${(props) => props.theme['base-title']};
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    color: ${(props) => props.theme['base-span']};
    margin-top: 0.25rem;
  }
`
