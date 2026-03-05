import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Html, Stars, Line } from '@react-three/drei';
import * as THREE from 'three';
import { brainRegions } from '../../data/brainRegions';

// Brain Node Component
function BrainNode({ 
  position, 
  color, 
  name, 
  nameLatin, 
  isActive, 
  onClick 
}: { 
  position: [number, number, number];
  color: string;
  name: string;
  nameLatin: string;
  isActive: boolean;
  onClick: () => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(
        isActive ? 1.3 : hovered ? 1.2 : 1
      );
    }
  });

  return (
    <group position={position}>
      <mesh
        ref={meshRef}
        onClick={onClick}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial
          color={isActive ? '#ff3366' : color}
          emissive={isActive ? '#ff3366' : color}
          emissiveIntensity={isActive ? 0.5 : hovered ? 0.3 : 0.1}
          roughness={0.3}
          metalness={0.7}
        />
      </mesh>
      
      {/* Glow effect */}
      <mesh scale={isActive ? 2 : hovered ? 1.8 : 1.5}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial
          color={isActive ? '#ff3366' : color}
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Label */}
      {(hovered || isActive) && (
        <Html distanceFactor={10}>
          <div className="brain-node-label">
            <div className="node-name">{name}</div>
            <div className="node-latin">{nameLatin}</div>
          </div>
        </Html>
      )}

      <style>{`
        .brain-node-label {
          background: rgba(10, 10, 10, 0.9);
          border: 1px solid #333;
          border-radius: 8px;
          padding: 8px 12px;
          pointer-events: none;
          white-space: nowrap;
          transform: translate(-50%, -120%);
        }

        .node-name {
          font-size: 12px;
          font-weight: 500;
          color: #fff;
        }

        .node-latin {
          font-family: 'IBM Plex Serif', serif;
          font-style: italic;
          font-size: 10px;
          color: #00d4ff;
        }
      `}</style>
    </group>
  );
}

// Neural Connection Lines
function NeuralConnections({ 
  regions, 
  activeRegion 
}: { 
  regions: typeof brainRegions;
  activeRegion: string | null;
}) {
  const connections = useMemo(() => {
    const lines: Array<{
      points: [THREE.Vector3, THREE.Vector3];
      active: boolean;
    }> = [];
    
    // Create connections between nearby regions
    for (let i = 0; i < regions.length; i++) {
      for (let j = i + 1; j < regions.length; j++) {
        const dist = new THREE.Vector3(...regions[i].position)
          .distanceTo(new THREE.Vector3(...regions[j].position));
        
        if (dist < 1.5) {
          const isActive = 
            activeRegion === regions[i].id || 
            activeRegion === regions[j].id;
          
          lines.push({
            points: [
              new THREE.Vector3(...regions[i].position),
              new THREE.Vector3(...regions[j].position),
            ],
            active: isActive,
          });
        }
      }
    }
    
    return lines;
  }, [regions, activeRegion]);

  return (
    <>
      {connections.map((conn, i) => (
        <Line
          key={i}
          points={conn.points}
          color={conn.active ? '#00d4ff' : '#333'}
          lineWidth={conn.active ? 2 : 0.5}
          transparent
          opacity={conn.active ? 0.8 : 0.2}
        />
      ))}
    </>
  );
}

// Main Brain Scene
function BrainScene({ 
  activeRegion, 
  onRegionClick 
}: { 
  activeRegion: string | null;
  onRegionClick: (id: string) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { camera } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Slow rotation
      groupRef.current.rotation.y += 0.001;
      
      // Gentle floating
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  // Initial camera position
  useEffect(() => {
    camera.position.set(0, 0, 5);
  }, [camera]);

  return (
    <group ref={groupRef}>
      {/* Ambient lighting */}
      <ambientLight intensity={0.3} />
      
      {/* Main light */}
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff3366" />
      
      {/* Brain regions */}
      {brainRegions.map((region) => (
        <BrainNode
          key={region.id}
          position={region.position}
          color={region.color}
          name={region.name}
          nameLatin={region.nameLatin}
          isActive={activeRegion === region.id}
          onClick={() => onRegionClick(region.id)}
        />
      ))}
      
      {/* Neural connections */}
      <NeuralConnections regions={brainRegions} activeRegion={activeRegion} />
      
      {/* Background stars */}
      <Stars
        radius={100}
        depth={50}
        count={1000}
        factor={4}
        saturation={0}
        fade
      />
    </group>
  );
}

// Main Component
export function Brain3DViewer() {
  const [activeRegion, setActiveRegion] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleRegionClick = (id: string) => {
    setActiveRegion(activeRegion === id ? null : id);
  };

  // Toggle visibility with keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'b' && e.ctrlKey) {
        e.preventDefault();
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible]);

  if (!isVisible) {
    return (
      <button 
        className="brain-viewer-toggle"
        onClick={() => setIsVisible(true)}
        title="Otwórz 3D Viewer (Ctrl+B)"
      >
        <span className="toggle-icon">🧠</span>
        <span className="toggle-text">3D</span>
        
        <style>{`
          .brain-viewer-toggle {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #00d4ff, #8b5cf6);
            border: none;
            cursor: pointer;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 2px;
            box-shadow: 0 10px 30px rgba(0, 212, 255, 0.3);
            transition: all 0.3s;
            z-index: 100;
          }

          .brain-viewer-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 15px 40px rgba(0, 212, 255, 0.4);
          }

          .toggle-icon {
            font-size: 20px;
          }

          .toggle-text {
            font-size: 10px;
            font-weight: 600;
            color: #0a0a0a;
          }
        `}</style>
      </button>
    );
  }

  return (
    <div className="brain-viewer-modal">
      <div className="brain-viewer-header">
        <h3>Interaktywny Model 3D Mózgu</h3>
        <button 
          className="close-btn"
          onClick={() => setIsVisible(false)}
        >
          ✕
        </button>
      </div>
      
      <div className="brain-viewer-canvas">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 60 }}
          gl={{ antialias: true, alpha: true }}
        >
          <BrainScene 
            activeRegion={activeRegion}
            onRegionClick={handleRegionClick}
          />
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={2}
            maxDistance={10}
          />
        </Canvas>
      </div>
      
      <div className="brain-viewer-info">
        {activeRegion ? (
          <div className="region-info">
            {(() => {
              const region = brainRegions.find(r => r.id === activeRegion);
              return region ? (
                <>
                  <h4>{region.name}</h4>
                  <p className="latin">{region.nameLatin}</p>
                  <p className="description">{region.description}</p>
                </>
              ) : null;
            })()}
          </div>
        ) : (
          <p className="hint">Kliknij na region mózgu, aby zobaczyć szczegóły</p>
        )}
      </div>

      <style>{`
        .brain-viewer-modal {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 400px;
          height: 500px;
          background: var(--surface-1);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          z-index: 100;
        }

        .brain-viewer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1rem 1.25rem;
          border-bottom: 1px solid var(--border-subtle);
          background: var(--surface-2);
        }

        .brain-viewer-header h3 {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .close-btn {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: none;
          background: var(--surface-3);
          color: var(--foreground-muted);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s;
        }

        .close-btn:hover {
          background: var(--accent-pink);
          color: white;
        }

        .brain-viewer-canvas {
          flex: 1;
          min-height: 0;
        }

        .brain-viewer-canvas canvas {
          width: 100% !important;
          height: 100% !important;
        }

        .brain-viewer-info {
          padding: 1rem 1.25rem;
          border-top: 1px solid var(--border-subtle);
          background: var(--surface-2);
          min-height: 100px;
        }

        .region-info h4 {
          font-size: 1rem;
          font-weight: 500;
          color: var(--accent-cyan);
          margin-bottom: 0.25rem;
        }

        .region-info .latin {
          font-family: var(--font-accent);
          font-style: italic;
          font-size: 0.85rem;
          color: var(--foreground-muted);
          margin-bottom: 0.5rem;
        }

        .region-info .description {
          font-size: 0.85rem;
          color: var(--foreground-muted);
          line-height: 1.5;
        }

        .hint {
          font-size: 0.85rem;
          color: var(--foreground-muted);
          text-align: center;
          font-style: italic;
        }

        @media (max-width: 640px) {
          .brain-viewer-modal {
            position: fixed;
            inset: 1rem;
            width: auto;
            height: auto;
            bottom: 1rem;
            right: 1rem;
            left: 1rem;
            top: 1rem;
          }
        }
      `}</style>
    </div>
  );
}
