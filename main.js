//#region  startStopResetAnimation
console.log('Hello World!');
// connect start and stop variables to html
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset")
//test to see if connected
console.log(startButton);
console.log(stopButton);

//connect to box class
let box = document.querySelector(".box");

//montior state of animation
let animationPaused = false;

//function to start animation
function startAnimation(){
    box.classList.add("spinAnimation");
    box.style.animationPlayState = "running";
    animationPaused = false;
    console.log("start button pushed")
}

//function to stop animation
function stopAnimation(){
    box.style.animationPlayState = "paused";
    animationPaused = true;
    console.log("stop button pushed")
}

//function to reset animation
function resetAnimation(){
    box.classList.remove("spinAnimation")
    animationPaused = false;
    console.log ("animation is reset")
}

// animation states
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
resetButton.addEventListener("click", resetAnimation)

//#endregion  startStopResetAnimation

//function to cloneCube
// button triggers function to copy and paste essentially the cube element on
//to the page
let body = document.querySelector (".body")
let nextSpinner = document.querySelector(".cube");

console.log ("This is the nextSpinner", nextSpinner)

let copyAnimationButton = document.querySelector(".copyAnimation")

function copyAnimation (){
    let spinnerStorage = nextSpinner.cloneNode(true)
    body.appendChild(spinnerStorage)
    console.log ("This is the body text:", body)
}

console.log (copyAnimation)





// let objectPractice = {
//     numbers:  [1, 2, 3, 4, 5, 6 , 7],
//     food: ["apple", "orange", "grapes", "watermelon", "honey dew", "fig"],
//     dwelling: ["house", "apartment", "mansion", "condo", "villa", "loft"]
// }

// let foodVariable = [];
// let numbersVariable = [];
// let dwellingVariable = [];

// function sortObjectsIntoArray(){

// }

//function searchObject

