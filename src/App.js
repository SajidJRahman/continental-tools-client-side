import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Pages/Shared/Navbar/Navbar';
import Home from './Pages/Home/Home/Home';
import Dashboard from './Pages/Dashboard/Dashboard';
import Blogs from './Pages/Blogs/Blogs';
import ContactUs from './Pages/ContactUs/ContactUs';
import About from './Pages/About/About';
import Login from './Pages/Authentications/Login/Login';
import SignUp from './Pages/Authentications/SignUp/SignUp';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/contact-us' element={<ContactUs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/sign-up' element={<SignUp />}></Route>
      </Routes>
    </div>
  );
};

export default App;