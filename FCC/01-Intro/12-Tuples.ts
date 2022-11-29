//Hint: Tuple helps to ensure that the order of the array really matters...

//Without Tuple...Can be in any order
const userz: (string | number)[] = [1, "mars"];

const userz2: (string | number)[] = ["mars", 1];

// With Tuple... Ordering is important
let tUser: [string, number, boolean];

tUser = ["mars", 2020, true];

// tUser = [true, "mars", 2020];//changing the order throws an error

//Hint: Tuple is all about restricting you, so that you follow the order of the data

// where you can use Tuple

let rgb: [number, number, number] = [124, 255, 238];

type User = [number, string];
const newUser: User = [204, "mars@gmail.com"];

//Hint: You can use array methods (push, unshift, pop,shift,slice etc) to manipulate tuples...This shouldn't be so
