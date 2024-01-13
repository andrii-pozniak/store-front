import axios from "axios";

axios.defaults.baseURL = 'https://store-api-8fa9.onrender.com/';

export const fetchProductCards = async additionalCategory => {
    
    const response = await axios.get(`products`);
  return response.data
}

export const fetchCategoriesName = async (categoryName) => {
  try {

    const response = await axios.get(`products/${categoryName}`);
    return response.data;
  } catch (error) {
  }
};

export const fetchCartId = async id => {
  try {

    const response = await axios.get(`products/product/${id}`);
    return response.data;
  } catch (error) {
  }
};

