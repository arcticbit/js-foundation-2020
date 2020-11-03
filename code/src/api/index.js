const express = require('express');
const SpotifyApi = require('./api');
const cors = require('cors');

const api = new SpotifyApi();
const app = express();

app.use(cors());
app.use(express.json());
app.get('/api/search', (req, res) => {
  const result = api.search();
  res.json(result);
});

app.listen(3000);
console.log('API server running at localhost:3000');
