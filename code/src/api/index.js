const express = require('express');
const SpotifyApi = require('./api');
const cors = require('cors');

const api = new SpotifyApi();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/search', (req, res) => {
  const term = req.query.q;
  api.search(term).then((r) => {
    res.json(r);
  });
});

app.listen(3000);
console.log('API server running at localhost:3000');

// const data = {
//   artists: [{ id: 1, name: 'Adele' }],
//   albums: [
//     {
//       title: '21',
//       artists: [{ id: 1, name: 'Adele' }],
//     },
//   ],
// };

// const result = data.artists.map((artist) => {
//   return {
//     title: artist.name,
//     albums: data.albums.filter((album) =>
//       album.artists.find((a) => a.id === artist.id)
//     ),
//   };
// });

// console.log(JSON.stringify(result, null, 2));
