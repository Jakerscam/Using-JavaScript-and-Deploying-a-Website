

// Variables
let costPerDay = 35;
let daysSelected = 0;
let dayButtons = document.querySelectorAll('.day-selector li');
let clearButton = document.querySelector('#clear-button');
let halfDayButton = document.querySelector('#half');
let fullDayButton = document.querySelector('#full');
let calculatedCost = document.querySelector('#calculated-cost');

//function to calculate total cost
function calculateTotalCost() {
  calculatedCost.innerHTML = daysSelected * costPerDay;
}

// Change colour of day buttons
dayButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!button.classList.contains('clicked')) {
      button.classList.add('clicked');
      daysSelected++;
    } else {
      button.classList.remove('clicked');
      daysSelected--;
    }
    calculateTotalCost();
  });
});

// Clear button
clearButton.addEventListener('click', () => {
  dayButtons.forEach(button => {
    button.classList.remove('clicked');
  });
  daysSelected = 0;
  calculateTotalCost();
});

// change rate for full/half days
halfDayButton.addEventListener('click', () => {
  costPerDay = 20;
  halfDayButton.classList.add('clicked');
  fullDayButton.classList.remove('clicked');
  calculateTotalCost();
});

fullDayButton.addEventListener('click', () => {
  costPerDay = 35;
  fullDayButton.classList.add('clicked');
  halfDayButton.classList.remove('clicked');
  calculateTotalCost();
});
