import axios from "axios";

export const getAllProducts = async () => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/products");
    //console.log("api", data);
    return data;
  } catch (error) {
    console.log("CHECK ERROR", error);
    return { errorMessage: error.message };
  }
};

export const getProductById = async (id) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/api/product/${id}`);
    return data;
  } catch (error) {
    console.log(error);
    return { errorMessage: error.message };
  }
};
