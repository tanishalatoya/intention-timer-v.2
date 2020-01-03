//make sure the time inputs can only accept numbers
//adventlistener for an input
//target input-erro-message to display error if user inputs a letter (even the letter "e")

var startActivityBtn = document.querySelector('#start-activity-button');

window.addEventListener('load', disableStartActibityBtn);

function disableStartActibityBtn() {
  startActivityBtn.disabled = true;
}



//need to be able to target each error message individually
// put event listener of the div??
// qeury select the divs and then for each div, loop while checking
//function wheere keyCode just returns true or false, nothing else {
  // the use that false value to set the error message
