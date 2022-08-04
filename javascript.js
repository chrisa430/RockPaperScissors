const optionBtn = document.querySelectorAll('div.optionBtn button');
const roundResults = document.querySelector('#roundResults');
const playerPoints = document.querySelector('#playerScore');
const computerPoints = document.querySelector('#computerScore');
const resetBtn = document.querySelector('#reset');

resetBtn.addEventListener('click',() => location.reload());

optionBtn.forEach(button => { button.addEventListener('click', getPlayerChoice) });
