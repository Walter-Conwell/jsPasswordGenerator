// Assignment Code
// Assigning the variables here is important so that the criterion is interpreted before the buttons. This way, the buttons can have functionality when the interpreter gets to their respective lines.
let includeSpecChars = true;

let includeupCase = true;
let includelowCase = true;
let includedigit = true;

let specCharsCriteria = "!@#$%^&*()_+,./;'[]\\<>?:\"{}|=-`~";

let noSpecCharsCriteria =
  "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890";

let lowCaseCriteria = "qwertyuiopasdfghjklzxcvbnm";

let upCaseCriteria = "QWERTYUIOPASODFGHJKLZXCVNM";

let digitCriteria = "1234567890";

let lengthCriteria = Math.floor(Math.random() * (128 - 8 + 1)) + 8;

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
  for (let i = 0; i < lengthCriteria; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

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

// a bit into development here, i realized that the 'noSpecChars' button is redundant due to specChars being a boolean value.
// noSpecCharsBtn.addEventListener("click", function () {});

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
  lengthCriteria = Math.floor(Math.random() * (128 - 8 + 1)) + 8;
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

// Add event listener to generate button
// generate.addEventListener("click", generatePassword);
// console.log("Password Generated!");

//generate button event listener at the end, so all criteria can be considered.
const generate = document.querySelector("#generate");
generate.addEventListener("click", function () {
  const password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  passwordText.style.display = "block";
  console.log("Password Generated:", password);
});
