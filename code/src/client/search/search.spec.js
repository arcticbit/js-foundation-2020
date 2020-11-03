/*
  describe - vad är det vi testar?
  it - vad är det vi förväntar oss
*/

import { Search } from './search';

describe('the search module', () => {
  it('should return results that include a given search term', () => {
    // Arrange
    const search = new Search('');
    const input = [
      { artist: 'test', album: 'album' },
      { artist: 'fest', album: 'skiva' },
    ];

    // Act
    const result = search.filter(input, 'skiva');

    // Assert
    expect(result.find((i) => i.artist == 'fest')).toBeTruthy();
  });
});
