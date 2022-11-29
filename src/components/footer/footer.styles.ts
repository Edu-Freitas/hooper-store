import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const FooterContainer = styled.div`
  height: 100vh;
  width: 100%;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Colors.background.dark};
`
export const FooterColsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-bottom: 10px;
  border-bottom: 2px solid ${Colors.text.details};
`

export const FooterCol = styled.div`
  color: ${Colors.text.white};
  h4 {
    margin-bottom: 8px;
  }
  ul {
    list-style: none;
  }
  li {
    margin-bottom: 5px;
    cursor: pointer;
  }
`

export const FooterCopy = styled.div`
  color: ${Colors.text.white};
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const FooterCopyIcons = styled.ul`
  padding-top: 10px;
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  li {
    margin-right: 5px;
  }
`
