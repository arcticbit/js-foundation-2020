require('isomorphic-fetch');
// Stränginterpolering för att skapa URL:n
//  Giltigt exempel:
//  https://api.spotify.com/v1/search?q=Adele&type=artist

// Fetch request till url:n
// andra argument till fetch: objekt som innehåller konfiguration
// ex:
// fetch(enUrl, {
//   headers: {
//     Authorization: 'Bearer ' + Token
//   }
// }).then(r => ...)

const token =
  'BQAsfRUbbpOrYR5XekwLMN7ltb0vwx_eE1xDgOXeNSZHY6S3wwWq6UqzzaSfN7Ukunqgeidbt7vIaw2f7JnZwiy1yfxw0yrEAhYLQEh6S_Hif-yBX4FNoXqn9hWyb85CbJaAoPeWunFictjX';
const baseUrl = 'https://api.spotify.com/v1/search';

class SpotifyApi {
  transform(data) {
    return data.albums.items.map((item) => {
      return {
        id: item.id,
        artist: item.artists[0].name || 'Unknown Artist',
        album: item.name,
        cover: item.images[0].url,
        url: item.external_urls.spotify,
      };
    });
  }

  search(term) {
    const headers = {
      Authorization: 'Bearer ' + token,
    };

    const url = `${baseUrl}?q=${term}&type=artist,album&limit=10`;

    return fetch(url, { headers })
      .then((r) => r.json())
      .then((r) => {
        return this.transform(r);
      });
  }
}

module.exports = SpotifyApi;
