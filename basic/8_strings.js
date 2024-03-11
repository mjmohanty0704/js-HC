const name = "Manoj";
const gameName = new String("Manoj");
//this way of declaring a string converts it into an object containing key value pairs of indices and values.
const repoCount = 50;

// console.log(gameName);
// console.log(gameName[1]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

// console.log(name+repoCount+"value");
// console.log(name,repoCount,"value");
// console.log(`hello my name is ${name} and my repo count is ${repoCount}.`);

const newStr = "     Manoj     ";
console.log(newStr);
console.log(newStr.trim());

const url = "https://www.google.com/manoj%20mohanty"
console.log(url.replace('%20','-'));

//try learning the methods from mdn