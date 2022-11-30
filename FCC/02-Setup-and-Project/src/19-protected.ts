//Hint: protected is accessible within the Parent class any in any other class that inherited from the parent class... However it is not accessible outside the parent or outside the child class

class User5 {
  protected _courseCount = 1;

  readonly city: string = "Wall Street";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}

  // private method
  private deleteToken() {
    console.log("Token deleted");
  }

  // creating a getter function
  get getAppleEmail(): string {
    return `apple${this.email}`;
  }

  get courseCount(): number {
    return this._courseCount;
  }

  //Creating a setter function...Hint: a setter function does not return any value and thus you don't add any type to it.

  set courseCount(courseNum) {
    if (courseNum <= 1) {
      throw new Error("Course count should be more than 1 ");
    }
    this._courseCount = courseNum;
  } //Hint: The logic here is upto but the most important thing is that in setter function there is no "return type"
}

//Class Inheritance
class SubUser extends User5 {
  isFamily: boolean = true;
  changeCourseCount() {
    this._courseCount = 4;
  }
}

//Creating object from the class
const mars5 = new User5("mars@g.com", "Charles", "2020");
