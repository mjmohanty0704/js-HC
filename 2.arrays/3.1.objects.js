// const tinderUser = new Object();
const tinderUser = {};
// console.log(tinderUser);

tinderUser.id = "123abc";
tinderUser.name = "Mannie";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

// const regularUser = {
//   email: "abc@xyz.com",
//   fullName: {
//     salutation: "Mr.",
//     userfullname: {
//       fname: "Manoj",
//       lname: "Mohanty",
//     },
//   },
// };

// console.log(regularUser);
// console.log(regularUser.fullName.salutation,regularUser.fullName.userfullname.fname,regularUser.fullName.userfullname.lname);

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// const obj3 = { 5: "e", 6: "f" };

// const obj3 = {obj1,obj2};

// const obj3 = Object.assign(obj1, obj2);
// const obj4 = Object.assign({}, obj1, obj2, obj3);// Object.assign(target,source)

// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4);

console.log(`Keys: ${Object.keys(tinderUser)}`);
console.log(`Values: ${Object.values(tinderUser)}`);
// console.log(`Entries: ${Object.entries(tinderUser)}`);
console.log(Object.entries(tinderUser)[1]);
console.log(tinderUser.hasOwnProperty("isLoggedIn"));
