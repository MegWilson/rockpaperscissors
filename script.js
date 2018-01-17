// User Choice
var userChoice = prompt("Do you choose rock, paper or scissors?").toLowerCase(),
    // Output to HTML
    computerResult = document.getElementById("computerResult"),
    result = document.getElementById("result"),
    // Empty Variables
    choice1 = "",
    choice2 = "";
    


// Computer Choice (randomized)
var computerChoice = Math.random();
if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if (0.34 < computerChoice <= 0.67) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}


// Prints computer's choice
computerResult.innerHTML = ("Computer: " + computerChoice);


// Compare User VS. Computer
var compare = function(choice1, choice2) {

    // Answer is the Same
    if (choice1 === choice2) {
        document.getElementById("result").innerHTML = "Tie!";
    }
    // Rock VS. Scissors
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            document.getElementById("result").innerHTML = "You Win!";
        }
        // Rock VS. Paper
        else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Lose!";
        }
    }
    // Paper VS. Rock
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Win!";
        }
        // Paper VS. Scissors
        else if (choice2 ==="scissors") {
            document.getElementById("result").innerHTML = "You Lose!";
        }
    }
    // Scissors VS. Rock
    else if (choice1 === "scissors") {
        if (choice2 === "rock") {
            document.getElementById("result").innerHTML = "You Lose!";
        }
        // Scissors VS. Paper
        else if (choice2 === "paper") {
            document.getElementById("result").innerHTML = "You Win!";
        }
    }
    // if userChoice is not Rock, Paper, Scissors
    else {
        document.getElementById("result").innerHTML = "ERROR!";
    }
    // userChoice = choice1, computerChoice = choice2
    compare(userChoice, computerChoice);
}

// Prints winner
result.innerHTML = compare();


