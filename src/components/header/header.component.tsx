import { HiOutlineShoppingCart } from 'react-icons/hi'

import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderLogo
} from './header.styles'

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo>
        <h2>Hooper'</h2>
        <span>Store</span>
      </HeaderLogo>
      <HeaderItems>
        <HeaderItem>Explorar</HeaderItem>
        <HeaderItem>Novidades</HeaderItem>
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
