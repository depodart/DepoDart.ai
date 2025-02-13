import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

export const GlobeComponent = () => {
    const globeRef = useRef();
    
    useEffect(() => {
      const shieldRing = { lat: 90, lng: 0 };
      
      // Initialize globe with fixed dimensions
      const globe = Globe()
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
        .ringsData([shieldRing])
        .ringAltitude(0.25)
        .ringColor(() => 'lightblue')
        .ringMaxRadius(180)
        .ringPropagationSpeed(20)
        .ringRepeatPeriod(200)
        .backgroundColor('rgba(0,0,0,0)'); // Set transparent background
  
      // Mount the globe to the DOM element
      globe(globeRef.current);
  
      // No need for resize handling since we want fixed size
      
      // Cleanup (empty since we removed event listener)
      return () => {};
    }, []);
  
    return <div ref={globeRef} className="absolute inset-0 z-0" style={{width: '800px', height: '800px'}} />;
  };