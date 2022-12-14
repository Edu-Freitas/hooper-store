import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const LatestItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  padding: 2rem;
`

export const LatestItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.8rem;
  margin-bottom: 1.5rem;

  h1 {
    font-size: 2rem;
    color: ${Colors.text.dark};
    span {
      color: ${Colors.text.yellow};
    }
  }
`
export const LatestItemsShow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const LatestItemButton = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  button {
    padding: 20px;
  }
`
