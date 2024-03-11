const score = 323;
// console.log(score);

const balance = new Number(100.123456);
// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(3));

let otherNumber = 23.876;
// console.log(otherNumber.toPrecision(3));

otherNumber = 123.876;
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000;
// console.log(hundreds.toLocaleString('en-IN'));

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);

// ******************* Maths ********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.35));
// console.log(Math.floor(4.35));
// console.log(Math.ceil(4.35));
// console.log(Math.sqrt(400));
// console.log(Math.min(400, 30, 450));
// console.log(Math.max(400, 30, 450));

// console.log(Math.floor(Math.random() * 2) + 1);

const max = 20;
const min = 10;
//to get random numbers b/w max and min
console.log(Math.floor(Math.random() * (max - min)) + min + 1 );
