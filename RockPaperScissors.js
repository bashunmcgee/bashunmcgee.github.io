const buttons = document.querySelectorAll('input')
let playerScore = 0
let computerScore = 0

// Disable buttons
function disableButtons() {
    buttons.forEach(element => {
        element.disabled = true
    })
}


// For Each button adds event listener To Call Play Round
buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})







//Plays Actual Round of Game

function playRound(playerChoice) {

let computerChoice = computerPlay();

let result = ""

  if((playerChoice  == 'Rock' && computerChoice == 'Scissors')||
      (playerChoice == 'Scissors' && computerChoice == 'Paper')||
      (playerChoice == 'Paper' && computerChoice == 'Rock'))
  {
    playerScore += 1;
    scoreCard = (" You Win Congrats! " + playerChoice + " Beats " + computerChoice + " everytime! " + "<br>"
    + "<br> Computer Score : " + computerScore + "<br> Player Score : " + playerScore);


    if (playerScore == 7) {
      scoreCard += '<br><br>You won the game! Reload the page to play again'
        disableButtons()
    }

}
else if (playerChoice == computerChoice){
  scoreCard = ("It\'s a tie. You both chose " + playerSelection
         + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
}

else {

  computerScore += 1
  scoreCard += ("<br> You Lose! " + computerChoice +  " Beats "+ playerChoice + " <br>Computer Score : " + computerScore + " <br>Player Score : " + playerScore );

  if(computerScore == 7){
    scoreCard += "<br> <br>Bots Rule The World Lets Play Again!"
    disableButtons()
  }

}

document.getElementById('scoreCard').innerHTML = scoreCard
  return

}


// Allows the computer to randomly Choose between Rock, Paper, or Scissors
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}
