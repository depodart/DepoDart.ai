import React, { useEffect } from 'react';
import * as THREE from 'three';
import ThreeGeo from 'three-geo';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const Terrain = ({ origin = [0, 0], radius = 5, zoom = 12 }) => {
  useEffect(() => {
    const initTerrain = async () => {
      // Initialize ThreeGeo with THREE directly to avoid cloning issues
      const tgeo = new ThreeGeo({
        tokenMapbox: import.meta.env.VITE_MAPBOX_TOKEN
      });

      // Create scene
      const scene = new THREE.Scene();
      
      // Set up camera with adjusted position and FOV
      const camera = new THREE.PerspectiveCamera(
        75, // Increased FOV for wider view
        window.innerWidth / window.innerHeight,
        0.1,
        2000 // Increased far plane for larger terrain
      );
      camera.position.set(0, 5, 8); // Moved camera closer and lower
      camera.lookAt(0, 0, 0);

      // Create renderer
      const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector('#terrain-canvas'),
        antialias: true
      });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      // Add orbit controls with adjusted settings
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.screenSpacePanning = true; // Enable screen space panning
      controls.minDistance = 2; // Reduced min distance to allow closer zoom
      controls.maxDistance = 50; // Reduced max distance
      controls.maxPolarAngle = Math.PI; // Allow full rotation
      controls.minPolarAngle = 0; // Allow viewing from top
      controls.enableRotate = true;
      controls.rotateSpeed = 0.5;

      try {
        // Add ambient light to properly illuminate the terrain
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.7); // Increased intensity
        scene.add(ambientLight);

        // Add directional light for better depth perception
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(1, 1, 1); // Adjusted light position
        scene.add(directionalLight);

        // Generate terrain with basic material to avoid shader errors
        const terrain = await tgeo.getTerrainRgb(origin, radius, zoom);
        
        // Rotate terrain to be horizontal
        terrain.rotation.x = -Math.PI / 2; // Rotate 90 degrees to make it flat
        
        // Scale up the terrain
        terrain.scale.set(2, 2, 2); // Make terrain twice as large
        
        // Apply an enhanced material to the terrain
        terrain.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.material = new THREE.MeshPhongMaterial({
              color: 0x808080,
              shininess: 0,
              flatShading: true,
              side: THREE.DoubleSide
            });
          }
        });

        // Add terrain to scene
        scene.add(terrain);

        // Handle window resize
        const handleResize = () => {
          camera.aspect = window.innerWidth / window.innerHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        const animate = () => {
          requestAnimationFrame(animate);
          controls.update();
          renderer.render(scene, camera);
        };
        animate();

        // Cleanup
        return () => {
          window.removeEventListener('resize', handleResize);
          controls.dispose();
          renderer.dispose();
          scene.traverse((object) => {
            if (object.geometry) {
              object.geometry.dispose();
            }
            if (object.material) {
              if (object.material.map) object.material.map.dispose();
              object.material.dispose();
            }
          });
        };
      } catch (error) {
        console.error('Error initializing terrain:', error);
      }
    };

    initTerrain().catch(console.error);
  }, [origin, radius, zoom]);

  return <canvas id="terrain-canvas" />;
};

export default Terrain;
