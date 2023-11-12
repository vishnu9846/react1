import Feeds from "../../components/feeds/Feeds"
import Rightbar from "../../components/rightbar/Rightbar"
import Topbar from "../../components/top/Topbar"
import Side from "../../components/side/Side"
import "./home.css"

function Home() {
  return (
    <>
      <Topbar/>
      <div className="homecontainer">
        <Side/>
        <Feeds/>
        <Rightbar/>
      </div>
      
    </>
  )
}

export default Home
