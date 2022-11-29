import { type } from "os";

type User = {
  readonly _id: string; //READONLY
  name: string;
  email: string;
  isActive: boolean;
  credCardDetails?: number; // Optional
}; //Hint: the readonly keyword ensures that someone can only read the value but can't write or change it... The Optional here ensure that if a user didn't provide credCardDetails, the user will still be allowed

let myUser: User = {
  _id: "12345",
  name: "m",
  email: "m@gmail.com",
  isActive: false,
};

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  cardDate: string;
};

// Mix and Matching of types...Here you are defining a new type based on the combination of previous two types
type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };
