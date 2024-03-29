/**
 * STATIC PROPERTIES AND METHODS, ABSTRACT CLASSES
 *
 * Static Properties and Methods allows you to add methods and properties to classes which you can easily directly on the class without instantiating the class... You access this properties and methods directly on the class... You call it directly on the class without the "new" keyword.
 *
 * Hint: You can't access static properties and method on Instances of the class and also you can't access them with the "this" keyword.
 *
 * ABSTRACT Classes/method do not have Implementation in the Base or parent class, but the child class/es inheriting them MUST fully implement them... Any class inheriting from the Parent class must implement all the abstract method/s defined in the parent class.
 *
 * VIP: Abstract can be very useful if you want to enforce that all classes based on some other class share some common methods or properties.
 *
 */

// Abstract Class
abstract class Department {
  static fiscalYear = 2020; // Static Property
  // private readonly id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
    // console.log(Department.fiscalYear);
  }

  // Creating a static method
  static createEmployee(name: string) {
    return { name: name };
  }

  // Creating an abstract method
  abstract describe(this: Department): void;

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

  describe() {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

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

  describe() {
    console.log("Accounting Department - ID: " + this.id);
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

// Accessing Static Method and Property
const employee1 = Department.createEmployee("Mars");
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment("d1", ["Mars"]);

it.addEmployee("Mars");
it.addEmployee("Ifeanyi");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "Year End Report";
accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Mars");
accounting.addEmployee("Ifeanyi");

// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
