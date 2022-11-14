import { FunctionComponent } from 'react'
import Product from '../../types/products.types'
import {
  ExploreItemContainer,
  ExploreItemDescription,
  ExploreItemDetails,
  ExploreItemImage
} from './explore-item.styles'

interface ExploreItemProps {
  product: Product
}
const ExploreItem: FunctionComponent<ExploreItemProps> = ({ product }) => {
  return (
    <ExploreItemContainer>
      <ExploreItemImage imageUrl={product.imageUrl[1]} />
      <ExploreItemDetails>
        <ExploreItemDescription>
          <h3>{/* Nome do produto recebido */}</h3>

          <span>R${/* Preço do produto recebido */}</span>
        </ExploreItemDescription>
      </ExploreItemDetails>
    </ExploreItemContainer>
  )
}

export default ExploreItem
