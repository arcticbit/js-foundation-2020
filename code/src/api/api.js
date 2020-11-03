const fs = require('fs');
const path = require('path');

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

class SpotifyApi {
  search() {
    // Resolvar filpathen
    let filePath = path.resolve(__dirname, 'data.json');
    console.log(filePath);

    // Läser filens innehåll
    let rawOutput = fs.readFileSync(filePath);
    let output = JSON.parse(rawOutput);

    // går att manipulera, ex:
    // output.push({ title: 'En bok', author: 'En författare', pages: 200 });

    // Returnerar innehållet
    return output;
  }
}

module.exports = SpotifyApi;
