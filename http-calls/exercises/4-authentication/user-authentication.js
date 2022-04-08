async function createAuthenticatedUser(
  username = '',
  email = '',
  password = '',
) {
  const path = 'auth/local/register'; //a default route from strapi
  const body = {
    username: username,
    email: email,
    password: password,
  };
  const url = `http://localhost:1337/api/${path}`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });
  const responsePromise = await response.json();
  console.log(responsePromise);
  return responsePromise; //You will have to store this JWT in your application, it's important because you will have to use it the next requests
}
createAuthenticatedUser('aviv', 'aviv.dror@gmail.com', '12345678');
// jwt: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mywia…zODR9.6w4aNjeca_qi4czHUitcH-HxYrig06CEHg63e9A4-wQ
