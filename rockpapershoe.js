// Make a rock paper scissor game that is playable in the console with the computer
playRound();

function playRound(computerChoice, playerChoice){ //Play game
    var score = 0
    const choice = ["Rock","Paper","Scissors"]; // Not so random Choices
    randomChoice = choice[Math.floor(Math.random() * 3)]; // Comp Choice
    computerChoice = randomChoice; 
    const guess = prompt("Enter your play. "); //  Gets user input
    playerChoice = guess;  
    if (guess === "rock" && "RocK" && "ROCK"){ // conditional
        console.log("successful input")
    }
    else if (guess === "paper" && "PAPER" && "Paper"){ // // conditional
        console.log("successful input")
    }
    else if (guess === "scissors" && "Scissors" && "SCISSORS"){ // // conditional
        console.log("successful input")
    }
    else { // // conditional
        alert("Un-successful input. Please try once more. ")
    }
    score += 1; // score gets added
    // Onto score calculation : User chooses Rock
    if (guess === "rock" && "RocK" && "ROCK" && computerChoice === "Paper")
    console.log("Computer won. ")
    if(guess === "rock" && "RocK" && "ROCK" && computerChoice === "Rock")
    console.log("A tie. ")
    if(guess === "rock" && "RocK" && "ROCK" && computerChoice === "Scissors")
    console.log("You somehow won. ")
    // User chooses Paper
    if(guess === "paper" && "PAPER" && "Paper" && computerChoice === "Paper")
    console.log("It's a tie. ")
    if(guess === "paper" && "PAPER" && "Paper" && computerChoice === "Rock")
    console.log("You somehow won. ")
    if(guess === "paper" && "PAPER" && "Paper" && computerChoice === "Scissors")
    console.log("Computer won. ")
    // User chooses scissors
    if(guess === "scissors" && "Scissors" && "SCISSORS" && computerChoice === "Rock")
    console.log("Computer won. ")
    if(guess === "scissors" && "Scissors" && "SCISSORS" && computerChoice === "Paper")
    console.log("You somehow won. ")
    if(guess === "scissors" && "Scissors" && "SCISSORS" && computerChoice === "Scissors")
    console.log("It's a tie. ")
}    

/* Needs a future look because im too tired
somehow you cant enter but the small alphabet in the prompt 
also you don't win here unless it's a very small chance
works greatly 
might edit this with return values not console logs
*/
