/***
 * READONLY PROPERTIES
 *
 * The "readonly" keyword ensures that someone can only read the value but can't write or change it...
 */

class Department {
  // private readonly id: string;
  // private name: string;
  private employees: string[] = [];

  // Hint: Here we want the id to be private and also the id shouldn't change after initialization, thus we set it to "readonly"
  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
