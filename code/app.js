'use strict';

const search = new Search('data.json');
const render = new Render($('#result'));

$('#search').click(() => {
  console.log('Button was clicked');

  let term = $('#search-term').val().toLowerCase();
  if (!term) {
    return;
  }

  render.loading();

  setTimeout(() => {
    search
      .exec(term)
      .catch((e) => {
        console.error(e);
        render.error();
      })
      .then((data) => {
        let filtered = search.filter(data, term);
        if (filtered.length <= 0) {
          render.noResult();
          return;
        }
        render.result(filtered);
      })
      .catch((e) => {
        console.error(e);
        render.error();
      });
  }, 2000);
});
