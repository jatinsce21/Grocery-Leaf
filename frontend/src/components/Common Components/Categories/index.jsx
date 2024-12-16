import React, { useState, useEffect } from 'react';
import './Categories.css';

export default function Categories() {
  const [categories, setCategories] = useState([]); // State to hold category data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/categories');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data); // Set the categories data from API
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="categories" id="categories">
      <h1 className="heading">
        products <span>categories</span>
      </h1>
      <div className="box-container">
        {categories.map((category) => (
          <div className="box" key={category._id}>
            <img src={category.imageUrl} alt={category.name} />
            <h3>{category.name}</h3>
            <p>{category.discount || 'No discounts available'}</p>
            <button type="button" className="btn">
              shop now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
