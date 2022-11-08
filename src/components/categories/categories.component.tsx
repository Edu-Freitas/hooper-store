import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/category.context'
import CategoryItem from '../category-item/category-item.component'
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    fetchCategories()
    console.log(categories)
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category}></CategoryItem>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
