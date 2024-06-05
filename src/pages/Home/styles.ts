import styled from 'styled-components'

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding-bottom: 3rem;
`

export const SearchForm = styled.form`
  margin-top: 4.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span:first-child {
      font-size: 1.125rem;
      font-weight: bold;
      line-height: 160%;
      color: ${(props) => props.theme['base-subtitle']};
    }

    span:last-child {
      font-size: 0.875rem;
      line-height: 160%;
      color: ${(props) => props.theme['base-span']};
    }
  }

  input {
    padding: 0.75rem 1rem;
    border-radius: 6px;
    border: 0;
    outline: none;
    box-shadow: 0 0 0 1px ${(props) => props.theme['base-border']};
    background-color: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.blue};
    }

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`
