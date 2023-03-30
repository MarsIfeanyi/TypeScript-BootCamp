// Explicitly declaring/ assigning the  object type.
// const person: {
//   name: string;
//   age: number;
// } = {
// const person = {
//   name: "Maximilian",
//   age: 30,
// };
// Implicitly  assigning the object type by TypeScript (inference )
var person = {
    name: "MarsIfeanyi",
    age: 25
}; //Hint: Here TypeScript will inference it as "key-type" pair instead of "key-value" pair
console.log(person.name);
