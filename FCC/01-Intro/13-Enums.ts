// Enums exist when you want to restrict somebody's choice to the value you offered... The whole idea behind enums is how to restrict the user's choice.

//Hint: When you define an enum the first value get "0" by default, however you can provide starting values to overwrite

const enum seatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
  FOURTH,
}

const hcSeat = seatChoice.AISLE;

//overwriting the default value

const enum seatChoice2 {
  AISLE2 = 10,
  MIDDLE2 = 22,
  WINDOW2,
  FOURTH2,
}

const enum seatChoice3 {
  AISLE3 = "aisle",
  MIDDLE3 = 22,
  WINDOW3,
  FOURTH3 = "mars",
}
