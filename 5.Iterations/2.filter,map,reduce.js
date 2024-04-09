// const coding = ["js","ruby","java","python","cpp"];

// let values = coding.forEach((item) => {
//     // console.log(item);
//     return item;
// })

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNums.filter((nums) => nums > 4);
// const newNums1 = myNums.filter((nums) => {
//   return nums > 4;
// });

// it should be noted and remembered that whenever we are opening the scope block then the return keyword should be used.

// console.log(newNums);
// console.log(newNums1);

// const newNums2 = [];
// myNums.forEach((num) => {
//   if (num > 6) {
//     newNums2.push(num);
//   }
// });
// console.log(newNums2);

// map
// const mapnums = myNums
//   .map((num) => num * 10)
//   .map((num) => num + 1)
//   .filter((nums) => nums > 40);
// console.log(mapnums);

// reduce
const mytotal = myNums.reduce((acc, curval) =>acc + curval, 0);
console.log(mytotal);
