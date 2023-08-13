//Hint: type is a keyword in TS

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

// using the type...
function createUser(user: User): User {
  return { name: "", email: "", isActive: true };
}

createUser({ name: "", email: "", isActive: true });

//Hint:type Aliases helps you to just define a single type then use use it in your functions or anywhere more than once...That's the type you defined can be multi-used in functions...
