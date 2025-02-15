import { useEffect, useRef, useState, useMemo } from "react";
import Globe from "react-globe.gl";
import * as THREE from "three";

const GlobeElevatedPolygons = ({ mouse }) => {
  const globeRef = useRef();
  const containerRef = useRef();
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  // Create globe material with transparency enabled
  const globeMaterial = useMemo(() => {
    const material = new THREE.MeshPhongMaterial({
      transparent: true,
      opacity: 1,
    });
    material.bumpScale = 10;
    return material;
  }, []);

  useEffect(() => {
    // Load texture and update material properties
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

  // Adjust directional light position once available
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

  // Scale down the globe by traversing the scene to find the mesh that uses globeMaterial
  useEffect(() => {
    if (!globeRef.current) return;
    const scene = globeRef.current.scene();
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh && obj.material === globeMaterial) {
          obj.scale.set(0.5, 0.5, 0.5); // Adjust scale factor as needed
        }
      });
    }
  }, [globeMaterial]);

  // Update the globe rotation based on the passed-in mouse coordinates
  useEffect(() => {
    if (!mouse || !globeRef.current) return;
    const { x, y } = mouse;
    // Calculate rotation values (max rotation of about 45°)
    const rotationY = x * (Math.PI / 4);
    const rotationX = y * (Math.PI / 4);
    const scene = globeRef.current.scene();
    if (scene) {
      scene.traverse((obj) => {
        if (obj.isMesh && obj.material === globeMaterial) {
          obj.rotation.y = rotationY;
          obj.rotation.x = rotationX;
        }
      });
    }
  }, [mouse, globeMaterial]);

  return (
    <div
      ref={containerRef}
      style={{ width: "800px", height: "800px", background: "transparent" }}
    >
      <Globe
        ref={globeRef}
        width={dimensions.width}
        height={dimensions.height}
        globeMaterial={globeMaterial}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        backgroundColor="rgba(0,0,0,0)"
      />
    </div>
  );
};

export default GlobeElevatedPolygons;