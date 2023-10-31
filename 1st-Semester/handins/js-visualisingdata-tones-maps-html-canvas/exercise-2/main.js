console.log(danishInflationNumbersWithYear);
console.log(danishInflationNumbers);

document.querySelector('button').addEventListener('click', () => {
    let delay = 300;
    danishInflationNumbers.forEach((dataPoint, index) => {
        const synth = new Tone.Synth().toDestination();
        const now = Tone.now();
        // Play a tone based on data for the duration of a 12th note every second
        const timeBetweenNotesInSeconds = 0.3;
        synth.triggerAttackRelease((dataPoint + 50) * 2, "12n", now + (index * timeBetweenNotesInSeconds));
    });
});
