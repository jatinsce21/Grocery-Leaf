import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faBars,
  faSearch,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import SearchForm from './SearchForm';
import ShoppingCart from './ShoppingCart';
import './Header.css';
import Navbar from './Navbar';
import Logout from '../Logout';

export default function Header() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeShoppingCart, setActiveShoppingCart] = useState(false);
  window.onscroll = () => {
    setActiveShoppingCart(false);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  const handleMenuButton = () => {
    setActiveMenu(!activeMenu);
    setActiveSearch(false);
    setActiveShoppingCart(false);
  };
  const handleSearchButton = () => {
    setActiveSearch(!activeSearch);
    setActiveShoppingCart(false);
    setActiveMenu(false);
  };
  const handleShoppingCartButton = () => {
    setActiveShoppingCart(!activeShoppingCart);
    setActiveSearch(false);
    setActiveMenu(false);
  };
  return (
    <header className="header">
      <a href="/" className="logo">
        <i>
          <FontAwesomeIcon icon={faShoppingBasket} />
        </i>
        Grocery-Leaf
      </a>
      <Navbar active={activeMenu} />
      <div className="icons">
        <button type="button" id="menu-btn" onClick={handleMenuButton}>
          <FontAwesomeIcon className="fa-icon" icon={faBars} />
        </button>
        <button type="button" id="search-btn" onClick={handleSearchButton}>
          <FontAwesomeIcon className="fa-icon" icon={faSearch} />
        </button>
        <button type="button" id="cart-btn" onClick={handleShoppingCartButton}>
          <FontAwesomeIcon className="fa-icon" icon={faShoppingCart} />
        </button>
        <Logout />
      </div>
      <SearchForm active={activeSearch} />
      <ShoppingCart active={activeShoppingCart} />
    </header>
  );
}
