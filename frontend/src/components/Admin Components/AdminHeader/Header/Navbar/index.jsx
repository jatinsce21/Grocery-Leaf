// Navbar
import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

export default function Navbar(props) {
  const { active } = props;
  return (
    <nav className={`navbar ${active ? 'active' : ''}`}>
      <a href="/admin-home">Home</a>
      <a href="/admin-home/add-product">AddProduct</a>
      <a href="/admin-home/user-management">Manage Users</a>
      <a href="/admin-home/vendor-management">Manage Vendors</a>
      <a href="/admin-home/manage-categories">Manage Categories</a>
      <a href="/admin-home/#product">products</a>
    </nav>
  );
}
Navbar.propTypes = {
  active: PropTypes.bool,
}.isRequired;
