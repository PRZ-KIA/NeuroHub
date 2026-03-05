import { useState, useEffect } from 'react';
import { Sidebar } from './components/layout/Sidebar';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { ModuleView } from './components/sections/ModuleView';
import { WikiSystem } from './components/wiki/WikiSystem';
import { Brain3DViewer } from './components/three/Brain3DViewer';
import type { ViewMode } from './types';
import './App.css';

function App() {
  const [currentView, setCurrentView] = useState<ViewMode>('hero');
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading for dramatic effect
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleModuleSelect = (moduleId: string) => {
    setActiveModule(moduleId);
    setCurrentView('module');
  };

  const handleWikiOpen = () => {
    setCurrentView('wiki');
    setActiveModule(null);
  };

  const handleHomeClick = () => {
    setCurrentView('hero');
    setActiveModule(null);
  };

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-brain">
            <svg viewBox="0 0 100 100" className="brain-svg">
              <path
                className="brain-path"
                d="M50 10 C30 10, 15 25, 15 45 C15 55, 20 65, 30 70 C25 75, 25 85, 35 90 C45 95, 55 95, 65 90 C75 85, 75 75, 70 70 C80 65, 85 55, 85 45 C85 25, 70 10, 50 10"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.5"
              />
              <path
                className="brain-path-delayed"
                d="M50 10 C50 10, 50 30, 50 50 C50 70, 50 90, 50 90 M30 70 C40 65, 60 65, 70 70 M25 50 C35 45, 65 45, 75 50 M20 35 C30 30, 70 30, 80 35"
                fill="none"
                stroke="#00d4ff"
                strokeWidth="0.3"
              />
            </svg>
          </div>
          <h1 className="loading-title">Neuropsychology Portal</h1>
          <p className="loading-subtitle">Inicjalizacja systemu...</p>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="app-container">
      <Sidebar
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
        currentView={currentView}
        activeModule={activeModule}
        onModuleSelect={handleModuleSelect}
        onWikiOpen={handleWikiOpen}
        onHomeClick={handleHomeClick}
      />

      <main className={`main-content ${sidebarOpen ? 'sidebar-open' : ''}`}>
        <Header
          onMenuToggle={() => setSidebarOpen(!sidebarOpen)}
          onWikiOpen={handleWikiOpen}
          currentView={currentView}
        />

        <div className="content-area">
          {currentView === 'hero' && (
            <HeroSection onModuleSelect={handleModuleSelect} />
          )}

          {currentView === 'module' && activeModule && (
            <ModuleView moduleId={activeModule} />
          )}

          {currentView === 'wiki' && <WikiSystem />}
        </div>
      </main>

      {/* Global 3D Brain Viewer (hidden by default, can be toggled) */}
      <Brain3DViewer />
    </div>
  );
}

export default App;
