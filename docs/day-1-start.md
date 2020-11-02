## Förberedelser

1. Installera NodeJS från https://nodejs.org
2. Skapa en projektkatalog
3. Initiera npm (node package manager)
   `npm init`
4. Installera browser-sync
   `npm install browser-sync --save-dev`
5. Lägg till start script i package.json

```js
{
  ...
  "scripts": {
    "start": "browser-sync start --server --files ./*",
  }
}
```

## Variabler

- `var`, `let`, `const`
- `var` är globally scoped _eller_ functionally scoped
  beroende på plats för deklarering.
- `var` går att omdefinera många gånger utan
  varningar eller fel. i stora projekt blir detta
  lätt en svåridentifierad felkälla.
- `let` och `const` är _block_ scoped
- använd alltid `let` eller `const`
- `let` går att förändra,
  `const` är konstant _för scopet_
- `const` är inte samma som i ex. java,
  referensen konstant men inte innehållet

## Funktioner

- Tre varianter:
  - Anonyma function statements:
    ```js
    function() {
      // ...
    }
    ```
  - Namngivna function statements:
    ```js
    function hello() {
      // ...
    }
    ```
  - Arrow functions (eller lambda):
    ```
    const aFunction = () => {
      // ...
    }
    ```
- Function statements skapar ett nytt block scope,
  vilket gör att `this` förändras.
- Arrow functions gör inte det.

```js
const test = {
  exec: function () {
    console.log(this);
  },
};

const arrow = {
  exec: () => {
    console.log(this);
  },
};

test.exec(); // -> exec
arrow.exec(); // -> window
```

## Typer

- Allt i JavaScript är objekt
- Finns ett fåtala primitiva typer:
  - `number`
  - `String`
  - `Boolean`
  - `null`
  - `undefined`

## Strängar

- Single quote används som standard, växla till dubbla om strängen i sig  
  innehåller single quotes. Funktionellt samma.
- \`, även kallade backticks, används för att skapa template strings.
  Interpolering sker med hjälp av `${}`, ex. `Hello \${target}`

## Loopar

Tre olika varianter, `for`, `for..of` och `Array.forEach`. Funktionellt ekvivalenta. Enda skillnaden är att Array.forEach inte går att avbryta eller manipulera exekveringen av.

```js
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

// objektnycklar eller array index
for (let key of result) {
  console.log(item);
}

// arrayvärden
for (let item of result) {
  console.log(item);
}

result.forEach((item) => {
  console.log(item);
});

while (condition) {
  // ...
}
```

## Conditionals

`if`

```js
if (val) {
} else {
}
```

```js
val != undefined ? doSomething() : doNothing();
```

```js
switch (val) {
  case 'adele':
    doSomething();
    break;
  default:
    doNothing();
    break;
}
```

## Promises

Används för att utföra asynkrona operationer, exempelvis
vid interaktion med webbläsarens http klient (`fetch` och
`XMLHttpRequest`).

Non-blocking, dvs. efterföljande kod
fortsätter exekveras och callbackfunktionen anropas när
promiset har resolve:ats.

- Callbacks för promises som resolvats sker genom `then()`.
- Callbacks för promises som failar, sker genom `catch()`.

Moderna EcmaScript-standarder har även tillägget async/await,
vilket är snarlikt, men utan `.then()` och `.catch()` nestingen som promises introducerar.

## Classer

Fungerar som i de flesta andra objektorienterade språk.

Konstruktor som kan användas vid instansering av objektet,
metoder och fält som kan användas för beteende och data.

Refereras till via keywordet `this`.

```js
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
```

Fungerar i de flesta moderna webbläsarna, men inte i
Internet Explorer. Där krävs även någon form av polyfill (vilket vi ska gå igenom imorgon).

## Annat

- Emmet, expanderar abbreveringar till fullständig html, ex
  `.container>.row>.column` som efter tabbning blir:
  ```html
  <div class="container">
    <div class="row">
      <div class="column"></div>
    </div>
  </div>
  ```
- JavaScript Wat
  https://www.destroyallsoftware.com/talks/wat

### Böcker

- JavaScript: The Good Parts
  https://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742#ace-g9859629705
- Eloquent JavaScript
  https://www.amazon.com/Eloquent-JavaScript-3rd-Introduction-Programming/dp/1593279507/
