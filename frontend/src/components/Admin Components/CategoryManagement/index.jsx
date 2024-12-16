import React, { useState } from 'react';
import './CategoryManagement.css';

export default function CategoryManagement() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleInputChange = (e) => {
    setNewCategory(e.target.value);
  };

  const handleAddCategory = (e) => {
    e.preventDefault();
    if (newCategory.trim()) {
      setCategories([...categories, newCategory]);
      setNewCategory('');
    }
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setEditValue(category);
  };

  const handleUpdateCategory = (e) => {
    e.preventDefault();
    if (editValue.trim()) {
      setCategories(
        categories.map((cat) => (cat === editingCategory ? editValue : cat))
      );
      setEditingCategory(null);
      setEditValue('');
    }
  };

  const handleDelete = (category) => {
    setCategories(categories.filter((cat) => cat !== category));
  };

  return (
    <div className="category-management">
      <h1 className="heading">Manage Product Categories</h1>

      <form onSubmit={handleAddCategory} className="category-form">
        <input
          type="text"
          value={newCategory}
          onChange={handleInputChange}
          placeholder="Enter category name"
          required
        />
        <button type="submit" className="btn">
          Add Category
        </button>
      </form>

      {editingCategory && (
        <form onSubmit={handleUpdateCategory} className="edit-form">
          <input
            type="text"
            value={editValue}
            onChange={handleEditChange}
            placeholder="Edit category name"
            required
          />
          <button type="submit" className="btn">
            Update Category
          </button>
        </form>
      )}

      <div className="category-list">
        <h2>Existing Categories</h2>
        <table className="category-table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index}>
                <td>{category}</td>
                <td>
                  <button
                    onClick={() => handleEdit(category)}
                    className="edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
