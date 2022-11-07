import { collection, getDocs } from 'firebase/firestore'
import { createContext, FunctionComponent, useState } from 'react'
import { db } from '../config/firebase.config'
import { categoryConverter } from '../converters/firestore.converter'
import Category from '../types/category.types'

interface CategoryContextProviderProps {
  children: React.ReactNode
}
interface ICategoryContext {
  categories: Category[]
  fetchCategories: () => Promise<void>
}

export const CategoryContext = createContext<ICategoryContext>({
  categories: [],
  fetchCategories: () => Promise.resolve()
})

const CategoryContextProvider: FunctionComponent<
  CategoryContextProviderProps
> = ({ children }) => {
  const [categories, setCategories] = useState<Category[]>([])
  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []
      const querySnapshot = await getDocs(
        collection(db, 'categories').withConverter(categoryConverter)
      )
      querySnapshot.forEach((doc) => {
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
      console.log(categories)
    } catch (error) {
      console.log({ error })
    }
  }

  return (
    <CategoryContext.Provider value={{ categories, fetchCategories }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContextProvider
