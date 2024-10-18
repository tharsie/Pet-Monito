import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/category';
import ProductsList from './components/ProductsList'; // Create and import ProductsList
import ProductDetail from './components/ProductDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/products" element={<ProductsList />} /> {/* Route for product listing */}
          <Route path="/product/:id" element={<ProductDetail />} /> {/* Route for product details */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
