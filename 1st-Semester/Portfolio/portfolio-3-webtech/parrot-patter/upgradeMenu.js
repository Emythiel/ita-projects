/*
 * Improved Hands Upgrade
 */
const upgradeHandButton = document.querySelector("#upgrade-hands");
const upgradeHandCounterElement = document.querySelector("#upgrade-hands-amount");
let upgradeHandCounter = Number(upgradeHandCounterElement.textContent);
const upgradeHandPriceElement = document.querySelector("#upgrade-hands-price");
let upgradeHandPrice = Number(upgradeHandPriceElement.textContent);
upgradeHandButton.addEventListener("click", function() {
    if (seedCounter >= upgradeHandPrice) {
        seedCounter = seedCounter - upgradeHandPrice;
        seedCounterElement.textContent = seedCounter;

        upgradeHandCounter = upgradeHandCounter + 1;
        upgradeHandCounterElement.textContent = upgradeHandCounter;

        upgradeHandPrice = Math.floor(upgradeHandPrice * 2.25)
        upgradeHandPriceElement.textContent = upgradeHandPrice;

    }
});
upgradeHandButton.addEventListener("mouseover", function() {
    document.querySelector("#upgrade-button-mouseover-hands").style.display = "block"
});

/*
 * Automatic Patter Upgrade
 */
const upgradeAutopatButton = document.querySelector("#upgrade-autopat");
const upgradeAutopatCounterElement = document.querySelector("#upgrade-autopat-amount");
let upgradeAutopatCounter = Number(upgradeAutopatCounterElement.textContent);
const upgradeAutopatPriceElement = document.querySelector("#upgrade-autopat-price");
let upgradeAutopatPrice = Number(upgradeAutopatPriceElement.textContent);
upgradeAutopatButton.addEventListener("click", function() {
    if (seedCounter >= upgradeAutopatPrice) {
        seedCounter = seedCounter - upgradeAutopatPrice;
        seedCounterElement.textContent = seedCounter;

        upgradeAutopatCounter = upgradeAutopatCounter + 1;
        upgradeAutopatCounterElement.textContent = upgradeAutopatCounter;

        upgradeAutopatPrice = Math.floor(upgradeAutopatPrice * 1.35);
        upgradeAutopatPriceElement.textContent = upgradeAutopatPrice;
    }
    if (upgradeAutopatCounter === 1) {
        setInterval(function() {
            seedCounter = seedCounter + upgradeAutopatCounter;
            seedCounterElement.textContent = seedCounter;

            patCounter = patCounter + upgradeAutopatCounter;
            patCounterElement.textContent = patCounter;
        }, 1000)
    }
})
