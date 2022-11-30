function anotherFunction<T, U>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction(3, "4");
anotherFunction("3", 4);

function anotherFunction2<T, U extends number>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

//anotherFunction2(3, "4");//gives an error because "U" has be extended as a number

interface Database {
  connection: string;
  username: string;
  password: string;
}

function anotherFunction3<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}

anotherFunction3(3, { connection: "mars", username: "yes", password: "2020" });

interface Quiz {
  name: string;
  type: string;
}

interface Course {
  name: string;
  author: string;
  subject: string;
}

class Sellable<T> {
  public cart: T[] = [];
  addToCart(product: T) {
    this.cart.push(product);
  }
}
