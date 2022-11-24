// Vai receber uma categoria e pegar 3 de seus produtos, utilizando seus dados para nome de item.
// No futuro, essa tag deve ser um carrossel

import { useContext } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import ExploreItem from '../explore-item/explore-item.component'
import {
  LatestItemContainer,
  LatestItemDescription,
  LatestItemsSlider
} from './latest-item.styles'

const LatestItem = () => {
  const { categories } = useContext(CategoryContext)
  const choosedCategories = categories.slice(1, 3)

  return (
    <>
      {choosedCategories.map((category) => (
        <LatestItemContainer key={category.id}>
          <LatestItemDescription>
            <h1>
              Novidades em <span>{category.displayName}</span>
            </h1>
          </LatestItemDescription>
          <LatestItemsSlider>
            <ExploreItem
              product={category.products[0]}
              key={category.products[0].id}
            />
            <ExploreItem
              product={category.products[1]}
              key={category.products[1].id}
            />
            <ExploreItem
              product={category.products[2]}
              key={category.products[2].id}
            />
          </LatestItemsSlider>
        </LatestItemContainer>
      ))}
    </>
  )
}

export default LatestItem
