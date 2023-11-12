import "./login.css"

function login() {
  return (
    <div className="login">
        <div className="loginwrapper">
            <div className="loginleft">
                <h3 className="loginlogo">@palakkadan</h3>
                <spsn className="logdisec">Connect with friends and the world around you.</spsn>
            </div>
            <div className="loginright">
                <div className="loginbox">
                    <input placeholder="Email" type="Email" className="logininput" />
                    <input placeholder="Password" type="number" className="logininput" />
                    <button className="loginbutton">Log in</button>
                    <span className="loginforgot">Forgot Password</span>
                    <button className="loginregister">Create New Accound</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default login
