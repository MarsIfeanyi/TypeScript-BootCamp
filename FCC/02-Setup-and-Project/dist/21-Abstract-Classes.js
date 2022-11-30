"use strict";
class TakePhoto2 {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    getReelTime() {
        //some complex calculation
        return 8;
    } //Hint: since the getReelTime is not marked as abstract then it is not compulsory in the child class
}
//Hint: when you declare a class as abstract then no new object can be created from the parent class, However you can create an object from the child class
//const notAllow = new TakePhoto("test", "Test");You cannot create an instance of an abstract class
class Instagram2 extends TakePhoto2 {
    constructor(cameraMode, filter, burst) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Sepia");
        //Hint: You implement any logic you want inside this method
    }
}
const notAllow = new Instagram2("test", "Test", 2020);
notAllow.getReelTime();
//Hint: Abstract classes cannot create objects on their own, but they help to define the classes who are inheriting them... Also if you want to put some methods compulsory needs to be there in the child class, then make the method abstract as well
