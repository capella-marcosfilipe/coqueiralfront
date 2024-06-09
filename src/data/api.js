const BASE_URL = 'http://localhost:8080/api/v1/products';


export const getProducts = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};


export const addProduct = async (product) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(product),
  });
  return response.json();
};


export const deleteProduct = async (idproduct) => {
  await fetch(`${BASE_URL}/${idproduct}`, {
    method: 'DELETE',
  });
};


export const updateProductName = async (idproduct, productname) => {
  const response = await fetch(`${BASE_URL}/${idproduct}/updateproductname`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productName: productname }),
  });
  return response.json();
};


export const updateProductDescription = async (idproduct, productdescription) => {
  const response = await fetch(`${BASE_URL}/${idproduct}/updateproductdescription`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productDescription: productdescription }),
  });
  return response.json();
};


export const updateProductPrice = async (idproduct, productprice) => {
  const response = await fetch(`${BASE_URL}/${idproduct}/updateproductprice`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productPrice: productprice }),
  });
  return response.json();
};


