// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128")

  // Determines users desired length of password
  if (passwordLength < 8 && passwordLength > 128) {
   passwordLength = prompt("Number must be between 8 and 128")
  }

  if (passwordLength > 8 && passwordLength < 128) {
  //Determines if user would like to include a number in the password
  var includeNumber = window.confirm("Would you like to include a number?")
  //Determines if user would like to incluse a special character in the password
  var includeSpecialCharacter = confirm("Would you like to include a special character?")
  // Determines if user would like upper case letters in the password
  var includeUpperCase = confirm("Would you like to include upper case letters?")
  // Determines if user would like lower case letters in the password
  var includeLowerCase = confirm("Would you like to include lower case letters?")
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Functions to select characters at random using the Character Codes & strings
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=,./,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
