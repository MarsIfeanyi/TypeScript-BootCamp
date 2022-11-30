"use strict";
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(3, "4");
anotherFunction("3", 4);
function anotherFunction2(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
function anotherFunction3(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction3(3, { connection: "mars", username: "yes", password: "2020" });
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
