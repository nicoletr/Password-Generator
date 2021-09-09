// Assignment Code
document.querySelector("#generate").addEventListener("click", writePassword);

var passwordLength = Number(prompt("How long would you like your password to be? Choose a number between 8 and 128"));

// Determines users desired length of password
while (passwordLength < 8 || passwordLength > 12) {
  passwordLength = prompt("Number must be between 8 and 128")
}

if (passwordLength >= 8 && passwordLength <= 128) {
  var includeNumber = confirm("Would you like to include a number?")
  var includeSymbol = confirm("Would you like to include a special character?")
  var includeUpperCase = confirm("Would you like to include upper case letters?")
  var includeLowerCase = confirm("Would you like to include lower case letters?")
}

if (includeNumber != true && includeSymbol != true && includeUpperCase != true && includeLowerCase != true){
 var oneMin = confirm("You must select at least one character type")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  var charSet = "";
  if (includeNumber = true){
    getRandomNumber ();
  }
  if (includeSymbol = true){
    getRandomSymbol ();
  }
  if (includeUpperCase = true){
    getRandomUpper ();
  }
  if (includeLowerCase = true){
    getRandomLower ();
  }

  var retVal = "";
  for (var i = 0; i < length; i++) {
    //picks a character within charSet at index of random number
    retVal += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return retVal;
}

// Functions to select characters at random using the Character Codes & strings
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getRandomNumber() {
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=,./,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

