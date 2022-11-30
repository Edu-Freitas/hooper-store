import { HiOutlineShoppingCart } from 'react-icons/hi'
import { BiDownArrow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderLogo
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()
  const handleLogoClick = () => {
    navigate('/')
  }

  const handleNewsClick = () => {
    navigate('/latest')
  }

  return (
    <HeaderContainer>
      <HeaderLogo onClick={handleLogoClick}>
        <h2>Hooper'</h2>
        <span>Store</span>
      </HeaderLogo>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem onClick={handleNewsClick}>Novidades</HeaderItem>
        <HeaderItem>
          Páginas <BiDownArrow size={12} />{' '}
        </HeaderItem>
        <HeaderItem>Login</HeaderItem>
        <HeaderItem>Criar conta</HeaderItem>
        <HeaderItem>
          <HiOutlineShoppingCart size={30} />
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
