import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet.heat';
import L from 'leaflet'; // Import Leaflet here

const HeatmapLayer = ({ points }) => {
  const map = useMap();

  React.useEffect(() => {
    if (points.length === 0) return;

    const heat = L.heatLayer(points, {
        radius: 40,
        blur: 15,
        maxZoom: 10,
        max: 1,
        gradient: {
          0.2: 'blue',
          0.4: 'lime',
          0.6: 'yellow',
          0.8: 'orange',
          1: 'red'
        }
      }).addTo(map);    return () => {
      map.removeLayer(heat);
    };
  }, [points, map]);

  return null;
};

function App() {
  const center = [37.0902, -95.7129]; // center of the US
  const points = [
    // West with different intensities and radius sizes
    [34.0522, -118.2437, 0.5], // Los Angeles
    [37.7749, -122.4194, 0.8], // San Francisco
    [47.6062, -122.3321, 1],   // Seattle
    [32.7157, -117.1611, 0.6], // San Diego
    
    // Midwest
    [41.8781, -87.6298, 0.7],  // Chicago
    [44.9778, -93.2650, 0.9],  // Minneapolis
    [39.1031, -84.5120, 0.5],  // Cincinnati
    
    // South
    [33.7490, -84.3880, 0.6],  // Atlanta
    [29.7604, -95.3698, 1],    // Houston
    [35.1495, -90.0490, 0.8],  // Memphis
    
    // East
    [40.7128, -74.0060, 0.7],  // New York City
    [38.9072, -77.0369, 0.9],  // Washington, D.C.
    [42.3601, -71.0589, 0.5],  // Boston
    [25.7617, -80.1918, 0.6],  // Miami
  ];
  
  return (
    <MapContainer center={center} zoom={4} style={{ width: '100%', height: '400px' }}>
<TileLayer
  url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.png"
//   attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
/>
      <HeatmapLayer points={points} />
    </MapContainer>
  );
}

export default App;
