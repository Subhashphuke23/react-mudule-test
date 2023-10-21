// Product.js
import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions'; // Import addToCart action

const Product = ({ product, onAddToCart }) => {
  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default connect(null, { addToCart })(Product);

