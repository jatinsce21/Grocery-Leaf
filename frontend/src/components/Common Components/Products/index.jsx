import React, { useEffect, useState } from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

SwiperCore.use([Autoplay]);

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  // Fetch products from the backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchProducts();
  }, []);

  // Render error if it exists
  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div>
      <section className="product" id="product">
        <h1 className="heading">
          our <span>products</span>
        </h1>
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
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: { slidesPerView: 3 },
              }}
              style={{ padding: '1rem' }}
            >
              {products.map((product) => (
                <SwiperSlide key={product._id}>
                  <div className="box">
                    <img src={product.imageUrl} alt={product.name} />
                    <h3>{product.name}</h3>
                    <div className="price">${product.price.toFixed(2)}</div>
                    <div className="stars">
                      {Array.from({ length: Math.floor(product.ratings) }).map(
                        (_, index) => (
                          <FontAwesomeIcon key={index} icon={faStar} />
                        )
                      )}
                      {product.ratings % 1 !== 0 && (
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                      )}
                    </div>
                    <button type="button" className="btn">
                      add to cart
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
}
