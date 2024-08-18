let number = parseInt(Math.random() * 100 + 1);
console.log(number);
let submit = document.querySelector("#submit");
let userInput = document.querySelector("#userInput");
let guessSlot = document.querySelector(".guesses");
let rem = document.querySelector(".lastResult");

let lowOrHigh = document.querySelector(".lowOrHigh");

let startOver = document.querySelector(".results");

const p = document.createElement("p");

let prevGuess = [];
let attempts = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("please Enter a valid number");
  } else if (guess < 1) {
    alert("please Enter a number greater than 1");
  } else if (guess > 100) {
    alert("please Enter a valid number less than 100");
  } else {
    prevGuess.push(guess);
    if (attempts === 11) {
      displayGuess(guess);
      displaymess(`Game Over. Random number was ${number}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === number) {
    displaymess(`You guessed it right`);
    endGame();
  } else if (guess < number) {
    displaymess(`Number is low`);
  } else if (guess > number) {
    displaymess(`Number is high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  attempts++;
  rem.innerHTML = `${11 - attempts}`;
}

function displaymess(mess) {
  lowOrHigh.innerHTML = `<h2>${mess}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame" style="border: 2px solid white; border-radius: 30px" ;>Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButt = document.querySelector("#newGame");
  newGameButt.addEventListener("click", (e) => {
    number = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    attempts = 1;
    guessSlot.innerHTML = "";
    rem.innerHTML = `${11 - attempts}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}
