const Api = require('./api');
const fs = require('fs');
const path = require('path');

const dataPath = path.resolve(__dirname, 'test_data.json');
const rawData = fs.readFileSync(dataPath);
const data = JSON.parse(rawData);
const api = new Api();

describe('the api transformation function', () => {
  it('should execute', () => {
    expect(() => api.transform({ albums: { items: [] } })).not.toThrow();
  });
  it('should return something given an input', () => {
    const expected = [
      {
        album: '21',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b273ba764098164f221484bcc309',
        id: '7n3QJc7TBOxXtlYh4Ssll8',
        url: 'https://open.spotify.com/album/7n3QJc7TBOxXtlYh4Ssll8',
      },
      {
        album: '25',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2735ffbbc3dca25d5c81491af1f',
        id: '7uwTHXmFa1Ebi5flqBosig',
        url: 'https://open.spotify.com/album/7uwTHXmFa1Ebi5flqBosig',
      },
      {
        album: '19',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2730a5d334a63fd4455ce83b38b',
        id: '2YO1F9DHVEzXPriA1JHoOQ',
        url: 'https://open.spotify.com/album/2YO1F9DHVEzXPriA1JHoOQ',
      },
      {
        album: 'Adeleide',
        artist: 'Rikke Winther',
        cover:
          'https://i.scdn.co/image/ab67616d0000b273cbd9f57642bf4ce931e2d8aa',
        id: '17biuyYlXHwqEiOk0HQ1kF',
        url: 'https://open.spotify.com/album/17biuyYlXHwqEiOk0HQ1kF',
      },
      {
        album: 'Skyfall',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2732737be35cc5245eef495be90',
        id: '6TwN6Lq9glwnG8kNp6chHY',
        url: 'https://open.spotify.com/album/6TwN6Lq9glwnG8kNp6chHY',
      },
      {
        album: 'Hello',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b273d091562e8f356ee3bd78da1b',
        id: '5y28RdPzIRXegzr5YM9Y0D',
        url: 'https://open.spotify.com/album/5y28RdPzIRXegzr5YM9Y0D',
      },
      {
        album: 'When We Were Young',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2730993acbcf3bd653f0ce84eb1',
        id: '5oWQ2uILvj5bAjeIjSYYc8',
        url: 'https://open.spotify.com/album/5oWQ2uILvj5bAjeIjSYYc8',
      },
      {
        album: 'Rolling In The Deep',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2736000f2a3f71f600debc3366a',
        id: '3ng0Nr1GuIqsp4oEzyMHVm',
        url: 'https://open.spotify.com/album/3ng0Nr1GuIqsp4oEzyMHVm',
      },
      {
        album: 'Send My Love (To Your New Lover)',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2734942f98715376ba6648dd082',
        id: '1vlKTObVibnwWkJXWXIcH3',
        url: 'https://open.spotify.com/album/1vlKTObVibnwWkJXWXIcH3',
      },
      {
        album: 'Hometown Glory',
        artist: 'Adele',
        cover:
          'https://i.scdn.co/image/ab67616d0000b2739d81d22ded8f71eaf8afa798',
        id: '0waVqJjsfINWbs3aMK9y4s',
        url: 'https://open.spotify.com/album/0waVqJjsfINWbs3aMK9y4s',
      },
    ];
    const result = api.transform(data);
    expect(result).toEqual(expected);
  });
});
