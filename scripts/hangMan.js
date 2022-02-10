let nbOfLives = 9;
let randomNumber = 0;
let emojiCount = 0
let wordChosen = "";
let hint = "";
let lettersUsed = [];
let alphabet = [];

//Play Btn
$(document).ready(function () {
  $(".playBtn").click(function () {
    $(".center").fadeOut();
    $(".hintBox").removeAttr("hidden");
    $("#livesText").removeAttr("hidden");
    $("header").removeAttr("hidden");
    playGame()
  });
});


function playGame() {

  //hide replay button
  btnREPLAY.style.display = "none";
  
  // NB of lives - GOES IN SWETUP
  let gameScore = document.getElementById("livesText").innerHTML = "You have " + nbOfLives + " lives left";

  //Figure to Display Box
  let displayBox = document.getElementById("imgBox");
  displayBox.style.display = "block";

  //Blank Spaces
  let wordBox = document.getElementById("blanks")
  wordBox.style.margin = "35px 0px 50px 0px";
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.style.backgroundColor = "#bbbbb8";
    li.style.color="black";
    li.appendChild(document.createTextNode("_"));
    wordBox.append(li);
  }

  //Alphabet
  alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let ul = document.getElementById("letters");

  for (let i = 0; i < alphabet.length; i++) {
    let letter = alphabet[i];
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(letter));
    ul.appendChild(li);
  }

  randomWordGenerator();
  hintGenerator();

  //Adds an event listener on each letter of the alphabet
  let lettersDisplayed = document.querySelectorAll("#letters li");
  for (let i = 0; i < alphabet.length; i++) {
    lettersDisplayed[i].addEventListener("click", checkLetter);
  }

  //Adds event listen on hint button
  document.getElementById("hintBtn").addEventListener("click", displayHint);
}

function randomWordGenerator() {
  let wordDatabase = ["automation", "strawberry", "friendship", "everything", "appreciate", "ubiquitous", "motivation", "vaccinated", "obediently", "earthbound"]
  randomNumber = Math.floor(Math.random() * 10) + 1;
  wordChosen = wordDatabase[randomNumber - 1]
  console.log(wordChosen)
}

function hintGenerator() {
  switch (randomNumber) {
    case 1:
      hint = "Mechanical Process"
      break;
    case 2:
      hint = "Fruit";
      break;
    case 3:
      hint = "Relationship Status"
      break;
    case 4:
      hint = "Ubiquitous"
      break;
    case 5:
      hint = "When you value something"
      break;
    case 6:
      hint = "All inclusive"
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

function checkLetter() {
  $(this).css("background","#bbbbb8").css("color", "black");
  let chosenLetter = this.innerHTML;
  let wordHolder = document.getElementById("blanks").querySelectorAll("li");
  gameScore = document.getElementById("livesText");
  let letterFound = false;

  for (i = 0; i < wordChosen.length; i++) {
    if (chosenLetter == wordChosen[i]) {
      wordHolder[i].innerHTML = chosenLetter;
      letterFound = true;
    }
  }

  if ( !letterFound && !lettersUsed.includes(chosenLetter) ) {
    nbOfLives--;
    lettersUsed.push(chosenLetter);
    document.querySelectorAll("#imgBox img")[emojiCount].style.visibility="hidden";
    emojiCount++
  }
  gameScore.innerHTML = "You have " + nbOfLives + " lives left";
  checkLives();
}

function checkLives() {
  let winCondition = true;

  for (i = 0; i < wordChosen.length; i++) {
    if (document.getElementById("blanks").querySelectorAll("li")[i].innerHTML != wordChosen[i]) {
      winCondition = false
    }
  }

  if (nbOfLives <= 0) {
    document.getElementById("livesText").innerHTML = "Game Over. You have run out of lives, please play again!";
    document.getElementById("hintBtn").style.display="none"
    btnREPLAY.style.display = "block";
    btnREPLAY.style.margin = "50px auto";

    
    for (let i = 0; i < alphabet.length; i++) {
      document.querySelectorAll("#letters li")[i].removeEventListener("click", checkLetter)
    }
  }

  if (nbOfLives != 0 && winCondition) {
    document.getElementById("livesText").innerHTML = "Congratulations, you have won!"
    document.getElementById("hintBtn").style.display="none"
    btnREPLAY.style.display = "block";
    btnREPLAY.style.margin = "50px auto";

    for (let i = 0; i < alphabet.length; i++) {
      document.querySelectorAll("#letters li")[i].removeEventListener("click", checkLetter)
    }
  }
}

function displayHint() {
  document.getElementById("hintText").innerHTML += hint;
  document.getElementById("hintBtn").disabled = true;
}

// reset game values(not complete, working on alphabet and the guess word as they repeat when "play again" is clicked)
function reset(){
  nbOfLives = 9;
  randomNumber = 0;
  wordChosen = "";
  hint = "";
  document.getElementById("letters").innerHTML = "";
  document.getElementById("blanks").innerHTML = "";
  document.getElementById("hintText").innerHTML = " Hint : ";
  document.getElementById("hintBtn").disabled = false;
  document.getElementById("hintBtn").style.display="block";
  document.getElementById("hintBtn").style.margin="50px auto";
  
  for (i=0; i<9; i++){
    document.querySelectorAll("#imgBox img")[i].style.visibility="visible";
  }

  playGame();
}
/* we can also use
function reset(){
  location.reload()
if we need something workable rn
*/

// play again 
let gameHm = document.getElementById("buttons");

let btnREPLAY = document.createElement("button");
btnREPLAY.id = "btnReplay";
btnREPLAY.innerText = "Play Again";
btnREPLAY.onclick = reset;
gameHm.appendChild(btnREPLAY);
