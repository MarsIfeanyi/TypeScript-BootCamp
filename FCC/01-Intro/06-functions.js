"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) { }
// Arrow function... with default value
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
}; //Hint:Here we provide a default value so that we can just pass in to parameters when we call the function
addTwo(5);
getUpper("mars");
signUpUser("mars", "mars@gmail.com", false);
loginUser("mars", "mars@gmail.com");
//EXplicitly declaring the type in an arrow function
var getHello = function (s) {
    var hello = s;
    return hello;
};
var hello = getHello("Hello Mars");
console.log("====================================");
console.log(hello);
console.log("====================================");
// String mappings
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    var theHeros = "hero is ".concat(hero);
    console.log(theHeros);
    return theHeros;
});
// number mappings
var accounts = [100, 300, 500, 60, 30];
accounts.map(function (account) {
    return account;
});
//when the function is not returning anything, then use Void
function consoleError(errmsg) {
    console.log(errmsg);
}
/**The never type represents values which are never observed.  in a return type, this means that the function throws an exception or terminates execution of the program
 *
 * never also appears when typescript determines there's nothing left in a union
 */
function handleError(errmsg) {
    throw new Error(errmsg);
}
