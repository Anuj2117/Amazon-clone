// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./Components/Navbar/Navbar";
import HeroSection from './Components/HeroSection/HeroSection';
import ProductList from "./Components/ProductList/ProductList"
import SearchResults from './Components/SearchList/SearchList';
import Home from "./Components/Home/Home"
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import OrderConfirmation from './Components/Orderconfirmation/OrderConfirmation';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection/>
      <ProductList />
      <Routes>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/ProductList" element={<ProductList/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
