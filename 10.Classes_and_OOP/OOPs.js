const user = {
  username: "Manoj",
  logincount: 9,
  signedIn: true,
  getUserDetails: function () {
    console.log(`Username: ${this.username}`);
    console.log(this);
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise();
// const date = new Date();

function userDefinition(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

//   return this;
}

const userOne = new userDefinition("Manoj", 12, true);
const userTwo = new userDefinition("Mohanty Ji", 14, false);

console.log(userOne);
console.log(userTwo);
