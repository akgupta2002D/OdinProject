console.log("Logged!")

let getComputerChoice = () => Math.floor((Math.random() *3) + 1);

let getHumanChoice = () => {
    let choice = parseInt(prompt("Enter your choice between (1 and 3): "));
    
    while (isNaN(choice) || choice < 1 || choice > 3) {
        choice = parseInt(prompt("Invalid input. Enter a number between 1 and 3: "));
    }
    
    return choice;
}
let computerChoice = getComputerChoice()

let humanChoice = getHumanChoice()

if (computerChoice === humanChoice) {
    console.log("Same");
} else {
    console.log("Not Same", computerChoice, humanChoice)
}