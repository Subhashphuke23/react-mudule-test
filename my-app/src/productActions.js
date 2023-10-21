// productActions.js
import { fetchProducts } from '../services/apiService';

export const FETCH_PRODUCTS_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';
export const ADD_TO_CART = 'ADD_TO_CART'; // Add this line

// ... existing code

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

export const fetchProductsAsync = () => async (dispatch) => {
  dispatch(fetchProductsRequest());
  try {
    const products = await fetchProducts();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error));
  }
};
