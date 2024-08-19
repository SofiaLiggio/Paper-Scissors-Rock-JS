const playerChoose = prompt("PAPER - SCISSORS - ROCK");
const choose = ["paper", "scissors", "rock"];
const randomMove = Math.floor(Math.random() * choose.length);
const adversary = choose[randomMove];
console.log(randomMove);

let result;
console.log(playerChoose);
console.log(adversary);

if (playerChoose === adversary) {
  result = "DRAW!";
} else if (
  (playerChoose === "PAPER" && adversary === "ROCK") ||
  (playerChoose === "SCISSORS" && adversary === "PAPER") ||
  (playerChoose === "ROCK" && adversary === "PAPER")
) {
  result = "WIN!";
} else {
  result = "LOSER!";
}

// console.log(result);
