// >= ES6

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   capitalizeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const manoj = new User("manoj", "manoj@xyz.com", "12323");
// console.log(manoj.encryptPassword());
// console.log(manoj.capitalizeUsername());

//  behind the scenes working

function User(username, email, password) {
  this.username = username;
  this.password = password;
  this.email = email;
}

User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.capitalizeUsername = function () {
  return `${this.username.toUpperCase()}`;
};

const tea = new User("tea","tea@code.com","1223");

console.log(tea.encryptPassword());
console.log(tea.capitalizeUsername());
