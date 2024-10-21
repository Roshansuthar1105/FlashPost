import React, { useState } from "react";
import './css/NavBar.css';
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  return (
    <div className="navbar">
      <h2 className="logo">
        <Link to="/">FlashPost</Link>
      </h2>
      <button className="menu-button" onClick={toggleMenu}>
        {isMenuVisible ? 'Hide Menu' : 'Show Menu'}
      </button>
      <ul className={`nav-list ${isMenuVisible ? 'show' : ''}`} onClick={closeMenu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cricket">Cricket</Link></li>
        <li><Link to="/business">Business</Link></li>
        <li><Link to="/bitcoin">Bitcoin</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/sports">Sports</Link></li>
        <li><Link to="/science">Science</Link></li>
        <li><Link to="/health">Health</Link></li>
        <li><Link to="/general">General</Link></li>
        <li><Link to="/entertainment">Entertainment</Link></li>
      </ul>
    </div>
  );
};

export default NavBar;
