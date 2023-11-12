import React from 'react'
import "./Topbar.css"

function Topbar() {
  return (
    <div className='topbarcontainer'>

      <div className="topbarLeft">
        <span className="logo">
          @Palakkadan
        </span>
      </div>

      <div className="topbarCenter">

        <div className="searchbar">
          <i id='searchicon' class="fa-solid fa-magnifying-glass"></i>
          <input type="text" placeholder='search' className='searchinput' />
        </div>

      </div>

      <div className="topbarRight">

        <div className="topbarlinks">
          <span className="topbarlink">Homepage</span>
          <span className="topbarlink">Timeline</span>
        </div>

        <div className="topbaricons">

          <div className="topbariconitem">
            <i class="fa-solid fa-user"></i>
            <span className="topbariconbadge">1</span>
          </div>

          <div className="topbariconitem">
            <i class="fa-solid fa-comments"></i>
            <span className="topbariconbadge">2</span>
          </div>

          <div className="topbariconitem">
            <i class="fa-solid fa-envelope"></i>
            <span className="topbariconbadge">1</span>
          </div>

        </div>
      </div>
      <img src="./assets/person/1.jpeg" alt="" className="topbarimg" />
    </div>
  )
}

export default Topbar
