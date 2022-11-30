"use strict";
//Hint: protected is accessible within the Parent class any in any other class that inherited from the parent class... However it is not accessible outside the parent or outside the child class
class User5 {
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
//Class Inheritance
class SubUser extends User5 {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
//Creating object from the class
const mars5 = new User5("mars@g.com", "Charles", "2020");
