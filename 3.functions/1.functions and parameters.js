function myName() {
  console.log("M");
  console.log("a");
  console.log("n");
  console.log("o");
  console.log("j");
}

// myName();

// function add2nos(num1, num2) {//parameters are used in function definition
//   console.log(num1 + num2);
// }

function add2nos(num1, num2) {
  //parameters are used in function definition
  return num1 + num2;
}

const res = add2nos(3, 4); //arguments are used in function call
// console.log(res);

function loginUserMsg(username = "Manoj") {
  // if (username === undefined)
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in!`;
}

// console.log(loginUserMsg("Manoj"));
console.log(loginUserMsg("Sriya"));
