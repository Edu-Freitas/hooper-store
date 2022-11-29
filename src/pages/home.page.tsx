import Categories from '../components/categories/categories.component'
import Footer from '../components/footer/footer.component'
import Header from '../components/header/header.component'
import LatestItem from '../components/latestItem/latest-item.component'
import Newsletter from '../components/newsletter/newslettter.component'

const Home = () => {
  return (
    <>
      <Header />
      <Categories />
      <LatestItem sliceIndex={[2, 5]} />
      <Newsletter />
      <Footer />
    </>
  )
}

export default Home
