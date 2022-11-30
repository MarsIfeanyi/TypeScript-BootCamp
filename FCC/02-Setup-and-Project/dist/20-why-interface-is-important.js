"use strict";
//With interface you can define a general features and thus anyone that wants to use the interface must implement all the features you defined in the interface
class Instagram {
    constructor(cameraMode, filter, burst) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
    }
}
class Youtube {
    constructor(cameraMode, filter, burst, short) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burst = burst;
        this.short = short;
    }
    createStory() {
        console.log("Story was created");
    }
}
//Hint: You must always implement everything defined in  the interface, then you can add your methods, properties or logics as well.
