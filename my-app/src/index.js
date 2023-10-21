// HomePage.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsAsync, addToCart } from '../actions/productActions'; // Import addToCart

import Product from './Product';

const HomePage = ({ fetchProductsAsync, products, addToCart }) => {
  useEffect(() => {
    fetchProductsAsync();
  }, [fetchProductsAsync]);

  return (
    <div>
      <h1>Home Page</h1>
      {products.map(product => (
        <Product key={product.id} product={product} onAddToCart={() => addToCart(product)} />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.data,
});

export default connect(mapStateToProps, { fetchProductsAsync, addToCart })(HomePage);
