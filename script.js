// Rock paper scissors

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

function getRoundWinner(compInput, playerInput){
    compInput = getCompChoice();
    playerInput = getPlayerChoice();
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
        winner = 'player';
    }
    return winner;
}

console.log(getRoundWinner());