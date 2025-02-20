import React, { Suspense, useEffect, useRef } from 'react';
import Globe from 'globe.gl';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, Html } from '@react-three/drei';
import CanvasLoader from './CanvasLoader';

const GlobeComponent = () => {
  const globeRef = useRef();

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

    // Fetch geojson data and initialize the globe
    fetch('https://raw.githubusercontent.com/vasturiano/globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
      .then((res) => res.json())
      .then((countries) => {
        const heatData = generateHeatData(countries);

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
          .backgroundColor('rgba(0,0,0,0)');

        // Mount the globe into our ref'd div
        globeInstance(globeRef.current);

        // Enable auto-rotation
        globeInstance.controls().autoRotate = true;
        globeInstance.controls().autoRotateSpeed = 0.5;

        // Example: add a red cube to the scene
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff0000 });
        const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cubeMesh.position.set(0, 0, 2);
        globeInstance.scene().add(cubeMesh);

        // Animate the cube
        const animate = () => {
          cubeMesh.rotation.x += 0.01;
          cubeMesh.rotation.y += 0.01;
          requestAnimationFrame(animate);
        };
        animate();

        // Update heat data every 2 seconds
        const heatInterval = setInterval(() => {
          const newData = generateHeatData(countries);
          globeInstance.hexBinPointsData(newData.positions);
        }, 2000);

        // Cleanup on unmount
        return () => {
          clearInterval(heatInterval);
          globeInstance.controls().autoRotate = false;
        };
      });
  }, []);

  return <div ref={globeRef} style={{ width: '800px', height: '800px' }} />;
};

const GlobeComponentCanvas = () => {
  return (
    <Canvas frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
      shadows
      style={{ zIndex: 0 }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
        {/* Wrap the GlobeComponent with <Html> so it renders as HTML */}
        <Html fullscreen style={{ pointerEvents: 'none' }}>
        <Suspense fallback={<CanvasLoader />}>
          <GlobeComponent />
        </Suspense>
        </Html>
      <Preload all />
    </Canvas>
  );
};

export default GlobeComponentCanvas;
