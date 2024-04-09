// for

// for (let i = 0; i < 10; i++) {
//   const element = i;
//   if (element == 5) {
//     console.log("5 is best number");
//   }
//   console.log(i + 1);
// }

// for (let i = 21; i <= 25; i++) {
//   console.log("Outer loop value", i);
//   for (let j = 1; j <= 10; j++) {
//     // console.log("\tInner loop value",j);
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

let myArray = ["Flash", "Batman", "Superman"];

// for (let index = 0; index < myArray.length; index++) {
//   console.log(myArray[index]);
// }

// break and continue

// for (let index = 1; index <= 20; index++) {
//     if(index == 5){
//         // console.log("Detected 5!");
//         continue;
//     }
//     console.log(index);
// }

// while and do while

// let index = 0;
// while (index <= 10) {
//   console.log(index);
//   index += 2;
// }

// let arr = 0;
// while (arr < myArray.length) {
//     console.log(myArray[arr++]);
// }

// let score = 0;

// do {
//   console.log(`Score is ${score}`);
//   score+=3;
// } while (score <= 10);

// for of
// for (const heros of myArray) {
//     console.log(heros);
// }

// const greetings = "Hello Manoj!!";

// for (const char of greetings) {
//     console.log(char);
// }

// map
const map = new Map();
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('FR',"France")

// console.log(map);

// for(const[key,value] of map){
//     console.log(key,":-",value);
// }

// for (const key in map) {
//     console.log(key,":-",value);    
// }

// for each

const coding = ["js","ruby","java","python","cpp"];
// coding.forEach(element => {
//     console.log(element);
// });

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    {
        languageName : "c++",
        languageFileName : "cpp"
    },
]

myCoding.forEach(language => {
    console.log(language.languageName,language.languageFileName);
})