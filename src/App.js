import React from 'react';
import './App.css'
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './CartContext';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <div className='app'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </CartProvider>

    </BrowserRouter>
  );
}

export default App;
