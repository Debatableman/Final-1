let playerRoundScore = 0;
let playerTotalScore = 0;
let computerRoundScore = 0;
let computerTotalScore = 0;
let rollsLeft = 3;

let playerRollDie1, playerRollDie2, computerRollDie1, computerRollDie2;

window.onload = function() {
    const images = ['wallpaper1.jpg', 'wallpaper2.jpg', 'wallpaper3.jpg', 'wallpaper4.jpg', 'wallpaper5.jpg']; 
    const randomImage = images[Math.floor(Math.random() * images.length)];
    document.body.style.backgroundImage = `url('../wallpaper/${randomImage}')`;

    // Event listeners
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('roll-btn').addEventListener('click', rollDice);
    document.getElementById('reset-btn').addEventListener('click', resetGame);
    document.getElementById('play-again-btn').addEventListener('click', resetGame);
}

function startGame() {
    const rollBtn = document.getElementById('roll-btn');
    const resetBtn = document.getElementById('reset-btn');
  
    rollBtn.style.display = 'inline-block';
    resetBtn.style.display = 'inline-block';
    document.getElementById('play-again-btn').style.display = 'none';
    document.getElementById('start-btn').style.display = 'none';
    
    // Show 'current-score-popup' and hide 'final-score-popup'
    document.getElementById('current-score-popup').style.display = 'flex';
    document.getElementById('final-score-popup').style.display = 'none';
  
    // add event listeners for roll and reset buttons
    rollBtn.addEventListener('click', rollDice);
    resetBtn.addEventListener('click', resetGame);
}

function rollDice() {
    if (rollsLeft > 0) {
        rollsLeft--;
    
        const playerDice1 = Math.floor(Math.random() * 6) + 1;
        const playerDice2 = Math.floor(Math.random() * 6) + 1;
        const computerDice1 = Math.floor(Math.random() * 6) + 1;
        const computerDice2 = Math.floor(Math.random() * 6) + 1;
    
        const playerRollDie1 = getDiceFace(playerDice1);
        const playerRollDie2 = getDiceFace(playerDice2);
        const computerRollDie1 = getDiceFace(computerDice1);
        const computerRollDie2 = getDiceFace(computerDice2);
    
        document.getElementById('player-roll-die1').textContent = playerRollDie1;
        document.getElementById('player-roll-die2').textContent = playerRollDie2;
        document.getElementById('computer-roll-die1').textContent = computerRollDie1;
        document.getElementById('computer-roll-die2').textContent = computerRollDie2;
    
        playerRoundScore += calculateScore(playerDice1, playerDice2);
        computerRoundScore += calculateScore(computerDice1, computerDice2);
    
        document.getElementById('player-round-score').textContent = playerRoundScore;
        document.getElementById('computer-round-score').textContent = computerRoundScore;
      }
    
      if (rollsLeft === 0) {
        endRound();
      }
}

console.log(playerRoundScore, computerRoundScore); // log before updating scores
playerRoundScore += calculateScore(playerDice1, playerDice2);
computerRoundScore += calculateScore(computerDice1, computerDice2);
console.log(playerRoundScore, computerRoundScore); // log after updating scores


document.getElementById('start-btn').addEventListener('click', startGame);
document.getElementById('roll-btn').addEventListener('click', rollDice);
document.getElementById('reset-btn').addEventListener('click', resetGame);
document.getElementById('play-again-btn').addEventListener('click', resetGame);

function rollDice() {
    if (rollsLeft > 0) {
        rollsLeft--;
    
        const playerDice1 = Math.floor(Math.random() * 6) + 1;
        const playerDice2 = Math.floor(Math.random() * 6) + 1;
        const computerDice1 = Math.floor(Math.random() * 6) + 1;
        const computerDice2 = Math.floor(Math.random() * 6) + 1;
    
        const playerRollDie1 = getDiceFace(playerDice1);
        const playerRollDie2 = getDiceFace(playerDice2);
        const computerRollDie1 = getDiceFace(computerDice1);
        const computerRollDie2 = getDiceFace(computerDice2);
    
        document.getElementById('player-roll-die1').textContent = playerRollDie1;
        document.getElementById('player-roll-die2').textContent = playerRollDie2;
        document.getElementById('computer-roll-die1').textContent = computerRollDie1;
        document.getElementById('computer-roll-die2').textContent = computerRollDie2;
    
        playerRoundScore += calculateScore(playerDice1, playerDice2); // Moved inside the rollDice function
        computerRoundScore += calculateScore(computerDice1, computerDice2); // Moved inside the rollDice function
    
        document.getElementById('player-round-score').textContent = playerRoundScore;
        document.getElementById('computer-round-score').textContent = computerRoundScore;
    }
    
    if (rollsLeft === 0) {
        endRound();
    }
}


function getDiceFace(value) {
    switch (value) {
        case 1:
          return '⚀';
        case 2:
          return '⚁';
        case 3:
          return '⚂';
        case 4:
          return '⚃';
        case 5:
          return '⚄';
        case 6:
          return '⚅';
        default:
          return '';
      }
    }

function calculateScore(die1, die2) {
    if (die1 === 1 || die2 === 1) {
        return 0;
      } else if (die1 === die2) {
        return (die1 + die2) * 2;
      } else {
        return die1 + die2;
      }
}

function endRound() {
    const popup = document.getElementById('current-score-popup');
    if (popup) {
        popup.style.display = 'flex';
    } else {
        console.error("Can't find the popup element!");
    }

    playerTotalScore += playerRoundScore;
    computerTotalScore += computerRoundScore;
    document.getElementById('player-total-score').textContent = playerTotalScore;
    document.getElementById('computer-total-score').textContent = computerTotalScore;
    // Hide 'current-score-popup' and show 'final-score-popup'
    document.getElementById('current-score-popup').style.display = 'none';
    document.getElementById('final-score-popup').style.display = 'flex';
  
    document.getElementById('roll-btn').style.display = 'none';
    document.getElementById('reset-btn').style.display = 'inline-block';
    document.getElementById('play-again-btn').style.display = 'inline-block';
  
    rollsLeft = 3;
    playerRoundScore = 0;
    computerRoundScore = 0;
  
    const winner = determineWinner();
    const rollBtn = document.getElementById('roll-btn');
    const resetBtn = document.getElementById('reset-btn');
    const popupMessage = document.getElementById('popup-message');
    const playAgainBtn = document.getElementById('play-again-btn');
    const resultGif = document.getElementById('result-gif');
  
    const playerFinalScore = playerTotalScore;
    const computerFinalScore = computerTotalScore;
  
    // Show the "Roll Dice" and "Reset Game" buttons after the pop-up appears
    rollBtn.style.display = 'inline-block';
    resetBtn.style.display = 'inline-block';
  
    if (winner === 'player') {
      popupMessage.textContent = `Congratulations! You win!\nYour Final Score: ${playerFinalScore}\nChaos Final Score: ${computerFinalScore}`;
      const playerWinGifs = [
        '../gifs-player-win/gif1.gif',
        '../gifs-player-win/gif2.gif',
        '../gifs-player-win/gif3.gif',
        '../gifs-player-win/gif4.gif',
        '../gifs-player-win/gif5.gif',
        '../gifs-player-win/gif6.gif',
        '../gifs-player-win/gif7.gif',
        '../gifs-player-win/gif9.gif',
        '../gifs-player-win/gif10.gif',
        '../gifs-player-win/gif11.gif',
        '../gifs-player-win/gif12.gif'
      ];
      resultGif.src = getRandomGif(playerWinGifs);
    } else if (winner === 'computer') {
      popupMessage.textContent = `Chaos wins! Better luck next time!\nYour Final Score: ${playerFinalScore}\nChaos Final Score: ${computerFinalScore}`;
      const playerLostGifs = [
        '../gifs-player-lost/gif1.gif',
        '../gifs-player-lost/gif2.gif',
        '../gifs-player-lost/gif3.gif',
        '../gifs-player-lost/gif4.gif',
        '../gifs-player-lost/gif5.gif',
        '../gifs-player-lost/gif7.gif',
        '../gifs-player-lost/gif8.gif',
        '../gifs-player-lost/gif9.gif',
        '../gifs-player-lost/gif10.gif',
        '../gifs-player-lost/gif11.gif',
        '../gifs-player-lost/gif12.gif'
      ];
      resultGif.src = getRandomGif(playerLostGifs);
    } else {
      popupMessage.textContent = `It's a tie!\nYour Final Score: ${playerFinalScore}\nChaos Final Score: ${computerFinalScore}`;
      const tieGifs = [
        '../gifs-tie/no-one-win.gif'
      ];
      resultGif.src = getRandomGif(tieGifs);
    }
  
    popup.style.display = 'flex';
  
    playAgainBtn.onclick = function () {
      // Hide the pop-up and the buttons before resetting the game
      popup.style.display = 'none';
      rollBtn.style.display = 'none';
      resetBtn.style.display = 'none';
      resetGame();
    };

  document.getElementById('roll-btn').style.display = 'none';
  document.getElementById('reset-btn').style.display = 'none';
  document.getElementById('play-again-btn').style.display = 'inline-block';
}

var rollBtn = document.getElementById('roll-btn');
if (rollBtn) {
    rollBtn.style.display = 'none';
}

var resetBtn = document.getElementById('reset-btn');
if (resetBtn) {
    resetBtn.style.display = 'none';
}

var playAgainBtn = document.getElementById('play-again-btn');
if (playAgainBtn) {
    playAgainBtn.style.display = 'inline-block';
}

function getRandomGif(gifArray) {
    const randomIndex = Math.floor(Math.random() * gifArray.length);
    return gifArray[randomIndex];
}

function determineWinner() {
    if (playerTotalScore > computerTotalScore) {
        return 'player';
      } else if (playerTotalScore < computerTotalScore) {
        return 'computer';
      } else {
        return 'tie';
      }
    }

    function resetGame() {
        playerRoundScore = 0;
        playerTotalScore = 0;
        computerRoundScore = 0;
        computerTotalScore = 0;
        rollsLeft = 3;
    
        // Update the content of the HTML elements
        document.getElementById('player-total-score').textContent = playerTotalScore;
        document.getElementById('computer-total-score').textContent = computerTotalScore;
        document.getElementById('player-round-score').textContent = playerRoundScore;
        document.getElementById('computer-round-score').textContent = computerRoundScore;
        document.getElementById('current-score-popup').style.display = 'none';
        document.getElementById('final-score-popup').style.display = 'none';
    
        // Hide "Roll Dice", "Reset Game" and "Play Again" buttons and show "Start Game" button
        document.getElementById('roll-btn').style.display = 'none';
        document.getElementById('reset-btn').style.display = 'none';
        document.getElementById('play-again-btn').style.display = 'none';
        document.getElementById('start-btn').style.display = 'inline-block';
    
        const popupPlayerRollDie1 = document.getElementById('popup-player-roll-die1');
        const popupPlayerRollDie2 = document.getElementById('popup-player-roll-die2');
        const popupPlayerRoundScore = document.getElementById('popup-player-round-score');
        const popupPlayerTotalScore = document.getElementById('popup-player-total-score');
        const popupComputerRoundScore = document.getElementById('popup-computer-round-score');
        const popupComputerTotalScore = document.getElementById('popup-computer-total-score');
        const popup = document.getElementById('current-score-popup');
        const rollBtn = document.getElementById('roll-btn');
        const resetBtn = document.getElementById('reset-btn');
        popup.style.display = 'none';
        rollBtn.style.display = 'none';
        resetBtn.style.display = 'none';
    
        // update popup values
        popupPlayerRollDie1.textContent = playerRollDie1;
        popupPlayerRollDie2.textContent = playerRollDie2;
        popupPlayerRoundScore.textContent = playerRoundScore;
        popupPlayerTotalScore.textContent = playerTotalScore;
        popupComputerRoundScore.textContent = computerRoundScore;
        popupComputerTotalScore.textContent = computerTotalScore;
    }

    // Array of filenames
var playerGifs = ["Space marine-1.gif", "space marine heavy bolter.gif", "dreadnought.gif", "Terminator marine.gif"];
var cpuGifs = ["chaos marine.gif", "Chaos-warrior.gif", "Khornate-berserker.gif", "plague-marine.gif", "Rubric-marines.gif"];

// Function to select a random gif
function getRandomGif(gifs) {
    var randomIndex = Math.floor(Math.random() * gifs.length);
    return gifs[randomIndex];
}

// Function to set gifs
function setGifs() {
    var playerGif = getRandomGif(playerGifs);
    var cpuGif = getRandomGif(cpuGifs);

    // Some reason not working
    document.querySelector(".player-info img").src = "../gif-characters/Player/" + playerGif;
    document.querySelector(".computer-info img").src = "../gif-characters/CPU/" + cpuGif;
}

// Call the function when the page loads
setGifs();