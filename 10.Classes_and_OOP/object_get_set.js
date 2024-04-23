const User = {
  _email: "m@mm.com",
  _password: "abcde",

  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};

const mm = Object.create(User);
console.log(mm.email);
