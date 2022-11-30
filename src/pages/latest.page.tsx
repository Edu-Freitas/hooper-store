import Header from '../components/header/header.component'
import LatestItem from '../components/latestItem/latest-item.component'

const LatestPage = () => {
  return (
    <>
      <Header />
      <LatestItem sliceIndex={[0, 5]} />
    </>
  )
}

export default LatestPage
