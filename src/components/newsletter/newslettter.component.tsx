import CustomButton from '../custom-button/custom-button.component'
import { FaPaperPlane } from 'react-icons/fa'
import {
  NewsletterContainer,
  NewsletterInputsContainer,
  NewsletterTitle
} from './newsletter.styles'

const Newsletter = () => {
  return (
    <NewsletterContainer>
      <NewsletterTitle>
        <h2>
          Receba novidades e alertas de promoções de até 70% se inscrevendo no
          nosso Newsletter!
        </h2>
        <p>Hooper'Store, o melhor para cada Hooper.</p>
      </NewsletterTitle>
      <NewsletterInputsContainer>
        <input type="text" placeholder="Seu Nome" />
        <input type="email" placeholder="Seu Email" />
        <CustomButton filled={true}>
          <FaPaperPlane />
        </CustomButton>
      </NewsletterInputsContainer>
    </NewsletterContainer>
  )
}

export default Newsletter
