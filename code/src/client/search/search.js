export class Search {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  exec(term) {
    return fetch(`${this.baseUrl}?q=${term}`).then((r) => r.json());
  }
}
