/***
 * UNION TYPE
 *
 * The union type is used when you are not sure of the type of data that will come in. thus instead of using "Any", you use "Union"...Union is highly recommended for situations like this, its a combination of two or more data types
 */

function combine(input1: number | string, input2: number | string) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Max", "Anna");
console.log(combinedNames);
