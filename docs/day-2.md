## Semikolon

Är optional i JavaScript, men kan ibland skapa bekymmer.
Till exempel:

### Exempel A

```
const a = 1
const b = 2
const c = a + b

(a + b).toString()
```

skulle tolkas som

```js
const a = 1;
const b = 2;
const c = a + b(a + b).toString();
```

Istället för, som vi förväntar oss:

```js
const a = 1;
const b = 2;
const c = a + b;
(a + b).toString();
```

### Exempel B

```
1 + 1
-1 + 1 === 0 ? alert(0) : alert(2)
```

borde rimligen exekvera `alert(0)`, men då js-motorn
själv får gissa var varje statement avslutas kommer det
istället att tolkas som:

```js
1 + 1 - 1 + 1 === 0 ? alert(0) : alert(2);
```

och exekvera `alert(2)`.

## Transpilering

Transpilering är en process där vi tar en given input och transformerar
den till någonting annat och returnerar resultatet som output. I javascript-fallet
tar vi modern kod som nyttjar funktionalitet från de senaste
ecmascript-specifikationerna och transformerar den till kod som fungerar även
i webbläsare som stödjer de äldre specifikationerna (ex internet explorer).

Vi använder oss utav det populära verktyget `babel` för att genomföra transpileringen.
Babel har en interaktiv demo på sin webbsida där du kan experimentera med olika
presets och se hur de påverkar outputen från transpileringen.

https://babeljs.io/en/repl

För att sätta upp transpilering i vårt projekt lägger vi först till de nödvändiga
paketen från npm:

```bash
$ npm install         \
    @babel/cli        \ # cli för att interagera med babel
    @babel/core       \ # verktygets kärna, funktionaliteten vi använder oss av
    @babel/preset-env \ # en preset baserad på webbläsarstatistik från caniuse och browserstatistics
```

Transpileringen i sig går att utföra med kommandot `babel`, dvs. det vi får från `@babel/cli`, men vi kommer istället att sätta upp det som en del av vår bundling i nästa modul.

## Bundling

Bundling är inom javascript ett koncept där man tar en
eller flera filer, tillsammans med dess dependencies, och
slår ihop dessa till ett paket (bundle) som sedan kan köras
på en webserver. Det vanligaste bundlingsverktyget för
javascript heter `webpack`, och används av såväl enskilda
projekt som ramverk som `angular` och `react`.

För att komma igång med webpack installerar vi först
ett antal node moduler:

```bash
$ npm install          \
    webpack            \ # själva verktyget
    webpack-cli        \ # kommandoradsverktyg för att interagera med webpack
    webpack-dev-server \ # den dev-server som kommer serve:a vår kod till webbläsaren
    babel-loader       \ # en loader för att transpilera vår kod som en del av vår bundling
    --save-dev
```

Vi skapar sen en webpackkonfiguration där vi pekar ut vår
entrypoint, var resultatet av vår bundling ska landa, vilka
transformationer som ska göras baserat på filnamn, samt
hur vår dev server ska bete sig:

```js
const path = require('path');

module.exports = {
  entry: './src/client/app.js',
  output: {
    // __dirname = built-in som är satt till katalogen vi är i.
    path: path.join(__dirname, 'public/build'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/build/',
  },
};
```

För att smidigt kunna exekvera webpack lägger vi därefter
till två nya script i vår `package.json`-fil:

```json
{
  // ...
  "scripts": {
    "build": "webpack",
    "serve": "webpack serve"
  }
}
```

Vi kan nu antingen bygga vårt projekt, och då få ut vår bundle
på disk, med hjälp av `npm run build`, eller starta en dev server
med hjälp av `npm run serve`.

## Linting

Linting används för att harmonisera och upprätthålla stilmässiga
regler i en kodbas. Det mest utbredda verktyget för detta är `eslint`.

För att komma igång med eslint lägger vi först till ett par paket via npm:

```bash
$ npm install eslint babel-eslint --save-dev
```

Vi skapar därefter en konfigurationsfil för eslint, samt en
konfigurationsfil för babel:

```js
// .eslintrc.js
module.exports = {
  // Den parser vi vill använda för att parse:a vår kod.
  // I detta fall babel-pluginen för eslint.
  parser: 'babel-eslint',
  rules: {
    // De regler vi vill att vår linter ska använda sig utav.
    // I detta fall att alla statements avslutas med semikolon.
    semi: ['error', 'always'],
  },
};
```

```js
// babel.config.json
{
  // Vilken, eller vilka, presets vi vill att babel ska använda
  // för att transformera vår kod.
  "presets": [
    "@babel/preset-env"
  ]
}
```

Vi kan därefter lägga till ett script i `package.json` som kör
eslint på våra sourcefiler:

```json
{
  // ...
  "scripts": {
    // ...
    "lint": "eslint ./src/"
  }
}
```

Om vi nu kör detta script, så kommer vi i det fall vi saknar
semikolon någonstans i koden att få errors om detta i terminalen.

## Test

Test är en viktig del även vid frontend-utveckling. Precis
som i andra språk finns det stora fördelar i att testa sin
kod, gärna genom metoder som TDD.

Vi kommer att använda oss utav testverktyget `jest` som är
ett snabbt, modern testverktyg med starka inslag av BDD
(behavior-driven development, utveckling som drivs av applikationens beteende).

För att installera jest:

```bash
$ npm install  \
    jest       \ # själva verktyget
    babel-jest \ # integration mellan jest och babel
    --save-dev
```

Vi skapar därefter en konfigurationsfil, där vi anger att
vi vill att jest ska rensa bort eventuella mock-objekt mellan
varje testkörning och att vi vill använda `node` som testmiljö.

```js
// jest.config.js

module.exports = {
  clearMocks: true,
  testEnvironment: 'node',
};
```

Vi skulle också kunnat ange `jsdom` som vår testmiljö, vilket
då skulle gett oss en mer webbläsarlik miljö, men då detta kommer med stor negativ inverkan på performance så undviker vi
detta så långt som möjligt.

### Köra tester

Testfilerna skapas därefter bredvid de faktiska implementationerna, med samma filnamn, dock med tillägget `.spec` innan filändelsen.

Exempelvis:

```js
// search.spec.js

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
```

De tre huvudsakliga koncepten vi använder här som är
specifika för `jest` är `describe`, som används för att
beskriva det objekt vi testar, `it` där vi beskriver vår testhypotes och `expect` som vi använder för att säkerställa att testet uppfyller våra förväntningar.

För att enkelt säkerställa att vi håller våra tester små och
att vi inte testar flera saker i ett test så kan vi använda oss utav tekniken `AAA`, eller `Arrange - Act - Assert`.

#### `Arrange`

Vi arrangerar vår enhet på ett sätt som är lämpligt för att kunna genomföra testet

#### `Act`

Vi utför en handling i vår enhet.

#### `Assert`

Vi inspekterar resultatet och säkerställer att det är vad
vi förväntar oss.

## Annat

- https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
