class Search {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  exec(term) {
    return fetch(this.baseUrl)
      .then((r) => r.json())
      .catch(() => []);
  }
}
