// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import UserDashboard from './UserDashboard';
import VendorDashboard from './VendorDashboard';
import AdminDashboard from './AdminDashboard';
import Product from './pages/User Pages/Products';
import Categories from './pages/User Pages/Categories';
import OrderStatus from './pages/User Pages/OrderStatus';
import AddProductVendor from './pages/Vendor Pages/AddProduct';
import AddProduct from './pages/Admin Pages/AddProducts';
import UsersManagement from './pages/Admin Pages/UserManagementPage';
import VendorsManagement from './pages/Admin Pages/VendorManagementPage';
import OrderStatusManagementPage from './pages/Vendor Pages/OrderStatusManagementPage';
import CategoryManagementPage from './pages/Admin Pages/CategoryManagementPage';
import ReviewPage from './pages/User Pages/ReviewPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-home" element={<UserDashboard />} />
        <Route path="/vendor-home" element={<VendorDashboard />} />
        <Route path="/admin-home" element={<AdminDashboard />} />

        {/* User Pages */}
        <Route path="/user-home/product" element={<Product />} />
        <Route path="/user-home/categories" element={<Categories />} />
        <Route path="/user-home/order" element={<OrderStatus />} />
        <Route path="/user-home/review" element={<ReviewPage />} />

        {/* Vendor Pages */}
        <Route path="/vendor-home/add-product" element={<AddProductVendor />} />
        <Route
          path="/vendor-home/manage-order-status"
          element={<OrderStatusManagementPage />}
        />

        {/* Admin Pages */}
        <Route path="/admin-home/add-product" element={<AddProduct />} />
        <Route
          path="/admin-home/user-management"
          element={<UsersManagement />}
        />
        <Route
          path="/admin-home/vendor-management"
          element={<VendorsManagement />}
        />
        <Route
          path="/admin-home/manage-categories"
          element={<CategoryManagementPage />}
        />
      </Routes>
    </Router>
  );
};

export default App;
