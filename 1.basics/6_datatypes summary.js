/* JavaScript is dynamically typed. This means that variables in JavaScript can hold values of any type, and the type of a variable can change over time as the program runs. JavaScript does not require you to explicitly declare the type of a variable, and the type of a variable is determined at runtime based on the type of value it currently holds. This dynamic typing allows for flexibility but also requires careful attention to type conversions and potential type-related errors. */

//Primitive = number, string, boolean, null, undefined, bigint, symbol
const score = 190;
const scoreView = 100.3;

const isLoggedIn = true;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const Anotherid = Symbol("123");
console.log(id === Anotherid);

// const bigNumber = 354136316854545132;
const bigNumber1 = 354136316854545132n;

//Reference (Non primitive)= array, object, functions
const heroes = ["shaktimaan", "naagraj", "doga"];
let myObj = {
  name: "Manoj",
  age: 22,
};

const myfunction = function(){
    console.log("Manoj");
}

console.table([
    { variable: 'score', type: typeof score },
    { variable: 'isLoggedIn', type: typeof isLoggedIn },
    { variable: 'outsideTemp', type: typeof outsideTemp },
    { variable: 'id', type: typeof id },
    { variable: 'bignumber1', type: typeof bignumber1 },
    { variable: 'heroes', type: typeof heroes },
    { variable: 'myObj', type: typeof myObj },
    { variable: 'myfunction', type: typeof myfunction }
]);
// console.table([
//     { variable: 'score', type: typeof score },//number
//     { variable: 'isLoggedIn', type: typeof isLoggedIn },//boolean
//     { variable: 'outsideTemp', type: typeof outsideTemp },//object
//     { variable: 'id', type: typeof id },//symbol
//     { variable: 'bignumber1', type: typeof bignumber1 },//undefined
//     { variable: 'heroes', type: typeof heroes },//object
//     { variable: 'myObj', type: typeof myObj },//object
//     { variable: 'myfunction', type: typeof myfunction //function}
// ]);




