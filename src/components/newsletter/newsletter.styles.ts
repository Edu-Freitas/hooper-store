import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const NewsletterContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  row-gap: 10px;
  padding: 3rem 6rem;
`
export const NewsletterTitle = styled.div`
  h2 {
    color: ${Colors.text.dark};
    line-height: 1.5;
    margin-bottom: 8px;
  }
  p {
    color: ${Colors.text.details};
  }
`
export const NewsletterInputsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  input {
    padding: 10px;
    height: 42px;
    margin-right: 8px;
  }
`
