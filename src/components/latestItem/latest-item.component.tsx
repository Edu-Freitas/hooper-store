// Vai receber uma categoria e pegar 3 de seus produtos, utilizando seus dados para nome de item.
// No futuro, essa tag deve ser um carrossel

import { FunctionComponent, useContext } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import CustomButton from '../custom-button/custom-button.component'
import ExploreItem from '../explore-item/explore-item.component'
import { BiRightArrow } from 'react-icons/bi'
import {
  LatestItemButton,
  LatestItemContainer,
  LatestItemDescription,
  LatestItemsShow
} from './latest-item.styles'
import Colors from '../theme/theme.colors'

interface LatestItemIndexProps {
  sliceIndex: number[]
}
const LatestItem: FunctionComponent<LatestItemIndexProps> = ({
  sliceIndex
}) => {
  const { categories } = useContext(CategoryContext)
  const choosedCategories = categories.slice(sliceIndex[0], sliceIndex[1])

  return (
    <>
      {choosedCategories.map((category) => (
        <LatestItemContainer key={category.id}>
          <LatestItemDescription>
            <h1>
              Novidades em <span>{category.displayName}</span>
            </h1>
          </LatestItemDescription>
          <LatestItemsShow>
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
            <CustomButton filled={false}>
              {/* Esse botão vai levar à página de exploração dessa categoria. */}
              <BiRightArrow size={24} color={Colors.text.dark} />
            </CustomButton>
          </LatestItemsShow>
        </LatestItemContainer>
      ))}
      <LatestItemButton>
        {/* Esse botão vai levar À pagina de prévia de todas as categorias */}
        <CustomButton filled={false}>Ver Mais</CustomButton>
      </LatestItemButton>
    </>
  )
}

export default LatestItem
