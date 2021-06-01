export const getAllProducts = async () => {
  try {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    console.log("FRONTEND DATA", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
