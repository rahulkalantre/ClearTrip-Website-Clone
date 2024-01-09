import React from 'react'
import applogo from '../Assets/Images/ClearTripAppLogo.png';
import '../Styles/NavBarLogo.css';

const NavBarLogo = () => {
  return (
    <div>
        <img className="nav-bar-logo" src={applogo} alt="App Logo" width="120" height="30"/>
    </div>
  )
}

export default NavBarLogo