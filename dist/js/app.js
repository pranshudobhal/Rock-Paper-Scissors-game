const btnRules = document.querySelector('.rules__btn');
const btnRulesClose = document.querySelector('.close-btn');
const score = document.querySelector('.score__total');
const userAnswer = document.querySelectorAll('.user-answer');
const userDisplayOption = document.querySelector('.user-image');
const userDisplayOptionDiv = document.querySelector('.user__answer');
const computerDisplayOption = document.querySelector('.computer-image');
const computerDisplayOptionDiv = document.querySelector('.computer__answer');
const mainMenu = document.querySelector('.main-menu');
const resultMenu = document.querySelector('.result-menu');
const playAgain = document.querySelector('.play__again');
const winnerText = document.querySelector('.result');

var items = ['rock', 'paper', 'scissors'];
score.innerHTML = 0;

userAnswer.forEach((answer) => answer.addEventListener('click', optionSelected));

playAgain.addEventListener('click', resetToMain);

//reset to main menu
function resetToMain() {
  mainMenu.style.display = 'block';
  resultMenu.style.display = 'none';
  userDisplayOptionDiv.className = '';
  userDisplayOptionDiv.classList.add('user__answer');
  computerDisplayOptionDiv.className = '';
  computerDisplayOptionDiv.classList.add('computer__answer');
  // mainMenu.style.backgroundImage = "url('./images/bg-triangle.svg')";
  mainMenu.style.backgroundImage = "url('/images/bg-triangle.svg')";
}

function optionSelected() {
  mainMenu.style.display = 'none';
  mainMenu.style.backgroundImage = 'none';
  resultMenu.style.display = 'block';

  var userOption = this.id;

  //generate random computer answer
  var computerOption = items[Math.floor(Math.random() * items.length)];

  if (userOption == 'rock') {
    createUserOption(userOption, 'bot');
  } else {
    createUserOption(userOption);
  }

  if (computerOption == 'rock') {
    createComputerOption(computerOption, 'bot');
  } else {
    createComputerOption(computerOption);
  }

  var winner = findWinner(userOption, computerOption);
  winnerText.innerHTML = winner;
  addAnimation(winner);
}

function addAnimation(result) {
  if (result == 'you win') {
    userDisplayOptionDiv.classList.add('winner');
  } else if (result == 'you lose') {
    computerDisplayOptionDiv.classList.add('winner');
  }
}

//check for winner
function findWinner(user, computer) {
  if (user == computer) {
    return 'draw';
  } else if (user == 'paper' && computer == 'rock') {
    score.innerHTML++;
    return 'you win';
  } else if (user == 'paper' && computer == 'scissors') {
    score.innerHTML--;
    return 'you lose';
  } else if (user == 'rock' && computer == 'paper') {
    score.innerHTML--;
    return 'you lose';
  } else if (user == 'rock' && computer == 'scissors') {
    score.innerHTML++;
    return 'you win';
  } else if (user == 'scissors' && computer == 'rock') {
    score.innerHTML--;
    return 'you lose';
  } else if (user == 'scissors' && computer == 'paper') {
    score.innerHTML++;
    return 'you win';
  }
}

//create user selected option
function createUserOption(option, pos = 'top') {
  userDisplayOption.src = `images/icon-${option}.svg`;
  userDisplayOptionDiv.classList.remove('result-menu');
  userDisplayOptionDiv.classList.remove(`${pos}__row`);
  userDisplayOptionDiv.classList.remove('user__answer');
  userDisplayOptionDiv.classList.add(`${pos}__row--${option}`);
  userDisplayOption.classList.add(`${option}-img`);
}

//create computer selected option
function createComputerOption(option, pos = 'top') {
  computerDisplayOption.src = `images/icon-${option}.svg`;
  computerDisplayOptionDiv.classList.remove('result-menu');
  computerDisplayOptionDiv.classList.remove(`${pos}__row`);
  computerDisplayOptionDiv.classList.remove('computer__answer');
  computerDisplayOptionDiv.classList.add(`${pos}__row--${option}`);
  computerDisplayOption.classList.add(`${option}-img`);
}

//rules modal open and close buttons
btnRules.addEventListener('click', function () {
  document.querySelector('.rules-modal').style.display = 'block';
});

btnRulesClose.addEventListener('click', function () {
  document.querySelector('.rules-modal').style.display = 'none';
});

document.addEventListener('mouseup', function (e) {
  var container = document.querySelector('.rules-modal');
  if (!container.contains(e.target)) {
    container.style.display = 'none';
  }
});
