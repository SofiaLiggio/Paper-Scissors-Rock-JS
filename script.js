let btn = document.getElementById("btn");
let risultato = document.getElementById("risultato");
let gameArea = document.getElementById("gameArea");
let playAgain = document.getElementById("again");

function playGame() {
  const playerChoose = prompt("PAPER - SCISSORS - ROCK").toUpperCase();
  const choose = ["PAPER", "SCISSORS", "ROCK"];
  const randomMove = Math.floor(Math.random() * choose.length);
  const adversary = choose[randomMove];

  let result;
  let resultClass;

  if (playerChoose === adversary) {
    result = "DRAW!";
    resultClass = "draw";
  } else if (
    (playerChoose === "PAPER" && adversary === "ROCK") ||
    (playerChoose === "SCISSORS" && adversary === "PAPER") ||
    (playerChoose === "ROCK" && adversary === "SCISSORS")
  ) {
    result = `${playerChoose} WINS AGAINST ${adversary}!`;
    resultClass = "win";
  } else if (
    (adversary === "PAPER" && playerChoose === "ROCK") ||
    (adversary === "SCISSORS" && playerChoose === "PAPER") ||
    (adversary === "ROCK" && playerChoose === "SCISSORS")
  ) {
    result = `${playerChoose} LOSES AGAINST ${adversary}! `;
    resultClass = "lose";
  } else {
    alert("INVALID MOVE! CHOOSE PAPER, SCISSORS OR ROCK.");
    return playGame();
  }

  displayResult(result, resultClass);

  playAgain.addEventListener("click", startGame);

  let playAgain = confirm("DO YOU WANT CONTINUE PLAYING?");
  if (playAgain) {
    playGame();
  } else {
    btn.style.display = "inline";
    gameArea.innerHTML = "";
  }
}
function displayResult(result, resultClass) {
  let resultElement = document.createElement("p");
  resultElement.textContent = result;
  resultElement.className = resultClass;
  gameArea.appendChild(resultElement);
}

function startGame() {
  btn.style.display = "none";
  gameArea.innerHTML = "";
  playGame();
}

btn.addEventListener("click", startGame);
