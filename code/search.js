class Search {
  constructor(baseUrl) {
    this.baseUrl = baseUrl;
  }

  exec(term) {
    return fetch(this.baseUrl).then((r) => r.json());
  }

  filter(result, term) {
    if (!result) {
      return undefined;
    }
    return result.filter((item) => {
      return (
        item.artist.toLowerCase().includes(term) ||
        item.album.toLowerCase().includes(term)
      );
    });
  }
}
