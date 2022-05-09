import React from 'react';
import logo from '../../assets/images/logo.png'
import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Star wars" className="logo"/>
      </Link>
    </div>
  );
};

export default Header;