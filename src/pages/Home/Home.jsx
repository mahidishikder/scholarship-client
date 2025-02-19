import { Helmet } from "react-helmet"
import Banner from "./Banner/Banner"
import HomeCard from "./HomeCard/HomeCard"
import ExtraSection1 from "./ExtraSection1/ExtraSection1"
import ExtraSection2 from "./ExtraSection1/ExtraSection2/ExtraSection2"
import ExtraSection3 from "./ExtraSection1/ExtraSection2/ExtraSection3/ExtraSection3"
import Success from "./Success/Success"

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Banner></Banner>
      <HomeCard></HomeCard>
      <Success></Success>
      <ExtraSection1></ExtraSection1>
      <ExtraSection2></ExtraSection2>
      <ExtraSection3></ExtraSection3>
    </div>
  )
}

export default Home