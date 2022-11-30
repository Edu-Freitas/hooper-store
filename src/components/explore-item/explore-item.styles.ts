import styled from 'styled-components'
import Colors from '../theme/theme.colors'

interface ExploreItemImageProps {
  imageUrl: string
}
export const ExploreItemContainer = styled.div`
  width: 350px;
  height: 440px;
  display: flex;
  flex-direction: column;
`

export const ExploreItemImage = styled.div<ExploreItemImageProps>`
  background-image: ${(props) => `url('${props.imageUrl}')`};
  height: 80%;
  min-height: 352px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: flex-end;
  transition: all 0.3s ease;
  background-color: transparent;
  background-blend-mode: color;

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
