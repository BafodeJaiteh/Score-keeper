
"use strict";

const h1 = document.querySelector("h1");
const input = document.querySelector("input");
const scorePlayer1 = document.querySelectorAll("span")[0];
const scorePlayer2 = document.querySelectorAll("span")[1];
const scoreWinner = document.querySelectorAll("span")[2];
const buttonPlayer1 = document.querySelectorAll("button")[0];
const buttonPlayer2 = document.querySelectorAll("button")[1];
const buttonReset = document.querySelectorAll("button")[2];

let scoreP1 = 0;
let scoreP2 = 0;
let scoreMax = null;

//function player1

function insertScorePlayer1InSpan0() {

    scorePlayer1.append(document.createTextNode(scoreP1));
}

function changePlayer1Score() {

    if (scoreP1 < scoreMax && scoreP2 < scoreMax) {
        scoreP1++
        scorePlayer1.textContent = scoreP1;
    }    
    if (scoreP1 == scoreMax) {
        scorePlayer1.classList.add("winner");
        scoreMax = null;
    }
}

// function player

function insertScorePlayer2InSpan1() {

    scorePlayer2.append(document.createTextNode(scoreP2));
}

function changePlayer2Score() {

    if (scoreP2 < scoreMax && scoreP1 < scoreMax) {
        scoreP2++
        scorePlayer2.textContent = scoreP2;
    }
    if (scoreP2 == scoreMax) {
        scorePlayer2.classList.add("winner");
        scoreMax = null;
    }
}

// function reset

function ResetScore() {

    scorePlayer1.textContent = (scoreP1 = 0);
    scorePlayer2.textContent = (scoreP2 = 0);
    input.value = null;
    scoreMax = null;     
    scoreWinner.textContent = 0;
    scorePlayer1.classList.remove("winner"); 
    scorePlayer2.classList.remove("winner"); 
}

// function winner

function insertValueInputIntoSpan2() {    

    scoreWinner.append(document.createTextNode(scoreMax));
}

function changeScoreWinner() {

    scoreWinner.textContent = input.value;
    scoreMax = input.value;   
}

// function load

function loading() {

    input.value = 5;
    scoreMax = 5; 
    scoreWinner.textContent = 5;   
}

buttonPlayer1.addEventListener("click", changePlayer1Score);
buttonPlayer2.addEventListener("click", changePlayer2Score);
buttonReset.addEventListener("click", ResetScore);
input.addEventListener("click", changeScoreWinner);
window.addEventListener("load", loading);