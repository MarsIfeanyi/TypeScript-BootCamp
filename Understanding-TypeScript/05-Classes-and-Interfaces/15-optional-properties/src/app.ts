/**
 * OPTIONAL PARAMETERS AND PROPERTIES
 *
 * You can mark Methods and properties as optional by add question mark (?), after the method or property name.
 *
 * The Optional parameter tells TypeScript that the property or method might exist (not compulsory) in the classes that implements the interface.
 *  ie ensure that if the class/es didn't provide properties or method mark as optional, then the class will still be allowed.
 */

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string; // optional property
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi!");
    }
  }
}

let user1: Greetable;

user1 = new Person();
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);

// Hint: Interfaces is a pure TypeScript feature. JavaScript does not know about interfaces, Thus interfaces will be used only during compilation to check your code and then dumped afterwards.

//Hint: Interfaces can't be instantiated and are not compiled to JavaScript code, while Classes can be Instantiated and compiled.

// Hint: Use Interfaces when you want to create "contract" that forces an implementing class to have certain properties or methods and also when you want to define the structure of an object, then use "custom types" when you want to store a union type.
