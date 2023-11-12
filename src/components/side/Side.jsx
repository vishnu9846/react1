import "./sidebar.css"
import Closefriends from "../closefriends/Closefriends"

import { Users } from "../../data"

function Sde() {
  return (
    <div className='sidebar'>
      <div className="sidebarwrapper">
        <ul className="sidebarlist">
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-square-rss"></i>
            <span className="sidebarlisttext">Feed</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-message"></i>
            <span className="sidebarlisttext">Chat</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-circle-play"></i>
            <span className="sidebarlisttext">Vedeo</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-user-group"></i>
            <span className="sidebarlisttext">Group</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-bookmark"></i>
            <span className="sidebarlisttext">Bookmark</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-circle-question"></i>
            <span className="sidebarlisttext">Question</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-box"></i>
            <span className="sidebarlisttext">Job</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-calendar-day"></i>
            <span className="sidebarlisttext">Event</span>
          </li>
          <li className="sidebarlistitem">
            <i id="sidebaricon" class="fa-solid fa-graduation-cap"></i>
            <span className="sidebarlisttext">Cource</span>
          </li>
        </ul>
        <button className="sidebarbutton">Show More</button>
        <hr className="sidebarHR" />
        <ul className="sidebarfriendlist">

          {Users.map((f)=>(
            <Closefriends key={f.id} friend={f}/>
          ))}

          {/* <li className="sidebarfriend">
            <img className="sidebarfriendimg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarfriendname">Jone Done</span>
          </li>
          <li className="sidebarfriend">
            <img className="sidebarfriendimg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarfriendname">Jone Done</span>
          </li>
          <li className="sidebarfriend">
            <img className="sidebarfriendimg" src="./assets/person/2.jpeg" alt="" />
            <span className="sidebarfriendname">Jone Done</span>
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default Sde
