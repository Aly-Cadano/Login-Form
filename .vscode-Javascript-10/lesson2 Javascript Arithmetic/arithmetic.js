/* 
 arithmetic expression is a combination of 
 operands (values, variables, etc.)
 operators (+ - * / %)
 that can be evaluated to a value
 ex: y = x + 5;
*/

let students = 20; //population of students in a room

  students = students + 1; //ADDITION
  students = students - 1; // SUBTRACTION
  students = students * 2;  //MULTIPLICATION
  students = students / 2;  //DIVISION

console.log(students)

extrastudents = students % 3;
console.log(extrastudents)
/*
 We can use a method known as an 
 augmented assignment operator
its kind of like a shortcut
*/

// students += 5;

/*
    Operator Precedence
    1. Parenthesis ()
    2. Exponents
    3. Multiplication and Division
    4. Addition and Subtraction
*/
//example code / syntax

let result = 1 + 2 * (3+4);
console.log(result)
