import React, { Suspense, useEffect, useRef, useState, useMemo } from 'react';
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
  const globeInstanceRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: '100%', height: '100%' });
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isGlobeReady, setIsGlobeReady] = useState(false);
  const [countries, setCountries] = useState(null);

  // Significantly reduce the number of points and cache them
  const generateHeatData = useMemo(() => (countries) => {
    if (!countries) return { positions: [] };
    const gData = { positions: [] };
    const maxPointsPerCountry = 8; // Increased from 5 
    const totalMaxPoints = 300; // Increased from 200
    
    const selectedCountries = countries.features
      .filter(country => country.bbox)
      .slice(0, Math.floor(totalMaxPoints / maxPointsPerCountry));

    selectedCountries.forEach((country) => {
      const bounds = country.bbox;
      for (let i = 0; i < maxPointsPerCountry; i++) {
        const lat = bounds[1] + Math.random() * (bounds[3] - bounds[1]);
        const lng = bounds[0] + Math.random() * (bounds[2] - bounds[0]);
        gData.positions.push({
          lat,
          lng,
          value: 0.5 + Math.random() * 0.5, // Increased value range from 0.3-0.6 to 0.5-1.0
        });
      }
    });
    return gData;
  }, []);

  // Handle resize with debouncing
  useEffect(() => {
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (globeRef.current) {
          setDimensions({
            width: '100%',
            height: '100%'
          });
        }
      }, 250);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  // Fetch data only once
  useEffect(() => {
    const loadingInterval = setInterval(() => {
      setLoadingProgress(prev => Math.min(prev + 10, 90));
    }, 200);

    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((countriesData) => {
        setCountries(countriesData);
        clearInterval(loadingInterval);
      });

    return () => clearInterval(loadingInterval);
  }, []);

  // Initialize globe with optimized settings
  useEffect(() => {
    if (!countries || !globeRef.current) return;

    const handleGlobeResize = () => {
      requestAnimationFrame(() => {
        if (globeInstanceRef.current && globeRef.current) {
          const width = globeRef.current.clientWidth;
          const height = globeRef.current.clientHeight;
          if (width > 0 && height > 0) {
            globeInstanceRef.current.width(width);
            globeInstanceRef.current.height(height);
          }
        }
      });
    };

    // Initial heat data
    const initialHeatData = generateHeatData(countries);

    globeInstanceRef.current = Globe()
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg')
      .hexBinPointsData(initialHeatData.positions)
      .hexBinPointLat(d => d.lat)
      .hexBinPointLng(d => d.lng)
      .hexBinPointWeight(d => d.value)
      .hexBinResolution(4)
      .hexTopColor(d => `rgba(255,100,50,${Math.sqrt(d.sumWeight) * 0.8})`) // Increased opacity multiplier from 0.4 to 0.8
      .hexSideColor(d => `rgba(255,100,50,${Math.sqrt(d.sumWeight) * 0.8})`) // Increased opacity multiplier from 0.4 to 0.8
      .hexBinMerge(true)
      .enablePointerInteraction(false)
      .backgroundColor('rgba(0,0,0,0)')
      .onGlobeReady(() => {
        setLoadingProgress(100);
        setIsGlobeReady(true);
      });

    globeInstanceRef.current(globeRef.current);
    handleGlobeResize();

    const controls = globeInstanceRef.current.controls();
    controls.enableZoom = false;
    controls.minDistance = 350;
    controls.maxDistance = 350;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    window.addEventListener('resize', handleGlobeResize);

    // Reduced update frequency and use RAF for smoother updates
    let animationFrameId;
    let lastUpdate = 0;
    const updateInterval = 2000; // Decreased from 3000 to 2000 for more frequent updates

    const animate = (timestamp) => {
      if (timestamp - lastUpdate >= updateInterval) {
        const newData = generateHeatData(countries);
        globeInstanceRef.current.hexBinPointsData(newData.positions);
        lastUpdate = timestamp;
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleGlobeResize);
      if (globeInstanceRef.current) {
        globeInstanceRef.current.controls().autoRotate = false;
        globeInstanceRef.current.controls().dispose();
        globeInstanceRef.current._destructor();
      }
    };
  }, [countries, generateHeatData]);

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
