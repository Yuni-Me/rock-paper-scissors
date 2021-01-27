const options = [
    {
        "name": "rock",
        "image": "./images/rock.png",
        "winnerTo": "scissors",
        "message": "Rock crushes Scissors"
    },
    {
        "name": "scissors",
        "image": "./images/scissors.png",
        "winnerTo": "paper",
        "message": "Scissors cuts Paper"
    },
    {
        "name": "paper",
        "image": "./images/paper.png",
        "winnerTo": "rock",
        "message": "Paper covers Rock"
    }
];

function computerPlay(){
    const randomNumber = Math.floor(Math.random() * 3)
    return options[randomNumber].name;
}

// function createWeapons(){
    
//     options.forEach(option => {
//         let weapon = document.createElement('button');
//         weapon.classList.add('weapon', 'centered');
//         weapon.setAttribute('data-button', `${option.name}`);
//         weapon.innerHTML = `<img src=${option.image} /> <span>${option.name}</span>`;
//         weapons.appendChild(weapon);
        
//     });
// }
 
function playRound() {
    // let playerSelection = (e.target.parentNode.getAttribute('data-button'));
    // let playerSelection = weapon;
    // weapons.addEventListener('click', function(e) {
    //     // console.log(e.target.parentNode.getAttribute('data-button'));
    //     if(e.target.classList.contains('weapon')) {
    //         playerSelection = (e.target.getAttribute('data-button'));
    //     } else {
    //         playerSelection = (e.target.parentNode.getAttribute('data-button'));
    //     }
    //     console.log(playerSelection);
    //     return playerSelection;
    // }, {capture: false});
  
    let computerSelection = computerPlay();
    console.log(`${playerSelection} VS ${computerSelection}`);
    let roundResults = determineWinner(playerSelection, computerSelection);
    if(roundResults[0] === null) {
        return playRound()
    }
    console.log(roundResults);
    showRound(computerSelection, roundResults);
    return roundResults;
}
function showRound(computerSelection, roundResults) {
    let rounds = document.querySelector('.rounds');
    let round = document.createElement('div');
    round.classList.add('round', 'centered');
    round.innerHTML = `<span class="roundLabel">Round 1: </span>  <div class="roundImage"><img src="./images/${playerSelection}_mini.png"/> ${playerSelection}  -VS-    ${computerSelection}<img src="./images/${computerSelection}_mini.png"/></div> <span>${roundResults[1]}</span>`;
    rounds.appendChild(round);
}
function determineWinner(selection1, selection2) {
	let winner;
	for(let i = 0; i < options.length; i++) {
        if (selection1 === selection2) {
            winner = [null, `Draw`];
			return winner;
        } else if (selection1 === options[i].name && selection2 === options[i].winnerTo) {
            winner = [true, `You WIN! ${options[i].message}`];
			return winner;
		} else if (selection2 === options[i].name && selection1 === options[i].winnerTo) {
            winner = [false, `You LOSE! ${options[i].message}`];
			return winner;
		}	
	}	
}

function refreshPage() {
    window.location.reload(true);
}
function playGame() {
    // let playerWinnings = 0;
    // let computerWinnings = 0;
    let playerScore = document.querySelector('.playerScore');
    let computerScore = document.querySelector('.computerScore');
    playerScore.textContent = `${playerWinnings}`
    computerScore.textContent = `${computerWinnings}`
    let results = playRound();
        if(roundCounter < 5) {
            if(results[0]) {
                playerWinnings++;
                console.log(playerWinnings);
            } else {
                computerWinnings++;
            }
            roundCounter++;
        } else if(roundCounter >= 5) { console.log(`Hey ${roundCounter}`) }
            // if (playerWinnings >= 3) {
            //     console.log(`You have won ${playerWinnings} rounds in this game. You are the WINNER!`);
            // } else {
            //     console.log(`You have lost ${5 - playerWinnings} rounds in this game. The Computer is the WINNER!`);
            // }
        // }
    // for(let i = 1; i <= 5; i++){
        

    // }

    
}
const weapons = document.querySelectorAll('.weapon');
let playerSelection = '';
// createWeapons();
weapons.forEach((weapon) => {
    weapon.addEventListener('click', (e) => {
        playerSelection = weapon.getAttribute('data-button');
        console.log(playerSelection);
        // playRound()
        playGame();
    })
});
let playerWinnings = 0;
let computerWinnings = 0;
let roundCounter = 0;
let reset = document.querySelector('.reset');
reset.addEventListener('click', refreshPage);
// if (playerWinnings >= 3) {
//     console.log(`You have won ${playerWinnings} rounds in this game. You are the WINNER!`);
// } else {
//     console.log(`You have lost ${5 - playerWinnings} rounds in this game. The Computer is the WINNER!`);
// }

// playRound()
// playGame();

// .addEventListener('click', function(e) {
//     // console.log(e.target.parentNode.getAttribute('data-button'));
//     if(e.target.classList.contains('weapon')) {
//         playerSelection = (e.target.getAttribute('data-button'));
//     } else {
//         playerSelection = (e.target.parentNode.getAttribute('data-button'));
//     }
//     console.log(playerSelection);
//     return playerSelection;