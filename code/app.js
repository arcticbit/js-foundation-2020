'use strict';

const defaultCover =
  'https://static.tumblr.com/2lqtwbf/coolyqooj/untitled-1.png';

console.log(JSON.stringify(result, null, 2));

$('#search').click(() => {
  const search = new Search('data.json');

  console.log('Button was clicked');

  let term = $('#search-term').val().toLowerCase();
  if (!term) {
    return;
  }

  renderLoading();

  setTimeout(() => {
    search
      .exec(term)
      .then((data) => {
        let filteredResults = filterResults(data, term);
        render(filteredResults);
      })
      .catch(() => {
        renderNoResults();
      });
  }, 2000);
});

function renderLoading() {
  $('#result').html(`
    <div style="text-align:center">
      <img src="https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif" />
    </div>
  `);
}

function renderNoResults() {
  $('#result').html(`
    No results found, try again.
  `);
}

function render(items) {
  $('#result').html('');
  items.forEach((item) => {
    $('#result').append(`
    <div>
      <img class="cover-art" src="${item.cover || defaultCover}">
      <div>
        <a href="${item.url}">
          ${item.artist} - ${item.album}
        </a>
      </div>
    </div>
  `);
  });
}

function filterResults(result, term) {
  return result.filter((item) => {
    return (
      item.artist.toLowerCase().includes(term) ||
      item.album.toLowerCase().includes(term)
    );
  });
}
