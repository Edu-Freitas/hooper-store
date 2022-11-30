import { FunctionComponent } from 'react'
import Product from '../../types/products.types'
import { RiStarFill } from 'react-icons/ri'

// Styles
import {
  ExploreItemContainer,
  ExploreItemDescription,
  ExploreItemDetails,
  ExploreItemImage
} from './explore-item.styles'
import Colors from '../theme/theme.colors'

interface ExploreItemProps {
  product: Product
}
const ExploreItem: FunctionComponent<ExploreItemProps> = ({ product }) => {
  return (
    <ExploreItemContainer>
      <ExploreItemImage imageUrl={product.imageUrl[0]}></ExploreItemImage>
      <ExploreItemDetails>
        <ExploreItemDescription>
          <h4>{product.name}</h4>
          <span>R${product.price}</span>
        </ExploreItemDescription>
        <ul>
          <li>
            <RiStarFill color={Colors.text.yellow} />
          </li>
          <li>
            <RiStarFill color={Colors.text.yellow} />
          </li>
          <li>
            <RiStarFill color={Colors.text.yellow} />
          </li>
          <li>
            <RiStarFill color={Colors.text.yellow} />
          </li>
          <li>
            <RiStarFill color={Colors.text.yellow} />
          </li>
        </ul>
      </ExploreItemDetails>
    </ExploreItemContainer>
  )
}

export default ExploreItem
