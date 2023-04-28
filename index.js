import { createInterface } from "readline";

// create an interface for accepting values
const inputUtil = createInterface({
    input: process.stdin,
    output: process.stdout,
})

const choice = ["rock", "paper", "scissors"];
function compareChoices(computerChoice, userChoice) {
    if (userChoice == computerChoice) {
        console.log("It's a tie")
    } else if (userChoice == "rock" && computerChoice == "scissor") {
        console.log("User Wins")
    } else if (userChoice == "rock" && computerChoice == "paper") {
        console.log("Computer Wins")
    } else if (userChoice == "paper" && computerChoice == "rock") {
        console.log("User Wins")
    } else if (userChoice == "paper" && computerChoice == "scissor") {
        console.log("Computer Wins")
    } else if (userChoice == "scissor" && computerChoice == "paper") {
        console.log("User Wins")
    } else if (userChoice == "scissor" && computerChoice == "rock") {
        console.log("Computer Wins")
    }
}

function makeAChoice() {
    // const choice = ["rock", "paper", "scissors"];

    const randIdx = Math.floor(Math.random() * 3);
    return choice[randIdx]

    
}

function startGame(userChoice) {
    userChoice = userChoice.toLowerCase();
    console.log(`You chose ${userChoice}`)
    // let choice = ["rock", "paper", "scissors"];

    if (userChoice !== choice){
        console.log("Enter the right move")
    }

    // generate a choice for the cpmputer
    const computerChoice = makeAChoice();
    console.log(`The  computer chose ${computerChoice}`)



    compareChoices(computerChoice, userChoice);



    // end the process
    process.exit(0)
}

// ask user a question
inputUtil.question("Make a move (rock, paper, scissor):", startGame)