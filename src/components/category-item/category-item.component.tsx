import { FunctionComponent } from 'react'
import Category from '../../types/category.types'
import { CategoryContainer, CategoryDetails } from './category-item.styles'

interface CategoryItemProps {
  category: Category
}
const CategoryItem: FunctionComponent<CategoryItemProps> = ({ category }) => {
  return (
    <CategoryContainer backgroundImage={category.imageUrl}>
      <CategoryDetails>
        <h2>{category.displayName}</h2>
        <button>Explorar categoria</button>
      </CategoryDetails>
    </CategoryContainer>
  )
}

export default CategoryItem
