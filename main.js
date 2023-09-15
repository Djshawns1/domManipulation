//#region  startStopResetAnimation

//test to see if connected
console.log('Hello World!');

// connect start and stop variables to html
let startButton = document.querySelector(".start");
let stopButton = document.querySelector(".stop");
let resetButton = document.querySelector(".reset");

//test buttons
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
    console.log("start button pushed");
}

//function to stop animation
function stopAnimation(){
    box.style.animationPlayState = "paused";
    animationPaused = true;
    console.log("stop button pushed");
}

//function to reset animation
function resetAnimation(){
    box.classList.remove("spinAnimation");
    animationPaused = false;
    console.log ("animation is reset");
}

// animation states
startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
resetButton.addEventListener("click", resetAnimation);

//#endregion  startStopResetAnimation

//#region cloneCube

// button triggers function to copy and paste the cube element and it's children on to the page

let body = document.querySelector (".body");
let nextSpinner = document.querySelector(".cube");

console.log ("This is the nextSpinner", nextSpinner)

let copyAnimationButton = document.querySelector(".addAnotherCube");

// This function will clone the cube, change the cubes class name, and appened it to the html body

function copyAnimation (){
    let spinnerStorage = nextSpinner.cloneNode(true);
    document.body.appendChild(spinnerStorage);
    let cubes = document.querySelectorAll(".cube");
    for (let i = 0; i < cubes.length; i++){
        cubes[i].classList.remove(".cube" + i); //This deletes the initial cube class from the duplicates. maybe delete this so you can control all cubes from one set of buttons or have a primary control
        cubes[i].classList.add(".cube" + (i+1));
    }
}
copyAnimationButton.addEventListener("click", copyAnimation);
console.log (copyAnimation);

//#endregion cloneCube

//#region addAnimationButtons

//This function will clone the animation buttons and append them under each cube

function addAnimationButtons (){
   let animationButtonStorage = animationButtons.cloneNode(true);
   document.body.appendChild(animationButtonStorage);
   let copyAnimationButtons = document.querySelectorAll(".animationButtons");
   for (let i = 0; i < copyAnimationButtons.length; i++){  
        copyAnimationButtons[i].classList.add("animationButtons" + (1));
   }
   animationButtonStorage.addEventListener("click", addAnimationButtons);

}

