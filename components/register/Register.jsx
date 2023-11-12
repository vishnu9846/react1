import "./register.css"

function register() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">@palakkadan</h3>
                <spsn className="logdisec">Connect with friends and the world around you.</spsn>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Username" type="text" className="logininput" />
                    <input placeholder="Email" type="Email" className="logininput" />
                    <input placeholder="Password" type="number" className="logininput" />
                    <input placeholder="Conform Password" type="number" className="logininput" />
                    <button className="loginbutton">Sign Up</button>
                    <button className="loginregister">log in your account</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default register
