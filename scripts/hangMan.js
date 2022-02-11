// Declare global variables to be used throughout game
let wordDatabase = ["automation", "strawberry", "friendship", "everything", "appreciate", "ubiquitous", "motivation", "vaccinated", "obediently", "earthbound"]
let wordCount=10;
let nbOfLives = 9;
let randomNumber = 0;
let emojiCount = 0
let wordChosen = "";
let hint = "";
let lettersUsed = [];
let alphabet = [];

//Play and Instruction Btns
$(document).ready(function () {

  //On play button click
  $(".playBtn").click(function () {
    $(".center").hide();
    $(".hintBox").removeAttr("hidden");
    $("#livesText").removeAttr("hidden");
    $("header").removeAttr("hidden");
    playGame();
  });

  //On instruction button click
  $(".instBtn").click(function () {
    $(".center").hide();
    instructions();
  })
});

//Instructions display
function instructions() {
  $("#instructions").show()
  $("#backBtn").show()

  $("#backBtn").click(function () {
    $("#instructions").hide()
    $("#backBtn").hide()
    $(".center").show()
  })
}

//Generates a new game
function playGame() {

  // NB of lives
  document.getElementById("livesText").innerHTML = "You have " + nbOfLives + " lives left";

  //Emojis to Display Box
  let displayBox = document.getElementById("imgBox");
  displayBox.style.display = "block";

  //Blank Spaces for the generated word
  let wordBox = document.getElementById("blanks")
  wordBox.style.margin = "35px 0px 50px 0px";
  for (let i = 0; i < 10; i++) {
    let li = document.createElement("li");
    li.style.backgroundColor = "#bbbbb8";
    li.style.color = "black";
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

  //Adds event listener on hint button
  document.getElementById("hintBtn").addEventListener("click", displayHint);
}

//Generates a random word to guess
function randomWordGenerator() {
  randomNumber = Math.floor(Math.random() * wordCount) + 1;
  wordChosen = wordDatabase[randomNumber - 1]
  wordDatabase.splice((randomNumber-1), 1)
  wordCount--;
}

//Generates a hint associated with the word to guess
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
      hint = "All inclusive"
      break;
    case 5:
      hint = "When you value something"
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

//Checks if the clicked letter matches any of the letters of the generated word. 
//If not, the player looses a life. 
//If yes, the letter appears in the correct position of the blank spaces representing the generated word. 
function checkLetter() {
  $(this).css("background", "#bbbbb8").css("color", "black");
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
  if (!letterFound && !lettersUsed.includes(chosenLetter)) {
    nbOfLives--;
    lettersUsed.push(chosenLetter);
    document.querySelectorAll("#imgBox img")[emojiCount].style.visibility = "hidden";
    emojiCount++
  }
  gameScore.innerHTML = "You have " + nbOfLives + " lives left";
  checkLives();
}

//Checks the number of lives left. If it is 0, the game is over. 
function checkLives() {
  let winCondition = true;

  for (i = 0; i < wordChosen.length; i++) {
    if (document.getElementById("blanks").querySelectorAll("li")[i].innerHTML != wordChosen[i]) {
      winCondition = false
    }
  }

  if (nbOfLives <= 0) {
    document.getElementById("livesText").innerHTML = "Game Over. You have run out of lives, please play again!";
    document.getElementById("hintBtn").removeEventListener("click", displayHint);
    $("#playAgain").show()

    for (let i = 0; i < alphabet.length; i++) {
      document.querySelectorAll("#letters li")[i].removeEventListener("click", checkLetter)
    }
  }

  if (nbOfLives != 0 && winCondition) {
    document.getElementById("livesText").innerHTML = "Congratulations, you have won!";
    document.getElementById("hintBtn").removeEventListener("click", displayHint);
    $("#playAgain").show()

    for (let i = 0; i < alphabet.length; i++) {
      document.querySelectorAll("#letters li")[i].removeEventListener("click", checkLetter)
    }
  }
}

//Displays the hint
function displayHint() {
  $("#hintBtn").hide()
  $("#hintText").show().text("Hint: " + hint)
}

// reset game values and generates a new game by calling the 'playGame' function
function reset() {
  if (wordCount==0) {
    document.getElementById("livesText").innerHTML = "No more words left. Game is over. Thanks for playing!";
  
  } else {
    nbOfLives = 9;
    randomNumber = 0;
    wordChosen = "";
    hint = "";
    emojiCount = 0
    lettersUsed = [];
    document.getElementById("letters").innerHTML = "";
    document.getElementById("blanks").innerHTML = "";
    $("#playAgain").hide()
    $("#hintBtn").show()
    $("#hintText").hide()
  
    for (i = 0; i < 9; i++) {
      document.querySelectorAll("#imgBox img")[i].style.visibility = "visible";
    }
    playGame();
  }

}
