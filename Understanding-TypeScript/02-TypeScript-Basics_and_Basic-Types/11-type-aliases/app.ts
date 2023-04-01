/**
 * TYPE ALIASES/ CUSTOM TYPES
 *
 * This allows us to create  custom (user defined) and reusable types... Thus you can create any custom type you like using your type name and then reuse anywhere you like in your code.
 **/

type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);

//Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.

//For example:

type UserDetail = { name: string; age: number };
const u1: User = { name: "Max", age: 30 }; // this works!
//This allows you to avoid unnecessary repetition and manage types centrally.

//For example, you can simplify this code:

function greet1(user: { name: string; age: number }) {
  console.log("Hi, I am " + user.name);
}

function isOlder1(user: { name: string; age: number }, checkAge: number) {
  return checkAge > user.age;
}

//To:

type User = { name: string; age: number };

function greet(user: User) {
  console.log("Hi, I am " + user.name);
}

function isOlder(user: User, checkAge: number) {
  return checkAge > user.age;
}
