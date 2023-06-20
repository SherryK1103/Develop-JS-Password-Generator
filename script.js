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
  var passwordLength = parseInt(
    prompt('How many characters would you like your password to contain?'),
    10
  );
  console.log(passwordLength)
  if (Number.isNaN(passwordLength)) {
    alert('Password length must be provided as a number');
    return null;
  }

if (passwordLength < 8 || passwordLength > 128) {
  alert("Password must be between 8 and 128 chracters! Press Generate Password button to try again.")
  return;
}




// Prompts for the user to select for generating the password, used confirm function to give the user a choice between ok or cancel. This was recommended to me by my tutor, Ramon Sanchez. I previously had the prompt function.
var includeLowerCase = confirm("Do you want your password to include lowercase characters?");
var includeUpperCase = confirm("Do you want your password to include uppercase characters?");
var includeNumeric = confirm("Do you want your password to include numeric characters?");
var includeSpecial = confirm("Do you want your password to include special characters?");
var passwordChoice = "";

if (includeLowerCase === true) {
  passwordChoice = passwordChoice.concat(lowerCase); 
} 

if (includeUpperCase === true) {
  passwordChoice = passwordChoice.concat(upperCase);
}

if (includeNumeric === true) {
  passwordChoice = passwordChoice.concat(numeric);
}

if (includeSpecial === true) {
  passwordChoice = passwordChoice.concat(special);
}

var generatedPassword = ""

for (let index = 0; index < passwordLength; index++) {
  var characterIndex = getRandomInt(passwordChoice.length);
  generatedPassword = generatedPassword.concat(passwordChoice[characterIndex]);  
} 
return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);