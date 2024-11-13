import React, { useState } from 'react'
import '../login/Login.css'
import logo from '../../assets/logo/vian_logo.png'
import login1 from '../../assets/images/login1.png'
import "@fortawesome/fontawesome-free/css/all.min.css";
import { LuLock, LuUser2, LuEye, LuEyeOff } from "react-icons/lu";

const GradientIcon = ({ Icon }) => (
  <svg
    width="25"
    height="25"
    viewBox="0 0 24 24"
    style={{
      position: "absolute",
      left: "15px",
      top: "50%",
      transform: "translateY(-50%)",
    }}
  >
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#2C56EE" />
        <stop offset="100%" stopColor="#999999" />
      </linearGradient>
    </defs>
    <Icon
      stroke="url(#iconGradient)"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

function Login() {
  const [password, setPassword] = useState("");
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(<LuEyeOff />);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(<LuEye />);
      setType("text");
    } else {
      setIcon(<LuEyeOff />);
      setType("password");
    }
  };

  return (
    <div className='bg-img'>
      <div className='container card'>
        <div className='row'>
          <div className="col-lg-12 d-flex">
            <div className="col-lg-6">
              <div className="d-flex justify-content-center">
                <img className='' src={logo} alt="no_logo" />
              </div>
              <div className='pt-4 d-flex justify-content-center'>
                <p className='ellipse me-2'></p>
                <p className='ellipse me-2'></p>
                <p className='ellipse'></p>
              </div>
              <div className='login_content text-center'>
                <h6 className='Heading_login'>VIAN HR task <br />
                  management Website</h6>
                <p className='para_login'>Simple task scheduling for yourself, your managers <br /> and your employees, with notifications and <br />message-boards to keep everyone up to date.</p>
                <img className='login_img' src={login1} alt="no_image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className='login_card2'>
                <div className='container'>
                  <h2 className='login_Header_text'>Log in</h2>
                  <p className='login_content2'>Enter your Username or Email and password <br />
                    to log in</p>
                  <form className='form_login'>

                    <div className="form-group mb-2">
                      <div className='login_text'>
                        <GradientIcon Icon={LuUser2} />
                      </div>
                      <input 
                        type="email"
                        id="email"
                        className="form-control"
                        placeholder="User name or Email"
                        required
                      />
                    </div>

                    <div className="form-group mt-4 mb-3 d-flex justify-end">
                      <div className='login_text'>
                        <GradientIcon Icon={LuLock} />
                      </div>
                      <input 
                        type={type}
                        id="password"
                        className="form-control"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <span   className='login_eye'
                        style={{
                          position: "absolute",
                          top: "50%",
                          transform: "translateY(-50%)",
                          cursor: "pointer",
                        }}
                        onClick={handleToggle}
                      >
                        <div>
                          <GradientIcon Icon={icon.type} size={60} />
                        </div>
                      </span>
                    </div>

                    <div className='login_forgot mt-4'>
                      <a className='login_forgot_text' href="">Forget Password?</a>
                    </div>
                    <button className='btn_login w-100 mt-4'>Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
