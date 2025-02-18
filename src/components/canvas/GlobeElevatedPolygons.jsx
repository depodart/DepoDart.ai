import React, { Suspense, useEffect, useRef, useState, useMemo } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";
import CanvasLoader from "../Loader";
const GlobeElevatedPolygons = () => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });
  const [isRotating, setIsRotating] = useState(true);

  // Create globe material with transparency enabled
  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 1,
    });
    material.bumpScale = 10;
    return material;
  }, []);

  // Rotation control setup
  useEffect(() => {
    if (!globeRef.current || !isRotating) return;
    
    const controls = globeRef.current.controls();
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.enableZoom = false;

    let animationFrameId;
    const animate = () => {
      controls.update();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isRotating]);

  // Load texture and update material properties
  useEffect(() => {
    new THREE.TextureLoader().load(
      "//unpkg.com/three-globe/example/img/earth-water.png",
      (texture) => {
        globeMaterial.specularMap = texture;
        globeMaterial.specular = new THREE.Color("grey");
        globeMaterial.shininess = 15;
        globeMaterial.needsUpdate = true;
      }
    );
  }, [globeMaterial]);

  // Update container dimensions on window resize
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Adjust directional light position
  useEffect(() => {
    if (!globeRef.current) return;
    const lights = globeRef.current.lights && globeRef.current.lights();
    if (lights) {
      const directionalLight = lights.find(
        (light) => light.type === "DirectionalLight"
      );
      if (directionalLight) {
        directionalLight.position.set(1, 1, 1);
      }
    }
  }, []);

  // Scale down the globe
  useEffect(() => {
    if (!globeRef.current) return;
    const scene = globeRef.current.scene();
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh && obj.material === globeMaterial) {
          obj.scale.set(0.5, 0.5, 0.5);
        }
      });
    }
  }, [globeMaterial]);

  return (
    <div
      ref={containerRef}
      style={{ width: "800px", height: "800px", background: "transparent" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Globe
          ref={globeRef}
          width={dimensions.width}
          height={dimensions.height}
          globeMaterial={globeMaterial}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          backgroundColor="rgba(0,0,0,0)"
          />
      </Suspense>
    </div>
  );
};

export default GlobeElevatedPolygons;
