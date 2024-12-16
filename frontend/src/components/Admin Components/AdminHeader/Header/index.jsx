import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import Navbar from './Navbar';
import Logout from '../../../Common Components/Logout';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  window.onscroll = () => {
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        groco
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <Logout />
      </div>
    </header>
  );
}
