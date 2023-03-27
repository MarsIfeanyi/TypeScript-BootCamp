const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement; // Typecasting, telling typescript that it will return HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement;

//Hint: What you get on the value property of an input element will be a "string"... Thus +input1, converts string to number.

function add(num1: number, num2: number) {
  return num1 + num2;
}

if (button) {
  button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
  });
}
