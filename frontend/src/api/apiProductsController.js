import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/products");
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getProduct = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/product/${id}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
