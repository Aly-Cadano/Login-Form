// useful string properties and methods

//let username = "   Bj Aloysious Cadano ";

//username.length; to count the letter of the string
//let myname = username.charAt(1); to find the letter of the index number.
//myname = username.indexOf("j"); to find the index number of an input letter
//myname = username.lastIndexOf("a"); to find the last last index number of an input letter
//myname = username.trim(); to rid the space between the index of a quote
//myname = username.toUppercase(); to make all the letter  bigger
//myname = username.toLowercase(); to make all the letter small
//console.log(myname);

//let phoneNumber ="123-456-789";

//string method that has an arguements.
//let myNumber =phoneNumber.replaceAll("-", "");

//console.log(myNumber);

/*Slice() extracts a section of a string and 
returns it as anew string, 
without modifying the original string */

let fullname ="Bj Bacsal";
let firstname;
let lastname;

firstname = fullname.slice(0, fullname.indexOf(" "));
lastname = fullname.slice(fullname.indexOf(" ") + 1);
console.log(firstname);
console.log(lastname);