mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', 
    center: listing.geometry.coordinates, 
    zoom: 9
});
const marker = new mapboxgl.Marker({color: "red"})
    .setLngLat(listing.geometry.coordinates) //listing.geometry.corrdinates
    .setPopup(new mapboxgl.Popup({offset: 25})
    .setHTML(`<h4>${listing.title}</h4><p>Exact Location wil be provided after booking</p>`))
    .addTo(map);