import React, { Suspense, useEffect, useRef, useState } from 'react';
import Globe from 'globe.gl';

const LoadingSpinner = () => (
  <div style={{
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff'
  }}>
    <div className="spinner" style={{
      width: '50px',
      height: '50px',
      border: '5px solid #f3f3f3',
      borderTop: '5px solid #3498db',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
    }} />
    <style>{`
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `}</style>
  </div>
);

const GlobeComponent = () => {
  const globeRef = useRef();
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isGlobeReady, setIsGlobeReady] = useState(false);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      if (globeRef.current) {
        setDimensions({
          width: '100%',
          height: '100%'
        });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let globeInstance = null;

    // Generate heatmap data based on country features
    const generateHeatData = (countries) => {
      const gData = { positions: [] };
      countries.features.forEach((country) => {
        const area = country.properties.AREA || 1000;
        const numPoints = Math.floor((area / 1000) * 1.5) + 10;
        const bounds = country.bbox;
        if (bounds) {
          for (let i = 0; i < numPoints; i++) {
            const lat = bounds[1] + Math.random() * (bounds[3] - bounds[1]);
            const lng = bounds[0] + Math.random() * (bounds[2] - bounds[0]);
            gData.positions.push({
              lat,
              lng,
              value: Math.random() * 0.6 + 0.1,
            });
          }
        }
      });
      return gData;
    };

    // Handle resize for globe instance
    const handleGlobeResize = () => {
      if (globeInstance && globeRef.current) {
        const width = globeRef.current.clientWidth;
        const height = globeRef.current.clientHeight;
        if (width > 0 && height > 0) {
          globeInstance.width(width);
          globeInstance.height(height);
        }
      }
    };

    // Simulate loading progress
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 90) {
          clearInterval(loadingInterval);
          return prev;
        }
        return prev + 10;
      });
    }, 200);

    // Fetch geojson data and initialize the globe
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((countries) => {
        const heatData = generateHeatData(countries);

        // Initialize globe only if ref exists
        if (globeRef.current) {
          globeInstance = Globe()
            .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
            .hexBinPointsData(heatData.positions)
            .hexBinPointLat((d) => d.lat)
            .hexBinPointLng((d) => d.lng)
            .hexBinPointWeight((d) => d.value)
            .hexBinResolution(3)
            .hexTopColor((d) => {
              const intensity = Math.sqrt(d.sumWeight) * 0.7;
              if (intensity < 0.2) return `rgba(0,0,255,${intensity * 0.5})`;
              if (intensity < 0.4) return `rgba(0,255,0,${intensity * 0.5})`;
              return `rgba(255,0,0,${intensity * 0.5})`;
            })
            .hexSideColor((d) => {
              const intensity = Math.sqrt(d.sumWeight) * 0.7;
              if (intensity < 0.2) return `rgba(0,0,255,${intensity * 0.5})`;
              if (intensity < 0.4) return `rgba(0,255,0,${intensity * 0.5})`;
              return `rgba(255,0,0,${intensity * 0.5})`;
            })
            .hexBinMerge(true)
            .enablePointerInteraction(false)
            .backgroundColor('rgba(0,0,0,0)')
            .onGlobeReady(() => {
              setLoadingProgress(100);
              setIsGlobeReady(true);
              clearInterval(loadingInterval);
            });

          // Mount the globe into our ref'd div
          globeInstance(globeRef.current);
          
          // Initial resize call after mounting
          handleGlobeResize();

          // Add resize listener after globe is initialized
          window.addEventListener('resize', handleGlobeResize);

          // Disable zoom
          const controls = globeInstance.controls();
          controls.enableZoom = false;
          controls.minDistance = 350;
          controls.maxDistance = 350;
        }

        // Enable auto-rotation
        globeInstance.controls().autoRotate = true;
        globeInstance.controls().autoRotateSpeed = 0.5;

        // Update heat data every 2 seconds
        const heatInterval = setInterval(() => {
          const newData = generateHeatData(countries);
          globeInstance.hexBinPointsData(newData.positions);
        }, 2000);

        // Cleanup on unmount
        return () => {
          clearInterval(heatInterval);
          clearInterval(loadingInterval);
          if (globeInstance) {
            globeInstance.controls().autoRotate = false;
            globeInstance.controls().dispose();
            globeInstance._destructor();
          }
          window.removeEventListener('resize', handleGlobeResize);
        };
      });
  }, []);

  return (
    <div style={{ position: 'relative', width: dimensions.width, height: dimensions.height }}>
      {!isGlobeReady && (
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          color: '#fff',
          zIndex: 1000
        }}>
          {/* <LoadingSpinner /> */}
          <div style={{ marginTop: '20px' }}>
            {loadingProgress}%
          </div>
        </div>
      )}
      <div ref={globeRef} style={{ 
        width: dimensions.width, 
        height: dimensions.height,
        opacity: isGlobeReady ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
      }} />
    </div>
  );
};

// Simplified wrapper component
const GlobeComponentCanvas = () => {
  return (
    <div style={{ width: '100%', height: '100%', position: 'absolute' }}>
      <Suspense fallback={<LoadingSpinner />}>
        <GlobeComponent />
      </Suspense>
    </div>
  );
};

export default GlobeComponentCanvas;
