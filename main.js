var startActivityBtn = document.querySelector('#start-activity-button');
var numbersInput = document.querySelector('.section-activity-time-input');

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




//need to be able to target each error message individually
// put event listener of the div??
// qeury select the divs and then for each div, loop while checking
//function wheere keyCode just returns true or false, nothing else {
  // the use that false value to set the error message
