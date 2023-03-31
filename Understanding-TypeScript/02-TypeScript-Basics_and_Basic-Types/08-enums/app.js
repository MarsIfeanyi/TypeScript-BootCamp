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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role["AUTHOR"] = "AUTHOR";
})(Role || (Role = {})); // When declaring your enum, the convention is to start with Capital letter for the first letter of the name... Hint: enums are zero index based ie behind the scene, ADMIN = 0, READ_ONLY = 1 etc
// Hint: The default starting value for an enum is 0, however you can change it to what you want
var Role2;
(function (Role2) {
    Role2["ADMIN2"] = "5";
    Role2[Role2["READ_ONLY2"] = 100] = "READ_ONLY2";
    Role2["AUTHOR2"] = "AUTHOR";
})(Role2 || (Role2 = {}));
var Role3;
(function (Role3) {
    Role3["ADMIN3"] = "10";
    Role3[Role3["READ_ONLY2"] = 100] = "READ_ONLY2";
    Role3["AUTHOR3"] = "200";
})(Role3 || (Role3 = {}));
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10;
// person.role = [0, 'admin', 'user'];
var favoriteActivities;
favoriteActivities = ["Sports"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}
if (person.role === Role.AUTHOR) {
    console.log("is author");
}
// Hint: enum is very useful when you need some identifiers that are human readable and have some mapped values behind the scene. enum helps us to assign a human readable label
