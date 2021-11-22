// Variables created for the different character types
var specialCharacters = "_!@#$%^&*()";
var numberCharacters = "0123456789";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var characterCombination = "";

//HTML button functionality
const generateButton = document.getElementById('generateBtn')
generateButton.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Function to generate prompts upon clicking 'Generate Password' button
function generatePassword() {
  var passwordLength = prompt("What is the password's character length? (Enter an integer from 8 up to 128.)");
  passwordLength = parseInt(passwordLength);

    if (passwordLength >= 8 && passwordLength <= 128){
  var numbers = confirm("Allow password to contain numbers?");
  var lowerCases = confirm("Allow password to contain lowercase letters?");
  var upperCases = confirm("Allow password to contain uppercase letters?");
  var special = confirm("Allow password to contain special characters?");}
  else{ alert("Invalid response. Please make sure your response is an integer no less than 8 and no greater than 128.")
  return ""}
  while (!numbers && !lowerCases && !upperCases && !special) {
    alert("You must select at least one character type!");
    var numbers = confirm("Allow password to contain numbers?");
    var lowerCases = confirm("Allow password to contain lowercase letters?");
    var upperCases = confirm("Allow password to contain uppercase letters?");
    var special = confirm("Allow password to contain special characters?");}

//Altering password configuration based on responses to prompts
  if (numbers){
      characterCombination += numberCharacters;
      console.log(characterCombination);}
  if (lowerCases){
      characterCombination += lowerCaseCharacters;
      console.log(characterCombination);}
  if (upperCases){
      characterCombination += upperCaseCharacters;
      console.log(characterCombination);}
  if (special){
      characterCombination += specialCharacters;
      console.log(characterCombination);}

randomPasswordGenerated = "";

//Looping result according to all previous inputs
for (var i = 0, n = characterCombination.length; i < passwordLength; ++i) {  
    randomPasswordGenerated += characterCombination.charAt(Math.floor(Math.random() * n));}

//Password output
return randomPasswordGenerated;}