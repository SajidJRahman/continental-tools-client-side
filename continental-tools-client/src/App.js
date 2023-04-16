import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/About/About';
import Login from './Pages/Authentications/Login/Login';
import SignUp from './Pages/Authentications/SignUp/SignUp';
import NotFound from './Pages/NotFound/NotFound';
import ResetPassword from './Pages/Authentications/ResetPassword/ResetPassword';
import RequireAuth from './Pages/Authentications/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Payment from './Pages/Dashboard/Payment/Payment';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import MyProfile from './Pages/Dashboard/MyProfile/MyProfile';
import MyReviews from './Pages/Dashboard/MyReviews/MyReviews';
import Purchase from './Pages/Purchase/Purchase/Purchase';
import MyPortfolio from './Pages/MyPortfolio/MyPortfolio';
import Footer from './Pages/Shared/Footer/Footer';
import AddProduct from './Pages/Dashboard/AddProduct/AddProduct';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';
import ManageUsers from './Pages/Dashboard/ManageUsers/ManageUsers';
import RequireAdmin from './Pages/Authentications/RequireAdmin/RequireAdmin';
import EditMyProfile from './Pages/Dashboard/EditMyProfile/EditMyProfile';
import ScrollToTop from './Pages/ScrollToTop/ScrollToTop';

const App = () => {
  return (
    <div>
      <ToastContainer />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path='add-review' element={<AddReview />} />
          <Route path='my-reviews' element={<MyReviews />} />
          <Route path='profile' element={<MyProfile />} />
          <Route path='edit-profile' element={<EditMyProfile />} />
          <Route path='my-orders' element={<MyOrders />} />
          <Route path='payment/:id' element={<Payment />} />
          <Route path='manage-orders' element={
            <RequireAdmin>
              <ManageAllOrders />
            </RequireAdmin>} />
          <Route path='manage-products' element={
            <RequireAdmin>
              <ManageProducts />
            </RequireAdmin>} />
          <Route path='add-product' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>} />
          <Route path='manage-users' element={
            <RequireAdmin>
              <ManageUsers />
            </RequireAdmin>} />
          <Route path='add-product' element={
            <RequireAdmin>
              <AddProduct />
            </RequireAdmin>} />
        </Route>
        <Route path='/purchase/:id' element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/my-portfolio' element={<MyPortfolio />} />
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div >
  );
};

export default App;