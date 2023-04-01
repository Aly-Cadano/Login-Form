//Type Conversion = Change the datatype of a value to another (strings, numbers. booleans)
/*
let age = window.prompt("How old are you");

age +=1;

console.log(age);
*/
//To concatinate the datatypes we will use this method
/*
let age = window.prompt("How old are you");

age = Number(age);
age += 1;

console.log("You are ",age," years old.")
*/
//To get the type of the x we will use typeof x(variable)
let x = 2;

x = String(x);
x += 1;

console.log(x, typeof x);