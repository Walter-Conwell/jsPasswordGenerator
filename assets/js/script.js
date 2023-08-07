//  to do (to fix)
// 1. prompt for password options (no buttons, PROMPT user with alerts instead)
// 2. require minimum length. (get rid of buttons, use an array, and randomly iterate through.)
// 3. require maximum length
// 4. generate valid password
// 5. fix file structure
// 6. put screenshot, live link, and description in readme.
// 7. make sure password displays properly.

// Assignment Code

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

// got rid of noSpecCharsCriteria variable, as it is redudant.

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

// I had a hard time getting the new password to generate within the text area properly, to fix this, i set the criteriaBtn's to boolean values, as well as set the newPassword function to return an empty string, in which the newPassword would be called into.

const generatePassword = function newPassword() {
  let charSet = "";
  if (includeSpecChars) {
    charSet += specCharsCriteria;
  }
  if (includelowCase) {
    charSet += lowCaseCriteria;
  }
  if (includeupCase) {
    charSet += upCaseCriteria;
  }
  if (includedigit) {
    charSet += digitCriteria;
  }

  let password = "";

  return password;
};

//writepassword is the function that generates the password
// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.display = "block";
}

const specChars = document.getElementById("specCharsBtn");

specChars.addEventListener("click", function () {
  if (includeSpecChars) {
    includeSpecChars = false;
    console.log("Special characters removed");
  } else {
    includeSpecChars = true;
    console.log("Special characters included");
  }
});

const noSpecChars = document.getElementById("noSpecCharsBtn");

const lowCase = document.getElementById("lowCaseBtn");
lowCaseBtn.addEventListener("click", function () {
  if (includelowCase) {
    includelowCase = false;
    console.log("lowCase removed");
  } else {
    includelowCase = true;
    console.log("lowCase included");
  }
});

const upCase = document.getElementById("upCaseBtn");
upCaseBtn.addEventListener("click", function () {
  if (includeupCase) {
    includeupCase = false;
    console.log("upCase removed");
  } else {
    includeupCase = true;
    console.log("upCase included");
  }
});

const lengthBtn = document.getElementById("lengthBtn");
lengthBtn.addEventListener("click", function () {
  const lengthInput = document.getElementById("passwordLength");
  lengthCriteria = parseInt(lengthInput.value);
  console.log("Length criteria updated:", lengthCriteria);
});

const digit = document.getElementById("digitBtn");
digitBtn.addEventListener("click", function () {
  if (includedigit) {
    includedigit = false;
    console.log("digit removed");
  } else {
    includedigit = true;
    console.log("digit included");
  }
});

//generate event listener parsed at the end for performance.
const generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.display = "block";
  console.log("Password Generated:", password);
});
