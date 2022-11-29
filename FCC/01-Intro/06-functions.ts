function addTwo(num: number): number {
  return num + 2;
}

function getUpper(val: string) {
  return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {}

// Arrow function... with default value
let loginUser = (name: string, email: string, isPaid: boolean = false) => {}; //Hint:Here we provide a default value so that we can just pass in to parameters when we call the function

addTwo(5);

getUpper("mars");

signUpUser("mars", "mars@gmail.com", false);

loginUser("mars", "mars@gmail.com");

//EXplicitly declaring the type in an arrow function

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

const accounts = [100, 300, 500, 60, 30];

accounts.map((account): number => {
  return account;
});

//when the function is not returning anything, then use Void

function consoleError(errmsg: string): void {
  console.log(errmsg);
}

/**The never type represents values which are never observed.  in a return type, this means that the function throws an exception or terminates execution of the program
 *
 * never also appears when typescript determines there's nothing left in a union
 */

function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

export {};
