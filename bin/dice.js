// Test your work by running the command: 
// node bin/dice.js
//
// Write a script that chooses two random numbers (1-6) and prints them to the console. 
// It should also print the sum

let num1 = Math.floor((Math.random() * 6) + 1)
let num2 = Math.floor((Math.random() * 6) + 1)

console.log(`${num1}, ${num2}`)

console.log(num1 + num2)

// BONUS: have your script take an argument of the # of dice to be rolled. 
// i.e. if I run `node bin/dice-roller.js 5` it should roll 5 dice, print each dice result, and the sum.