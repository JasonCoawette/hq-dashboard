'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Globe: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // Set up the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(56, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Add a globe
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    camera.position.z = 3;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      globe.rotation.y += 0.001;
      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (mount) {
        const { clientWidth, clientHeight } = mount;
        renderer.setSize(clientWidth, clientHeight);
        camera.aspect = clientWidth / clientHeight;
        camera.updateProjectionMatrix();
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
};

export default Globe;