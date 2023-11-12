import Online from "../online/Online"
import "./rightbar.css"
import { Users } from "../../data"

function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarwrapper">
        <div className="birthdaycontainer">
          <img className="birthdayimg" src="assets/gift.png" alt="" />
          <span className="birthdaytext">
            <b>mark </b>and <b>3 other friends </b>has a birthday today
          </span>
        </div>
        <img className="rightbarAD" src="assets/ad.png" alt="" />
        <h4 className="rightbartext">online friends</h4>
        <ul className="rightbarfriendslist">

          {Users.map((u)=>(
            <Online key={u.id} User={u}/>
          ))}
          
        </ul>
      </div>
    </div>
  )
}

export default Rightbar
