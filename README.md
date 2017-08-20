# San Francisco Architecture
### An interactive map of San Francisco's architectural landmarks
This web application is a live visualization of some of San Francisco's best buildings and landmarks. The project was inspired by my love for architecture, combined with my interest in learning how to work with GeoJSON data. 

## Process
- Enter building data into CSV file, including address, latitude, architect, and year built
- Convert address to latitude and longitude coordinates
- Convert CSV with lat/long to GeoJSON
- Create map layer with Mapbox
- Initialize Leaflet map with Mapbox map layer
- Bind GeoJSON data to custom map marker with built in Leaflet methods
- GeoJSON data is rendered client-side on the map
- Bind map markers to pop-up event listener to display architecture information

## Data
- The original building information comes from the book "A Guide to San Francisco Architecture" by Susan Cerny
- I converted the building information and history into salient data points (lat/long, year built, neighborhood) in order to make it GeoJSON friendly

## Technologies Used
- Leaflet.js
- GeoJSON
- Mapbox
- Bootstrap
- Javascript

## Next Steps
- Add filters to search by building type, neighborhood, year built
- Add more building data for western half of city
