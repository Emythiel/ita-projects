// This is the array you have to use!
console.log(ufoSightingsLatLng);

const ufoMap = L.map('map').setView([56, 10.5], 7);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(ufoMap);

function placeMarker(mapObj) {
    ufoSightingsLatLng.forEach((posObjectData) => {
        const lat = posObjectData.lat;
        const lng = posObjectData.lng;
        const marker = L.marker([lat, lng]).addTo(mapObj);
        addMarkerText(marker, posObjectData)
    })
}

function addMarkerText(marker, posObjectData) {
    marker.bindPopup(
        "<b>Dato: " + posObjectData.date + "</b>" +
        "<br>Start tid: " + posObjectData.start_time +
        "<br>Duration: " + posObjectData.duration +
        "<br>Place: " + posObjectData.place +
        "<br>Farver: " + posObjectData.farver +
        "<br>Vidner: " + posObjectData.vidner
    );
}

placeMarker(ufoMap)