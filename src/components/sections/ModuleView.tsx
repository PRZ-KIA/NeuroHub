import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { modules } from '../../data/modules';
import { moduleContents } from '../../data/moduleContents';
import { Brain, BookOpen, User, ChevronRight, ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

gsap.registerPlugin(ScrollTrigger);

interface ModuleViewProps {
  moduleId: string;
}

// Simple 3D Brain Region Visualization
function BrainRegionScene({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color={color} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
      
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.4}
          metalness={0.6}
          wireframe={false}
        />
      </mesh>
      
      <mesh scale={1.05}>
        <icosahedronGeometry args={[1.5, 2]} />
        <meshBasicMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      
      <Stars radius={50} depth={30} count={500} factor={3} fade />
    </>
  );
}

// Import useFrame
import { useFrame } from '@react-three/fiber';

export function ModuleView({ moduleId }: ModuleViewProps) {
  const module = modules.find(m => m.id === moduleId);
  const content = moduleContents[moduleId];
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    if (!textRef.current) return;

    const ctx = gsap.context(() => {
      // Animate sections on scroll
      const sections = textRef.current?.querySelectorAll('.content-section');
      sections?.forEach((section, index) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              onEnter: () => setActiveSection(index),
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [moduleId]);

  if (!module || !content) {
    return <div>Moduł nie został znaleziony</div>;
  }

  return (
    <div className="module-view" ref={containerRef}>
      {/* Module Header */}
      <div className="module-header">
        <div className="module-header-meta">
          <span className="module-number">MODUŁ {module.id.replace('module-', '')}</span>
          <span className="module-topic-count">{module.topics.length} tematów</span>
        </div>
        <h1 className="module-header-title">{module.titlePolish}</h1>
        <p className="module-header-subtitle">{module.description}</p>
        
        {/* Topic Pills */}
        <div className="topic-pills">
          {module.topics.map((topic, i) => (
            <span key={i} className="topic-pill">
              <ChevronRight size={12} />
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="module-content">
        {/* Text Content */}
        <div className="module-text-content" ref={textRef}>
          {content.sections.map((section, index) => (
            <section key={index} className="content-section">
              <h2>{section.title}</h2>
              <div 
                className="section-body"
                dangerouslySetInnerHTML={{ __html: section.content }}
              />
              
              {section.subsections && (
                <div className="subsections">
                  {section.subsections.map((sub, subIndex) => (
                    <div key={subIndex} className="subsection">
                      <h3>{sub.title}</h3>
                      <div dangerouslySetInnerHTML={{ __html: sub.content }} />
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {/* Interactive Elements Section */}
          <section className="content-section interactive-section">
            <h2>
              <Brain size={20} />
              Element Interaktywny
            </h2>
            <div className="interactive-box">
              <h3>{content.interactiveElement.title}</h3>
              <p>{content.interactiveElement.description}</p>
              <div className="interactive-hint">
                <ExternalLink size={14} />
                Kliknij przycisk 3D w prawym dolnym rogu, aby eksplorować model mózgu
              </div>
            </div>
          </section>
        </div>

        {/* Visualization Panel */}
        <div className="module-visualization">
          <div className="visualization-container">
            <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
              <BrainRegionScene color={module.color} />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
            
            <div className="visualization-overlay">
              <div className="viz-title">Wizualizacja 3D</div>
              <div className="viz-hint">Przeciągaj, aby obracać</div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="quick-nav">
            <h4>
              <BookOpen size={16} />
              Nawigacja
            </h4>
            {content.sections.map((section, index) => (
              <button
                key={index}
                className={`quick-nav-item ${activeSection === index ? 'active' : ''}`}
                onClick={() => {
                  const sections = textRef.current?.querySelectorAll('.content-section');
                  sections?.[index]?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="nav-number">{index + 1}</span>
                <span className="nav-title">{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Clinical Case Section */}
      {module.clinicalCase && (
        <div className="clinical-case-section">
          <div className="clinical-case-header">
            <div className="clinical-case-icon">
              <User size={24} />
            </div>
            <div>
              <h2 className="clinical-case-title">Studium Przypadku Klinicznego</h2>
              <p className="clinical-case-patient">
                {module.clinicalCase.patientName} ({module.clinicalCase.year})
              </p>
            </div>
          </div>

          <div className="clinical-case-content">
            <div className="case-section">
              <h4>Diagnoza</h4>
              <p>{module.clinicalCase.diagnosis}</p>
            </div>

            <div className="case-section">
              <h4>Opis Przypadku</h4>
              <p>{module.clinicalCase.description}</p>
            </div>

            <div className="case-section">
              <h4>Obserwacje Kliniczne</h4>
              <p>{module.clinicalCase.findings}</p>
            </div>

            <div className="case-section">
              <h4>Znaczenie Naukowe</h4>
              <p>{module.clinicalCase.significance}</p>
            </div>

            <div className="clinical-case-citations">
              <strong>Literatura:</strong>
              {module.clinicalCase.citations.map((citation, i) => (
                <p key={i}>{citation}</p>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .module-header-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .module-number {
          font-size: 0.75rem;
          font-weight: 600;
          color: ${module.color};
          letter-spacing: 0.1em;
        }

        .module-topic-count {
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }

        .topic-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 1.5rem;
        }

        .topic-pill {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.4rem 0.8rem;
          background: var(--surface-2);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          font-size: 0.8rem;
          color: var(--foreground-muted);
        }

        .content-section {
          margin-bottom: 3rem;
        }

        .content-section h2 {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: ${module.color};
          font-size: 1.4rem;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid var(--border-subtle);
        }

        .section-body {
          color: var(--foreground-muted);
          line-height: 1.9;
          font-size: 0.95rem;
        }

        .section-body p {
          margin-bottom: 1rem;
        }

        .subsections {
          margin-top: 1.5rem;
        }

        .subsection {
          margin-bottom: 1.5rem;
          padding-left: 1rem;
          border-left: 2px solid var(--border-subtle);
        }

        .subsection h3 {
          font-size: 1.1rem;
          color: var(--foreground);
          margin-bottom: 0.75rem;
        }

        .interactive-section {
          background: linear-gradient(135deg, var(--surface-1), var(--surface-2));
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius);
          padding: 1.5rem;
          margin-top: 2rem;
        }

        .interactive-box {
          margin-top: 1rem;
        }

        .interactive-box h3 {
          font-size: 1.1rem;
          color: var(--foreground);
          margin-bottom: 0.5rem;
        }

        .interactive-box p {
          color: var(--foreground-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .interactive-hint {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1rem;
          background: rgba(0, 212, 255, 0.1);
          border: 1px solid rgba(0, 212, 255, 0.2);
          border-radius: 8px;
          font-size: 0.85rem;
          color: var(--accent-cyan);
        }

        .visualization-container {
          position: relative;
          aspect-ratio: 1;
          background: var(--surface-2);
          border-radius: var(--radius);
          overflow: hidden;
        }

        .visualization-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 1rem;
          background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
        }

        .viz-title {
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .viz-hint {
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }

        .quick-nav {
          margin-top: 1.5rem;
          padding: 1rem;
          background: var(--surface-1);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius);
        }

        .quick-nav h4 {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: var(--foreground-muted);
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .quick-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.6rem 0.5rem;
          background: transparent;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
        }

        .quick-nav-item:hover {
          background: var(--surface-2);
        }

        .quick-nav-item.active {
          background: rgba(0, 212, 255, 0.1);
        }

        .quick-nav-item.active .nav-number {
          background: var(--accent-cyan);
          color: var(--background);
        }

        .nav-number {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: var(--surface-3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.7rem;
          font-weight: 600;
          color: var(--foreground-muted);
        }

        .nav-title {
          font-size: 0.85rem;
          color: var(--foreground-muted);
        }

        .quick-nav-item.active .nav-title {
          color: var(--foreground);
        }

        .case-section {
          margin-bottom: 1.5rem;
        }

        .case-section h4 {
          color: var(--accent-pink);
          font-size: 0.95rem;
          margin-bottom: 0.5rem;
        }

        .case-section p {
          color: var(--foreground-muted);
          line-height: 1.8;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
}
