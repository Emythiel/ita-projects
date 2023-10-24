/*
 * Main Parrot Clicker functionality
 */

// Get head pat counter
const patCounterElement = document.querySelector("#pat-counter");
let patCounter = Number(patCounterElement.textContent);

// Get seed counter
const seedCounterElement = document.querySelector("#seed-counter");
let seedCounter = Number(seedCounterElement.textContent);

// Parrot clicking
const calculateButton = document.querySelector("#parrot-button");
calculateButton.addEventListener("click", function() {
    // Add to seed counter
    seedCounter = seedCounter + upgradeHandCounter;
    seedCounterElement.textContent = seedCounter;

    // Add to head pat counter
    patCounter = patCounter + upgradeHandCounter;
    patCounterElement.textContent = patCounter;

    // Check if upgrade menu items should be displayed
    if (seedCounter >= 10) {
        document.querySelector("#upgrade-menu h2").style.display = "inline-block";
        document.querySelector("#upgrade-hands").style.display = "inline-block";
    }
    if (seedCounter >= 85) {
        document.querySelector("#upgrade-autopat").style.display = "inline-block";
    }
});
