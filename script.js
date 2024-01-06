// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* Function to prompt user for password options*/
function getPasswordOptions() {

  //Gets Password Length from User
  var passwordLength= prompt("Enter the Length of the password(Length should be between 8 and 128):");


//Returns null when user selects cancel
  if(!passwordLength){
    return null
  }
  
  //Checks user input is numerical value and length is between 8 and 128
  else if(isNaN(passwordLength) || passwordLength<8 || passwordLength > 128)
  {
     alert("Password Length should be between atleast  8 characters but no more than 128");
     return null;
  }

  //prompts user to choose character type
  var useLowercase = confirm("Do you want to include lowercase letters?");
  var useUppercase = confirm("Do you want to include uppercase letters?");
  var useNumeric = confirm("Do you want to include numeric characters?");
  var useSpecialChar = confirm("Do you want include special characters?");

//checks if user has selected atleast one character
  if (!useSpecialChar && !useNumeric && !useLowercase && !useUppercase) {
    alert("Please select at least one character type.");
    return null;
  }

  //Returns all the user response as a single object
  return{
    passwordLength: passwordLength,
    useLowercase: useLowercase,
    useUppercase: useUppercase,
    useNumeric: useNumeric,
    useSpecialChar: useSpecialChar
  };

}


/* Function for getting a random element from an array*/
function getRandom(arr) {

var random= Math.floor(Math.random() * arr.length);
return arr[random];

}

/* Function to generate password with user input*/
function generatePassword() {

  var userOptions= getPasswordOptions();
//if useroptions are null (user canceled when prompted)
  if (!userOptions) {
    return null;
  }

  //Declared an Array to store user created option
  var userChoiceCharacters=[];

  //checks user's characters option and userChoiceCharacters array updated accordingly
  if(userOptions.useLowercase === true)  
{
  userChoiceCharacters= userChoiceCharacters.concat(lowerCasedCharacters);
}

if(userOptions.useNumeric === true)
{
  userChoiceCharacters= userChoiceCharacters.concat(numericCharacters);
}
if(userOptions.useSpecialChar === true){
  userChoiceCharacters= userChoiceCharacters.concat(specialCharacters);
}
if(userOptions.useUppercase === true)  {
  userChoiceCharacters = userChoiceCharacters.concat(upperCasedCharacters);
}

//Generates Password by invoking getRandom function
var passwordGenerated= "";
for(var i=0; i< userOptions.passwordLength;i++ ){
var randomPassword= getRandom(userChoiceCharacters);
passwordGenerated += randomPassword;
}

alert("Your Generated Password is:" +passwordGenerated)
return passwordGenerated ;

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);