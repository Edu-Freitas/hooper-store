import styled from 'styled-components'
import Colors from '../theme/theme.colors'

interface ButtonProps {
  filled: boolean
}
export const Button = styled.button<ButtonProps>`
  height: 42px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: ${(props) => (props.filled ? Colors.text.white : Colors.text.dark)};
  background: ${(props) =>
    props.filled ? Colors.background.dark : 'transparent'};
  border: ${(props) =>
    props.filled ? 'none' : `1px solid ${Colors.background.dark}`};
  cursor: pointer;
`
