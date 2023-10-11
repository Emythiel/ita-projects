/*
--------------------------
--- JavaScript Objects ---
--------- HANDIN ---------
--------------------------
*/

    /*
    * 1) What to wear
    * Create a function that has temperature as parameter.
    * Based on temperature, it should return a string with what to wear.
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
    * 2) Dice game
    * Create a function that simulators a dice roll.
    * You call the function with the number of times you want to roll.
    * Every time a 6 is rolled, log out "You just hit 6!"
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

    /*
    * Part 2 - If the user hits 6 in every roll, log out "Jackpot"
    * (Added JP (jackpot) to some variable names to differ from above part)
    */
const getDiceRollJP = () => Math.floor((Math.random() * 6) + 1);
const rollTheDiceJP = timesToRoll => {
    let sixResultTracker = 0 // We track the amount of times we roll 6, starting at 0
    for (let i = 0; i < timesToRoll; i++) {
        const diceRoll = getDiceRollJP()
        if (diceRoll === 6) {
            sixResultTracker++ // In every loop, if we roll 6 we add 1 to tracker
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
    * 3) Build a sentiment analyzer
    * A sentiment analyzer is some functionality that figures out how positive/negative a sentence is.
    * Eg. "I am mega super awesome happy" should have a high score.
    * "I hate doing boring stuff" should have a low score.
    * Create a function that takes a string as parameter.
    * Calling the function will return an object with score, positiveWords and negativeWords.
    */
// Define what words are positive and negative
const sentimentAnalyzerWords = {
    definedPositiveWords: ["happy", "awesome", "cool", "sweet", "amazing", "glad", "smile"],
    definedNegativeWords: ["sad", "angry", "bad", "unbearable", "worse", "dumb", "stupid"]
}
// Function to analyze text string
// Splits given sentence into array for each word, and loops through every word
// If word is positive, add 1 to score and push word to positive word array
// If negative, subtract 1 from score and push word to negative word array
// Return result object with final score, positive and negative word arrays
function sentimentAnalyzer(textToAnalyze) {
    const wordSplit = textToAnalyze.split(" ");
    const sentimentResultObject = {
        Score: 0,
        positiveWords: [],
        negativeWords: []
    }
    for (const element of wordSplit) {
        if (sentimentAnalyzerWords.definedPositiveWords.includes(element)) {
            sentimentResultObject.Score++
            sentimentResultObject.positiveWords.push(element)
        } else if (sentimentAnalyzerWords.definedNegativeWords.includes(element)) {
            sentimentResultObject.Score--
            sentimentResultObject.negativeWords.push(element)
        }
    }
    return sentimentResultObject;
}

console.log(sentimentAnalyzer("today was a super happy awesome cool day. but it also had stupid bad moments"))

    /*
    * 4) Character frequencies
    * Write a function that counts the frequency of characters in a string.
    */
function characterCount(stringToAnalyze) {
    const characterSplit = stringToAnalyze.split(""); //Split every character into array
    const characterCountResult = { //Sets object base to return
        characters: [],
        "total length": 0,
        "unique characters": 0
    }
    // Loop every character in split array
    for (const element of characterSplit) {
        let characterExists = false;
        // Loop through every object in characters array and see if matches character from split array
        // If match, increase count by 1 and exit loop
        for (const characterObject of characterCountResult.characters) {
            if (characterObject.character === element) {
                characterExists = true;
                characterObject.count++;
                break;
            }
        }
        // If no match, add character and count object, and increase unique characters count by 1
        if (!characterExists) {
            characterCountResult.characters.push({character: element, count: 1});
            characterCountResult["unique characters"]++;
        }
    }
    characterCountResult["total length"] = stringToAnalyze.length
    // Sort character objects alphabetically
    characterCountResult.characters.sort(function(a, b) {
        if (a.character > b.character) {return 1;}
        if (a.character < b.character) {return -1;}
        return 0;
    })
    return characterCountResult;
}
console.log(characterCount("happy"));

    /*
    * 5) Credit Card number formatter
    * Create a function that takes a number as parameter.
    * The function should return the same number, but with a space after every 4 characters.
    * It should be 16 characters long (so 4 groups of 4 numbers).
    * To consider:
    * What happens if the function is called with an argument that is not a number?
    */
function ccFormatter(ccNumber) {
    // Create base object
    const ccResult = {
        originalCC: 0,
        formattedCC: 0,
    }
    // Check if input is number, and 16 digits long - if not, return invalid input text
    if (typeof ccNumber === "number" && ccNumber.toString().length === 16) {
        ccResult.originalCC = ccNumber;
        let ccAsString = ccNumber.toString() // Convert number to string
        ccAsString = ccAsString.match(/.{4}/g) // Convert string to array, split every 4 characters
        ccResult.formattedCC = `${ccAsString[0]} ${ccAsString[1]} ${ccAsString[2]} ${ccAsString[3]}` // Insert arrays into formattedCC
    } else {
        return "Invalid Credit Card input \nMake sure it's only numbers and 16 digits long"
    }
    return ccResult
}
console.log(ccFormatter(1111222233334444))