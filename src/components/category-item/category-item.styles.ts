import styled from 'styled-components'
import Colors from '../theme/theme.colors'

interface CategoryContainerProps {
  backgroundImage: string
}
export const CategoryContainer = styled.div<CategoryContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.4);
  background-blend-mode: color;
  background-image: ${(props) => `url('${props.backgroundImage}')`};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.8);
`
export const CategoryDetails = styled.div`
  color: ${Colors.text.white};
  font-family: ${Colors.fontFamily.robotoMono};
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  button {
    background-color: transparent;
    color: ${Colors.text.white};
    cursor: pointer;
    padding: 10px 15px;
    border: white solid 1px;
    border-radius: 3px;
  }
`
