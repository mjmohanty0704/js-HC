class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }

  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }

  get password() {
    return `${this._password.toUpperCase()}manoj`;
  }
  set password(pass) {
    this._password = pass;
  }
}

const manoj = new User("Manoj@xyz.com", "12manoj321");
console.log(manoj.email);
console.log(manoj.password);
console.log(manoj._password);

