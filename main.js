let latitude = 22.7868542, longitude = 88.3643296;

mapboxgl.accessToken = `pk.eyJ1Ijoib3BoaWxpYSIsImEiOiJjbGo3bXZ1cmEwcnRhM2txZzViMTIxdHVyIn0.oA0eq_gmm0qwfpbv70OCeg`

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streetsvll',
    center: [longitude, latitude],
    zoom: 4
});

var img1 = document.querySelector("#amber")

var marker1 = mapboxgl.Marker({
    element:img1
})
.setLngLat([75.85133, 26.98547])
.addTo(map);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);