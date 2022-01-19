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

console.log(getCompChoice());