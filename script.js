'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displyMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When ther is no imput
  if (!guess) {
    displyMessage('No Number! 😥');
  }

  // When player wins
  else if (guess === secretNumber) {
    displyMessage('Correct Number!🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // Guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displyMessage(guess > secretNumber ? 'TOO HIGH !📈' : 'TOO LOW !📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displyMessage('YOU LOST THE GAME!😱');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  displyMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
