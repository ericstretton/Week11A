// Functions for code
// function to make the h1 tag font color purple
function makePurple(){
    header.style.color="purple";
}
// function to make the h1 tag font color red
function makeRed(){
    header.style.color="red";
}
// function for inputed keys
function keyboardPressed(e){
    let key = e.key;
    if (key == " "){
        document.getElementById(`userInput`).innerText = "Congrats you hit the Space bar";
    } else 
    document.getElementById(`userInput`).innerText = "That's not the space bar!";
    
}


// Start of Code

// variable for header
let header = document.getElementById(`titleHeader`);
// header event listeners
header.addEventListener(`click`, makePurple);
header.addEventListener(`mouseover`, makeRed);
// event listener for user input
document.body.addEventListener('keypress', keyboardPressed);



