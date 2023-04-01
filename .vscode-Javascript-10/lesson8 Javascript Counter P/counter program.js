let count;

count = 0;

document.getElementById("decreaseBttn").onclick = function(){
  count -=1;

  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("resetBttn").onclick = function(){
  count =0;

  document.getElementById("myLabel").innerHTML = count;
}

document.getElementById("increaseBttn").onclick = function(){
  count +=5;

  document.getElementById("myLabel").innerHTML = count;
}