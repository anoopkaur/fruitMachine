// Mr Seagull Wrote this - IT IS AWESOMMMMMMMEEEEEEEEEEE

// when element with id 'Start' is clicked, Spin function runs.
document.getElementById("start").addEventListener("click", spin);

// Set balance to 500
let balance = 500;
let winScore = 0;
let slots = [];

// TRIED TO STOP GAME IF BET AMOUNT IS MORE THAN BALANCE
// function noGame() {
//   if (balance >= betAmount.value || balance > betAmount.value) {
//     spin();
//   } else {
//     noSpin();
//   }
// }

function calculatePayout() {
  // winning number can be obtained from any index number as all of them would match
  const number = slots[0];
  const betAmount = document.getElementById("betAmount").value;

  switch (number) {
    case 0:
      // Cherry - 7x (no value provided so i gave it 7x)
      return;

    case 1:
      // Grapes - 2x
      return betAmount * 2;
    case 2:
      // Lemon - 3x
      return betAmount * 3;
    case 3:
      // Orange - 6x
      return betAmount * 6;
    case 4:
      // Strawberry - 5x
      return betAmount * 5;
    case 5:
      // Watermelon - 4x
      return betAmount * 4;
  }
}

function winner() {
  winScore = winScore + 1;
  balance = balance + calculatePayout();

  document.getElementById("balanceDisplay").innerText = balance;
  document.getElementById("winScore").innerText = winScore;
  document.getElementById("winLogo").src = "images/BigWin.png";
  document.getElementById("lossLogo").src = "";
}

function loser() {
  document.getElementById("lossLogo").src = "images/Fail.png";
  document.getElementById("winLogo").src = "";
}

// function noSpin() {
//   alert("Mo Money");
// }

function spin() {
  // this deducts the bet amount put in from the balance.
  balance = balance - document.getElementById("betAmount").value;
  document.getElementById("balanceDisplay").innerText = balance;

  // This has the pushed numbers from spinReel e.g. slots = [2, 3, 3]
  slots = [];
  slots.push(spinReel("r1")); // slots.push(2);
  slots.push(spinReel("r2")); // slots.push(3);
  slots.push(spinReel("r3")); // slots.push(3);
  // The id for the slot images are put into argument for the spinReel function, when the random number is generated it is pushed into the slots array.

  // Check if the reels match up by checking 0 and 1 & 0 and 2
  // If numbers match then the winner function will be called.
  if (slots[0] == slots[1] && slots[0] == slots[2]) {
    winner();
  } else {
    loser();
  }
}

// Random no. generated between 1 and 5. Each result is paired with a fruit image.
function spinReel(reel) {
  let i = Math.floor(Math.random() * 6);
  if (i == 0) {
    document.getElementById(reel).src = "images/Cherry.png";
  }
  if (i == 1) {
    document.getElementById(reel).src = "images/Grapes.png";
  }
  if (i == 2) {
    document.getElementById(reel).src = "images/Lemon.png";
  }
  if (i == 3) {
    document.getElementById(reel).src = "images/Orange.png";
  }
  if (i == 4) {
    document.getElementById(reel).src = "images/Strawberry.png";
  }
  if (i == 5) {
    document.getElementById(reel).src = "images/Watermelon.png";
  }
  return i;
}

// function to reset the game
function gameReset() {
  document.getElementById("gameProgress").reset();
}

const updateScreen = () => {
  document.getElementById("balanceDisplay").innerHTML = balance;
};

updateScreen();
