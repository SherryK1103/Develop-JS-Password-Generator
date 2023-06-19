// Assignment Code
var generateBtn = document.querySelector("#generate");
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