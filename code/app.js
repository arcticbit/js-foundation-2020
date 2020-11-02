'use strict';

let result = [
  {
    id: 0,
    artist: 'Adele',
    album: '21..........',
    url: 'https://google.com/',
  },
  {
    id: 1,
    artist: 'Frank Ocean',
    album: 'Channel Orange',
    url: 'https://google.com/',
  },
  {
    id: 2,
    artist: 'Gangstarr',
    album: 'Full Clip',
    url: 'https://google.com/',
  },
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
