/**
 * SHORTHAND INITIALIZATION
 */

class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  //Hint: Using the shorthand initialization, we passed the properties along with its type and modifiers as parameters to the constructor function.
  constructor(private id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting");

accounting.addEmployee("Mars");
accounting.addEmployee("Ifeanyi");

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
