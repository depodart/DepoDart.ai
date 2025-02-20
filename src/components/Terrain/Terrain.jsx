import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import ThreeGeo from 'three-geo';

export const Terrain = ({ origin = [46.5763, 7.9904], radius = 5, zoom = 12 }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(new THREE.Scene());
  const rendererRef = useRef(null);
  const cameraRef = useRef(new THREE.PerspectiveCamera(75, 1, 0.1, 1000));

  useEffect(() => {
    // Initialize Three.js components
    const mount = mountRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    
    // Camera positioning
    camera.position.set(0, 50, 100);
    camera.lookAt(0, 0, 0);

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    rendererRef.current = renderer;
    mount.appendChild(renderer.domElement);

    // Initialize three-geo
    const tgeo = new ThreeGeo({
      tokenMapbox: process.env.REACT_APP_MAPBOX_TOKEN
    });

    // Load terrain
    const loadTerrain = async () => {
      const terrain = await tgeo.getTerrainRgb(origin, radius, zoom);
      scene.add(terrain);
    };
    loadTerrain();

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    // Cleanup
    return () => {
      mount.removeChild(renderer.domElement);
      scene.clear();
    };
  }, [origin, radius, zoom]);

  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
};
