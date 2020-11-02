'use strict';

// const test = {
//   exec: function () {
//     console.log('test: ', this);
//   },
// };

// test.exec();

// const arrow = {
//   exec: () => {
//     console.log('arrow: ', this);
//   },
// };

// arrow.exec();

$('#search').on('click', function () {
  let result = [
    {
      id: 0,
      artist: 'Adele',
      album: '21..........',
      url: 'https://google.com/',
    },
    {
      id: 1,
      artist: 'Frank Ocean',
      album: 'Channel Orange',
      url: 'https://google.com/',
    },
    {
      id: 2,
      artist: 'Gangstarr',
      album: 'Full Clip',
      url: 'https://google.com/',
    },
  ];

  console.log('Button was clicked');

  // for (let i = 0; i < result.length; i++) {
  //   console.log(result[i]);
  // }

  // for (let item of result) {
  //   console.log(item);
  // }

  result.forEach((item) => {
    console.log(item);
  });
  $('#result').append('Hello world');
  // console.log(result);
});
