const userEmail = ["Manoj@xyz.com"];

// if (userEmail) {
//     console.log("Got user email");      
// } else {
//     console.log("DOnt have user email...");
// }

//falsy values
//false, 0, -0, 0n, "", null, undefined, NaN

//truthy values
//"0", 'false', " ", [], {}, function(){}, ...

if(userEmail.length){
    console.log("Array is empty");
}

const emptyObj = {};

if(Object.keys(emptyObj)){
    console.log("Object is empty");
}

//nullish coalescing operator(??) = null or undefined

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 15;
// console.log(val1);

//ternary operator
// condition ? true : false;
// const iceteaPrice = 100;
// iceteaPrice >= 80 ? console.log("> than 80") : console.log("< than 80");