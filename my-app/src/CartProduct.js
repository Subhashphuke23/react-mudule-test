// CartProduct.js
import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

const CartProduct = ({ product, onRemoveFromCart }) => {
  const handleRemoveFromCart = () => {
    onRemoveFromCart(product.id);
  };

  return (
    <div className="cart-product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={handleRemoveFromCart}>Remove from Cart</button>
    </div>
  );
};

export default connect(null, { removeFromCart })(CartProduct);
