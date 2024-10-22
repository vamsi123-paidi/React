import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import NavbarComponent from './Components/Navbarcomponent';
import './App.css';
import Footer from './Components/Footer';
import ProductsPage from './Components/Products';
import CartPage from './Components/Cartpage';
import Searchbar from './Components/Searchbar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const cart = useSelector((state) => state.products.cart);
  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);
  const isEmptyCart = totalItemsInCart === 0;

  return (
    <Router>
      <>
        <NavbarComponent />
        <Searchbar setSearchQuery={setSearchQuery} />
        <Routes>
          <Route
            path="/"
            element={<ProductsPage searchQuery={searchQuery} />} 
          />
          <Route
            path="/products/:category"
            element={<ProductsPage searchQuery={searchQuery} />}
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
        <Footer isEmptyCart={isEmptyCart} />
      </>
    </Router>
  );
};

export default App;
