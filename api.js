const domain = 'localhost';

export const url = "http://"+domain+"/MatrixMessagerBack";

export async function request(method, route, body) {
  const responseRaw = await fetch(url + route+'/index.php', 
  {
    method: method,
    body: JSON.stringify(body)
  });

  if (!responseRaw.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const response = await responseRaw.json();
  return response;

}