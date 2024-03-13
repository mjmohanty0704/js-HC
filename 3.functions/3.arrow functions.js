const user = {
  username: "Manoj",
  price: 299,

  welcomeMsg: function () {
    console.log(`${this.username}, Welcome to website!`);
    console.log(this);
  },
};

// user.welcomeMsg()
// user.username = "Mannie"
// user.welcomeMsg()

// console.log(this);

// function chai(){
//     let username = "Manoj";
//     console.log(this.username);
// }

// const chai = () => {
//     let username = "Manoj"
//     console.log(this);
// };
// chai();

// const addtwonums = (num1, num2) => {
//   return num1 + num2;
// };
// const addtwonums = (num1, num2) => (num1 + num2);
const addtwonums = (num1, num2) => ({username:"Manoj"});

console.log(addtwonums(3,4));


