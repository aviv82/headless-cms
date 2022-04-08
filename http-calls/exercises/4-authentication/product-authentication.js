async function authcreateNewproduct(name, description, price) {
  const path = 'products';
  const body = {
    name: name,
    description: description,
    price: price,
  };

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywia…zODR9.6w4aNjeca_qi4czHUitcH-HxYrig06CEHg63e9A4-wQ'; // JWT

  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
  return response.json();
}

authcreateNewproduct(
  'authorised product ',
  'This is a cool product made by an api call after authentication',
);
