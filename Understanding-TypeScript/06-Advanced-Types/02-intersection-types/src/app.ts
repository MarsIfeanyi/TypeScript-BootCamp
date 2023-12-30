/***
 * INTERSECTION TYPES
 *
 * Intersection Types allow us to combine other types.
 * The intersection operator can be used with any type.
 *
 *  We create intersection by using the ampersand (&).
 */

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {}

// Creating intersection between Admin and Employee... Here the intersection will be the combinations of the objects properties.
type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

// Creating Intersection between Combinable and Numeric... Here the intersection will be what they have in common
type Universal = Combinable & Numeric;
