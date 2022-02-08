//Play Btn
$(document).ready(function () {
  $(".playBtn").click(function () {
    $(".center").fadeOut();
    playGame();
  });
});
//End of Play Btn

function playGame() {

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