//Hint: Private is only accessible with the class

// By default typescript marks the properties as public... public are accessible anywhere

class User2 {
  public email: string;
  private name: string;
  readonly city: string = "Wall Street";
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

//Creating object from the class
const mars2 = new User2("mars@g.com", "Charles");

//The shorter way of writing the above code... This remove the constructor initialization with "this" keyword

class User3 {
  readonly city: string = "Wall Street";
  constructor(
    public email: string,
    public name: string,
    private userId: string
  ) {}
}

//Creating object from the class
const mars3 = new User3("mars@g.com", "Charles", "2020");
