function setUsername(username) {
  //   complex db calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, pswd) {
  setUsername.call(this,username);

  this.email = email;
  this.pswd = pswd;
}
const manoj = new createUser("Manoj", "manoj@gmail.com", 1234);
console.log(manoj);
