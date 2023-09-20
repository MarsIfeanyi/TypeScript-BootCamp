interface Named {
  readonly name: string;
}

// Hint: interface can have "readonly" modifier but they cannot have "private"

// extending interfaces... This is useful where you want some objects/classes to different functionality and for some objects/classes to share the same functionality
interface Greetable extends Named {
  greet(phrase: string): void;
}

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
// user1.name = 'Manu';

user1.greet("Hi there - I am");
console.log(user1);

// Hint: in classes you cannot inherit from more than one class but with interfaces you can "Implement" or "extend" more than one interface
