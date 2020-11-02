'use strict';

// - lägg till cover som en property på resultaten
// - cover är en link till en bild
// - lämnar ett resultat utan ett cover
// - resultat som saknar cover ska få en default cover
// - använd ternary operator för att välja vilken bild

// https://upload.wikimedia.org/wikipedia/en/1/1b/Adele_-_21.png
// https://upload.wikimedia.org/wikipedia/en/2/28/Channel_ORANGE.jpg
// https://upload.wikimedia.org/wikipedia/en/thumb/c/c7/Fullclip.jpg/220px-Fullclip.jpg

const defaultCover =
  'https://static.tumblr.com/2lqtwbf/coolyqooj/untitled-1.png';

function newResult(id, artist, album, url) {
  // type checks för primitiver
  if (typeof id != 'number') {
    throw new Error('Ogiltigt id');
  }
  return {
    id,
    artist,
    album,
    url,
  };
}

let result = [
  newResult(0, 'Adele', '21', 'https://google.com/'),
  newResult(1, 'Frank Ocean', 'Channel Orange', 'https://google.com/'),
  newResult(2, 'Gangstarr', 'Full Clip', 'https://google.com/'),
];

$('#search').on('click', function () {
  console.log('Button was clicked');

  let term = $('#search-term')[0].value.toLowerCase();

  if (!term) {
    return;
  }

  let filteredResults = filterResults(term);
  render(filteredResults);
});

function render(items) {
  $('#result').html('');
  items.forEach((item) => {
    $('#result').append(`
    <div>
      <a href="${item.url}">
        ${item.artist} - ${item.album}
      </a>
    </div>
  `);
  });
}

function filterResults(term) {
  return result.filter((item) => {
    return (
      item.artist.toLowerCase().includes(term) ||
      item.album.toLowerCase().includes(term)
    );
  });
}
