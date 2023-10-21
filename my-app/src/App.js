// App.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

// import { fetchProductsAsync } from './actions/productActions';
// import { addToCart, removeFromCart, checkout, checkoutSuccess } from './actions/cartActions';
import HomePage from './HomePage';
import MyCartPage from './MyCartPage';
import CheckoutSidebar from './CheckoutSidebar';

const App = ({
  fetchProductsAsync,
  addToCart,
  removeFromCart,
  checkout,
  checkoutSuccess,
  products,
  cartProducts,
  successMessage,
}) => {
  useEffect(() => {
    fetchProductsAsync();
  }, [fetchProductsAsync]);

  return (
    <div className="app">
      <HomePage products={products} addToCart={addToCart} />
      <MyCartPage cartProducts={cartProducts} removeFromCart={removeFromCart} checkout={checkout} checkoutSuccess={checkoutSuccess} successMessage={successMessage} />
      <CheckoutSidebar cartProducts={cartProducts} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
  cartProducts: state.cart.items,
  successMessage: state.cart.successMessage,
});

export default connect(mapStateToProps, { fetchProductsAsync, addToCart, removeFromCart, checkout, checkoutSuccess })(App);
