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
// console.log(loginUserMsg("Sriya"));

function calculateCartPrice(...num1) {
  //rest operator
  return num1;
}

// console.log(calculateCartPrice(200,300,400,20));

const user = {
  username: "manoj",
  price: 199,
};

function handleObject(anyobject) {
  console.log(
    `username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
// handleObject({
//   username: "Manisha",
//   price: 299,
// });

const newArr = [200, 400, 2000.5];

function returnSecondValue(anyArray) {
  return anyArray[1];
}
// console.log(returnSecondValue(newArr));
// console.log(returnSecondValue([1,2,3,4,5,65]));


