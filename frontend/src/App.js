import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainNavbar from './components/MainNavbar';

import Home from './components/Home';
import Exchange from './components/Exchange';
import Wallet from './components/Wallet';
import Account from './components/Account';
import About from './components/About';
import Login from './pages/Login';
import Register from './pages/Register';
 // upcoming

function App() {
  return (
    <Router>
      {/* ✅ Router context தான் தேவையானது */}
      <MainNavbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/account" element={<Account />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* <Route path="/register" element={<Register />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
