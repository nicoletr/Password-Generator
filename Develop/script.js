// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128")

  // Determines users desired length of password
  if (passwordLength < 8 && passwordLength > 128) {
   passwordLength = prompt("Number must be between 8 and 128")
  }

  //Below determines what the user would like included in the password
  if (passwordLength > 8 && passwordLength < 128) {
  var includeNumber = window.confirm("Would you like to include a number?")
  var includeSpecialCharacter = confirm("Would you like to include a special character?")
  var includeUpperCase = confirm("Would you like to include upper case letters?")
  var includeLowerCase = confirm("Would you like to include lower case letters?")
  }

  if (includeNumber != true && includeSpecialCharacter != true && includeUpperCase != true && includeLowerCase != true){
    confirm("You must select at least one character type")
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
