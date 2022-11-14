// Ṕages
import { useContext, useEffect } from 'react'
import { CategoryContext } from './contexts/category.context'
import Home from './pages/home.page'

function App() {
  const { fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <>
      <Home />
    </>
  )
}

export default App
