// let c = 300;
// let a = 200;

if (true) {
  let a = 10;
  const b = 20;
  //   var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const userName = "Manoj";
  function two() {
    const website = "YouTube";
    console.log(userName);
  }
  // console.log(website);

  two();
}
// one();

if (true) {
  const userName = "mannie";
  if (userName === "mannie") {
    const website = " youthub";
    // console.log(userName + website);
  }
  //   console.log(website);
}

// console.log(userName);

// ******************* Interesting ************************

console.log(addone(5));//here the function call will be successfully executed. This is known as hoisting
function addone(value) {
  return value + 1;
}

// console.log(addtwo(6));//here the function call will give error because here the call is stored inside of a variable and variables cant be called before initialisation.
const addtwo = function (num) {
  return num + 2;
};
