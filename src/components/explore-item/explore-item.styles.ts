import styled from 'styled-components'
import Colors from '../theme/theme.colors'

interface ExploreItemImageProps {
  imageUrl: string
}
export const ExploreItemContainer = styled.div`
  height: 320px;
  width: 160px;
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`

export const ExploreItemImage = styled.div<ExploreItemImageProps>`
  width: 100%;
  height: 70%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${(props) => `url('${props.imageUrl}')`};
`
export const ExploreItemDetails = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ExploreItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  span {
    color: ${Colors.text.details};
    font-size: 12px;
  }
`
