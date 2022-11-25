import { FunctionComponent } from 'react'
import { Button } from './custom-button.styles'

interface CustomButtonProps {
  filled: boolean
  children: React.ReactNode
}

const CustomButton: FunctionComponent<CustomButtonProps> = ({
  children,
  filled
}) => {
  return <Button filled={filled}>{children}</Button>
}

export default CustomButton
