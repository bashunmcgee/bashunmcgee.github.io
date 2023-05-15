const playerText = document.querySelector('#playerText');
const botText = document.querySelector('#botText');
const resultText = document.querySelector('#resultingText');
const choicebttn = document.querySelectorAll('.choiceBttn');

 
let player;
let bot;
let result;


choicebttn.forEach(button => button.addEventListener("click", () =>{
  
  
  player = button.textContent;
  computerTurn();
  playerText.textContent = `Player : ${player}`;
  botText.textContent = `Bot : ${bot}`;
  resultText.textContent = checkWinner();



}));


function computerTurn(){
  
  const totalChoices = 3
  
  const randomBotChoice = Math.Floor(Math.random() * totalChoices) ) + 1 ;
  
  switch(randomBotChoice){
       
    case 1: 
      bot = 'Rock'
      break;
    case 2:
      bot = 'Paper'
      break;
      
    case 3:
      bot = 'Scissors'
      break;
  
  }
  
}


function checkWinner(){
    if(player == bot ){
      return "Its a Tie No one Wins "
    }
    else if ( bot == 'Rock')
      return (player == 'Paper') ? "You Win ! Nice." : "You lose Bots Rule!"
      else if ( bot == 'Paper')
      return (player == 'Scissors') ? "You Win ! Nice." : "You lose Bots Rule!"
      else if ( bot == 'Scissors')
      return (player == 'Rock') ? "You Win ! Nice." : "You lose Bots Rule!"

  }


