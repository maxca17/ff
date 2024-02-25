// ProductModal.js
import React from 'react';

function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal active">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h4>{product.name}</h4>
        <img src={product.image} alt={product.name} />
        <p>{product.description}</p>
        <span>Price: {product.price}</span>
        {/* Add purchase link */}
        <div></div>
        <a href={product.purchaseLink} target="_blank" rel="noopener noreferrer" className="purchase-button"> Buy Now</a>

      </div>
    </div>
  );
}

export default ProductModal;
