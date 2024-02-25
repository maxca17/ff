import React, { useState } from 'react';
import logo from './logo.png'; // Make sure the path is correct
import ProductModal from './ProductModal'; // Ensure you have this component created
import productImage from './3060ti.jpg'; // Import the image here

function Body() {
  // State to hold the currently selected product for the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Dummy product data - replace with your actual data
  const products = [
    {
      name: 'Ryzen 5 3600 & 3060 TI',
      description: 'Ryzen 5 3600, 16GB DDR4 Ram, GeForce GTX 3060 TI, 1TB SSD, 750W PSU, Windows 11 Pro Included',
      price: '$865',
      image: productImage,
      purchaseLink: "https://www.amazon.com/dp/B0CW6BYGT4"
    },
    {
      name: 'Ryzen 5 5600G',
      description: 'Coming Soon',
      price: '$600',
      image: '/path-to-product-image-2.jpg', // Replace with actual image path 

    },
    // Add more products as needed
  ];

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
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={index}
              className="product-item"
              onClick={() => setSelectedProduct(product)} // Set the selected product on click
            >
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <span>Price: {product.price}</span>
            </div>
          ))}
        </div>
      </section>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}

      {/* Additional sections as needed */}
    </div>
  );
}

export default Body;
