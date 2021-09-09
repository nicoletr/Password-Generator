//User variables
var passwordLength;
var includeNumber;
var includeSymbol;
var includeUpperCase;
var includeLowerCase;

function generatePassword(){  
  // Determines users desired length of password
  passwordLength = Number(prompt("How long would you like your password to be? Choose a number between 8 and 128"));

  //Is password is not within length parameters
  while (passwordLength < 8 || passwordLength > 12) {
    passwordLength = prompt("Password length must be between 8 and 128")
  }

  if (passwordLength >= 8 && passwordLength <= 128) {
    includeNumber = confirm("Would you like to include a number?")
    includeSymbol = confirm("Would you like to include a special character?")
    includeUpperCase = confirm("Would you like to include upper case letters?")
    includeLowerCase = confirm("Would you like to include lower case letters?")
  }
  else if (!includeNumber && !includeSymbol && !includeUpperCase && !includeLowerCase){
    alert("You must select at least one character type");
    includeNumber = confirm("Would you like to include a number?")
    includeSymbol = confirm("Would you like to include a special character?")
    includeUpperCase = confirm("Would you like to include upper case letters?")
    includeLowerCase = confirm("Would you like to include lower case letters?")
  }
  else if (includeNumber && includeSymbol && includeUpperCase && includeLowerCase){
    
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword()
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
  return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=,./,.'";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// Assignment Code + event listener
document.querySelector("#generate").addEventListener("click", writePassword);