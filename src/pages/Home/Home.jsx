import { Helmet } from "react-helmet"
import Banner from "./Banner/Banner"
import HomeCard from "./HomeCard/HomeCard"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <HomeCard></HomeCard>
    </div>
  )
}

export default Home