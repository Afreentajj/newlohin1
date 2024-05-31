import React, { useState } from 'react';
import LoginRegister from './Component/Assest/Loginregister/LoginRegsiter';
import ForgotPassword from './Component/Assest/Loginregister/forgot';
import URLShortener from './Component/URLShortener';

function App() {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleForgotPasswordClick = () => {
    setShowForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false);
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div>
      {isAuthenticated ? (
        <URLShortener />
      ) : (
        !showForgotPassword && (
          <LoginRegister 
            onForgotPasswordClick={handleForgotPasswordClick} 
            onLoginSuccess={handleLoginSuccess} 
          />
        )
      )}
      {showForgotPassword && (
        <ForgotPassword onClose={handleCloseForgotPassword} />
      )}
    </div>
  );
}

export default App;