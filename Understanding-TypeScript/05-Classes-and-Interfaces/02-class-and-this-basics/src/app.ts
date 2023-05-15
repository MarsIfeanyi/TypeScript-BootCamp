/**
 * CONSTRUCTOR FUNCTION AND THE "THIS" KEYWORD
 */

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // Hint: "this" was added as a parameter in the describe method and set to type "Department"
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { name: "DUMMY", describe: accounting.describe };

accountingCopy.describe();
