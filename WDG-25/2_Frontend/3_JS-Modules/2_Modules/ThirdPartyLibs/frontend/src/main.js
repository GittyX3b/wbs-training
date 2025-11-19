import "./style.css";
import Leaflet from "leaflet"; // import everything from leaflet
import "leaflet/dist/leaflet.css"; // import leaflet css

const Start = [52.500131, 13.372]; // start coordinates
const map = Leaflet.map("map").setView(Start, 10); // create a map object with a center and zoom level

const myLocations = [
  {
    name: "WBS CODING SCHOOL",
    location: [52.457131, 13.54007],
    description: "The best coding school in the world",
  },
  {
    name: "Alexanderplatz",
    location: [52.521918, 13.413215],
    description: "The most famous square in Berlin",
  },
  {
    name: "Brandenburg Gate",
    location: [52.516275, 13.377704],
    description: "The most famous gate in Berlin",
  },
  {
    name: "Berlin Wall",
    location: [52.507541, 13.39032],
    description: "The most famous wall in Berlin",
  },
];

myLocations.forEach((item) => {
  const markerIcon = Leaflet.icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
    iconAnchor: [10, 20],
  }); // create marker
  Leaflet.marker(item.location, { icon: markerIcon }).addTo(map); // add a marker to the map
});

Leaflet.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 20,
  attribution: '&copy; <a href="https://google.com" target="_blank">Google</a>',
}).addTo(map); // add a tile layer to the map, the tiles are those images that make up the map

// const bounds = Leaflet.latLngBounds(
//   myLocations.map((location) => location.location)
// );
// map.fitBounds(bounds);
