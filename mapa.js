var map = L.map('map').setView([-38.4161, -63.6167], 5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var fishingRodIcon = L.icon({
    iconUrl: 'archivos/mapa.png',
    iconSize: [52, 52], 
    iconAnchor: [16, 32], 
    popupAnchor: [0, -32] 
});

var fishingSpots = [
    {
        name: "Lugar 1",
        coords: [-35.5808, -58.0167],
        description: "Descripcion de lugar 1.",
        image: "archivos/dia.jpg"
    },
    {
        name: "Lugar 2",
        coords: [-32.9495, -60.6473],
        description: " Descripcion de lugar 2.",
        image: "archivos/dia.jpg"
    }
];

fishingSpots.forEach(function(spot) {
    L.marker(spot.coords, { icon: fishingRodIcon }).addTo(map)
    .bindPopup(
        '<b>' + spot.name + '</b><br>' + 
        spot.description + '</b><br>' + '</b><br>' +
        '<img src="' + spot.image + '" alt="' + spot.name + '" style="width:100%;height:auto;"><br>' 
    );
});


