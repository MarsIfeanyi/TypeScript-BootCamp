//Re-using an interface declared in another file or library...Hint:This is one nof the advantages of interface.
interface iUser4 {
  githubToken: string;
}

const mars5: iUser4 = {
  dbId: 2020,
  email: "mars@gmail.com",
  userId: 2211,
  githubToken: "githubPAT",
  startTrail: () => {
    return "trail started ";
  },
  getCoupon: (name: "zedDiscout", off: 20) => {
    return 20;
  },
};

//Another advantage of interface is inheritance
interface Admin extends iUser4 {
  role: "admin" | "ta" | "learner";
}

const Charles: Admin = {
  dbId: 2020,
  email: "mars@gmail.com",
  userId: 2211,
  role: "admin",
  githubToken: "githubPAT",
  startTrail: () => {
    return "trail started ";
  },
  getCoupon: (name: "zedDiscout", off: 20) => {
    return 20;
  },
};

//Hint: If you are naming your interface, make sure that library you have installed doesn't have the same name.
