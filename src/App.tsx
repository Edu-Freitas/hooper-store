import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CategoryContext } from './contexts/category.context'
import Home from './pages/home.page'
import LatestPage from './pages/latest.page'

function App() {
  const { fetchCategories } = useContext(CategoryContext)
  useEffect(() => {
    fetchCategories()
  }, [fetchCategories])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/latest" element={<LatestPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
