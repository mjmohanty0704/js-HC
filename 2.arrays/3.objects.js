//singleton is created using constructors

//object literals

let mySym = Symbol("key1");
let JsUser = {
  name: "Manoj",
  "full Name": "Manoj Mohanty",
  [mySym]: "myKey1",
  age: 24,
  location: "BUDM",
  email: "manoj@gmail.com",
  loggedIn: false,
  lastLoginDays: ["Mon", "Wed"],
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);
// console.log(typeof [mySym]);

// JsUser.email = "abc@xtyz.com";
// Object.freeze(JsUser);
// JsUser.location = "Badmal";
// console.log(JsUser["location"]);
// JsUser.email = "abcd@chatgpt.com";
// console.log(JsUser);

// JsUser.greeting = function() {
//   console.log("Hello JSUser");
// }

// console.log(JsUser.greeting());

JsUser.greeting2 = function() {
    console.log(`Hello JS User: ${this.name}`);
}
console.log(JsUser["greeting2"]);
console.log(JsUser.greeting2());
