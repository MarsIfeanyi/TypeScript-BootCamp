function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number) {
  console.log("Result:" + num);
} //Hint: This function has no return statement, thus it will return "Void" as the type... Void is similar to "undefined" in JS... If a function returns nothing then use "void" instead of "undefined" because "undefined" is a type in TypeScript... VIP: You can assign "void" to the function explicitly but TypeScript is also able to infer it.

printResult(add(5, 12));
