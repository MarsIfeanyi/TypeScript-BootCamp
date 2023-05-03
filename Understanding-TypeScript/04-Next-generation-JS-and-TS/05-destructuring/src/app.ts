const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];

activeHobbies.push(...hobbies);

const person = {
  firstName: "Mars",
  age: 30,
};

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// Array Destructing... Array doesn't change the original array... "...remainingHobbies" is the "Rest" parameter
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName, age } = person; // Hint: the key name has to be same as defined in the "original" object so that you can easily pull out the values.

console.log(firstName, age, person);

//Hint: For Array Destructing element are pulled out in order, because array is an ordered List , but for Object Destructing, the order is not guaranteed. Thus you Destructure an Object using the same "Key" as the name ie  by key name and not by order.

// Hint: We can override the key name in the object by using Aliases
const { firstName: userName, age: userAge } = person;
console.log(userName, userAge, person);
