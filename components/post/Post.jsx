import "./post.css"
import { Users } from "../../data"
import { useState } from "react"

function Post({Post}) {
    const user = Users.filter(u=>u.id===1)

    const [like,setLike]=useState(Post.like)
    const [dislike,setDislike]=useState(false)
     
    const likeHandil = ()=>{
        setLike(dislike? like-1 : like+1)
        setDislike(!dislike)
    }
    
  return (
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img className="postprofileimg" src={Users.filter((u)=>u.id === Post?.userId)[0].profilePicture} alt="" />
                    <span className="postusername">{Users.filter((u)=>u.id === Post?.userId)[0].username}</span>
                    <span className="postdate">{Post.date}</span>
                </div>
                <div className="postright">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postcenter">
                <span className="posttext">{Post.desc}</span>
                <img className="postimg" src={Post.photo} alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottamleft">
                    <img className="likeicon" src="assets/like.png" onClick={likeHandil} alt="" />
                    <img className="likeicon" src="assets/heart.png" onClick={likeHandil} alt="" />
                    <div className="lokecounter">{like} people like it</div>
                </div>
                <div className="postbotamright">
                    <span className="postcomments">{Post.comment}comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post
