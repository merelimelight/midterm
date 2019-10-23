const API_URL = "https://chinook-api.herokuapp.com/api";

export async function fetchPlaylists(id) {
  let response = await fetch(`${API_URL}/playlists/${id}/tracks`);
  return response.json();
}

export async function fetchMusic(page) {
  let response = await fetch(`${API_URL}/tracks?page=${page}`);
  return response.json();
}
