//  to do (to fix)
// 4. generate valid password
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
  const lengthConfirm = prompt("Enter Your Desired Password Length...");
  while (lengthConfirm <= 8 || lengthConfirm >= 128) {
    alert("The Password Length MUST be within 8-128 Characters!");
    console.log("alert working");
    const lengthConfirm = prompt("Enter Your Desired Password Length...");
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

  // if confirm variables are true, concatenate confirm arrays into the new password to be displayed (which is a string)
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
}

//   let password = "";

//   return password;
// };

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.display = "block";
}

document.querySelector("#generate").addEventListener("click", writePassword);

// progress - for version control..
// if writePassword is used here, undefined is returned. password is calculated, but interpreter doesn't know what to display.
// currently... undefined is still being returned. no password yet.
