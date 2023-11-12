import Feeds from "../../components/feeds/Feeds"
import Rightbar from "../../components/rightbar/Rightbar"
import Topbar from "../../components/top/Topbar"
import Side from "../../components/side/Side"
import "./profile.css"
function Profile() {
  return (
    <>
    <Topbar/>
    <div className="profile">
      <Side/>
        <div className="profileright">
            <div className="profilerighttop">
                <div className="profilecover">
                    <img className="profilecoverimg" src="assets/post/3.jpeg" alt="" />
                    <img className="profileuserimg" src="assets/person/7.jpeg" alt="" />
                </div>
                <div className="profileinfo">
                    <h4 className="profileinfoname">Vishnu</h4>
                    <span className="profileinfodec">Palakkad</span>
                </div>
            </div>
            <div className="profilerightbottom">
                <Feeds/>
                <Rightbar Profile/>
            </div>
       </div>
    
    </div>
    
  </>
  )
}

export default Profile
