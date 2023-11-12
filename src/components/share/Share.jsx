import "./share.css"

function share() {
  return (
    <div className="share">
      <div className="sharewrapper">
        <div className="sharetop">
            <img className="shareprofileimg" src="/assets/person/1.jpeg" alt="" />
            <input placeholder="what's in your mind" className="shareinput" type="text" />
        </div>
        <hr className="shareHR" />
        <div className="sharebottom">
            <div className="shareoptions">
                <div className="shareoption">
                    <i id="shareicon"class="fa-solid fa-photo-film"></i>
                    <span className="shareoptiontext">photo or vedio</span>
                </div>
                <div className="shareoption">
                    <i id="shareicon" class="fa-solid fa-tag"></i>
                    <span className="shareoptiontext">Tag</span>
                </div>
                <div className="shareoption">
                    <i id="shareicon" class="fa-solid fa-location-dot"></i>
                    <span className="shareoptiontext">Location</span>
                </div>
                <div className="shareoption">
                    <i id="shareicon" class="fa-solid fa-face-smile"></i>
                    <span className="shareoptiontext">Feelings</span>
                </div>
            </div>
            <button className="sharebutton">Share</button>
        </div>

      </div>
    </div>
  )
}

export default share
