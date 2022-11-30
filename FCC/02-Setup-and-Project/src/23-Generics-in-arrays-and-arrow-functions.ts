//generics in Array
function getSearchProducts<T>(products: T[]): T {
  // do some database operations

  const myIndex = 3;
  return products[myIndex];
}

//Generics in arrow function

const getSearchProducts2 = <T>(products: T[]): T => {
  // do some database operations

  const myIndex = 4;
  return products[myIndex];
};

//Hint: You might see <T,> in some peoples codebase. The comma tells that this is generics and not just an ordinary type
