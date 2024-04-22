class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username : ${this.username}`);
  }

  static createId() {
    return `123`;
  }
}

const manoj = new User("manoj");
// manoj.logMe();
// console.log(manoj.createId());

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const mannie = new Teacher("mannie", "mannie@wqerw.com");
mannie.logMe();
console.log(mannie.createId());
