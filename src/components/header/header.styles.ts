import styled from 'styled-components'
import Colors from '../theme/theme.colors'
export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Colors.background.dark};
  color: ${Colors.text.white};
  padding: 20px 35px;
`
export const HeaderLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  align-items: center;

  h2 {
    color: ${Colors.text.white};
  }
  span {
    color: ${Colors.text.yellow};
  }
`
export const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  &:hover {
    color: ${Colors.text.yellow};
  }

  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    margin-right: 40px;
  }
`
