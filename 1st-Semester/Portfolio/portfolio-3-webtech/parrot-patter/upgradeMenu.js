/*
 * Improved Hands Upgrade
 */
// Get all needed elements
const upgradeHandButton = document.querySelector("#upgrade-hands");
const upgradeHandCounterElement = document.querySelector("#upgrade-hands-amount");
let upgradeHandCounter = Number(upgradeHandCounterElement.textContent);
const upgradeHandPriceElement = document.querySelector("#upgrade-hands-price");
let upgradeHandPrice = Number(upgradeHandPriceElement.textContent);
upgradeHandButton.addEventListener("click", function() {
    if (seedCounter >= upgradeHandPrice) {
        // Style button on click
        upgradeHandButton.style.transform = "scale(1.0)";
        upgradeHandButton.style.transition = "transform 0.1s ease-in-out";
        upgradeHandButton.style.backgroundColor = "var(--color-accent)";

        // Subtract price from seed counter
        seedCounter = seedCounter - upgradeHandPrice;
        seedCounterElement.textContent = seedCounter;

        // Update hand counter
        upgradeHandCounter = upgradeHandCounter + 1;
        upgradeHandCounterElement.textContent = upgradeHandCounter;

        // Update price, rounded down to whole number
        upgradeHandPrice = Math.floor(upgradeHandPrice * 2.25)
        upgradeHandPriceElement.textContent = upgradeHandPrice;
    }
});

// Style hand button on hover
upgradeHandButton.addEventListener("mouseover", function() {
    document.querySelector("#upgrade-button-mouseover").textContent = "Increases the amount of pats you get per click"
    if (seedCounter >= upgradeHandPrice) {
        upgradeHandButton.style.backgroundColor = "var(--color-button-enabled)";
        upgradeHandButton.style.transform = "scale(1.05)";
        upgradeHandButton.style.cursor = "pointer";
    } else {
        upgradeHandButton.style.backgroundColor = "var(--color-button-disabled)";
        upgradeHandButton.style.cursor = "not-allowed";
    }
});
upgradeHandButton.addEventListener("mouseout", function() {
    document.querySelector("#upgrade-button-mouseover").textContent = ""
    upgradeHandButton.style.backgroundColor = "var(--color-accent)";
    upgradeHandButton.style.transform = "scale(1.0)";
    upgradeHandButton.style.cursor = "default";
});

/*
 * Automatic Patter Upgrade
 */
// Get all needed elements
const upgradeAutopatButton = document.querySelector("#upgrade-autopat");
const upgradeAutopatCounterElement = document.querySelector("#upgrade-autopat-amount");
let upgradeAutopatCounter = Number(upgradeAutopatCounterElement.textContent);
const upgradeAutopatPriceElement = document.querySelector("#upgrade-autopat-price");
let upgradeAutopatPrice = Number(upgradeAutopatPriceElement.textContent);
upgradeAutopatButton.addEventListener("click", function() {
    if (seedCounter >= upgradeAutopatPrice) {
        // Style button on click
        upgradeAutopatButton.style.transform = "scale(1.0)";
        upgradeAutopatButton.style.transition = "transform 0.1s ease-in-out";
        upgradeAutopatButton.style.backgroundColor = "var(--color-accent)";

        // Subtract price from seed counter
        seedCounter = seedCounter - upgradeAutopatPrice;
        seedCounterElement.textContent = seedCounter;

        // Update autopat counter
        upgradeAutopatCounter = upgradeAutopatCounter + 1;
        upgradeAutopatCounterElement.textContent = upgradeAutopatCounter;

        // Update price, rounded down to whole number
        upgradeAutopatPrice = Math.floor(upgradeAutopatPrice * 1.35);
        upgradeAutopatPriceElement.textContent = upgradeAutopatPrice;

        // Start autopatting when first upgrade is bought
        if (upgradeAutopatCounter === 1) {
            setInterval(function() {
                seedCounter = seedCounter + upgradeAutopatCounter;
                seedCounterElement.textContent = seedCounter;

                patCounter = patCounter + upgradeAutopatCounter;
                patCounterElement.textContent = patCounter;
            }, 1000)
        }
    }
})

// Style autopat button on hover
upgradeAutopatButton.addEventListener("mouseover", function() {
    document.querySelector("#upgrade-button-mouseover").textContent = "Automatically pats the parrot every second"
    if (seedCounter >= upgradeAutopatPrice) {
        upgradeAutopatButton.style.backgroundColor = "var(--color-button-enabled)";
        upgradeAutopatButton.style.transform = "scale(1.05)";
        upgradeAutopatButton.style.cursor = "pointer";
    } else {
        upgradeAutopatButton.style.backgroundColor = "var(--color-button-disabled)";
        upgradeAutopatButton.style.cursor = "not-allowed";
    }
});
upgradeAutopatButton.addEventListener("mouseout", function() {
    document.querySelector("#upgrade-button-mouseover").textContent = ""
    upgradeAutopatButton.style.backgroundColor = "var(--color-accent)";
    upgradeAutopatButton.style.transform = "scale(1.0)";
    upgradeAutopatButton.style.cursor = "default";
});