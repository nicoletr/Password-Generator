// Assignment Code
var generateBtn = document.querySelector("#generate");

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Determines users desired length of password
  var passwordLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128")
  if (passwordLength < 8 && passwordLength > 128) {
   passwordLength = prompt("Please choose a number between 8 and 128")
  }else {
    console.log = passwordLength
  }

  //Determines if user would like to include a number in the password
  var includeNumber = window.confirm("Would you like to include a number?")
   if (includeNumber) {
    console.log = (Math.random() *(8 - 128))
  }else {
    console.log = ("No numbers")
  }

  //Determines if user would like to incluse a special character in the password
  var includeSpecialCharacter = confirm("Would you like to include a special character?")
  if (includeSpecialCharacter) {
   console.log = ("Special character")
  }else {
   console.log = ("No special character")
  }

  // Determines if user would like upper case letters in the password
  var includeUpperCase = confirm("Would you like to include upper case letters?")
  if (includeUpperCase) {
    console.log = getRandomUpper();
  }

  // Determines if user would like lower case letters in the password
  var includeLowerCase = confirm("Would you like to include lower case letters?")
  if (includeLowerCase) {
    console.log = getRandomLower();
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
