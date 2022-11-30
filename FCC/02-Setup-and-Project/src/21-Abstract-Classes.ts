abstract class TakePhoto2 {
  constructor(public cameraMode: string, public filter: string) {}

  //if you want to add a method to an abstract class then you must mark it as abstract as well
  abstract getSepia(): void;

  getReelTime(): number {
    //some complex calculation
    return 8;
  } //Hint: since the getReelTime is not marked as abstract then it is not compulsory in the child class
}

//Hint: when you declare a class as abstract then no new object can be created from the parent class, However you can create an object from the child class

//const notAllow = new TakePhoto("test", "Test");You cannot create an instance of an abstract class

class Instagram2 extends TakePhoto2 {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
    //Hint: You implement any logic you want inside this method
  }
}

const notAllow = new Instagram2("test", "Test", 2020);

notAllow.getReelTime();

//Hint: Abstract classes cannot create objects on their own, but they help to define the classes who are inheriting them... Also if you want to put some methods compulsory needs to be there in the child class, then make the method abstract as well
