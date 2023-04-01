//let todo1;
//let todo2;
//let todo3;

//todo1 =  "Get groceries";
//todo2 = "Wash car";
//todo3 = "Make dinner";

/* 1.) Change the value of the todo1 variable to a number (e.g 99)
and run typeof todo1.
what is the type? */
//Coding/Answer

let todo1 = 93;

console.log(typeof(todo1));

/* 2.) Create 3 variables: month, dayOfMonth, year. Use these variables to console.log
today's date in one line in this format: "February 15, 2023" */

let month = "February";
let dayOfMonth = 23;
let year = 2023;

console.log(month + " " + dayOfMonth + " " +year);

/* 3.) Save the result of 4 + 5 * 3 in a variable and console.log the result.
Do the same with the result of (4 + 5) * 3. Notice the rules of the math are the same in programming
(brackets first, then multiply, then add). */

let firstN = 4;
let secondN = 5;
let thirdN = 3;

result = firstN + secondN * thirdN;

console.log("This is the result:",result);

result = (firstN + secondN) * thirdN;

console.log("This is the result:", result);

/* 4.) Create a variable that saves your age (e.g let age = 25;)
Create another variable: let message = "I am "+ age + "years old";
what is the type of the message variable? = string */

let age = 20;

let message = "I am "+ age +" years old";
console.log(typeof(message));