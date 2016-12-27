
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
    },
    {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4006932,37.79634557 ]
    },
    "properties": {
    "Building":"U.S. Custom House",
    "Address":"555 Battery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1911",
    "Architect":"Eames and Young"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.402211,37.797566 ]
    },
    "properties": {
    "Building":"The Barbary Coast",
    "Address":"400 and 500 Blocks of Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1910",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.403025,37.797296 ]
    },
    "properties": {
    "Building":"Engine Co. 1",
    "Address":"451 Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1909",
    "Architect":"Newton J. Tharp"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4034024,37.7974582 ]
    },
    "properties": {
    "Building":"Livery Stables",
    "Address":"450 Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1907",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4039364,37.79734833 ]
    },
    "properties": {
    "Building":"Diana Hall & Lew Purcell's So Different",
    "Address":"544 Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4043142,37.79713408 ]
    },
    "properties": {
    "Building":"Hippodrome THeater",
    "Address":"551 Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4046251,37.79726148 ]
    },
    "properties": {
    "Building":"The Seattle Saloon and Dance Hall",
    "Address":"570 Pacific Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1907",
    "Architect":"James Francis Dunn"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.3066559,37.91032108 ]
    },
    "properties": {
    "Building":"Sentinel Building",
    "Address":"916 Kearney Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1907",
    "Architect":"Salfield and Kohlberg"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.403338,37.795748 ]
    },
    "properties": {
    "Building":"Banco Populare Italiano Fugazi",
    "Address":"Columbus Avenue and Montgomery Street Intersection",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1908",
    "Architect":"Paff and Baur"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.404005,37.796005 ]
    },
    "properties": {
    "Building":"Columbo Building",
    "Address":"21 Columbus Avenue",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1913",
    "Architect":"Reid Brothers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4051372,37.79568265 ]
    },
    "properties": {
    "Building":"Lodging house and stores",
    "Address":"833 Kearny Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1913",
    "Architect":"Joseph Cahen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4027855,37.79520225 ]
    },
    "properties": {
    "Building":"Transamerica Pyramid",
    "Address":"600 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1971",
    "Architect":"William Pereira and Associates"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4029417,37.7944248 ]
    },
    "properties": {
    "Building":"Bank of Italy",
    "Address":"550 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1908",
    "Architect":"Shea and Lofquist"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4061402,37.7933866 ]
    },
    "properties": {
    "Building":"Small brick commercial buildings",
    "Address":"Sacramento, Clay, Sansome, Leidesdorff, and Commerical Streets",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1914",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4038546,37.79449086 ]
    },
    "properties": {
    "Building":"643-647 Clay",
    "Address":"643 Clay",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1912",
    "Architect":"Joseph Cahen"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4025805,37.79465931 ]
    },
    "properties": {
    "Building":"555 Clay",
    "Address":"555 Clay",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1907",
    "Architect":"C.A. Meussdorffer"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4014453,37.79411233 ]
    },
    "properties": {
    "Building":"405 Sansome",
    "Address":"405 Sansome",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906",
    "Architect":"Salfield and Kohlberg"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.402435,37.794378 ]
    },
    "properties": {
    "Building":"554-556 Commercial",
    "Address":"554 Commercial",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1908, 1914, 1907",
    "Architect":"Rousseau and Rousseau, Frederick H. Meyer, Wright Rushfort and Cahill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.2878337,37.7853732 ]
    },
    "properties": {
    "Building":"Britton and Rey Lithography Plant",
    "Address":"560 Sacramento and ",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1909",
    "Architect":"Albert PIssis"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4024559,37.7940923 ]
    },
    "properties": {
    "Building":"Britton and Rey Lithography Plant",
    "Address":"215 Leidesdorff",
    "City":"",
    "State":"",
    "Year Build":"",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4032256,37.79366238 ]
    },
    "properties": {
    "Building":"Jack's Restaurant",
    "Address":"615 Sacramento Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1907",
    "Architect":"Salfield and Kohlberg"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4033267,37.79426602 ]
    },
    "properties": {
    "Building":"608 Commercial Street",
    "Address":"608 Commercial Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1875-1877",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.404537,37.7937 ]
    },
    "properties": {
    "Building":"Shirley Building",
    "Address":"600-602 Kearny Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1909",
    "Architect":"C.A. Meussdorffer"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4041519,37.79298435 ]
    },
    "properties": {
    "Building":"580 California Street",
    "Address":"580 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1984",
    "Architect":"Philip Johnson and John Burgee"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4042699,37.79254835 ]
    },
    "properties": {
    "Building":"Bank of America Building",
    "Address":"555 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1968",
    "Architect":"Wurster, Bernardi and Emmons; Skidmore, Owings & Merrill; Pietro Belluschi"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4030391,37.7930209 ]
    },
    "properties": {
    "Building":"Financial Center Building",
    "Address":"500 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1926",
    "Architect":"Meyer and Johnson"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4026524,37.7936227 ]
    },
    "properties": {
    "Building":"Italian-American Bank, and A. Borel and Co.",
    "Address":"456 Montgomery",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1908",
    "Architect":"Albert Pissis, Howard and Galloway"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4042821,37.79929185 ]
    },
    "properties": {
    "Building":"Hayward-Kohl Building",
    "Address":"400 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1900-1901",
    "Architect":"George W. Percy"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4014547,37.7936454 ]
    },
    "properties": {
    "Building":"Crown Zellerbach Building",
    "Address":"343 Sansome Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1930, 1990",
    "Architect":"Hyman and Appleton (1930), Johnson and Burgee (1900)"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.401237,37.794122 ]
    },
    "properties": {
    "Building":"Federal Reserve Bank of San Francisco",
    "Address":"400 Sansome Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1924",
    "Architect":"George W. Kelham"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.399185,37.79594 ]
    },
    "properties": {
    "Building":"One Maritime Plaza",
    "Address":"1 Maritime Plaza",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1964",
    "Architect":"Skidmore, Owings & Merrill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.3965521,37.7936491 ]
    },
    "properties": {
    "Building":"Tadich Grill",
    "Address":"240-242 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1909",
    "Architect":"Ralph Warner Hart"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.3965521,37.7936491 ]
    },
    "properties": {
    "Building":"John Hancock Building",
    "Address":"255 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1959",
    "Architect":"Skidmore Owings & Merrill"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.400292,37.79287605 ]
    },
    "properties": {
    "Building":"Robert Dollar Building",
    "Address":"311 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1919",
    "Architect":"Charles McCall"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4009208,37.7929112 ]
    },
    "properties": {
    "Building":"Balfour Building",
    "Address":"351 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1920",
    "Architect":"George W. Kelham"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.40106,37.792217 ]
    },
    "properties": {
    "Building":"Royal Insurance Company Building",
    "Address":"201 Sansome Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1907",
    "Architect":"Howells and Stokes"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.40107,37.792007 ]
    },
    "properties": {
    "Building":"Pacific Coast Stock Exchange",
    "Address":"301 Pine Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1930",
    "Architect":"Miller and Pflueger"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4009481,37.79166455 ]
    },
    "properties": {
    "Building":"Pacific Coast Stock Exchange",
    "Address":"155 Sansome STreet",
    "City":"San Francisco",
    "State":"",
    "Year Build":"",
    "Architect":""
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.401296,37.793122 ]
    },
    "properties": {
    "Building":"Bank of California",
    "Address":"400 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1906-1908",
    "Architect":"Bliss and Faville"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4016282,37.79291239 ]
    },
    "properties": {
    "Building":"Insurance Exchange Building",
    "Address":"433 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1913",
    "Architect":"Willis Polk"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4022556,37.79283252 ]
    },
    "properties": {
    "Building":"Merchants' Exchange",
    "Address":"465 California Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1903",
    "Architect":"D.H. Burnham and Co."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4025559,37.791316 ]
    },
    "properties": {
    "Building":"Russ Building",
    "Address":"235 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1927",
    "Architect":"George W. Kelham"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4023318,37.791244 ]
    },
    "properties": {
    "Building":"Mills Building",
    "Address":"220 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1891",
    "Architect":"Burnham and Root"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4030539,37.7902124 ]
    },
    "properties": {
    "Building":"Hallidie Building",
    "Address":"130 Sutter Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1917",
    "Architect":"Willis Polk"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4042323,37.7897875 ]
    },
    "properties": {
    "Building":"Hunter-Dulin Building",
    "Address":"111 Sutter Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1926",
    "Architect":"Schultze and Weaver"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.402125,37.789212 ]
    },
    "properties": {
    "Building":"First National Bank Building",
    "Address":"1 Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1908",
    "Architect":"D.H. Burnham and Co."
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4033181,37.788079 ]
    },
    "properties": {
    "Building":"Chronicle Building",
    "Address":"690 Market Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1888-1890, 1962",
    "Architect":"Burnham and Root"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.401846,37.789206 ]
    },
    "properties": {
    "Building":"Native Sons' Monument",
    "Address":"Northeast corner of Montgomery and Market Streets",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1896-1897",
    "Architect":"Willis Polk, Douglas Tilden"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4361402,37.7622206 ]
    },
    "properties": {
    "Building":"Palace Hotel",
    "Address":"633 Market Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1909",
    "Architect":"Trowbridge and Livingston"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4012873,37.7882367 ]
    },
    "properties": {
    "Building":"Sharon Building",
    "Address":"39 New Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1912",
    "Architect":"George W. Kelham"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4013267,37.7874752 ]
    },
    "properties": {
    "Building":"Call Building",
    "Address":"74 New Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1914",
    "Architect":"Reid Brothers"
    }
  },
  {
    "type": "Feature",
    "geometry": {
       "type": "Point",
       "coordinates":  [ -122.4005128,37.7872673 ]
    },
    "properties": {
    "Building":"Rialto Building",
    "Address":"116 New Montgomery Street",
    "City":"San Francisco",
    "State":"California",
    "Year Build":"1910",
    "Architect":"Bliss and Faville"
    }
  }
  ]
}




// var coordinateArray = geojsonFeature.features;

// for (var i=0; i<coordinateArray.length; i++) {
// 	console.log(coordinateArray[i].geometry.coordinates);
// }




var mapIcon = L.icon({
  iconUrl: 'building-black.svg',
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

//binding markers to geojson data on popup
function onEachFeature(feature, layer) {
  // var coord = feature.geometry.coordinates;
  //   L.marker(coord, {icon: mapIcon}).addTo(map).bindPopup(feature.properties.Building);
    // does this feature have a property named Building?
    // if (feature.properties.Architect) {
      
    // }
    if (feature.properties && feature.properties.Building) {
         layer.bindPopup(feature.properties.Building + "<br>" + feature.properties.Address + "<br>Architect: unknown" + "<br>Year Built: " + feature.properties['Year Build']);

    }
    if (feature.properties.Architect) {
      layer.bindPopup(feature.properties.Building + "<br>" + feature.properties.Address + 
      "<br>Architect: " + feature.properties.Architect + "<br>Year Built: " + feature.properties['Year Build']);
    }
}


