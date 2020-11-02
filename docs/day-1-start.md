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

for (let item of result) {
  console.log(item);
}

result.forEach((item) => {
  console.log(item);
});
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
- JavaScript Wat, https://www.destroyallsoftware.com/talks/wat
