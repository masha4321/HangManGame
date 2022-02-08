//Play Btn
$(document).ready(function () {
  $(".playBtn").click(function () {
    $(".center").fadeOut();
    $(".hintBox").removeAttr("hidden");
    playGame();
  });
});
//End of Play Btn

function playGame() {

let displayBox = document.getElementById("imgBox");
displayBox.style.display="block";

//Word to Guess
let wordBox = document.getElementById("boxes")
wordBox.style.padding = "50px";
for (let i = 0; i<7; i++) {
  let li=document.createElement("li");
  li.style.backgroundColor="grey";
  li.appendChild(document.createTextNode("_"));
  wordBox.append(li);
}


//Alphabet
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let ul = document.getElementById("letters");

for (let i = 0; i < alphabet.length; i++) {
  let letter = alphabet[i];
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(letter));
  ul.appendChild(li);
}
//End of Alphabet
}

// Glen's Section Start
let generatedWord; 

function hintCategory(){

  // generatedWord = theWord[Math.floor((Math.random() * theWord.length) )];
  generatedWord = Math.floor((Math.random() * 9) )

  switch( generatedWord ){
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
          displayHint("Insert Hint #1 Here");
          break;
      case 5:
      case 6:
      case 7:
      case 8:
      case 9:
          displayHint("Insert Hint #2 Here");
          break;
  }
  document.getElementById("hintBtn").disabled = true;
}

function displayHint(clue){
  document.getElementById("hintText").innerHTML += clue; 
  console.log("Chosen Word: " + generatedWord);
}
// Event Listener
document.getElementById("hintBtn").addEventListener("click",hintCategory);

// Glen's Section End


// play again + won/lost - some code is commented as i was not sure of 
// the elements names we will use
let gameHm = document.getElementById("insertElemName");

//create button to play again ( gamefunction will reset game values)
let btnREPLAY = document.createElement("button");
btnREPLAY.innerText = "Play Again";
btnREPLAY.style.visibility = "hidden";
btnREPLAY.onclick = //gamefunction//;
gameHm.appendChild(btnREPLAY);

// won/lost - will have to include it in the game script
let gameScore = document.getElementById("scoreElem")
if (tries == maxtries) {
    gameScore.innerHTML = "Game Over. You have run out of tries, please play again!";
    btnREPLAY.style.visibility = "visible";   
}
else if //(guessWord == generatedWord){ // we can also use if guessWord != blank
    gameScore.innerHTML = "Congratulations, you have won!"
    btnREPLAY.style.visibility = "visible";
}
