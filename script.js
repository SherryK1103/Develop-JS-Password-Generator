// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} 
var generateBtn = document.querySelector("#generate");
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = lowerCase.toUpperCase();
var numeric = "0123456789";
var special = "!@#$%^&*()";

function generatePassword() {
var passwordLength = prompt("How long do you want your password to be?");
if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 chracters!")
  return;
}
var includeLowerCase = prompt("Do you want your password to include lowercase characters?");

var includeUpperCase = prompt("Do you want your password to include uppercase characters?");

var includeNumeric = prompt("Do you want your password to include numeric characters?");

var includeSpecial = prompt("Do you want your password to include special characters?");
var passwordChoice = "";
if (includeLowerCase == "y") {
  passwordChoice = passwordChoice.concat(lowerCase); 
} 
if (includeUpperCase == "y") {
  passwordChoice = passwordChoice.concat(upperCase);
}
if (includeNumeric == "y") {
  passwordChoice = passwordChoice.concat(numeric);
}
if (includeSpecial == "y") {
  passwordChoice = passwordChoice.concat(special);
}
var generatedPassword = ""

for (let index = 0; index < passwordLength; index++) {
  var characterIndex = getRandomInt(passwordChoice.length);
  passwordChoice[characterIndex];  
}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function addition(number1,number2) {
  return number1 + number2;
}

var result = addition(5, 7)