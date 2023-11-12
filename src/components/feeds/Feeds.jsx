import "./feeds.css"
import Share from "../../components/share/Share"
import Post from "../post/Post"
import {Posts} from "../../data"

function Feeds() {
  return (
    <div className="feeds">
      <div className="feedswrapper">
        <Share/>
        {Posts.map((p)=>(
          <Post key={p.id} Post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Feeds