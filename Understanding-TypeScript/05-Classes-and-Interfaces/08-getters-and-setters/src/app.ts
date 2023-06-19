/**
 * GETTERS AND SETTERS
 *
 *  A Getter is a property where you execute the function or method when you retrieve a value... You create a "getter" by using the "get" keyword and then the name(name of your choice... your naming should be related to the property you want to "get") of the method. Getter must have a return statement... Also in your "getter" method or function, you can add more complex logic.
 *
 * You use the "set" keyword to define a "setter" function or method.
 *
 * Hint: Setters /takes in parameter but Getter do not take in parameter
 *
 * VIP: Getters and Setters can be great for encapsulating logic and for adding extra logic that should run when you try to read a property or when you try to set a property
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
  private lastReport: string;

  // Creating a Getter Method
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  // Creating a Setter Method
  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Mars") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
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

// Calling the Setter Method
accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");

// Calling the Getter method
const recentReport = accounting.mostRecentReport;
console.log(recentReport);

accounting.addEmployee("Mars");
accounting.addEmployee("Ifeanyi");

accounting.printReports();
accounting.printEmployeeInformation();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
