import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import CanvasLoader from "./CanvasLoader";

const GlobeElevatedPolygons = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 800 });
  const [isRotating, setIsRotating] = useState(true);
  const [globeReady, setGlobeReady] = useState(false);

  // Update container dimensions on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        setDimensions({ width, height });
      }
    };
    
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Create globe material with transparency enabled
  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial();
    material.transparent = true;
    material.opacity = 1;
    material.bumpScale = 10;
    return material;
  }, []);

  // Load textures and update material properties
  useEffect(() => {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.crossOrigin = 'anonymous';
    
    // Use absolute URLs for textures
    const baseUrl = window.location.origin;
    
    Promise.all([
      new Promise((resolve, reject) => 
        textureLoader.load(
          `${baseUrl}/earth-water.png`, 
          resolve,
          undefined,
          () => resolve(null) // Handle error by resolving with null
        )
      ),
      new Promise((resolve, reject) =>
        textureLoader.load(
          `${baseUrl}/earth-blue-marble.jpg`,
          resolve,
          undefined,
          () => resolve(null)
        )
      )
    ]).then(([waterTexture, surfaceTexture]) => {
      if (globeMaterial && surfaceTexture && waterTexture) {
        // Configure textures
        surfaceTexture.encoding = THREE.sRGBEncoding;
        waterTexture.encoding = THREE.sRGBEncoding;
        
        globeMaterial.map = surfaceTexture;
        globeMaterial.specularMap = waterTexture;
        globeMaterial.specular = new THREE.Color('grey');
        globeMaterial.shininess = 15;
        globeMaterial.needsUpdate = true;
        setGlobeReady(true);
      } else {
        console.warn('Some textures failed to load, using default appearance');
        setGlobeReady(true);
      }
    });
  }, [globeMaterial]);

  // Rotation control setup
  useEffect(() => {
    const globe = globeRef.current;
    if (!globe || !isRotating || !globeReady) return;

    const controls = globe.controls();
    if (!controls) return;
    
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false; // Disable zoom
    controls.minDistance = 350; // Fixed distance
    controls.maxDistance = 350; // Same as minDistance to lock zoom

    const animate = () => {
      controls.update();
      return requestAnimationFrame(animate);
    };
    const animationId = animate();

    return () => cancelAnimationFrame(animationId);
  }, [isRotating, globeReady]);

  // Adjust lighting
  useEffect(() => {
    if (!globeRef.current || !globeReady) return;
    
    const scene = globeRef.current.scene();
    if (scene) {
      // Clear existing lights
      const existingLights = scene.children.filter(child => child.isLight);
      existingLights.forEach(light => scene.remove(light));
      
      // Add new lights
      const ambientLight = new THREE.AmbientLight(0xbbbbbb, 0.3);
      scene.add(ambientLight);
      
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(1, 1, 1);
      scene.add(directionalLight);
      
      const pointLight = new THREE.PointLight(0xffffff, 0.5);
      pointLight.position.set(-50, 100, 50);
      scene.add(pointLight);
    }
  }, [globeReady]);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%", background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeMaterial={globeMaterial}
          backgroundColor="rgba(0,0,0,0)"
          waitForGlobeReady={true}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          enableZoom={false}
        />
      </Suspense>
    </div>
  );
};

export default GlobeElevatedPolygons;
