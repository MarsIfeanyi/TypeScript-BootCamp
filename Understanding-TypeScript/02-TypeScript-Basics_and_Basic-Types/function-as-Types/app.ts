/**
 *
 *FUNCTION AS TYPE

 function types are types that describe the function regarding the parameters  and the return value. function type is defined using arrow function, without the "{}"
 */

function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result:" + num);
}

printResult(add(5, 12));

// Creating function type... This tells TS that combineValues is a function, which accepts the parameters a and b as numbers and the return a number
let combineValues: (a: number, b: number) => number;

// Hint: Function Type allows us to define which type of function specifically we want to use somewhere.

combineValues = add;

console.log(combineValues(8, 8));
