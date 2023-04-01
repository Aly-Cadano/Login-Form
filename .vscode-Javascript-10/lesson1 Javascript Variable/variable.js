// A variable is a container for storing data.
// A variable behaves as if it was the value that it contains.

//Two Steps:
// 1. Declaration (var, let, const)
// 2. Assignment (assignment-operator)

let fullname ="Bj Aloysious Cadano";  // string
let myAge = 20;  //number data types
let student = false; //boolean

console.log(fullname);
console.log(myAge);
console.log(student);

document.getElementById("p1").innerHTML = "My name is " + fullname;
document.getElementById("p2").innerHTML = "I am " + myAge + " years old";
document.getElementById("p3").innerHTML = "Enrolled: " + student;