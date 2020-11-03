import $ from 'jquery';

import { Search } from './search/search';
import { Render } from './render/render';

const search = new Search('http://localhost:3000/api/search');
const render = new Render($('#result'));

$('#search-term').on('keypress', (e) => {
  if (e.key === 'Enter') {
    console.log('Enter pressed');
    e.preventDefault();
    executeSearch();
  }
});

$('#search').click(() => {
  console.log('Button was clicked');
  executeSearch();
});

function executeSearch() {
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
        if (data.length <= 0) {
          render.noResult();
          return;
        }
        console.log(JSON.stringify(data, null, 2));
        render.result(data);
      })
      .catch((e) => {
        console.error(e);
        render.error();
      });
  }, 2000);
}
