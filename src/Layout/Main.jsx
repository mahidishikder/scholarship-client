import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"

function Main() {
  return (
    <div>
      <Header></Header>
      <div className=" lg:px-0">
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Main