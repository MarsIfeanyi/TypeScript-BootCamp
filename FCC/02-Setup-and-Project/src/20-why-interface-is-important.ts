// With interface you can define a general features and thus anyone that wants to use the interface must implement all the features you defined in the interface

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

interface Story {
  createStory(): void;
}

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

class Youtube implements TakePhoto, Story {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number,
    public short: string
  ) {}

  createStory(): void {
    console.log("Story was created");
  }
}

//Hint: You must always implement everything defined in  the interface, then you can add your methods, properties or logics as well.
