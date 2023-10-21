// YourComponent.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProductsAsync } from '../actions/productActions';

const YourComponent = ({ fetchProductsAsync, products }) => {
  useEffect(() => {
    fetchProductsAsync();
  }, [fetchProductsAsync]);

  // Your component logic here

  return (
    <div>
      {/* Your component JSX here */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.data,
});

export default connect(mapStateToProps, { fetchProductsAsync })(YourComponent);
