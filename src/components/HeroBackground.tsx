import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    // Initialize renderer with alpha for transparency
    rendererRef.current = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    rendererRef.current.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(rendererRef.current.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1500; // Increased particle count
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 8; // Increased spread
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Create material with navy blue color
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.003,
      color: '#0A2463', // Navy blue color
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });

    // Create points
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Position camera
    camera.position.z = 3;

    // Animation
    const animate = () => {
      if (!rendererRef.current) return;

      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.0005; // Slower rotation
      particlesMesh.rotation.x += 0.0002; // Added x-axis rotation
      rendererRef.current.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!rendererRef.current) return;

      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      rendererRef.current.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 -z-10 bg-gradient-to-b from-[#E3F2FD] to-[#BBDEFB]" // Light blue gradient background
      aria-hidden="true"
    />
  );
}