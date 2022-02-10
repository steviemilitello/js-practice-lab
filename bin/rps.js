// Test your work by running the command:
// node bin/rps.js
// Write a script that looks at a variable representing either rock, paper, or scissors, and picks a random one to pit it against.
// Log "Computer picked: <rock/paper/scissors>. You <win/lose>".
// **Hint:** Try using Numbers to relate to user choices like using 0 to refer to rock, 1 for paper, and 2 for scissors. Javascript includes a `random` method within the `Math` built-in object to help you generate these numbers.


let choice = Math.floor((Math.random() * 3 + 0)) 

if (choice === 0) {
    console.log("Tie")
} else if (choice === 1) {
    console.log("You Lose")
} else if (choice == 2) {
    console.log("You Win")
}

