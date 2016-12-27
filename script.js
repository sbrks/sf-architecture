
var map = L.map('mapid').setView([37.77, -122.4494], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic2Jya3MiLCJhIjoiY2l4NDdic2k2MDB3MDJ5bXo1amEyamtseiJ9.0F-KchzX1fhKBM6BG6srcg', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'your.mapbox.project.id',
    accessToken: 'pk.eyJ1Ijoic2Jya3MiLCJhIjoiY2l4NDdic2k2MDB3MDJ5bXo1amEyamtseiJ9.0F-KchzX1fhKBM6BG6srcg'
}).addTo(map);

// var marker = L.marker([37.7749, -122.4194]).addTo(map);

var geojsonFeature = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.3982653,
          37.7961685
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Burr Building",
        "Address": "520-550 Washington Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1855",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4031534,
          37.795701
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Columbus Savings Bank",
        "Address": "700 Montgomery Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1905",
        "Architect": "Meyer and O'Brien"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4032497,
          37.79571933
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Canessa Printing Co.",
        "Address": "708-710 Montgomery Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1913",
        "Architect": "Luigi Mastropasqua"
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.403255,
          37.79574549
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "712-714 Montgomery Street",
        "Address": "712-714 Montgomery Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "Early 1850s",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4529409,
          37.80605615
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Turkish Baths and Genella Building",
        "Address": "722 and 728 Montgomery Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4032985,
          37.7953806
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Bank of Lucas, Turner and Co.",
        "Address": "800-804 Montgomery Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1854",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4031333,
          37.79654633
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Gold Rush buildings",
        "Address": "468 Jackson Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "Early 1850s",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4020282,
          37.79652011
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Cast-iron-front buildings",
        "Address": "407 Jackson Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1850s-1870s",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.4020792,
          37.79651358
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Ghirardelli Chocolate Factory",
        "Address": "415 Jackson Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1857",
        "Architect": ""
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.402592,
          37.7964475
        ]
      },
      "properties": {
        "District": "Downtown",
        "Neighborhood": "Jackson Square",
        "Building": "Hotaling Building",
        "Address": "451 Jackson Street",
        "City": "San Francisco",
        "State": "California",
        "Year Build": "1866",
        "Architect": ""
      }
    }
  ]
}



// var coordinateArray = geojsonFeature.features;

// for (var i=0; i<coordinateArray.length; i++) {
// 	console.log(coordinateArray[i].geometry.coordinates);
// }


//binding markers to geojson data on popup
function onEachFeature(feature, layer) {
  // var coord = feature.geometry.coordinates;
  //   L.marker(coord, {icon: mapIcon}).addTo(map).bindPopup(feature.properties.Building);
    // does this feature have a property named Building?
    // if (feature.properties.Architect) {
      
    // }
    // if (feature.properties && feature.properties.Building) {
         layer.bindPopup(feature.properties.Building + "<br>" + feature.properties.Address + "<br>Year Built: " + feature.properties[Year Build] + "<br>Architect: unknown");

    // }
    if (feature.properties.Architect) {
      layer.bindPopup(feature.properties.Building + "<br>" + feature.properties.Address + 
      "<br>Architect: " + feature.properties.Architect) + "<br>Year Built: " + feature.properties[Year Build];
    }
}


var mapIcon = L.icon({
  iconUrl: '../assets/building-black.svg',
  iconSize: [32,120]
});


var geojsonMarkerOptions = {
    icon: mapIcon,
    // radius: 8,
    // fillColor: "#ff7800",
    // color: "#000",
    // weight: 1,
    // opacity: 1,
    fillOpacity: 0.8
};

L.geoJSON(geojsonFeature, {
    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, geojsonMarkerOptions)},
    onEachFeature: onEachFeature
}).addTo(map);


