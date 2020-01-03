var startActivityBtn = document.querySelector('#start-activity-button');
var numbersInput = document.querySelector('.section-activity-time-input');
var description = document.querySelector('#description');

window.addEventListener('load', disableStartActibityBtn);
numbersInput.addEventListener('input', checkInputForNumbersOnly);


function disableStartActibityBtn() {
  startActivityBtn.disabled = true;
}

function checkInputForNumbersOnly() {
  var minutes = document.querySelector('#minutes');
  var seconds = document.querySelector('#seconds');

  minutes.addEventListener('keyup', checkForLetterE);
  seconds.addEventListener('keyup', checkForLetterE);
}

function checkForLetterE(event) {
  var errorMessage = document.querySelectorAll('.input-error-message');

  if (event.keyCode === 69) {
    event.target.nextElementSibling.innerText = 'Numbers only please!';
  } else {
    event.target.nextElementSibling.innerText = '';
  }
}

function checkForActivityDescription() {
  var description = document.querySelector('#description');

  if (!description.value || description.value.length < 4) {
    event.target.nextElementSibling.innerText = 'Please enter a description of your activity.'
  } else {
    event.target.nextElementSibling.innerText = '';
  }
}
