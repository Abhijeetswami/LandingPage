// components/Banner.js
import React,{useState} from 'react';
import './Banner.css';
function Banner(){
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const [isFormDisabled, setIsFormDisabled] = useState(false);
  
  const openForm = (formType) => {
    if (formType === 'login') {
      setShowLoginForm(true);
      setIsFormDisabled(true);
    } else if (formType === 'signup') {
      setShowSignupForm(true);
      setIsFormDisabled(true);
    }
  };
  const closeForm = () => {
    setShowLoginForm(false);
    setShowSignupForm(false);
    setIsFormDisabled(false);
  };
  return (
    <div className="bg-gray-1200 text-white p-8">
      <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2">
            <div className="flex space-x-4">
            </div>
          </div>
          <div className="lg:w-2 mt-20 lg:mt-0">
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white"></div>
    </div>
    <div className={`banner ${isFormDisabled ? 'blurred' : ''}`}>
      <div className="banner-content">
        <h1 className="banner-title">Welcome to Our Website</h1>
        <p className="banner-description">
          Discover amazing content and services tailored just for you.
        </p>
        <div className="banner-buttons">
          <button className="banner-button" onClick={openForm}>
            Login
          </button>
          <button className="banner-button" onClick={() => openForm('signup')}>
            Signup
          </button>
          <button className="banner-button" onClick={openForm}>
            About
          </button>
          <button className="banner-button" onClick={openForm}>
            Help
          </button>
        </div>
      </div>
      {/* Login Form */}
      {showLoginForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeForm}>
              &times;
            </span>
            <h2>Login</h2>
            <form>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" placeholder='enter email'/>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" placeholder='enter password'/>
              </div>
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
      {/* Signup Form */}
      {showSignupForm && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={closeForm}>
              &times;
            </span>
            <h2>Signup</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone:</label>
                <input type="tel" id="phone" />
              </div>
              <button type="submit">Signup</button>
            </form>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}
export default Banner;