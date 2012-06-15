//Created by Bobby Sudekum

function buildMap() {
   var southWest = new L.LatLng(-65,180); 
   var northEast = new L.LatLng(80,-180); 
   var restrictBounds = new L.LatLngBounds(southWest, northEast); 
   var mapOptions = { 
         maxBounds: restrictBounds 
         }
 var map = new L.Map(
         'map',
         {
            "scrollWheelZoom" : false,
            "maxZoom" : 4,
            "minZoom" : 1,
         }
      );
map.on('zoomend', onZoomend);
function onZoomend(){
   if(map.getZoom()>1)
    map.options.maxBounds = restrictBounds;
 
   if(map.getZoom()<2)
    map.options.maxBounds = false;
 };
   var mapurl = 'http://creativemornings.com/magic/map/tiles/{z}/{x}/{y}.png';
   var mapname = new L.TileLayer(mapurl);      
   map.setView(new L.LatLng(16, 20), 1).addLayer(mapname);

   var iconStyle = {
      "size" : { "x" : 19, "y" : 19 },
      "iconAnchor" : { "x" : 10, "y" : 20},
      "popAnchor" : { "x" : 0, "y" : -14}
   };
  
   var cities = {
      "aarhus" : {
         "type" : "FeatureCollection",
         "features" : [{ 
            "type" : "Feature", 
            "id" : 18, 
            "properties" : { 
               "place" : "Aarhus", 
               "x" : 10.213400, "y" : 56.149630 
            }, 
            "geometry" : { 
               "type" : "Point", 
               "coordinates" : [ 10.213400, 56.149630 ] 
            } 
         }],
         "website" : "http://twitter.com/aarhus_cm"
      },
      
      "atlanta" : {
         "type" : "FeatureCollection",
         "features" : [{ 
            "type" : "Feature", 
            "id" : 11, 
            "properties" : { 
               "place" : "Atlanta", 
               "x" : -84.390180, "y" : 33.749100 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -84.390180, 33.749100 ] 
            } 
         }],
         "website" : "http://twitter.com/atlanta_cm"
      },
      
      "auckland"  : {
         "type": "FeatureCollection",
         "features" : [{ 
            "type" : "Feature", 
            "id" : 10, 
            "properties" : { 
               "place" : "Auckland", 
               "x" : 174.764680, "y": -36.848290 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 174.764680, -36.848290 ] 
            } 
         }],
         "website" : "http://twitter.com/auckland_cm"
      },
      
      "berlin" : {
         "type": "FeatureCollection",
         "features" : [{ 
               "type": "Feature", 
               "id": 7, 
               "properties": { 
                  "place": "Berlin", 
                  "x" : 10.370230, "y": 51.322920 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 10.370230, 51.322920 ] 
            } 
         }],
         "website" : "http://twitter.com/berlin_cm"
      },
      
   "boston" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 12, 
            "properties": { 
               "place": "Boston", 
               "x" : -71.059570, "y": 42.360480 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -71.059570, 42.360480 ] 
            } 
         }],
         "website" : "http://twitter.com/boston_cm"
      },
      
      "capetown" : {      
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 19, 
            "properties": { 
               "place": "Cape town", 
               "x" : 18.417250, "y": -33.928900 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 18.417250, -33.928900 ] 
            } 
         }],
         "website" : "http://twitter.com/capetown_cm"
      },
      
      "chicago" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 5, 
            "properties": { 
               "place": "Chicago", 
               "x" : -87.624370, "y": 41.875620 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -87.624370, 41.875620 ] 
            } 
         }],
         "website" : "http://twitter.com/chicago_cm"
      },

      "la" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 3, 
            "properties": { 
               "place": "Los Angeles", 
               "x" : -118.242090, "y": 34.050280 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -118.242090, 34.050280 ] 
            } 
         }],
         "website" : "http://twitter.com/losangeles_cm"
      },
      
      "london" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 6, 
            "properties": { 
               "place": "London", 
               "x" : -0.109070, "y": 51.500330 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -0.109070, 51.500330 ] 
            } 
         }],
         "website" : "http://twitter.com/london_cm"
      },
      
      "milan" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 13, 
            "properties": { 
               "place": "Milan", 
               "x" : 9.190620, "y": 45.466620 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 9.190620, 45.466620 ] 
            } 
         }],
         "website" : "http://twitter.com/milan_cm"
      },
      
      "newyork" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 1, 
            "properties": { 
               "place": "New York City", 
               "x" : -73.938140, "y": 40.663800 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -73.938140, 40.663800 ] 
            } 
         }],
         "website" : "http://twitter.com/newyork_cm"
      },
      
      "paris" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 21, 
            "properties": { 
               "place": "Paris", 
               "x" : 2.342880, "y": 48.856620 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 2.342880, 48.856620 ] 
            } 
         }],
         "website" : "http://twitter.com/paris_cm"
      },
      
      "portland" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 14, 
            "properties": { 
               "place": "Portland", 
               "x" : -122.674140, "y": 45.520220 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -122.674140, 45.520220 ] 
            } 
         }],
         "website" : "http://twitter.com/portland_cm"
      },
      
      "sanfran" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 4, 
            "properties": { 
               "place": "San Francisco", 
               "x" : -122.419200, "y": 37.778960 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -122.419200, 37.778960 ] 
            } 
         }],
         "website" : "http://twitter.com/sanfrancisco_cm"
      },
      
      "seattle" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 15, 
            "properties": { 
               "place": "Seattle", 
               "x" : -122.328880, "y": 47.599300 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -122.328880, 47.599300 ] 
            } 
         }],
         "website" : "http://twitter.com/seattle_cm"
      },
      
      "singapore" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 20, 
            "properties": { 
               "place": "Singapore", 
               "x" : 103.819510, "y": 1.357220 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 103.819510, 1.357220 ] 
            } 
         }],
         "website" : "http://twitter.com/singapore_cm"
      },
      
      "stockholm" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 8, 
            "properties": { 
               "place": "Stockholm", 
               "x" : 18.061310, "y": 59.330760 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 18.061310, 59.330760 ] 
            } 
         }],
         "website" : "http://twitter.com/stockholm_cm"
      },
      
      "toronto" : {
         "type": "FeatureCollection",                                               
         "features": [{ 
            "type": "Feature", 
            "id": 16, 
            "properties": { 
               "place": "Toronto", 
               "x" : -79.388430, "y": 43.722930 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -79.388430, 43.722930 ] 
            } 
         }],
         "website" : "http://twitter.com/toronto_cm"
      },
      
      "utrecht" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 22, 
            "properties": { 
               "place": "Utrecht", 
               "x" : 5.173590, "y": 52.096530 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 5.173590, 52.096530 ] 
            } 
         }],
         "website" : "http://twitter.com/utrecht_cm"
      },
      
      "vancouver" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 9, 
            "properties": { 
               "place": "Vancouver", 
               "x" : -123.133330, "y": 49.250000 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -123.133330, 49.250000 ] 
            } 
         }],
         "website" : "http://twitter.com/vancouver_cm"
      },      
      
      "zurich" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Zurich", 
               "x" : 8.655040, "y": 47.412900 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 8.655040, 47.412900 ] 
            } 
         }],
         "website" : "http://twitter.com/zurich_cm"
      },
      
      "sydney" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Sydney", 
               "x" : 151.207, "y": -33.8679 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 151.207, -33.8679 ] 
            } 
         }],
         "website" : "http://twitter.com/sydney_cm"
      },

      "raleigh" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Raleigh", 
               "x" : -78.6447478136395, "y": 35.8326085005232 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -78.6447478136395, 35.8326085005232 ] 
            } 
         }],
         "website" : "http://twitter.com/raleigh_cm"
      },

      "orlando" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Orlando", 
               "x" : -81.3446421593736, "y": 28.4799400206646
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -81.3446421593736, 28.4799400206646 ] 
            } 
         }],
         "website" : "http://twitter.com/cm_orlando"
      },

      "ottawa" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Ottawa", 
               "x" : -75.6900219, "y": 45.4210328 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -75.6900219, 45.4210328 ] 
            } 
         }],
         "website" : "http://twitter.com/ottawa_cm"
      },

      "melbourne" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Melbourne", 
               "x" : 144.963146, "y": -37.814255
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 144.963146, -37.814255 ] 
            } 
         }],
         "website" : "http://twitter.com/melbourne_cm"
      },

      "saopaulo" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Sao Paulo", 
               "x" : -46.615, "y": -23.559
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -46.615, -23.559  ] 
            } 
         }],
         "website" : "http://twitter.com/saopaulo_cm"
      },
      
      "geneva" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Geneva", 
               "x" : 6.00222222222, "y": 46.1991666667 
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 6.00222222222, 46.1991666667 ] 
            } 
         }],
         "website" : "http://twitter.com/geneva_cm"
      },

      "prague" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Prague", 
               "x" : 14.431915283203125, "y": 50.09151216595947
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 14.431915283203125,50.09151216595947 ] 
            } 
         }],
         "website" : "http://twitter.com/#!/Prague_CM"
      },

      "amerstdam" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Amerstdam", 
               "x" : -0.607241, "y": 51.6755179
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ -0.607241, 51.6755179  ] 
            } 
         }],
         "website" : "http://twitter.com/amerstdam_cm"
      },

      "barcalona" : {
         "type": "FeatureCollection",
         "features": [{ 
            "type": "Feature", 
            "id": 2, 
            "properties": { 
               "place": "Barcalona", 
               "x" : 2.1699187, "y": 41.387917
            }, 
            "geometry": { 
               "type": "Point", 
               "coordinates": [ 2.1699187, 41.387917 ] 
            } 
         }],
         "website" : "http://twitter.com/barcalona_cm"
      }
   };
   var a;

   for(var name in cities){

      var icon = L.Icon.extend({ 
         "iconUrl" : 'http://creativemornings.com/magic/map/markers/' + name + '.png', 
         "shadowUrl" : iconStyle.shadowURL,
         "iconSize" : new L.Point(
            iconStyle.size.x, 
            iconStyle.size.y
         ),
         "shadowSize" : iconStyle.shadowSize,
         "iconAnchor" : new L.Point(
            iconStyle.iconAnchor.x,
            iconStyle.iconAnchor.y
         ),
         "popupAnchor" : new L.Point(
            iconStyle.popAnchor.x, 
            iconStyle.popAnchor.y
         ),
      }); 
      // Create a GeoJSON layer to the object
      var geojson = new L.GeoJSON(cities[name], {
         "pointToLayer": function (latlng) {
            return new L.Marker(latlng,{ "icon": new icon });
         }      
      });
      // Display the name property on click
      geojson.on("featureparse", function (e) {
            var popupContent = "<p><a href='" + cities[name].website + "'>" + e.properties.place + "</a></p>"
       
          if (e.properties && e.properties.popupContent) {
             popupContent += e.properties.popupContent;
          }
          e.layer.bindPopup(popupContent);
          if (e.properties && e.properties.style && e.layer.setStyle) {
             e.layer.setStyle(e.properties.style);
          }
      });
      geojson.addGeoJSON(cities[name]);
      //Add layer to the map
      map.addLayer(geojson);
   }
};
window.onload = buildMap;