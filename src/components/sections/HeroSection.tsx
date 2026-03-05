import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { 
  Microscope, 
  Activity, 
  MessageSquare, 
  Command, 
  Eye,
  ArrowRight
} from 'lucide-react';
import { modules } from '../../data/modules';

interface HeroSectionProps {
  onModuleSelect: (moduleId: string) => void;
}

const moduleIcons: Record<string, React.ReactNode> = {
  'module-1': <Microscope size={20} />,
  'module-2': <Activity size={20} />,
  'module-3': <MessageSquare size={20} />,
  'module-4': <Command size={20} />,
  'module-5': <Eye size={20} />,
};

export function HeroSection({ onModuleSelect }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'expo.out', delay: 0.2 }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out', delay: 0.5 }
      );

      // Module cards staggered animation
      const cards = gridRef.current?.querySelectorAll('.module-node');
      if (cards) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.1,
            ease: 'expo.out',
            delay: 0.7,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero-section" ref={containerRef}>
      <div className="hero-background">
        {/* Neural network background effect */}
        <div className="neural-bg">
          <svg className="neural-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <circle cx="5" cy="5" r="0.5" fill="rgba(0, 212, 255, 0.1)" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
            
            {/* Animated connection lines */}
            <g className="connection-lines">
              {[...Array(5)].map((_, i) => (
                <line
                  key={i}
                  x1={20 + i * 15}
                  y1={30}
                  x2={30 + i * 12}
                  y2={70}
                  stroke="rgba(0, 212, 255, 0.1)"
                  strokeWidth="0.2"
                  className={`connection-line-${i}`}
                />
              ))}
            </g>
          </svg>
        </div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title" ref={titleRef}>
          Neuropsychologia
        </h1>
        <p className="hero-subtitle" ref={subtitleRef}>
          Portal edukacyjny poświęcony neuroanatomii, procesom poznawczym 
          <br />
          i zaburzeniom neurologicznym. Dla studentów, klinicystów i badaczy.
        </p>

        <div className="hero-stats">
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Modułów</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">50+</span>
            <span className="stat-label">Haseł Wiki</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-number">5</span>
            <span className="stat-label">Studiów Przypadków</span>
          </div>
        </div>

        <div className="module-grid" ref={gridRef}>
          {modules.map((module, index) => (
            <div
              key={module.id}
              className="module-node"
              onClick={() => onModuleSelect(module.id)}
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className="module-node-number">
                MODUŁ {module.id.replace('module-', '')}
              </div>
              <div className="module-node-title">{module.titlePolish}</div>
              <div className="module-node-description">{module.description}</div>
              <div className="module-node-icon">
                {moduleIcons[module.id]}
              </div>
              <div className="module-node-arrow">
                <ArrowRight size={16} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .neural-bg {
          position: absolute;
          inset: 0;
          opacity: 0.5;
        }

        .neural-svg {
          width: 100%;
          height: 100%;
        }

        .connection-lines line {
          animation: pulse-line 3s ease-in-out infinite;
        }

        .connection-line-0 { animation-delay: 0s; }
        .connection-line-1 { animation-delay: 0.5s; }
        .connection-line-2 { animation-delay: 1s; }
        .connection-line-3 { animation-delay: 1.5s; }
        .connection-line-4 { animation-delay: 2s; }

        @keyframes pulse-line {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.3; }
        }

        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          margin: 2rem 0 3rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
        }

        .stat-number {
          font-family: var(--font-heading);
          font-size: 2rem;
          font-weight: 300;
          color: var(--accent-cyan);
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--foreground-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-subtle);
        }

        .module-node-arrow {
          position: absolute;
          bottom: 1.5rem;
          right: 1.5rem;
          color: var(--foreground-muted);
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s;
        }

        .module-node:hover .module-node-arrow {
          opacity: 1;
          transform: translateX(0);
          color: var(--accent-cyan);
        }

        @media (max-width: 768px) {
          .hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 60px;
            height: 1px;
          }

          .module-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
