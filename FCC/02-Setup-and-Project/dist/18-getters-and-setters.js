"use strict";
class User4 {
    constructor(email, name, userId) {
        this.email = email;
        this.name = name;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Wall Street";
    }
    // private method
    deleteToken() {
        console.log("Token deleted");
    }
    // creating a getter function
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    //Creating a setter function...Hint: a setter function does not return any value and thus you don't add any type to it.
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1 ");
        }
        this._courseCount = courseNum;
    } //Hint: The logic here is upto but the most important thing is that in setter function there is no "return type"
}
//Creating object from the class
const mars4 = new User4("mars@g.com", "Charles", "2020");
