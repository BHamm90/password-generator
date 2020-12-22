// Assignment Code
var generateBtn = document.querySelector("#generate");

//User Prompt/Confirm Variables
var passwordLength;
var upperChoice;
var lowerChoice;
var numberChoice;
var symbolChoice;
var options;

// Password Character Variables
// Upper Case Characters
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// Lower Case Characters
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// 0-9 Number Characters
var numbers = [0,1,2,3,4,5,6,7,8,9];
// Special Symbols
var symbols = ["!","@","#","$","%","^","&","*","(",")","{","}","[","]","=","<",">","/",".","|","~","?"];

// Adds the Generated Password to textbox
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

function eraseText() {
    document.getElementById("password").value = "";
}

//Function List for Password Generation
function generatePassword() {
    // Start of if statements
    // User Prompt
    passwordLength = parseInt(prompt("Please type a number between 8 and 128 for your password length."));
    // If no value is entered
    if (!passwordLength) {
        alert ("A value must be entered to continue.");
    
    // If invaild value is entered    
    } else if (passwordLength < 8 || passwordLength > 128) {
        passwordLength = parseInt(prompt("Your value has to be bewtween 8 and 128 to continue."));
     
    // Once valid option is choosen
    } else {
        upperChoice = confirm ("Would you like to include upper case letters?");
        lowerChoice = confirm ("Would you like to include lower case letters?");
        numberChoice = confirm ("Would you like to include numbers?");
        symbolChoice = confirm ("Would you like to include symbols?");
    };

    // All confirm options were NO's
    if (!upperChoice && !lowerChoice && !numberChoice && !symbolChoice) {
        options = alert ("Please choose one or more options to move on.");
    }

    // Else if statements for all possible options
    
    // All confirm options are Yes's
    else if (upperChoice && lowerChoice && numberChoice && symbolChoice) {
        options = upperCase.concat(lowerCase, numbers, symbols);
    }

    // If only 3 option are selected
    // If Upper Case, Lower Case, Numbers are Yes and Symbols is No 
    else if (upperChoice && lowerChoice && numberChoice) {
        options = upperCase.concat(lowerCase, numbers);
    }

    // If Upper Case, Lower Case, Symbols are Yes and Numbers is No
    else if (upperChoice && lowerChoice && symbolChoice) {
        options = upperCase.concat(lowerCase, symbols);
    }

    // If Lower Case, Numbers, Symbols are Yes and Upper Case is No
    else if (lowerChoice && numberChoice && symbolChoice) {
        options = lowerCase.concat(numbers, symbols);
    }

    // If Upper Case, Numbers, Symbols are Yes and Lower Case is No
    else if (upperChoice && numberChoice && symbolChoice) {
        options = upperCase.concat(numbers, symbols);
    }

    // If only 2 option are selected
    // If Symbols, Numbers are Yes and Upper and Lower Case are No
    else if (symbolChoice && numberChoice) {
        options = symbols.concat(numbers);
    }

    // If Symbols, Lower Case are Yes and Numbers, Upper Case are No
    else if (symbolChoice && lowerChoice) {
        options = symbols.concat(lowerCase);
    } 

    // If Symbols, Upper Case are Yes and Numbers, Lower Case are No
    else if (symbolChoice && upperChoice) {
        options = symbols.concat(upperCase);
    }

    // If Lower Case, Numbers are Yes and Upper Case, Symbols are No
    else if (lowerChoice && numberChoice) {
        options = lowerCase.concat(numbers);
    } 
    
    // If Lower Case, Upper Case are Yes and Symbols, Numbers are No
    else if (lowerChoice && upperChoice) {
        options = lowerCase.concat(upperCase);
    } 
    
    // If Numbers, Upper Case are Yes and Symbols, Lower Case are No
    else if (numberChoice && upperChoice) {
        options = numbers.concat(upperCase);
    }

    // If only 1 option is selected
    // Only Symbols is Yes
    else if (symbolChoice) {
        options = symbols;
    }
    // Only Numbers is Yes
    else if (numberChoice) {
        options = numbers;
    }
    // Only Upper Case is Yes
    else if (upperChoice) {
        options = upperCase;
    }
    // Only Lower Case is Yes
    else if (lowerChoice) {
        options = lowerCase;
    };

    // Password array placeholder for Users length amount
    var password = [];

    // Algorithm for selecting random variables
    // Using Options User Selected
    for (var i = 0; i < passwordLength; i++) {
    var selectedOptions = options[Math.floor(Math.random() * options.length)];
    password.push(selectedOptions);
    }

    // Pairs the array placeholder and user selection then converts it into a string 
    var pw = password.join("");
    UserInput(pw);
    return pw;
} 

// Add event listener to generate button
generateBtn.addEventListener("click", function () {
    onclick = eraseText();
    pw = generatePassword();
    document.getElementById("password").placeholder = pw;
});