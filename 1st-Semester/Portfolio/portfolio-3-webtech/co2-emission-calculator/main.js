/*
 * Create a web app that allows users to calculate their personal
 * CO2 emissions based on their daily activities.
 * This could be based on the distance they drive, the type of food they consume,
 * their electricity usage etc.
 *
 *  - Maybe a user inputs how many miles they drive in a week and the type of vehicle they own
 *    and the website calculates their weekly CO2 emissions.
 *  - Maybe a user inputs the type of food they consume in a week (vegetarian, non-vegetarian, vegan)
 *    and the website calculates the CO2 emissions based on their diet.
 *  - Maybe a user inputs their monthly electricity bill, and the website estimates
 *    their CO2 emissions based on average energy sources.
 *
 * If you cannot think of any idea, try researching common sources of personal CO2 emissions
 * and see if you can incorporate them into your calculator!
 */
const calculateButton = document.querySelector("#calculate-button");

calculateButton.addEventListener("click", function() {
    const getInputKM = document.querySelector("#input-km").value;
    const getInputVehicle = document.querySelector("#input-vehicle").value
    const getOutputElement = document.querySelector("#calculated-result")

    if (getInputKM > 0 && getInputVehicle) {
        let calculatedCO2 = 0
        if (getInputVehicle === 'medium-petrol-car') {
            calculatedCO2 = getInputKM * 192
        } else if (getInputVehicle === 'medium-diesel-car') {
            calculatedCO2 = getInputKM * 171
        } else if (getInputVehicle === 'bus') {
            calculatedCO2 = getInputKM * 105
        } else if (getInputVehicle === 'motorcycle') {
            calculatedCO2 = getInputKM * 103
        } else if (getInputVehicle === 'two-passenger-petrol-car') {
            calculatedCO2 = getInputKM * 96
        } else if (getInputVehicle === 'electric-car') {
            calculatedCO2 = getInputKM * 53
        } else if (getInputVehicle === 'train') {
            calculatedCO2 = getInputKM * 41
        }

        getOutputElement.textContent = `By driving ${getInputKM} km in a week, using a ${getInputVehicle}, you've emitted ${calculatedCO2} CO2!`
    } else {
        getOutputElement.textContent = `Invalid input. Make sure you've inputted a distance, and selected a vehicle type!`
    }
})