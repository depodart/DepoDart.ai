import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export const GlobeComponent = () => {
    const globeRef = useRef();
    
    useEffect(() => {
      const shieldRing = { lat: 90, lng: 0 };
      let globeInstance = null;

      // Load country polygons and generate heatmap data for all countries
      fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
          const generateHeatData = () => {
            const gData = {
              positions: []
            };

            // Use all countries
            const allCountries = countries.features;
            
            allCountries.forEach(country => {
              const area = country.properties.AREA || 1000;
              // Adjust number of points based on country area
              const numPoints = Math.floor((area/1000) * 1.5) + 10; // Reduced multiplier to prevent overcrowding
              
              for (let i = 0; i < numPoints; i++) {
                const bounds = country.bbox;
                if (bounds) {
                  const lat = bounds[1] + Math.random() * (bounds[3] - bounds[1]);
                  const lng = bounds[0] + Math.random() * (bounds[2] - bounds[0]);
                  gData.positions.push({
                    lat,
                    lng,
                    value: Math.random() * 0.6 + 0.1 // Reduced value range for smaller dots
                  });
                }
              }
            });
            return gData;
          };
          
          // Initialize globe with fixed dimensions
          globeInstance = Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .hexBinPointsData(generateHeatData().positions)
            .hexBinPointLat(d => d.lat)
            .hexBinPointLng(d => d.lng)
            .hexBinPointWeight(d => d.value)
            .hexBinResolution(3)
            .hexTopColor(d => {
              const intensity = Math.sqrt(d.sumWeight) * 0.7; // Reduced intensity
              if (intensity < 0.2) return `rgba(0,0,255,${intensity * 0.5})`;
              if (intensity < 0.4) return `rgba(0,255,0,${intensity * 0.5})`;
              return `rgba(255,0,0,${intensity * 0.5})`;
            })
            .hexSideColor(d => {
              const intensity = Math.sqrt(d.sumWeight) * 0.7; // Reduced intensity
              if (intensity < 0.2) return `rgba(0,0,255,${intensity * 0.5})`;
              if (intensity < 0.4) return `rgba(0,255,0,${intensity * 0.5})`;
              return `rgba(255,0,0,${intensity * 0.5})`;
            })
            .hexBinMerge(true)
            .enablePointerInteraction(false)
            .backgroundColor('rgba(0,0,0,0)');

          // Mount the globe to the DOM element  
          globeInstance(globeRef.current);

          // Auto-rotate
          globeInstance.controls().autoRotate = true;
          globeInstance.controls().autoRotateSpeed = 0.5;

          // Update heat data every 2 seconds
          const heatInterval = setInterval(() => {
            const newData = generateHeatData();
            globeInstance.hexBinPointsData(newData.positions);
          }, 2000);

          // Cleanup interval on unmount
          return () => clearInterval(heatInterval);
        });
      
      return () => {
        if (globeRef.current) {
          const controls = globeInstance?.controls();
          if (controls) controls.autoRotate = false;
        }
      };
    }, []);
  
    return <div ref={globeRef} className="absolute inset-0 z-0" style={{width: '800px', height: '800px'}} />;
  };