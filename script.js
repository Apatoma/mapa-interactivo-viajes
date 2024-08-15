const map = L.map('map').setView([51.505, -0.09], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

const placesList = document.getElementById('places-list');

map.on('click', function(e) {
    const marker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
    const place = document.createElement('li');
    place.textContent = `Latitud: ${e.latlng.lat}, Longitud: ${e.latlng.lng}`;
    placesList.appendChild(place);
});
