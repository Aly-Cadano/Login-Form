// How to accept user input.

//EASY WAY with a window prompt.

//let username =window.prompt("what is your name");
//console.log(username);

//DIFFICULT WAY HTML BOX.

let username;

document.getElementById("myButton").onclick = function(){

    username = document.getElementById("myText").value;
    console.log(username);
}


/* If you want to change the label text
first you will give the label an unique id like
id="myLabel"

document.getElementById("myLabel").innerHTML = username;
so here's the code
*/

let inputusername; 

document.getElementById("myButton").onclick = function(){

    inputusername = document.getElementById("myText").value;
    console.log(inputusername);

    document.getElementById("myLabel").innerHTML = "Your name is " + inputusername;
}

