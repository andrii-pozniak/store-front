import axios from "axios";

axios.defaults.baseURL = 'http://localhost:5000/products';

export const fetchProductCards = async additionalCategory => {
    
    const response = await axios.get(``);
  return response.data
}

export const fetchCategoriesName = async (categoryName) => {
  try {

    const response = await axios.get(`/${categoryName}`);
    return response.data;
  } catch (error) {
  }
};

export const fetchCartId = async id => {
  try {

    const response = await axios.get(`/product/${id}`);
    return response.data;
  } catch (error) {
  }
};

