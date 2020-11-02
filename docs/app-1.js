let obj = {
  target: 'world',
  greet: () => `Hello world`,
};

console.log(obj.greet());

// global scope
let name = 'Simon';

function greet() {
  let name = 'Simme';
  // greet scope
  console.log(name);
}

greet();

console.log(name);
