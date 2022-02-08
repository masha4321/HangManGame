let randomNumber = 0;
let wordChosen = "";
let hint = "";

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
for (let i = 0; i<10; i++) {
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

randomWordGenerator();
hintGenerator();
document.getElementById("hintBtn").addEventListener("click",displayHint);

}

/*Glen's Section Start */

function randomWordGenerator() {
  let wordDatabase = ["automation", "Strawberry", "Friendship", "Everything", "Appreciate", "Ubiquitous", "Motivation", "Vaccinated", "Obediently", "Earthbound"]
  randomNumber = Math.floor(Math.random() * 10) + 1;
  wordChosen = wordDatabase[randomNumber-1]
  console.log(wordChosen)
}

function hintGenerator() {
  switch(randomNumber) {
    case 1:
      hint = "Mechanical Process"
      break;
    case 2:
      hint = "Fruit";
      break;
    case 3: 
      hint= "Relationship Status"
      break;
    case 4:
      hint = "Ubiquitous"
      break;
    case 5: 
      hint= "When you value something"
      break;
    case 6: 
      hint = "Everywhere"
      break;
    case 7: 
      hint = "The only way to get out of bed in the morning"
      break;
    case 8: 
      hint = "Major global contempary issue"
      break;
    case 9: 
      hint = "Without protesting";
      break;
    case 10:
      hint = "From the moon to the earth"
      break;
  }
  
}
/* Glen's Section End*/

function displayHint(){
  document.getElementById("hintText").innerHTML += hint;
  document.getElementById("hintBtn").disabled = true;
}


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
else //(guessWord == generatedWord){ // we can also use if guessWord != blank
    gameScore.innerHTML = "Congratulations, you have won!"
    btnREPLAY.style.visibility = "visible";

