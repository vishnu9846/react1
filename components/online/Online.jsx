import "./online.css"
function Online({User}) {
  return (
        <li className="rightbarfiriends">
            <div className="rightbarprofileimgcontainer">
              <img className="rightbarprofileimg" src={User.profilePicture} alt="" />
              <span className="rightbaronline"></span>
            </div>
            <span className="rightbarusername">{User.username}</span>
        </li>
  )
}

export default Online
