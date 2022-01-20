// Rock paper scissors

function rpsGame (){ 

let compScore = 0;
let playerScore = 0;
let currentRound = 0;
let playerChoice;
let compChoice;

do{
function getCompChoice(){
    ranNum = Math.ceil(Math.random() * 3);
    if (ranNum === 1){
        compChoice = 'rock';
    }else if (ranNum === 2){
        compChoice = 'paper';
    }else{
        compChoice = 'scissors';
    }
    return compChoice;
}

function getPlayerChoice(input){
    input = prompt('Choose Rock, Paper or Scissors.');
    playerChoice = input.toLowerCase();

    return playerChoice;
}
playerChoice = getPlayerChoice();
compChoice = getCompChoice();

function getRoundWinner(compInput, playerInput){
    compInput = compChoice;
    playerInput = playerChoice;
    winner = '';

    if (compInput === playerInput){
        winner = 'Tie';
    }else if(compInput === 'rock' && playerInput === 'scissors'){
        winner = 'Computer';
    }else if(compInput === 'paper' && playerInput === 'rock'){
        winner = 'Computer';
    }else if(compInput === 'scissors' && playerInput === 'paper'){
        winner = 'Computer';
    }else{
        winner = 'Player';
    }
    return winner;
}

if (getRoundWinner() === 'Computer'){
    compScore ++;
    currentRound ++;
}else if (getRoundWinner() === 'Player'){
    playerScore ++;
    currentRound ++;
}else {
    currentRound ++;
}

function announcer(cRound, pScore, cScore, rWinner, pChoice, cChoice){
    pScore = playerScore;
    cScore = compScore;
    cRound = currentRound;
    rWinner = getRoundWinner();
    pChoice = playerChoice;
    cChoice = compChoice;

    if (rWinner === 'Tie'){
        anounce = `The current round is ${cRound}, Your/
        score is ${pScore} and the computers score/
        is ${cScore}. This round you chose ${pChoice} and/
        the computer chose ${cChoice}. It is a ${rWinner},/ 
        nobody wins this/
        round.`
    }else {
        anounce = `The current round is ${cRound}, Your/
        score is ${pScore} and the computers score/
        is ${cScore}. This round you chose ${pChoice} and/
        the computer chose ${cChoice}. ${rWinner} Wins this/
        round.`
    }
    return anounce;
  }

console.log(announcer());
}while(currentRound <= 5);
}

rpsGame();