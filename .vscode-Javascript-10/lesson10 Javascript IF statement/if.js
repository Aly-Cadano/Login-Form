let average;


 document.getElementById("mybutton").onclick =function(){

    average = document.getElementById("mytext").value;

    document.getElementById("mytext").innerHTML = average;
    console.log(average);

    if(average >= 97){
      console.log("You are a summa cumlaude")
    }
    
    else if(average >= 94){
      console.log("You are a magna cumlaude")
    }
    else
      console.log("You are a cumlaude");

 }