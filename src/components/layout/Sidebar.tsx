import { useState } from 'react';
import { 
  Brain, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Microscope,
  Activity,
  MessageSquare,
  Command,
  Eye,
  Database
} from 'lucide-react';
import { modules } from '../../data/modules';
import type { ViewMode } from '../../types';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentView: ViewMode;
  activeModule: string | null;
  onModuleSelect: (moduleId: string) => void;
  onWikiOpen: () => void;
  onHomeClick: () => void;
}

const moduleIcons: Record<string, React.ReactNode> = {
  'module-1': <Microscope size={18} />,
  'module-2': <Activity size={18} />,
  'module-3': <MessageSquare size={18} />,
  'module-4': <Command size={18} />,
  'module-5': <Eye size={18} />,
};

export function Sidebar({ 
  isOpen, 
  onToggle, 
  currentView, 
  activeModule,
  onModuleSelect,
  onWikiOpen,
  onHomeClick
}: SidebarProps) {
  const [expandedModules, setExpandedModules] = useState(true);

  return (
    <>
      {/* Mobile overlay */}
      {!isOpen && (
        <div 
          className="sidebar-overlay lg:hidden" 
          onClick={onToggle}
        />
      )}

      <aside className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        {/* Toggle button */}
        <button 
          className="sidebar-toggle"
          onClick={onToggle}
          aria-label={isOpen ? 'Zwiń sidebar' : 'Rozwiń sidebar'}
        >
          {isOpen ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>

        {/* Logo */}
        <div className="sidebar-logo" onClick={onHomeClick}>
          <div className="sidebar-logo-icon">
            <Brain size={28} />
          </div>
          {isOpen && (
            <div className="sidebar-logo-text">
              <span className="logo-title">Neuropsychologia</span>
              <span className="logo-subtitle">Portal Akademicki</span>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Home */}
          <button
            className={`nav-item ${currentView === 'hero' ? 'active' : ''}`}
            onClick={onHomeClick}
          >
            <Home size={20} />
            {isOpen && <span>Strona Główna</span>}
          </button>

          {/* Wiki */}
          <button
            className={`nav-item ${currentView === 'wiki' ? 'active' : ''}`}
            onClick={onWikiOpen}
          >
            <Database size={20} />
            {isOpen && <span>Baza Wiedzy (Wiki)</span>}
          </button>

          {/* Modules Section */}
          <div className="nav-section">
            {isOpen && (
              <button 
                className="nav-section-header"
                onClick={() => setExpandedModules(!expandedModules)}
              >
                <BookOpen size={16} />
                <span>Moduły Edukacyjne</span>
                <ChevronLeft 
                  size={14} 
                  className={`transform transition-transform ${expandedModules ? '-rotate-90' : ''}`}
                />
              </button>
            )}
            
            {(!isOpen || expandedModules) && (
              <div className="nav-section-items">
                {modules.map((module) => (
                  <button
                    key={module.id}
                    className={`nav-item submodule ${activeModule === module.id ? 'active' : ''}`}
                    onClick={() => onModuleSelect(module.id)}
                  >
                    {moduleIcons[module.id] || <Activity size={18} />}
                    {isOpen && (
                      <span>
                        <span className="module-number">{module.id.replace('module-', '')}.</span>
                        {module.titlePolish}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="sidebar-footer">
            <div className="sidebar-footer-line">
              <span className="pulse-dot"></span>
              System Aktywny
            </div>
            <p className="sidebar-footer-text">
              Portal edukacyjny dla studentów i klinicystów
            </p>
          </div>
        )}
      </aside>

      <style>{`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: var(--surface-1);
          border-right: 1px solid var(--border-subtle);
          z-index: 100;
          display: flex;
          flex-direction: column;
          transition: width 0.4s var(--ease-expo);
          width: 280px;
        }

        .sidebar.closed {
          width: 70px;
        }

        .sidebar-toggle {
          position: absolute;
          right: -12px;
          top: 24px;
          width: 24px;
          height: 24px;
          background: var(--surface-2);
          border: 1px solid var(--border-subtle);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--foreground-muted);
          transition: all 0.3s;
          z-index: 10;
        }

        .sidebar-toggle:hover {
          background: var(--accent-cyan);
          color: var(--background);
          border-color: var(--accent-cyan);
        }

        .sidebar-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.5rem;
          cursor: pointer;
          border-bottom: 1px solid var(--border-subtle);
          transition: background 0.3s;
        }

        .sidebar-logo:hover {
          background: var(--surface-2);
        }

        .sidebar-logo-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: linear-gradient(135deg, var(--accent-cyan), var(--accent-purple));
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--background);
          flex-shrink: 0;
        }

        .sidebar-logo-text {
          display: flex;
          flex-direction: column;
        }

        .logo-title {
          font-family: var(--font-heading);
          font-size: 1rem;
          font-weight: 600;
          color: var(--foreground);
        }

        .logo-subtitle {
          font-size: 0.75rem;
          color: var(--foreground-muted);
        }

        .sidebar-nav {
          flex: 1;
          padding: 1rem 0;
          overflow-y: auto;
        }

        .nav-item {
          display: flex;
          align-items: center;
          gap: 0.875rem;
          padding: 0.875rem 1.5rem;
          color: var(--foreground-muted);
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: all 0.3s;
          font-size: 0.9rem;
        }

        .nav-item:hover {
          color: var(--foreground);
          background: var(--surface-2);
        }

        .nav-item.active {
          color: var(--accent-cyan);
          background: linear-gradient(90deg, rgba(0, 212, 255, 0.1), transparent);
          border-left: 2px solid var(--accent-cyan);
        }

        .nav-item.submodule {
          padding-left: 1.5rem;
          font-size: 0.85rem;
        }

        .nav-item.submodule.active {
          background: linear-gradient(90deg, rgba(0, 212, 255, 0.08), transparent);
        }

        .module-number {
          color: var(--accent-cyan);
          margin-right: 0.5rem;
          font-weight: 500;
        }

        .nav-section {
          margin-top: 0.5rem;
        }

        .nav-section-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.5rem;
          color: var(--foreground-muted);
          background: transparent;
          border: none;
          width: 100%;
          text-align: left;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          transition: color 0.3s;
        }

        .nav-section-header:hover {
          color: var(--foreground);
        }

        .nav-section-items {
          display: flex;
          flex-direction: column;
        }

        .sidebar-footer {
          padding: 1.5rem;
          border-top: 1px solid var(--border-subtle);
        }

        .sidebar-footer-line {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          color: var(--foreground-muted);
          margin-bottom: 0.5rem;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-green);
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .sidebar-footer-text {
          font-size: 0.75rem;
          color: var(--foreground-muted);
          opacity: 0.7;
        }

        .sidebar-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 99;
        }

        @media (max-width: 1024px) {
          .sidebar {
            transform: translateX(-100%);
          }

          .sidebar.open {
            transform: translateX(0);
          }

          .sidebar-toggle {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
