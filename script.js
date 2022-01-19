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

console.log(getPlayerChoice());