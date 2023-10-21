// MyCartPage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeFromCart, checkout, checkoutSuccess } from '../actions/cartActions'; // Import removeFromCart, checkout, checkoutSuccess

import CartProduct from './CartProduct';
import CheckoutSidebar from './CheckoutSidebar';

const MyCartPage = ({ cartProducts, removeFromCart, checkout, checkoutSuccess, successMessage }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleCheckout = () => {
    checkout();
    checkoutSuccess();
    setShowSuccessMessage(true);
  };

  return (
    <div>
      <h1>My Cart Page</h1>
      {cartProducts.map(product => (
        <CartProduct key={product.id} product={product} onRemoveFromCart={() => removeFromCart(product.id)} />
      ))}
      <CheckoutSidebar />
      <button onClick={handleCheckout}>Checkout</button>
      {showSuccessMessage && <p className="success-message">{successMessage}</p>}
    </div>
  );
};

const mapStateToProps = state => ({
  cartProducts: state.cart.items,
  successMessage: state.cart.successMessage,
});

export default connect(mapStateToProps, { removeFromCart, checkout, checkoutSuccess })(MyCartPage);
