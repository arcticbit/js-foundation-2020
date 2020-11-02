## Getting started

1. Install NodeJS
2. Skapa projektkatalog
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

- Två varianter, `function()` `function hello()` eller arrow functions / lambda. `() => {}`
- Function skapar nytt scope
- Lambda gör inte det
- Kan illustreras genom `this`.

## Typer

- Allt är objekt
- Primitiva typer: number, string, boolean, null, undefined

## Strängar

- Enkla "fnuttar" som standard, växla till dubbla om
  strängen innehåller apostrofer. Funktionellt samma.
- Backticks (``) för att skapa template strings. Interpolering sker via ${}, ex. `Hello \${target}`

## Annat

- Emmet
