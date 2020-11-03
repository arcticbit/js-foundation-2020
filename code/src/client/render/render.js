const spinner = 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif';
const defaultCover =
  'https://static.tumblr.com/2lqtwbf/coolyqooj/untitled-1.png';

export const errorMessage = `
      Something went wrong... Please try again.
    `;
export class Render {
  constructor(elem) {
    this.element = elem;
  }

  loading() {
    this.element.html(`
      <div style="text-align:center">
        <img src="${spinner}" />
      </div>
    `);
  }

  error() {
    this.element.html(errorMessage);
  }

  noResult() {
    this.element.html(`
    No results found, try again.
  `);
  }

  result(items) {
    this.element.html('');
    items.forEach((item) => {
      this.element.append(`
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
}
