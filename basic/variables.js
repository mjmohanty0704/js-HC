const accountId = 144553;
let accountEmail = "saimanoj@gmail.com";
var accountPass = "12345";
accountCity = "Badmal";

let accountState;

// accountId = 2; //not allowed
accountEmail = "abc@xyz";
accountPass = "212121";
accountCity = "RGDA";
console.log(accountId);
accountState = "Odisha";
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPass,accountCity,accountState]);
console.table(accountState);


