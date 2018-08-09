"use strict";

let chosenHand = '';
const infoSelected = document.querySelector('.info-selected');
const playDiv = document.querySelector('.play');
const wrapperDiv = document.querySelector('.wrapper');
const resultDiv = document.querySelector('.result');
const resultText = document.querySelector('.result-text');

const btns = document.querySelectorAll('.btn');
btns.forEach(btn => btn.addEventListener("click", (event) => {
    removeActive();
    btn.classList.add('active-hand');
    chosenHand = event.target.dataset.hand;
    infoSelected.innerHTML = `Chosen hand is: ${chosenHand}`;
    playDiv.innerHTML = `<button class="play-btn" title="Play" onclick="playGame()">PLAY</button>`;
}));

function removeActive(){
    for(let i = 0; i < btns.length; i++){
        btns[i].classList.remove('active-hand');
    }
}

function playGame(){
    let machineHand = Math.random().toFixed(2);
    if(machineHand <= 0.33){ // machineHand = rock
        if(chosenHand === 'rock'){
            draw();
        } else if(chosenHand === 'paper'){
            youWon();
        } else {
            machineWon();
        }
        console.log("rock " + machineHand);
    } else if(machineHand <= 0.66){ // machineHand = paper
        if(chosenHand === 'rock'){
            machineWon();
        } else if(chosenHand === 'paper'){
            draw();
        } else {
            youWon();
        }
        console.log("paper " + machineHand);
    } else { // machineHand = scissors
        if(chosenHand === 'rock'){
            youWon();
        } else if(chosenHand === 'paper'){
            machineWon();
        } else {
            draw();
        }
        console.log("scissors " + machineHand);
    }
}

function youWon(){
    loaderScreen();
    resultText.innerHTML = "You won!";
    console.log("You won!");
}

function draw(){
    loaderScreen();
    resultText.innerHTML = "Draw!";
    console.log("Draw!");
}

function machineWon(){
    loaderScreen();
    resultText.innerHTML = "Machine won!";
    console.log("Machine won!")
}

function loaderScreen(){
    const loaderDiv = document.querySelector('.loader');
    
    loaderDiv.style.display = "block";
    wrapperDiv.style.display = "none";

    setTimeout(() => {
        loaderDiv.removeAttribute('style');
        resultDiv.style.display = "flex";
    }, 2000);
}

function playAgain(){
    chosenHand = '';
    infoSelected.innerHTML = "";
    playDiv.innerHTML = "";
    removeActive();
    resultDiv.removeAttribute('style');
    wrapperDiv.removeAttribute('style');
}

document.querySelector('.play-again-btn').addEventListener("click", playAgain);