/**
 * INTERFACES
 *
 * With interface you can define a general features and thus anyone that wants to use the interface must implement all the features you defined in the interface.
 *
 */

interface Person {
  name: string;
  age: number;

  greet(phrase: string): void;
}

//Hint: Interfaces are used to define objects

let user1: Person;

user1 = {
  name: "Mars",
  age: 30,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there - I am");

// Hint: Interface helps us to define the structure of an object... VIP: When defining interface we separate the properties with semicolon(;) but when using the interface we separate them with comma (,)
