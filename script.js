// Rock paper scissors

const optionBtn = document.querySelectorAll('div.items button');
const playerScoreBoard = document.querySelector('#pScore');
const compuerScoreBoard = document.querySelector('#cScore');
const currentRoundBoard = document.querySelector('#cRound');
const anounce = document.querySelector('#bottom');
const currentWin = document.querySelector('#winner');
const refreshBtn = document.querySelector('.rps');

let ComputerScore = 0;
let playerScore = 0;
let currentRound = 1;

refreshBtn.addEventListener('click', ()=> {
    location.reload();
});

optionBtn.forEach(button => {
    button.addEventListener('click',()=>{
        if(playerScore === 5){
            currentWin.textContent = 'You Win! You beat the computer five times!';
            anounce.textContent = 'Click on the title to play again';
        }else if(ComputerScore === 5){
            currentWin.textContent = 'Game Over! The computer beat you five times!';
            anounce.textContent = 'Click on the title to play again';
        }else{
            playerChoice = button.id;
            playRPS(playerChoice);
            console.log(playerChoice)
        }
       

    })
})


    


function playRPS(playerChoice){

    let compChoice;
    winner = '';    

ranNum = Math.ceil(Math.random() * 5);
    if (ranNum === 1){
        compChoice = 'Rock';
    }else if (ranNum === 2){
        compChoice = 'Paper';
    }else if(ranNum === 3){
        compChoice = 'Lizard';
    }else if(ranNum === 4){
            compChoice = 'Spock';
    }else{
        compChoice = 'Scissors';
        }
console.log(compChoice);

         
    if (compChoice === playerChoice){
        winner = 'Tie';
        currentWin.textContent = `Both chose ${playerChoice}. It's a tie...`
       
    }else if
    (playerChoice === 'Scissors' && compChoice === 'Paper' ||
     playerChoice === 'Paper' && compChoice === 'Rock' ||
     playerChoice === 'Rock' && compChoice === 'Lizard' ||
     playerChoice === 'Lizard' && compChoice === 'Spock' ||
     playerChoice === 'Spock' && compChoice === 'Scissors' ||
     playerChoice === 'Scissors' && compChoice === 'Lizard' ||
     playerChoice === 'Lizard' && compChoice === 'Paper' ||
     playerChoice === 'Paper' && compChoice === 'Spock' ||
     playerChoice === 'Spock' && compChoice === 'Rock' ||
     playerChoice === 'Rock' && compChoice === 'Scissors'){
         winner = 'Player';
         playerScore ++;
         playerScoreBoard.textContent = playerScore;
         currentWin.textContent = `${playerChoice} beats ${compChoice}. You win!`;
        
     }else{
         ComputerScore ++;
         winner = 'Computer';
         compuerScoreBoard.textContent = ComputerScore;
        currentWin.textContent = `${compChoice} beats ${playerChoice}. You lost.`;  
     } 
     console.log(winner);

     if(winner === 'Tie'){
    
        anounce.textContent = 
        `The current round is round ${currentRound}, Your
         score is ${playerScore} and the computers score
        is ${ComputerScore}. This round you chose ${playerChoice} and
        the computer chose ${compChoice}. It is a ${winner}, 
        nobody wins this round.`
        }else {
        anounce.textContent = 
        `The current round is round ${currentRound}, Your
        score is ${playerScore} and the computers score
        is ${ComputerScore}. This round you chose ${playerChoice} and
        the computer chose ${compChoice}. ${winner} Wins this
        round.`
        }


    currentRoundBoard.textContent = currentRound ++;

   

    }
        
    
    
                    
                    
                    
                  
            