// CheckoutSidebar.js
import React from 'react';
import { connect } from 'react-redux';

const CheckoutSidebar = ({ cartProducts }) => {
  // Calculate total price
  const totalPrice = cartProducts.reduce((total, product) => total + product.price, 0);

  return (
    <div className="checkout-sidebar">
      <h2>Checkout Summary</h2>
      <div className="checkout-list">
        {cartProducts.map((product) => (
          <div key={product.id} className="checkout-item">
            <p>{product.title}</p>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Total Price:</p>
        <p>${totalPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProducts: state.cart,
});

export default connect(mapStateToProps)(CheckoutSidebar);
