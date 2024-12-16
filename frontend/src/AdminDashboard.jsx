import React from 'react';
import AdminHeader from './components/Admin Components/AdminHeader/Header/index.jsx';
import AddProduct from './components/Admin Components/AddProducts/index.jsx';
import Footer from './components/Common Components/Footer/index.jsx';
import Banner from './components/Common Components/Banner/index.jsx';
import Products from './components/Common Components/Products/index.jsx';
import UserManagement from './components/Admin Components/UserManagement/index.jsx';
import VendorManagement from './components/Admin Components/VendorManagement/index.jsx';

const AdminDashboard = () => (
  <div>
    <Banner />
    <AdminHeader />
    <AddProduct />
    <UserManagement />
    <VendorManagement />
    <Products />
    <Footer />
  </div>
);

export default AdminDashboard;
