// apiService.js
import axios from 'axios';

const apiUrl = 'https://dummyjson.com/products';

export const fetchProducts = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
