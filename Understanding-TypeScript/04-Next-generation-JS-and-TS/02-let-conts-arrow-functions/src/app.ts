const userName = "Max";
// userName = 'Maximilian';
let age = 30;

age = 29;

// function add(a: number, b: number) {
//   let result;
//   result = a + b;
//   return result;
// }

// if (age > 20) {
//   let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// Arrow function... function expression
const add = (a: number, b: number) => a + b;
//Hint: If you have two or more expression, then you can't use the above syntax, rather you will use normal function body with braces.

const add2 = (a: number, b: number) => {
  a + b;
  a * b;
};

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
} //Hint:If you have No parameter, then you have to use an empty pair of  parenthesis: ()=>{}

printOutput(add(5, 2));
