import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const ThreeFallback = () => (
  <div className="w-full h-full flex items-center justify-center bg-gps-gray rounded-3xl border-2 border-dashed border-gps-black/10">
    <div className="text-center p-8">
      <p className="text-gps-black font-black uppercase tracking-widest text-xs mb-2">3D Preview Unavailable</p>
      <p className="text-gray-400 text-[10px] uppercase tracking-widest">Try refreshing the page</p>
    </div>
  </div>
);

// Error Boundary for 3D content to prevent app-wide crashes
class ThreeErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean }> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ThreeFallback />;
    }
    return this.props.children;
  }
}

// Vanilla Three.js Implementation - Stabilized for PlayCode Preview
const Hero3D = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [renderFailed, setRenderFailed] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, containerRef.current.clientWidth / containerRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 10;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance"
      });
    } catch (error) {
      console.warn('3D preview disabled because WebGL is unavailable.', error);
      setRenderFailed(true);
      return;
    }

    setRenderFailed(false);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff5f00, 0.5);
    pointLight.position.set(-5, -5, -5);
    scene.add(pointLight);

    // Packaging Model (Group)
    const group = new THREE.Group();
    scene.add(group);

    // Main Bag Body
    const bodyGeometry = new THREE.BoxGeometry(2.5, 3.5, 1.2);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xff5f00, 
      roughness: 0.3, 
      metalness: 0.1 
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    group.add(body);

    // Bag Handles
    const handleGeometry = new THREE.TorusGeometry(0.4, 0.04, 12, 24, Math.PI);
    const handleMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 });
    
    const handle1 = new THREE.Mesh(handleGeometry, handleMaterial);
    handle1.position.set(0.6, 1.8, 0);
    group.add(handle1);

    const handle2 = new THREE.Mesh(handleGeometry, handleMaterial);
    handle2.position.set(-0.6, 1.8, 0);
    group.add(handle2);

    // Logo Area
    const logoGeometry = new THREE.PlaneGeometry(1.4, 0.7);
    const logoMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const logo = new THREE.Mesh(logoGeometry, logoMaterial);
    logo.position.set(0, 0, 0.61);
    group.add(logo);

    // Animation
    let animationFrameId: number;
    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);
      
      group.rotation.y += 0.005;
      group.position.y = Math.sin(time * 0.001) * 0.1;
      
      renderer.render(scene, camera);
    };
    animate(0);

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current && renderer.domElement && containerRef.current.contains(renderer.domElement)) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      handleGeometry.dispose();
      handleMaterial.dispose();
      logoGeometry.dispose();
      logoMaterial.dispose();
    };
  }, []);

  return (
    <ThreeErrorBoundary>
      {renderFailed ? <ThreeFallback /> : <div ref={containerRef} className="w-full h-full min-h-[500px]" />}
    </ThreeErrorBoundary>
  );
};

export default Hero3D;
