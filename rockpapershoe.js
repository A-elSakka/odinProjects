// Make a rock paper scissor game that is playable in the console with the computer
// New Edit + Update !
const rck = document.getElementById("rck");
const ppr = document.getElementById("ppr");
const scsr = document.getElementById("scsr");
ppr.addEventListener("click",playRound());
scsr.addEventListener("click",playRound());
rck.addEventListener("click",playRound()) 
var disp1 = document.getElementById("myscore").innerText;
var disp2 = document.getElementById("computerscore").innerText;

function playRound(){ //Play game
    var scre = 0
    var cmptrScore = 0
    const choice = ["Rock","Paper","Scissors"]; // Not so random Choices
    randomChoice = choice[Math.floor(Math.random() * 3)]; // Comp Choice
    computerChoice = randomChoice; 
    const guess = prompt("Enter your play. "); //  Gets user input
    playerChoice = guess;  
    if (guess === "rock" || "RocK" || "ROCK"){ // conditional
        console.log("successful input")
    }
    else if (guess === "paper" || "PAPER" || "Paper"){ // // conditional
        console.log("successful input")
    }
    else if (guess === "scissors" || "Scissors" || "SCISSORS"){ // // conditional
        console.log("successful input")
    }
    else { // conditional
        return ("Un-successful input. Please try once more. ")
    }
    // Onto score calculation : User chooses Rock
    if (guess === "rock" || "RocK" || "ROCK" && computerChoice === "Paper"){
        console.log("Computer won. ")
        cmptrScore += 1 
        console.log(cmptrScore)
        return
    }
    else if(guess === "rock" || "RocK" || "ROCK" || computerChoice === "Rock"){
        console.log("A tie. ")
        return
    }
    else (guess === "rock" || "RocK" || "ROCK" || computerChoice === "Scissors"){
        console.log("You somehow won")
        scre += 1
        console.log(scre)
    }
    // User chooses Paper
    if(guess === "paper" || "PAPER" || "Paper" || computerChoice === "Paper"){
        console.log("It's a tie. ")
        return
    }
    else if(guess === "paper" || "PAPER" || "Paper" || computerChoice === "Rock"){
        console.log("You somehow won. ")
        scre += 1
        console.log(scre)
        return
    }
    else(guess === "paper" || "PAPER" || "Paper" || computerChoice === "Scissors"){
        console.log("Computer won. ")
        cmptrScore += 1
        console.log(cmptrScore)
    }
    // User chooses scissors
    if(guess === "scissors" || "Scissors" || "SCISSORS" || computerChoice === "Rock"){
        console.log("Computer won. ")
        cmptrScore += 1
        console.log(cmptrScore)
        return
    }
    else if(guess === "scissors" || "Scissors" || "SCISSORS" || computerChoice === "Paper"){
        console.log("You somehow won. ")
        scre += 1
        console.log(scre)
        return
    }
    else(guess === "scissors" || "Scissors" || "SCISSORS" || computerChoice === "Scissors"){
        console.log("It's a tie. ")
        return
    }

}
/* Needs a future look because im too tired
somehow you cant enter but the small alphabet in the prompt 
also you don't win here unless it's a very small chance
works greatly 
might edit this with return values not console logs
*/