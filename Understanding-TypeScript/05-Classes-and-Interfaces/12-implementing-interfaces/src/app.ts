/**
 * USING INTERFACES WITH CLASSES
 */

// Interface
interface Greetable {
  name: string;

  greet(phrase: string): void;
}

// Custom type

type TPerson = {
  name: string;
  greeting(phrase: string): void;
};

// Hint: One major difference between interfaces and custom type is that interface can only be used to describe the structure of an object, while us custom type can as well describe the structure of an object in addition to union types

// Implementing interface in a class... You can implement more than one interface by separating them with a comma.
class Person implements Greetable {
  name: string;
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there - I am");
console.log(user1);

// VIP: Interfaces are often used to share functionality among different classes... You can't have implementation when you are defining the interfaces

// Hint: Interfaces have no implementation details at all, but abstract classes can have some implementation detail

// Hint: With Interfaces we can enforce structure and share functionalities among different classes
