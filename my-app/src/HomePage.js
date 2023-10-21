// HomePage.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsAsync } from '../actions/productActions';
import Product from './Product'; // Import the Product component

const HomePage = ({ fetchProductsAsync, products, addToCart }) => {
  useEffect(() => {
    fetchProductsAsync();
  }, [fetchProductsAsync]);

  return (
    <div className="home-page">
      <h1>Product List</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProductsAsync: () => dispatch(fetchProductsAsync()),
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
