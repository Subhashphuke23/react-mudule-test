// cartReducer.js
import { ADD_TO_CART, REMOVE_FROM_CART, CHECKOUT } from '../actions/cartActions';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the product is already in the cart
      if (state.some(item => item.id === action.payload.id)) {
        return state;
      }
      return [...state, action.payload];
    
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    
      
    case CHECKOUT_SUCCESS:
        return {
          ...state,
          successMessage: 'Items have been checked out successfully!',
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;



