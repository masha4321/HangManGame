let nbOfLives = 10;
let randomNumber = 0;
let wordChosen = "";
let hint = "";

//Play Btn
$(document).ready(function () {
  $(".playBtn").click(function () {
    $(".center").fadeOut();
    $(".hintBox").removeAttr("hidden");
    $("#livesText").removeAttr("hidden");
    playGame();
  });
});
//End of Play Btn

function playGame() {

  // NB of lives - GOES IN SWETUP
  let gameScore = document.getElementById("livesText").innerHTML = "You have " + nbOfLives + " left";

  //Figure to Display Box
  let displayBox = document.getElementById("imgBox");
  displayBox.style.display="block";

  //Blank Spaces
  let wordBox = document.getElementById("blanks")
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

  function checkLetter(){
    let chosenLetter = this.innerHTML;
    let wordHolder = wordBox.querySelectorAll("li");
    gameScore = document.getElementById("livesText");
    let letterFound = false;

    for( i = 0; i < wordChosen.length; i++ ){
      if( chosenLetter == wordChosen[i] ){
        wordHolder[i].innerHTML = chosenLetter;
        letterFound = true;
      }
    }

    if(!letterFound){
      nbOfLives--;
    }
    gameScore.innerHTML = "You have " + nbOfLives + " left";
    checkLives();
  }

  randomWordGenerator();
  hintGenerator();

  /*Added Event listener on each letter
  for (let i = 0; i < alphabet.length; i++ ) {
    document.querySelectorAll("#letters li")[i].addEventListener("click", missOrMatch)
  } */

  let lettersDisplayed = ul.querySelectorAll("li");
  for (let i = 0; i < alphabet.length; i++){
    lettersDisplayed[i].addEventListener("click", checkLetter);
  }
  document.getElementById("hintBtn").addEventListener("click",displayHint);
}

/*Glen's Section Start */
function checkLives(){
  let winCondition = true;

  for( i = 0; i < wordChosen.length; i++ ){
    if( document.getElementById("boxes").querySelectorAll("li")[i].innerHTML != wordChosen[i]){
      winCondition = false
    }
  }

  if (nbOfLives == 0) {
    document.getElementById("livesText").innerHTML = "Game Over. You have run out of lives, please play again!";
    btnREPLAY.style.visibility = "visible";   
  }
  if (nbOfLives != 0 && winCondition){
    document.getElementById("livesText").innerHTML = "Congratulations, you have won!"
    btnREPLAY.style.visibility = "visible";
  }
}

function randomWordGenerator() {
  let wordDatabase = ["automation", "strawberry", "friendship", "everything", "appreciate", "ubiquitous", "motivation", "vaccinated", "obediently", "earthbound"]
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

function displayHint(){
  document.getElementById("hintText").innerHTML += hint;
  document.getElementById("hintBtn").disabled = true;
}

// play again + won/lost - some code is commented as i was not sure of 
// the elements names we will use
let gameHm = document.getElementById("buttons");

//create button to play again ( gamefunction will reset game values)
let btnREPLAY = document.createElement("button");
btnREPLAY.id = "btnReplay";
btnREPLAY.innerText = "Play Again";
btnREPLAY.style.visibility = "hidden";
btnREPLAY.onclick = //gamefunction//;
gameHm.appendChild(btnREPLAY);


