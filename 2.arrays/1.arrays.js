const myArr = [1, 2, 3, 4, 5];
const myHeroes = ["shaktimaan", "veer"];

const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

//Methods
// myArr.push(6,7);
// console.log(myArr);

// myArr.pop();
// console.log(myArr);

// myArr.unshift(0);
// console.log(myArr);

// myArr.shift(0);
// console.log(myArr);

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(6));

// const newArr = myArr.join();
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice
console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log("sliced:",myn1);
console.log("B", myArr);
console.log("\n");
console.log("A", myArr);

const myn2 = myArr.splice(1, 3);

console.log("spliced:",myn2);
console.log("B", myArr);

