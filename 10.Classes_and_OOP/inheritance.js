class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`New course was added by ${this.username}`);
  }
}

const manoj = new Teacher("manoj", "manoj@mama.com", "12345");
manoj.addCourse();

const manisha = new User("manisha");
manisha.logMe();

console.log(manoj instanceof Teacher);
console.log(manisha instanceof Teacher);
