import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'; // Import Footer

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer /> {/* Add Footer here */}
    </div>
  );
}

export default App;
