/* Math
var Math: Math
An intrinsic (Inherit or Inborn) object that provides basic
mathematics functionality and constants. */

let x;
let y;
let z;
let maximum;
let minimum;
x = 3.14;
y = -15.22;
z = 34.3;

maximum = Math.max(x, y, z);
minimum = Math.min(x, y, z);

x = Math.round(x) // to the the whole number you must round the given value.
x = Math.floor(x) // floor is for round down.
x = Math.ceil(x) // for round up.
x = Math.pow(x, 3) // to raise the given number, you give a base and an exponen each separated with a comma.
x = Math.sqrt(x) // to get the square root.
x = Math.abs(y) // to make negative number into positive.

console.log(x);
console.log(y);
console.log(maximum);
console.log(minimum);