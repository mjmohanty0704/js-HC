// let myName = "Manoj       ";

// console.log(myName.trim().length);
// console.log(myName.trueLength);

// let myHeroes = ["Spidey", "battie"];

// let heroPower = {
//   battie: "money",
//   spidey: "web-shooters",

//   getSpiderPower: () => {
//     console.log(`Spidey power is ${this.spidey}`);
//   },
// };

// Object.prototype.manoj = function () {
//   console.log("Manoj is present in all objects!!!");
// };

// Array.prototype.heyManoj = function () {
//   console.log("Hello ji Hello!!!");
// };
// // heroPower.manoj();
// myHeroes.heyManoj();
// // heroPower.heyManoj();

// Inheritance

const user = {
  name: "Mannie",
  email: "mannie@email.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: true,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = user;

// Modern sytax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUserName = "Manoj Mohanty   ";

String.prototype.trueLength = function() {
  console.log(`${this}`);
  console.log(`${this.length}`);
  console.log(`True length is ${this.trim().length}`);
};

anotherUserName.trueLength();
"   Manoj".length;
"   Manoj".trueLength();

"Manoj  ".length;
"Manoj  ".trueLength();
