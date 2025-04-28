import Header from "../components/Header"
import Footer from "../components/Footer"
import {Outlet} from "react-router-dom"
import FetchItems from "../components/FetchItems"
import Loader from "../components/Loader"
import { useSelector } from "react-redux"
import "bootstrap/dist/css/bootstrap.min.css"
function App() {
  
  const fetchingStatus = useSelector(store => store.fetchStatus)
  return (
    <div>
      <Header />
        <FetchItems/>
        {fetchingStatus.currentlyFetching ? <Loader/> : <Outlet/>}
      <Footer />
    </div>
  )
}

export default App
