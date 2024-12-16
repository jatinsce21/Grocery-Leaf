// src/components/Vendors.jsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './VendorManagement.css';

export default function Vendors() {
  const [vendors, setVendors] = useState([]);
  const [currentVendor, setCurrentVendor] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setVendors([
      {
        id: 1,
        name: 'Acme Corp',
        email: 'acme@example.com',
        password: 'vendor123',
      },
      {
        id: 2,
        name: 'XYZ Supplies',
        email: 'xyz@example.com',
        password: 'vendor456',
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentVendor({ ...currentVendor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setVendors(
        vendors.map((vendor) =>
          vendor.id === currentVendor.id ? currentVendor : vendor
        )
      );
    } else {
      const newVendor = {
        ...currentVendor,
        id: vendors.length + 1,
      };
      setVendors([...vendors, newVendor]);
    }
    setCurrentVendor({ name: '', email: '', password: '' });
    setIsEditing(false);
  };

  const handleEdit = (vendor) => {
    setCurrentVendor(vendor);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setVendors(vendors.filter((vendor) => vendor.id !== id));
  };

  return (
    <div className="management-container">
      <h1 className="heading">
        Manage <span>Vendors</span>
      </h1>

      <form onSubmit={handleSubmit} className="management-form">
        <input
          type="text"
          name="name"
          value={currentVendor.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={currentVendor.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={currentVendor.password}
          onChange={handleInputChange}
          placeholder="Password"
          required
        />
        <button type="submit" className="btn">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>

      <table className="management-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {vendors.map((vendor) => (
            <tr key={vendor.id}>
              <td>{vendor.name}</td>
              <td>{vendor.email}</td>
              <td>{vendor.password}</td>
              <td>
                <button onClick={() => handleEdit(vendor)} className="edit-btn">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(vendor.id)}
                  className="delete-btn"
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
