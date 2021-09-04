// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  var passwordLength = prompt("How long would you like your password to be? Choose a number between 8 and 128")
  if (passwordLength < 8) {
   passwordLength = prompt("Please choose a number between 8 and 128")
  }else if (passwordLength > 128) {
    passwordLength = prompt("Please choose a number between 8 and 128")
  }else {
    console.log = passwordLength
  }

  var number = confirm("Would you like to include a number?")
   if (confirm) {
    console.log = (Math.random() *(8 - 128))
  }else {
    console.log = (null)
  }

  var specialCharacter = confirm("Would you like to include a special character?")
  if (confirm) {
   // insert special character into password
  }else {
   // DO NOT insert special character into password
  }

  var upperCase = confirm("Would you like to include upper case letters?")
  if (confirm) {
   // insert special character into password
  }else {
   // DO NOT insert special character into password
  }

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
