// Various ways of defining an Array

import { type } from "os";

const superHeros: string[] = [];

const heroPower: number[] = [];

superHeros.push("spiderman");
heroPower.push(50);

const superHeros2: Array<string> = [];

const heroPower2: Array<number> = [];

superHeros2.push("spiderman");
heroPower2.push(50);

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];

allUsers.push({ name: "", isActive: true });
console.log(allUsers);

const MLmodels: number[][] = [[255, 255, 255], []];
