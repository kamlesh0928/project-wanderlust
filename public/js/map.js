mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: "mapbox://styles/mapbox/streets-v12",
    center: listing.geometry.coordinates, // starting position [lng, lat]. Note that lat must be set between -90 and 90
    zoom: 9 // starting zoom   
});

map.loadImage(
    'https://res.cloudinary.com/drhrgs6y5/image/upload/v1735313693/wanderlust_DEV/utg5bqyrbjst1vpplizc.png',
    (error, image) => {
        if (error) {
            console.error("Image load error:", error);
            return;
        }

        map.addImage('locationIcon', image);

        map.addSource('point', {
            'type': 'geojson',
            'data': {
                'type': 'FeatureCollection',
                'features': [
                    {
                        'type': 'Feature',
                        'geometry': {
                            'type': 'Point',
                            'coordinates': listing.geometry.coordinates
                        }
                    }
                ]
            }
        });

        map.addLayer({
            'id': 'points',
            'type': 'symbol',
            'source': 'point',
            'layout': {
                'icon-image': 'locationIcon',
                'icon-size': 0.10
            }
        });

        const popup = new mapboxgl.Popup({
            offset: 25
        })
        .setHTML(`<h4>${listing.title}</h4><h6>Exact location will be provided after booking</h6>`);

        map.on('mouseenter', 'points', (e) => {
            const coordinates = e.lngLat;
            popup.setLngLat(coordinates).addTo(map);
        });

        map.on('mouseleave', 'points', () => {
            popup.remove();
        });
    }
);