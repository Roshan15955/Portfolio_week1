let prompt = require("prompt-sync")({ sigint: true });
//input any numbers by user 
let num1= parseInt(prompt("Enter First Number:"));
let num2= parseInt(prompt("Enter Second Number:"));
let num3= parseInt(prompt("Enter Third Number:"));

//Exercise-I Addition 
let sum= num1+num2;
console.log("The Sum of " +num1+ " and " +num2+ " is " +sum); 

//Exercise-II Subtraction 
let sub=num3-num1; 
console.log("The Subtraction of " +num3+ " and " +num1+ " is " +sub);

//Exercise-III multiplication 
let mul=num2*num3; 
console.log("The Multiplication of " +num2+ " and " +num3+ " is " +mul); 

//Exercise-IV Division 
let div=num3/num1; 
console.log("The Division of " +num3+ " and " +num1+ " is " +div); 