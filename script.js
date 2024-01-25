function togglediv(divid){
  var div = document.getElementById(divid);
  if (div.style.display === "none"){
    div.style.display = "block";
  }
  else {
    div.style.display = "none";
  }
}
function puzzleb(){
  let userInput = prompt("What does the puzzle do?");
  if (userInput === "It gets the player's name") {
    alert("Congratulations, you solved the puzzle!");
  } else {
    alert("Try again!");
  }
}

function puzzlei(){
  let userInput = prompt("What does the puzzle do?");
  if (userInput === "It prints a number 1 through 10") {
    alert("Congratulations, you solved the puzzle!");
  } else {
    alert("Try again!");
  }
}

function puzzled(){
  let userInput = prompt("What does the puzzle do?");
  if (userInput === "It checks to see if the player wants to see the time and tells the time") {
    alert("Congratulations, you solved the puzzle!");
  } else {
    alert("Try again!");
  }
}
