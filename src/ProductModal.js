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
        {/* Additional product info */}
      </div>
    </div>
  );
}

export default ProductModal;
