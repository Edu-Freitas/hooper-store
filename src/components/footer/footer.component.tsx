import {
  FooterCol,
  FooterColsContainer,
  FooterContainer,
  FooterCopy,
  FooterCopyIcons
} from './footer.styles'

import { RiInstagramFill, RiLinkedinFill, RiGithubFill } from 'react-icons/ri'
const Footer = () => {
  return (
    <FooterContainer>
      <FooterColsContainer>
        <FooterCol>
          <h4>Endereço e Telefone</h4>
          <ul>
            <li>R.Fictícia, Av.Imaginada, N.Inexistente, Brasil.</li>
            <li>4002-8922 ou 1234-5678</li>
          </ul>
        </FooterCol>
        <FooterCol>
          <h4>Links Úteis</h4>
          <ul>
            <li>Home</li>
            <li>Novidades</li>
            <li>Explorar</li>
          </ul>
        </FooterCol>
        <FooterCol>
          <h4> Ajuda e Outras informações</h4>
          <ul>
            <li>Atendimento ao cliente</li>
            <li>Dúvidas frequentes</li>
          </ul>
        </FooterCol>
      </FooterColsContainer>

      <FooterCopy>
        <p>Copyright &copy; </p>
        <FooterCopyIcons>
          <li>
            <RiInstagramFill size={24} />
          </li>
          <li>
            <RiLinkedinFill size={24} />
          </li>
          <li>
            <RiGithubFill size={24} />
          </li>
        </FooterCopyIcons>
      </FooterCopy>
    </FooterContainer>
  )
}

export default Footer
