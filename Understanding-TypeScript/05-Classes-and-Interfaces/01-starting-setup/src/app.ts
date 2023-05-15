class Department {
  name: string;

  // Hint: The constructor method allows you to do initialization work for the object you are building
  constructor(n: string) {
    this.name = n;
  }
}

// INSTANTIATION => Creating an Object from the Class... Class Instance

const accounting = new Department("Accounting");
console.log(accounting);
