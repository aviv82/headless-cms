/**
 * Complete the following function that
 * removes the product with the given id
 */
async function removeProduct(productId) {
  const path = `products/${productId}`;
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}

removeProduct(14);
