/**
 * A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is generics, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.


 */

const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number {
  return val;
}

function identityTwo(val: any): any {
  return val;
}

//With Generics
function identityThree<Type>(val: Type): Type {
  return val;
}

identityThree(20);
identityThree("mars");
identityThree(true);

//Hint: The important difference between using generics and "Any" is that with any you can accept any type, however with Generics you can accept any type and the type will automatically be locked.

//Short way of writing generics...Hint: you can put any alphabet inside the <>and use same for the val and return type as well

function identityFour<T>(val: T): T {
  return val;
}

// Using interface with generics

interface Bottle {
  brand: string;
  type: number;
}

identityFour<Bottle>({ brand: "mars", type: 2020 });
