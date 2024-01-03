import React from 'react';
import logo from './logo.png'; // Make sure the path is correct

function Body() {
  return (
    <div className="body-content">
      <img src={logo} alt="FrostFrame Gaming Logo" className="main-logo" />
      <section className="intro">
        <h1>Welcome to FrostFrame Gaming</h1>
        <p>Discover the ultimate gaming experience with our high-performance gaming PCs.</p>
      </section>

      <section className="features">
        <h2>Why Choose Us</h2>
        <ul>
          <li>State-of-the-art components</li>
          <li>Customizable builds</li>
          <li>Exceptional customer support</li>
          <li>Competitive pricing</li>
        </ul>
      </section>

      <section className="products">
        <h2>Our Products</h2>
        {/* Product listings would go here */}
      </section>
      
      {/* Additional sections as needed */}
    </div>
  );
}

export default Body;

