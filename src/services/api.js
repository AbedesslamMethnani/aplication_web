const API_URL = "http://localhost:8000/api";

export async function getData(endpoint) {
  const res = await fetch(`${API_URL}/${endpoint}`);
  return res.json();
}
