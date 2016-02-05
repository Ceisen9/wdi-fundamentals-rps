////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    var playerMove;
    if (move !== undefined || null) {
        playerMove = move;
    } else {
       playerMove = getInput();
    }
    return playerMove;
}

function getComputerMove(move) {
    var computerMove;
    if (move !== undefined || null) {
        computerMove = move;
    } else {
       computerMove = randomPlay();
    }
    return computerMove;
}

function getWinner(playerMove,computerMove) {
    if ((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'scissors' && playerMove == 'paper') || (computerMove == 'paper' && playerMove == 'rock')) {
        winner = 'computer';
    } else if ((computerMove == 'rock' && playerMove == 'paper') || (computerMove == 'scissors' && playerMove =='rock') || (computerMove == 'paper' && playerMove == 'scissors')) {
        winner = 'player';
    } else {
        winner = 'tie';
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        if (winner === "computer") {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", Computer wins!");
        } else if (winner === "player") {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", Player wins!");
        } else {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", it's a tie!");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins)
    }
    return [playerWins, computerWins];
}

function playTo(x) {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while (playerWins < x && computerWins < x) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        winner = getWinner(playerMove, computerMove);
        if (winner === "computer") {
            computerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", Computer wins!");
        } else if (winner === "player") {
            playerWins += 1;
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", Player wins!");
        } else {
            console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove + ", it's a tie!");
        }
        console.log('The score is currently ' + playerWins + ' to ' + computerWins)
    }
    return [playerWins, computerWins];
}
