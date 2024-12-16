import React, { useState, useEffect } from 'react';
import './AddProducts.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faStarHalfAlt,
  faEdit,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

export default function Products() {
  SwiperCore.use([Autoplay]);

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    imageUrl: '',
    category: '',
    ratings: 0,
  });
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));

    fetch('http://localhost:5000/api/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editingProduct) {
      setEditingProduct({ ...editingProduct, [name]: value });
    } else {
      setNewProduct({ ...newProduct, [name]: value });
    }
  };

  const handleAddOrUpdateProduct = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update product
      fetch(`http://localhost:5000/api/products/${editingProduct._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editingProduct),
      })
        .then((response) => response.json())
        .then((updatedProduct) => {
          setProducts((prevProducts) =>
            prevProducts.map((product) =>
              product._id === updatedProduct._id ? updatedProduct : product
            )
          );
          setEditingProduct(null);
          setNewProduct({
            name: '',
            price: '',
            imageUrl: '',
            category: '',
            ratings: 0,
          });
        })
        .catch((error) => console.error('Error updating product:', error));
    } else {
      // Add new product
      fetch('http://localhost:5000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
        .then((response) => response.json())
        .then((addedProduct) => {
          setProducts((prevProducts) => [...prevProducts, addedProduct]);
          setNewProduct({
            name: '',
            price: '',
            imageUrl: '',
            category: '',
            ratings: 0,
          });
        })
        .catch((error) => console.error('Error adding product:', error));
    }
  };

  const handleDeleteProduct = (id) => {
    fetch(`http://localhost:5000/api/products/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== id)
        );
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct(product);
  };

  return (
    <section className="products" id="products">
      <h1 className="heading">
        Add/Update/Delete <span>Products</span>
      </h1>

      {/* Add/Edit Product Form */}
      <form onSubmit={handleAddOrUpdateProduct} className="add-product-form">
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
          placeholder="Product Name"
          required
        />
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
          placeholder="Price"
          required
        />
        <input
          type="text"
          name="imageUrl"
          value={newProduct.imageUrl}
          onChange={handleInputChange}
          placeholder="Image URL"
          required
        />
        <select
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <input
          type="number"
          name="ratings"
          value={newProduct.ratings}
          onChange={handleInputChange}
          placeholder="Ratings (0-5)"
          min="0"
          max="5"
          step="0.1"
        />
        <button type="submit" className="btn">
          {editingProduct ? 'Update Product' : 'Add Product'}
        </button>
      </form>

      <div className="products-slider slider">
        <div className="wrapper swiper-wrapper">
          <Swiper
            loop
            spaceBetween={20}
            autoplay={{ delay: 7500, disableOnInteraction: false }}
            slidesPerView={1}
            pagination={{ clickable: true }}
            centeredSlides
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            style={{ padding: '1rem' }}
          >
            {products.map((product) => (
              <SwiperSlide key={product._id}>
                <div className="box">
                  <img src={product.imageUrl} alt={product.name} />
                  <h3>{product.name}</h3>
                  <div className="price">${product.price}</div>
                  <div className="stars">
                    {[...Array(Math.floor(product.ratings))].map((_, i) => (
                      <FontAwesomeIcon icon={faStar} key={i} />
                    ))}
                    {product.ratings % 1 !== 0 && (
                      <FontAwesomeIcon icon={faStarHalfAlt} />
                    )}
                  </div>
                  <p>
                    Category:{' '}
                    {categories.find((cat) => cat._id === product.category)
                      ?.name || 'Unknown'}
                  </p>
                  <button type="button" className="btn">
                    Add to Cart
                  </button>
                  <div className="product-actions">
                    <button
                      type="button"
                      onClick={() => handleEditProduct(product)}
                      className="edit-btn"
                      aria-label="Edit Product"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDeleteProduct(product._id)}
                      className="delete-btn"
                      aria-label="Delete Product"
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
