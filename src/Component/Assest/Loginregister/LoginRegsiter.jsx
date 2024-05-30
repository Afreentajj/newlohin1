import React, { useState } from 'react'
import './LoginRegister.css'
import { FaUser,FaLock,FaEnvelope } from "react-icons/fa";

const LoginRegister = () => {
  const [action,setAction] = useState('');

  const registerLink =() => {
    setAction(' active');
  };
  const loginlink = () => {
    setAction('');
  };




  return (
    <div className={'wrapper${action}'}>
      <div className="form-box login">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          
          <div className="input-box">
            <input type="password" placeholder='password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember me 
          </label>
          <a href="#">forgot password?</a>
          </div>
          <button type="sumbit">Login</button>
          <div className="register-link">
            <p> Dont have account  <a href="#" onClick={registerLink} >forgot password?</a></p>
          </div>
          {/* <button type="sumbit">Login</button> */}
          {/* <div className="register-link">
            <p>Dont have a account <a href="#">Register</a></p>
            </div> */}

        </form>
      </div>
      <div className="form-box register">
        <form action="">
          <h1>Registration</h1>
          <div className="input-box">
            <input type="text" placeholder='Username' required />
            <FaUser className='icon' />
          </div>
          <div className="input-box">
            <input type="email" placeholder='Email' required />
            <FaEnvelope  className='icon' />
          </div>
          
          <div className="input-box">
            <input type="password" placeholder='password' required />
            <FaLock className='icon' />
          </div>
          <div className="remember-forgot">
          <label>
            <input type="checkbox" /> I agree to the terms & condition
          </label>
          {/* <a href="#">forgot password?</a> */}
          </div>
          <button type="sumbit">Login</button>
          
          
          <div className="register-link">
            <p>Already have a account <a href="#" onClick={loginlink}>Login</a></p>
            </div>

        </form>
      </div>
    </div>
  );
};

export default LoginRegister