# San Francisco Architecture
### An interactive map of San Francisco's architectural landmarks

## Process
- Enter building data as CSV, including address, architect, and year built
- Convert address to latitude and longitude
- Convert CSV with lat/long to GeoJSON
- Create map layer with Mapbox
- Initialize Leaflet map with Mapbox map layer
- Bind GeoJSON data to custom map marker with built in Leaflet methods
- GeoJSON data is rendered client-side on the map
- Bind map markers to pop-up event listener to display architecture information

## Data
- All data comes from a guide to San Francisco architecture by Susan Cerny

## Technologies Used
- Leaflet.js
- GeoJSON
- Mapbox
- Bootstrap
- Javascript

## Next Steps
- Add filters to search by building type, neighborhood, year built
