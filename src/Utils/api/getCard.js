import axios from "axios";

export const fetchProductCards = async additionalCategory => {
    axios.defaults.baseURL = 'http://localhost:5000/products';
    const response = await axios.get(``);
  return response.data
}