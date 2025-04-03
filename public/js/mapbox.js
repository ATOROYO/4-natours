/* eslint-disable  */

const locations = JSON.parse(document.getElementById('map').dataset.locations);
console.log(locations);

mapboxgl.accessToken =
  'pk.eyJ1IjoiYXRvcm95byIsImEiOiJjbTh6dmEzc3MwZjJ3Mm5zaWsxODE3bWw1In0.BvovezIugSD8Nysyvrj7Ig';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/atoroyo/cm8zxxcbn006701r4d7j82wup',
  scrollZoom: false,
  center: [3.013018, 30.916512],
});

const bounds = new mapboxgl.LngLatBounds();

locations.forEach((loc) => {
  // Cfreate maker
  const el = document.createElement('div');
  el.className = 'marker';

  // Add marker
  new mapboxgl.Marker({
    element: el,
    anchor: 'bottom',
  })
    .setLngLat(loc.coordinates)
    .addTo(map);

  // Add popup
  new mapboxl.Popup({
    offset: 30,
  })
    .setLngLat(loc.coordinates)
    .setHTML(`<p>Day ${loc.day}: ${loc.description}</p>`)
    .addTo(map);

  // Extends map bounds to include current location
  bounds.extend(loc.coordinates);
});

map.fitBounds(bounds, {
  padding: {
    top: 200,
    bottom: 150,
    left: 100,
    right: 100,
  },
});
