import React from 'react';
import './Order.css';

export default function OrderStatus() {
  // Sample data for orders with status
  const orders = [
    {
      product: 'Fresh Orange',
      quantity: 2,
      price: '$4.99',
      image: '/image/product-1.png',
      status: 'Shipped',
    },
    {
      product: 'Fresh Onion',
      quantity: 1,
      price: '$3.99',
      image: '/image/product-2.png',
      status: 'Processing',
    },
    {
      product: 'Fresh Meat',
      quantity: 3,
      price: '$10.99',
      image: '/image/product-3.png',
      status: 'Delivered',
    },
  ];

  return (
    <div>
      <section className="order-status" id="order-status">
        <h1 className="heading">
          Order <span>Status</span>
        </h1>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Image</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.product}</td>
                  <td>
                    <img src={order.image} alt={order.product} />
                  </td>
                  <td>{order.quantity}</td>
                  <td>{order.price}</td>
                  <td className={`status ${order.status.toLowerCase()}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
