// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/user-home">home</a>
      <a href="/user-home#features">features</a>
      <a href="/user-home/product">products</a>
      <a href="/user-home/categories">categories</a>
      <a href="/user-home/review">review</a>
      <a href="/user-home/#blogs">blogs</a>
      <a href="/user-home/order">Order Status</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
