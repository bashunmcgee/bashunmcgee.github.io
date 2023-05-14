const buttons = document.querySelectorAll('input')
let playerScore = 0
let computerScore = 0

// Disable buttons
function disableButtons() {
    buttons.forEach(element => {
        element.disabled = true
    })
}

// Allows the computer to randomly Choose between Rock, Paper, or Scissors
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
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

let scoreCard = ""

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
else if ((playerChoice == 'Rock' && computerChoice  == 'Paper') ||
        (playerChoice == 'Scissors' && computerChoice  == 'Rock') ||
        (playerChoice == 'Paper' && computerChoice == 'Scissors')){

          computerScore += 1


          scoreCard = ("<br><br> You Lose! " + computerChoice +  " Beats "+ playerChoice + " <br>Computer Score : " + computerScore + " <br>Player Score : " + playerScore );

          if(computerScore == 7){
            scoreCard += "<br> <br>Bots Rule The World Lets Play Again!"
            disableButtons()
          }

  }

else {


  scoreCard = ( "<br>Computer and Human have Chose The same option? Its a Draw. <br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)


}

document.getElementById('scoreCard').innerHTML = scoreCard
  return

}
