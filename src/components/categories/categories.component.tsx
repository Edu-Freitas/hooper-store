import { useContext, useEffect } from 'react'
import { CategoryContext } from '../../contexts/category.context'

const Categories = () => {
  const { categories, fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    fetchCategories()
    console.log(categories)
  }, [])

  return (
    <div>
      {categories.map((category) => (
        <p>{category.displayName}</p>
      ))}
    </div>
  )
}

export default Categories
