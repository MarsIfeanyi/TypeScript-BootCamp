// const person: {
//   name: string;
//   age: number;
// } = {
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: 'Maximilian',
//   age: 30,
//   hobbies: ['Sports', 'Cooking'],
//   role: [2, 'author']
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
} // When declaring your enum, the convention is to start with Capital letter for the first letter of the name... Hint: enums are zero index based ie behind the scene, ADMIN = 0, READ_ONLY = 1 etc

// Hint: The default starting value for an enum is 0, however you can change it to what you want

enum Role2 {
  ADMIN2 = "5",
  READ_ONLY2 = 100,
  AUTHOR2 = "AUTHOR",
}

enum Role3 {
  ADMIN3 = "10",
  READ_ONLY2 = 100,
  AUTHOR3 = "200",
}

const person = {
  name: "Maximilian",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push('admin');
// person.role[1] = 10;

// person.role = [0, 'admin', 'user'];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.AUTHOR) {
  console.log("is author");
}

// Hint: enum is very useful when you need some identifiers that are human readable and have some mapped values behind the scene. enum helps us to assign a human readable label
