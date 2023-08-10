// (fix)
// error -> after one password is generated, new password is just concatenated on.
// add visual flare, and explore icebox for features (ie save) or i may do a new version that has a built in password manager...

// variable declarations
// empty strings so that user can confirm whether criteria inclusion is true or false (boolean)
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
  // length range extended by two numbers here (7-129) because 8-128 would exclude those respective numbers.
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
  // fixed below!
  while (
    lowCaseConfirm === false &&
    digitConfirm === false &&
    upCaseConfirm === false &&
    specCharsConfirm === false
  ) {
    alert("At least one rule is needed for a new password.");
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
  }
  // if any confirm variables are true ^, concatenate them into the new password to be displayed (a string)
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

// place password within the text area.
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#newPassword");
  passwordText.value = newPassword;
  passwordText.style.display = "block";
}

// event listener for generate button.
document.querySelector("#generate").addEventListener("click", writePassword);
