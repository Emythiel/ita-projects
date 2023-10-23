/*
 * Cookie Clicker inspired game
 */

const patCounterElement = document.querySelector("#pat-counter");
let patCounter = Number(patCounterElement.textContent);

const seedCounterElement = document.querySelector("#seed-counter");
let seedCounter = Number(seedCounterElement.textContent);

const calculateButton = document.querySelector("#parrot-button");
calculateButton.addEventListener("click", function() {
    seedCounter = seedCounter + upgradeHandCounter;
    seedCounterElement.textContent = seedCounter;

    patCounter = patCounter + upgradeHandCounter;
    patCounterElement.textContent = patCounter;
});
