import React, { useState } from 'react';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './LoginRegister.css';
import ForgotPassword from './forgot';

const LoginRegister = ({ onForgotPasswordClick, onLoginSuccess }) => {
  const [action, setAction] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const registerLink = () => {
    setAction(' active');
  };

  const loginLink = () => {
    setAction('');
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    onLoginSuccess(); // Call the callback when login is successful
  };

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
    onForgotPasswordClick(); // Call the parent function to handle the forgot password click
  };

  return (
    <div>
      <h1 className="main-heading">URL SHORTENER</h1> {/* Add this class */}
      <div className={`wrapper${action}`}>
        <div className="form-box login">
          {!showForgotPassword ? (
            <form onSubmit={handleLoginSubmit}>
              <h1>Login</h1>
              <div className="input-box">
                <FaUser className="icon" />
                <input type="text" placeholder="Username" required />
              </div>
              <div className="input-box">
                <FaLock className="icon" />
                <input type="password" placeholder="Password" required />
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" /> Remember me
                </label>
                <a href="#" onClick={handleForgotPasswordClick}>
                  Forgot password?
                </a>
              </div>
              <button type="submit">Login</button>
              <div className="register-link">
                <p>
                  Don't have an account? <a href="#" onClick={registerLink}>Register</a>
                </p>
              </div>
            </form>
          ) : (
            <ForgotPassword onClose={() => setShowForgotPassword(false)} />
          )}
        </div>
        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input type="password" placeholder="Password" required />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="register-link">
              <p>
                Already have an account? <a href="#" onClick={loginLink}>Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
