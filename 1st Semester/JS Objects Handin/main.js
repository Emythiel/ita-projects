/*
--------------------------
--- JavaScript Objects ---
--------- HANDIN ---------
--------------------------
*/

/*
1) What to wear
Create a function that has temperature as parameter.
Based on temperature, it should return a string with what to wear.
*/
const tempClothesCheck = temp => {
    if (temp > 18) {
        return "Shorts and t-shirt weather!"
    } else if (temp > 10) {
        return "long shirt and pants, it's a bit chilly"
    } else if (temp > 0) {
        return "It's cold, bring a warm jacket, and a hat and gloves"
    } else if (temp > -10) {
        return "Brrrrr, it's freezing. Bring very warm clothes"
    } else {
        return "No way, stay inside and enjoy some hot chocolate under the blanket"
    }
}
console.log(tempClothesCheck(12)) // prints: long shirt and pants, it's a bit chilly



/*
2) Dice game
Create a function that simulators a dice roll.
You call the function with the number of times you want to roll.
Every time a 6 is rolled, log out "You just hit 6!"
*/

// Math.random - randomly get number between 0 and 1
// Math.floor - round down to whole number
// Multiply by 6 and plus 1 to get between 1-6 (no 0)
const getDiceRoll = () => Math.floor((Math.random() * 6) + 1);

// Loop timesToRoll amount of times, print result every loop
// If 6, print "You just hit 6!"
const rollTheDice = timesToRoll => {
    for (let i = 0; i < timesToRoll; i++) {
        const diceRoll = getDiceRoll()
        if (diceRoll === 6) {
            console.log("You just hit 6!")
        } else {
            console.log(diceRoll)
        }
    }
}
rollTheDice(2)

// Part 2 - If the user hits 6 in every roll, log out "Jackpot"
// (Added JP to some var names to differ from above part)
const getDiceRollJP = () => Math.floor((Math.random() * 6) + 1);
const rollTheDiceJP = timesToRoll => {
    let sixResultTracker = 0 // We track the amount of times we roll 6, starting at 0
    for (let i = 0; i < timesToRoll; i++) {
        const diceRoll = getDiceRollJP()
        if (diceRoll === 6) {
            sixResultTracker = sixResultTracker + 1 // In every loop, if we roll 6 we add 1 to tracker
            console.log("You just hit 6!")
        } else {
            console.log(diceRoll)
        }
    }
    if (sixResultTracker === timesToRoll) { // If the tracker is the same as times we roll, print jackpot
        console.log("Jackpot! You rolled all 6!")
    }


}
rollTheDiceJP(2)

/*
3) Build a sentiment analyzer
A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
Eg. "I am mega super awesome happy" should have a high score.
"I hate doing boring stuff" should have a low score.
Create a function that takes a string as parameter.
Calling the function will return an object with score, positiveWords and negativeWords.
*/


/*
4) Character frequencies
Write a function that counts the frequency of characters in a string.
*/


/*
5) Credit Card number formatter
Create a function that takes a number as parameter.
The function should return the same number, but with a space after every 4 characters.
It should be 16 characters long (so 4 groups of 4 numbers).
To consider:
    What happens if the function is called with an argument that is not a number?
*/
