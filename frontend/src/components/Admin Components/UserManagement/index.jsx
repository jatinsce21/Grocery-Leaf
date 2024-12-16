// src/components/Users.jsx

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import './UserManagement.css';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setUsers([
      {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123',
      },
      {
        id: 2,
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password456',
      },
    ]);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser({ ...currentUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setUsers(
        users.map((user) => (user.id === currentUser.id ? currentUser : user))
      );
    } else {
      const newUser = {
        ...currentUser,
        id: users.length + 1,
      };
      setUsers([...users, newUser]);
    }
    setCurrentUser({ name: '', email: '', password: '' });
    setIsEditing(false);
  };

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="management-container">
      <h1 className="heading">
        Manage <span>Users</span>
      </h1>

      <form onSubmit={handleSubmit} className="management-form">
        <input
          type="text"
          name="name"
          value={currentUser.name}
          onChange={handleInputChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={currentUser.email}
          onChange={handleInputChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={currentUser.password}
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
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.password}</td>
              <td>
                <button onClick={() => handleEdit(user)} className="edit-btn">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
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
