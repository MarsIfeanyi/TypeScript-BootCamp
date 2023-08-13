// VIP: The union type is used when you are not sure of the type of data that will come in. thus instead of using "Any", you use "Union"...Union is highly recommended for situations like this, its a combination of two or more data types

import { type } from "os";

let score: number | string = 33;

score = 45;
score = "60";

console.log(score);

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

// combining them with Union
let mars: User | Admin = { name: "mars", id: 2020 };

mars = { username: "ifeanyi", id: 2020 };

function getDbId(id: number | string) {
  //making some API calls
  console.log(`DB id is:${id}`);
}
getDbId(3);
getDbId("3");

//Hint: the getDbId function above works however the problem is that you might not be able to do manipulations

function getDbId2(id: number | string) {
  id.toUpperCase();
} // This will give you an error if you want to manipulate the function... To solve this we can use the "if" condition to make sure the type is Ok

function getDbId3(id: number | string) {
  if (typeof id === "string") {
    id.toLowerCase();
  }
}

// Arrays

const data: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];

// Hint: In using Union for arrays, you can only specify one type of varies...
const data3: string[] | number[] = ["1", "2", 3]; // this will give an error.

const data4: string[] | number[] = ["1", "2", "3"];

//But if you truly want to combine both, then use the syntax below by wrapping them in bracket
const data5: (string | number)[] = ["1", "2", 3];

const data6: (string | number | boolean)[] = ["1", "2", 3, true];
