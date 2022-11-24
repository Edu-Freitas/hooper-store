import styled from 'styled-components'
import Colors from '../theme/theme.colors'

export const ExploreItemContainer = styled.div`
  height: 410px;
  width: 410px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ExploreItemImage = styled.div`
  height: 80%;
  width: 100%;

  img {
    height: 90%;
    width: 90%;
  }

  /* div {
    height: 100%;
    width: 100%;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.15);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    left: 0;
    top: 0;
  } */
`

export const ExploreItemDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1rem;
  margin: 1rem;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
  }
`

export const ExploreItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  h4 {
    color: ${Colors.text.dark};
  }

  span {
    color: ${Colors.text.price};
  }
`
