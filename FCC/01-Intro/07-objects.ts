const User = {
  name: "Mars",
  email: "mars@gmail.com",
  isActive: true,
};

//Hint: The use cases of object is through the functions ie you have to pass this objects through the functions or you have to return an object from the function... That's the most common use case of object

function createUser({ name: string, isPaid: boolean }) {}

// Calling/Invoking the function
createUser({ name: "mars", isPaid: false });

// When a function returns an object
function createCourse(): {} {
  return {};
}
createCourse();

function createCourse2(): { name: string; price: number } {
  return { name: "ReactJS", price: 500 };
}

// The ood behavior of objects...Here we defined two parameter but then we went ahead to pass in 3 parameters and TS, didn't catch it

function createUser3({ name: string, isPaid: boolean }) {
  let newUser = { name: "mars", isPaid: true, email: "mars@gmail.com" };
}

// createUser3(newUser);

export {};
