export const url = "http://192.168.64.2/MatrixMessagerBack/";

export async function request(method, route, body) {
  const responseRaw = await fetch(url + route, 
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