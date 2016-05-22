const SPOTIFY_URI = 'https://api.spotify.com/v1';

function getHeaders(token) {
  return { 'Authorization': `Bearer ${token}` };
}

async function getPlaylists(accessToken) {
  const playlists = await fetch(`${SPOTIFY_URI}/me/playlists`, { headers: getHeaders(accessToken) });
  return await playlists.json();
}

export default {
  getPlaylists
};
