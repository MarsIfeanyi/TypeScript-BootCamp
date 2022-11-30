"use strict";
//Hint: Private is only accessible with the class
// By default typescript marks the properties as public... public are accessible anywhere
class User2 {
    constructor(email, name) {
        this.city = "Wall Street";
        this.email = email;
        this.name = name;
    }
}
//Creating object from the class
const mars2 = new User2("mars@g.com", "Charles");
//The shorter way of writing the above code... This remove the constructor initialization with "this" keyword
class User3 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this.city = "Wall Street";
    }
}
//Creating object from the class
const mars3 = new User3("mars@g.com", "Charles", "2020");
//Hint: Public and Private are access modifiers.
