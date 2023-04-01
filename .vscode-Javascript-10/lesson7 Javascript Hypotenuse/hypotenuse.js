let a;
let b;
let c;

/*
a = window.prompt("Enter side A")
a = Number(a);

b = window.prompt("Enter side B")
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c)

console.log("Side C: ",c)
*/

// advance javascript function to get the hypotenuse.

document.getElementById("submitButton").onclick = function(){

  a = document.getElementById("Atextbox").value;
  a = Number(a);

  b = document.getElementById("Btextbox").value;
  b = Number(b);

  c = Math.pow(a , 2) + Math.pow(b, 2);
  c = Math.sqrt(c);

  document.getElementById("myp").innerHTML = "Side C: " + c;
}