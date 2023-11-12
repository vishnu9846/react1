import React from 'react'

function closefriends({friend}) {
  return (
    <div>
        <li className="sidebarfriend">
            <img className="sidebarfriendimg" src={friend.profilePicture} alt="" />
            <span className="sidebarfriendname">{friend.username}</span>
        </li>
    </div>
  )
}

export default closefriends
