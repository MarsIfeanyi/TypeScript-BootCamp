//Hint: interfaces are like classes

interface iUser {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
}

const mars: iUser = { dbId: 2020, email: "mars@gmail.com", userId: 2211 };

//Hint: You can also defined function inside the interface ie method

interface iUser2 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail: () => string;
}

const mars2: iUser2 = {
  dbId: 2020,
  email: "mars@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started ";
  },
};

//Another way of writing the method

interface iUser3 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
}

const mars3: iUser3 = {
  dbId: 2020,
  email: "mars@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started ";
  },
};

interface iUser4 {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  startTrail(): string;
  getCoupon(couponName: string, value: number): number;
}

const mars4: iUser4 = {
  dbId: 2020,
  email: "mars@gmail.com",
  userId: 2211,
  startTrail: () => {
    return "trail started ";
  },
  getCoupon: (name: "zedDiscout", off: 20) => {
    return 20;
  },
};
