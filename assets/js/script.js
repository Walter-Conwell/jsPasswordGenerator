//  to do (to fix)
// 5. fix file structure
// 6. put screenshot, live link, and description in readme.
// 7. make sure password displays properly.

// Assignment Code
// variable declarations
let lengthConfirm = "";
let specCharsConfirm;
let lowCaseConfirm;
let upCaseConfirm;
let digitConfirm;
let generatedChars = [];
let newPassword = "";

// array declarations
let specCharsCriteria = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  ",",
  ".",
  "/",
  ";",
  "<",
  ">",
  "?",
  ":",
  "|",
  "=",
  "-",
];

let lowCaseCriteria = [
  "q",
  "w",
  "e",
  "r",
  "t",
  "y",
  "u",
  "i",
  "o",
  "p",
  "a",
  "s",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "z",
  "x",
  "c",
  "v",
  "b",
  "n",
  "m",
];

let upCaseCriteria = [
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "A",
  "S",
  "O",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  "Z",
  "X",
  "C",
  "V",
  "N",
  "M",
];

let digitCriteria = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// function: displays prompt for user input.
function generatePassword() {
  lengthConfirm = prompt("Enter Your Desired Password Length...");
  while (lengthConfirm <= 7 || lengthConfirm >= 129) {
    alert("The Password Length MUST be within 8-128 Characters!");
    console.log("alert working");
    let lengthConfirm = prompt("Enter Your Desired Password Length...");
    console.log("prompt working");
  }

  let specCharsConfirm = confirm(
    "Hit OK To Allow Special Characters In Your Password"
  );
  let lowCaseConfirm = confirm(
    "Hit OK To Allow Lower Case Characters In Your Password"
  );
  let upCaseConfirm = confirm(
    "Hit OK To Allow Upper Case Characters In Your Password"
  );
  let digitConfirm = confirm("Hit OK To Allow Digits In Your Password");
  // error -> when all criteriaConfirm are set to cancel, undefined is returned.

  // if confirm variables are true ^, concatenate confirm arrays into the new password to be displayed (which is a string)
  if (specCharsConfirm) {
    generatedChars = generatedChars.concat(specCharsCriteria);
  }
  if (lowCaseConfirm) {
    generatedChars = generatedChars.concat(lowCaseCriteria);
  }
  if (upCaseConfirm) {
    generatedChars = generatedChars.concat(upCaseCriteria);
  }
  if (digitConfirm) {
    generatedChars = generatedChars.concat(digitCriteria);
  }
  for (var i = 0; i < lengthConfirm; i++) {
    newPassword =
      newPassword +
      generatedChars[Math.floor(Math.random() * generatedChars.length)];
  }
  console.log("passwordGenerated");
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#newPassword");
  passwordText.value = newPassword;
  passwordText.style.display = "block";
}

// event listener for generate button.
document.querySelector("#generate").addEventListener("click", writePassword);

// progress - for version control..
// currently working. Will clean up code for readability, and will add some styling flare next.
