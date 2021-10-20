// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
var uppercaseletters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercaseletters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbersArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["!", "@", "#", "$", "%", "^", "&", "*"];
const passwordsource = [];

function generatePassword(uppercase, lowercase, numbers, special, length) {
  if (uppercase) {
    var group1 = passwordsource.concat(uppercaseletters);
  } else {
    console.log("Didn't want uppercase");
  }
  if (lowercase) {
    var group2 = passwordsource.concat(lowercaseletters);
  } else {
    console.log("Didn't want lowercase");
  }
  if (numbers) {
    var group3 = passwordsource.concat(numbersArray);
  } else {
    console.log("Didn't want numbers");
  }
  if (special) {
    var group4 = passwordsource.concat(specialArray);
  } else console.log("Didn't want special characters");
  if (length < 8) {
    var incorrect = alert("Please enter a number greater then 8");
    var length = prompt("How long would you like your password");
  } else if (length > 128)
    var short = alert("Please enter a number less then 128");
  const pool = [];
  const mainpool = pool.concat(group1, group2, group3, group4);
  console.log(mainpool);

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }

  shuffle(mainpool);
  console.log(mainpool);
  return makePassword(mainpool, length);
}
function makePassword(mainpool, length) {
  var random = "";
  for (var i = 0; i < length; i++) {
    random += mainpool[Math.floor(Math.random() * mainpool.length)];
    console.log(random);
  }
  console.log(random);
  return random;
}

function runPrompts() {
  var uppercase = confirm("Would you like uppercase letters?");
  var lowercase = confirm("Would you like lowercase letters");
  var numbers = confirm("Would you like numbers?");
  var special = confirm("Would you like speical characters");
  var length = prompt("How long would you like your password");
  var password = generatePassword(
    uppercase,
    lowercase,
    numbers,
    special,
    length
  );
  return password;
}

function writePassword() {
  console.log(runPrompts());
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = runPrompts();
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
