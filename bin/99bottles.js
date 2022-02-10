// Test your work by running the command: 
// node bin/99bottles.js
// Running the program should print the lyrics of the song, be efficient and use loops/if statements

let num1 = ""

for (let i = 0; i <= 99; i++) {
    num1 = num1 + i 
    num2 = num1 + (i -1)
}  

console.log(`${num} bottles of beer on the wall ${num} bottles of beer. Take one down and pass it around, ${num2} bottles of beer on the wall`)