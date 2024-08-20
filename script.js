while (true) {
  const playerChoose = prompt("PAPER - SCISSORS - ROCK").toUpperCase();
  const choose = ["PAPER", "SCISSORS", "ROCK"];
  const randomMove = Math.floor(Math.random() * choose.length);
  const adversary = choose[randomMove];

  let result;

  if (playerChoose === adversary) {
    result = "DRAW!";
  } else if (
    (playerChoose === "PAPER" && adversary === "ROCK") ||
    (playerChoose === "SCISSORS" && adversary === "PAPER") ||
    (playerChoose === "ROCK" && adversary === "SCISSORS")
  ) {
    result = `${playerChoose} WINS AGAINST ${adversary}!`;
  } else if (
    (adversary === "PAPER" && playerChoose === "ROCK") ||
    (adversary === "SCISSORS" && playerChoose === "PAPER") ||
    (adversary === "ROCK" && playerChoose === "SCISSORS")
  ) {
    result = `${playerChoose} LOSES AGAINST ${adversary}! `;
  } else {
    alert("INVALID MOVE! CHOOSE PAPER, SCISSORS OR ROCK.");
    continue;
  }

  console.log(result);
  let playAgain = prompt("DO YOU WANT CONTINUE TO PLAY? Y/N").toUpperCase();

  if (playAgain === "N") {
    break;
  }
}
