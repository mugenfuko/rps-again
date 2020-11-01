function playGame() {

    wins = 0;
    losses = 0;
    playerScore.textContent = wins;
    computerScore.textContent = losses;

    buttons.textContent = '';
    const newRockButton = document.createElement('button');
    newRockButton.textContent = 'Rock';
    newRockButton.setAttribute('id', 'rockbutton');
    buttons.appendChild(newRockButton);

    const newPaperButton = document.createElement('button')
    newPaperButton.textContent = 'Paper';
    newPaperButton.setAttribute('id', 'paperbutton');
    buttons.appendChild(newPaperButton);

    const newScissorsButton = document.createElement('button');
    newScissorsButton.textContent = 'Scissors';
    newScissorsButton.setAttribute('id', 'scissorsbutton');
    buttons.appendChild(newScissorsButton);
    
    const rockButton = document.querySelector('#rockbutton');
    rockButton.addEventListener('click', () => {    
        playRound('Rock', computerSelection)
    });

    const paperButton = document.querySelector('#paperbutton');
    paperButton.addEventListener('click', () => {
        playRound('Paper', computerSelection)
    });

    const scissorsButton = document.querySelector('#scissorsbutton');
    scissorsButton.addEventListener('click', () => {
        playRound('Scissors', computerSelection)
    });
}

function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'Rock';
    }   else if (randomNumber == 1) {
        return 'Paper';
    }   else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    let playerSelect = playerSelection;
    let computerSelect = computerSelection;
    const tie = `Round ${rounds}: It\'s a tie!`;
    const loss = `Round ${rounds}: You lose! ${computerSelect} beats ${playerSelect}.`;
    const win = `Round ${rounds}: You win! ${playerSelect} beats ${computerSelect}.`;
    
    if (rounds == 0) {
        playerScore.textContent = wins;
        computerScore.textContent = losses;
        results.textContent = '';
        rounds = 1;
        return playRound(playerSelection, computerSelection);
    }
    
    switch (playerSelect) {
        case 'Rock':
            if (computerSelect == 'Rock') {

                const p = document.createElement('p');
                p.textContent = tie;
                results.appendChild(p);
                rounds++;
            }   else if (computerSelect == 'Paper') {
                losses++;
                computerScore.textContent = losses;
                const p = document.createElement('p');
                p.textContent = loss;
                results.appendChild(p);
                rounds++;
            }   else {
                wins++;
                playerScore.textContent = wins;
                const p = document.createElement('p');
                p.textContent = win;
                results.appendChild(p);
                rounds++;
            }
            finalResult();
            break;
        case 'Paper':
            if (computerSelect == 'Paper') {
                rounds++;
                const p = document.createElement('p');
                p.textContent = tie;
                results.appendChild(p);
            }   else if (computerSelect == 'Scissors') {
                rounds++;
                losses++
                computerScore.textContent = losses;
                const p = document.createElement('p');
                p.textContent = loss;
                results.appendChild(p);
            }   else {
                rounds++;
                wins++
                playerScore.textContent = wins;
                const p = document.createElement('p');
                p.textContent = win;
                results.appendChild(p);
            }
            finalResult();
            break;
        case 'Scissors':
            if (computerSelect == 'Scissors') {
                rounds++;
                const p = document.createElement('p');
                p.textContent = tie;
                results.appendChild(p);
            }   else if (computerSelect == 'Rock') {
                rounds++;
                losses++
                computerScore.textContent = losses;
                const p = document.createElement('p');
                p.textContent = loss;
                results.appendChild(p);
            }   else {
                rounds++;
                wins++
                playerScore.textContent = wins;
                const p = document.createElement('p');
                p.textContent = win;
                results.appendChild(p);
            }
            finalResult();
            break;
        default:
            break;
    }
}

function finalResult() {
    const finalTie = `${wins}:${losses} The game's a tie...`;
    const finalLoss = `${wins}:${losses} You lost the game.`;
    const finalWin = `${wins}:${losses} You won the game!`;
    
    if (rounds == 6) {
        if (wins > losses) {
            const p = document.createElement('p');
            p.style.color = 'green';
            p.textContent = finalWin;
            results.appendChild(p);
        }   else if (wins < losses) {
            const p = document.createElement('p');
            p.style.color = 'red';
            p.textContent = finalLoss;
            results.appendChild(p);
        }   else {
            const p = document.createElement('p');
            p.style.color = 'orange';
            p.textContent = finalTie;
            results.appendChild(p);
        }
        rounds = 0;
        wins = 0;
        losses = 0;

        buttons.textContent = '';
        const newGameButton = document.createElement('button');
        newGameButton.textContent = 'Play Again?';
        newGameButton.setAttribute('id', 'playroundbutton');
        buttons.appendChild(newGameButton);
        const playRoundButton = document.querySelector('#playroundbutton');
        playRoundButton.addEventListener('click', () => {
            playGame();
        });
    }
}

const playerScore = document.querySelector('#playerscore');
const computerScore = document.querySelector('#computerscore');
const buttons = document.querySelector('#buttons');
const results = document.querySelector('#results');
let playerSelection;
let computerSelection;
let rounds = 1;
let wins = '-';
let losses = '-';

playerScore.textContent = wins;
computerScore.textContent = losses;

const playRoundButton = document.querySelector('#playroundbutton');
playRoundButton.addEventListener('click', () => {
    playGame();
});