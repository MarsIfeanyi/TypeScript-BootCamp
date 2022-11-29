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
