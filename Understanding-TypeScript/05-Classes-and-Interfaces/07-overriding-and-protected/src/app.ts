/***
 *
 * OVERRIDING PROPERTIES AND PROTECTED MODIFIER
 *
 *
 * Hint: Private properties defined inside the Parent class cannot be accessed in  the Child class... Thus to grant the Child class access and still make sure that the property, we can change it to "protected".
 *
 *
 * Hint: "protected" is accessible within the Parent class any in any other class that inherited from the parent class... However it is not accessible outside the parent or outside the child class.
 */

class Department {
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

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

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  // Override Property from the parent class
  addEmployee(name: string) {
    if (name === "Mars") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Mars"]);

it.addEmployee("Mars");
it.addEmployee("Ifeanyi");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.addReport("Something went wrong...");

accounting.addEmployee("Mars");
accounting.addEmployee("Ifeanyi");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
