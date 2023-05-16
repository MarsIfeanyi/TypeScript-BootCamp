/***
 * PUBLIC AND PRIVATE ACCESS MODIFIERS
 *
 * Hint: Besides "properties", you can also mark methods as private... By default all methods and properties are "public"
 *
 * Public Properties and Methods are accessible from outside the class.
 *
 * Private Properties and Methods are not accessible from outside the class.
 *
 * JavaScript Private and Public fields
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
 *
 */

class Department {
  public name: string;
  private employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
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

const accounting = new Department("Accounting");

accounting.addEmployee("Mars");
accounting.addEmployee("Ifeanyi");

// accounting.employees[2] = 'Anna';

accounting.describe();
accounting.name = "NEW NAME";
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
