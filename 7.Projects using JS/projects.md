# Projects related to DOM Manipulation

## Project Links

[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-7zd97b)

## Solution Code

### Project 1 - Color Changer

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
  console.log(button);
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === "purple") {
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

### Project 2 - BMI Calculator

```javascript
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = "Please give a valid height: ";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = "Please give a valid weight: ";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `'<span>${bmi}</span>'`;
  }
});
```

### Project 3 - Digital Clock

```javascript
const clock = document.getElementById("clock");
// const clock = document.querySelector('#clock');

let date = new Date();
console.log(date.toLocaleString());

setInterval((e) => {
  let date = new Date();
  // console.log(date.toLocaleString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
```

### Project 4 - Guess The Number

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userInp = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const lastRes = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const para = document.createElement("p");

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInp.value);
    // console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number!");
  } else if (guess < 1) {
    alert("Please enter a number > 1 !!");
  } else if (guess > 100) {
    alert("Please enter a number < 100 !!");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMsg(`Game Over!!! Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You guessed it right!!!");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("Number is too low!!!");
  } else if (guess > randomNumber) {
    displayMsg("Number is too high!!!");
  }
}

function displayGuess(guess) {
  userInp.value = "";
  guessSlot.innerHTML += `${guess} `;
  numGuess++;
  lastRes.innerHTML = `${11 - numGuess}`;
}

function displayMsg(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInp.value = "";
  userInp.setAttribute("disabled", "");
  para.classList.add("button");
  para.innerHTML = `<h2 id="newGame" style="background-color:#fff;color:#000">Start a new game!</h2>`;
  startOver.appendChild(para);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    lastRes.innerHTML = `${11 - numGuess}`;
    userInp.removeAttribute("disabled");
    startOver.removeChild(para);

    playGame = true;
  });
}
```

### Project 5 - Unlimited Background Color Changer

```javascript
let intervalId;

// const changeBackgroundColor = () => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);
//   const randomColor = `rgb(${red}, ${green}, ${blue})`;
//   document.body.style.backgroundColor = randomColor;
// };

const changeBackgroundColor = () => {
  const hex = "0123456789ABCDEF";
  let randColor = "#";
  for (let i = 0; i < 6; i++) {
    randColor += hex[Math.floor(Math.random() * 16)];
  }
  document.body.style.backgroundColor = randColor;
};

document.querySelector("#start").addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(changeBackgroundColor, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
});
```

### Project 6 - Keyboard Characters Number

```javascript
const insert = document.getElementById("insert");
window.addEventListener("keydown", (e) => {
  insert.innerHTML = `
    <div class='color'>
      <table>
        <tr>
          <th>Key</th>
          <th>KeyCode</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " " ? "Space" : e.key}</td>
          <td>${e.keyCode}</td>
          <td>${e.code}</td>
        </tr>
      </table>
    </div>
  `;
});
```
