/**
 * This javascript includes the events and functions for the hint button. Once the hint buton 
 * is clicked, it displays the associated clue depending on the word chossen for the game.
 * NOTE: code/function subject to change depending on rest of the main code
 * 
 * /
 

/**
 * Test words & their category
 *        Words 1-5: Category 1,
 *        Words 6-10: Category 2 
 *        Words 11-15: Category 3
 */
var theWord= [
    'dog',
    'hipopotomus',
    'cow',
    'parrot',
    'chicken',
    'apple',
    'banana',
    'avocado',
    'pomegranate',
    'watermelon',
    'oven',
    'microwave',
    'toaster',
    'fridge',
    'coffe machine',
];

/**
 * NOTE: FUNCTION, SELECTION AND DISPLAY CAN BE CHANGED DEPENDING ON MAIN CODE & DTBSE CREATED
 * 
 * Associates hint depending on the word chosen for game - calls displayHint fctn
 */
let selectedWord; 

function hintCategory(){
    selectedWord = theWord[Math.floor((Math.random() * theWord.length) )];

    switch( theWord.indexOf(selectedWord) ){
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
            displayHint("Categorie: TBD-1");
            break;
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            displayHint("Categorie: TBD-2");
            break;
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
            displayHint("Categorie: TBD-3");
            break;
    }
}

/**
 * Display hint to associated id 
 * ID for hint text: hintText
 */
function displayHint(clue){
    document.getElementById("hintText").innerHTML = clue; 
    console.log("Chosen Word: " + selectedWord);
    // document.getElementById("hintText").innerHTML = "Hint buttons is working!!!"; 
}


/**
 * Event Listeners
 */
// ID for hint button : hintBtn - calls hintCategory fctn
// ex used in html: <input type="button" value="Hint" id="hintBtn">
document.getElementById("hintBtn").addEventListener("click",hintCategory);