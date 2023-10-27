/*
 * Main Parrot Clicker functionality
 */

// Get head pat counter & convert from string to number
const patCounterElement = document.querySelector("#pat-counter");
let patCounter = Number(patCounterElement.textContent);

// Get seed counter & convert from string to number
const seedCounterElement = document.querySelector("#seed-counter");
let seedCounter = Number(seedCounterElement.textContent);

// Parrot image clicking functionality
const calculateButton = document.querySelector("#parrot-button");
let handUpgradeVisible = false;
let autopatUpgradeVisible = false;
calculateButton.addEventListener("click", function() {
    // Add to seed counter
    seedCounter = seedCounter + upgradeHandCounter;
    seedCounterElement.textContent = seedCounter;

    // Add to head pat counter
    patCounter = patCounter + upgradeHandCounter;
    patCounterElement.textContent = patCounter;

    // Check if upgrade menu items should be displayed
    if (seedCounter >= 10 && !handUpgradeVisible) {
        document.querySelector("#upgrade-menu h2").style.display = "inline-block";
        document.querySelector("#upgrade-hands").style.display = "inline-block";
        handUpgradeVisible = true;
    }
    if (seedCounter >= 85 && !autopatUpgradeVisible) {
        document.querySelector("#upgrade-autopat").style.display = "inline-block";
        autopatUpgradeVisible = true;
    }
});
