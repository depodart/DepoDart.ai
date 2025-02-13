import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export const GlobeComponent = () => {
    const globeRef = useRef();
    
    useEffect(() => {
      const shieldRing = { lat: 90, lng: 0 };

      // Load country polygons and generate heatmap data for specific regions
      fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
        .then(res => res.json())
        .then(countries => {
          const gData = {
            positions: []
          };

          // Filter for target countries/regions
          const targetCountries = ['United States of America', 'Canada', 'Australia'];
          const africanCountries = countries.features.filter(country => 
            country.properties.CONTINENT === 'Africa'
          );
          
          const targetFeatures = [
            ...countries.features.filter(country => 
              targetCountries.includes(country.properties.NAME)
            ),
            ...africanCountries
          ];

          targetFeatures.forEach(country => {
            // Generate more points for larger regions
            const area = country.properties.AREA || 1000;
            const numPoints = Math.floor((area/1000) * 2) + 20; // Scale points with area
            
            for (let i = 0; i < numPoints; i++) {
              const bounds = country.bbox;
              if (bounds) {
                const lat = bounds[1] + Math.random() * (bounds[3] - bounds[1]);
                const lng = bounds[0] + Math.random() * (bounds[2] - bounds[0]);
                gData.positions.push({
                  lat,
                  lng,
                  value: Math.random() * 0.8 + 0.2 // Heat intensity between 0.2 and 1.0
                });
              }
            }
          });
          
          // Initialize globe with fixed dimensions
          const globe = Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .hexBinPointsData(gData.positions)
            .hexBinPointLat(d => d.lat)
            .hexBinPointLng(d => d.lng)
            .hexBinPointWeight(d => d.value)
            .hexBinResolution(3)
            .hexTopColor(d => {
              const intensity = Math.sqrt(d.sumWeight);
              // Create a gradient from blue (cold) to red (hot)
              if (intensity < 0.3) return `rgba(0,0,255,${intensity * 0.7})`; //? Blue for low intensity
              if (intensity < 0.6) return `rgba(0,255,0,${intensity * 0.7})`; //? Green for medium intensity
              return `rgba(255,0,0,${intensity * 0.7})`; //? Red for high intensity
            })
            .hexSideColor(d => {
              const intensity = Math.sqrt(d.sumWeight);
              if (intensity < 0.3) return `rgba(0,0,255,${intensity * 0.7})`;
              if (intensity < 0.6) return `rgba(0,255,0,${intensity * 0.7})`;
              return `rgba(255,0,0,${intensity * 0.7})`;
            })
            .hexBinMerge(true)
            .enablePointerInteraction(false)

            //! Uncomment to add shield ring
            // .ringsData([shieldRing])
            // .ringAltitude(0.25)
            // .ringColor(() => 'lightblue')
            // .ringMaxRadius(180)
            // .ringPropagationSpeed(20)
            // .ringRepeatPeriod(200)
            .backgroundColor('rgba(0,0,0,0)');

          // Mount the globe to the DOM element  
          globe(globeRef.current);

          // Auto-rotate
          globe.controls().autoRotate = true;
          globe.controls().autoRotateSpeed = 0.5;
        });
      
      return () => {
        if (globeRef.current) {
          const controls = Globe(globeRef.current).controls();
          if (controls) controls.autoRotate = false;
        }
      };
    }, []);
  
    return <div ref={globeRef} className="absolute inset-0 z-0" style={{width: '800px', height: '800px'}} />;
  };