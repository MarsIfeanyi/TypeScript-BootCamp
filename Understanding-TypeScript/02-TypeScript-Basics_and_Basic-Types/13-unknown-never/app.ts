/**
 * UNKNOWN, NEVER
 *
 *
 */

let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
if (typeof userInput === "string") {
  userName = userInput;
}

// Hint: "unknown" is the best choice over "any" if you don't the type of value you want to store or receive, because "unknown" guarantees some type checking.

// VIP: unknown is a type you should use all the time, but it is better than  "any"

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  // while (true) {}
} //Hint: You use "never" in a function that is intended never to return anything... vip: "never" is used for cases like throwing an error

generateError("An error occurred!", 500);
