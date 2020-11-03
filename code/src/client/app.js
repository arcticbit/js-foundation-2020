import $ from 'jquery';

import { Search } from './search/search';
import { Render } from './render/render';

const search = new Search('http://localhost:3000/api/search');
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
