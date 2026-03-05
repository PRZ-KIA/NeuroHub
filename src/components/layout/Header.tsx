import { useState } from 'react';
import { Menu, Search, X, Brain } from 'lucide-react';
import type { ViewMode } from '../../types';

interface HeaderProps {
  onMenuToggle: () => void;
  onWikiOpen: () => void;
  currentView: ViewMode;
}

export function Header({ onMenuToggle, onWikiOpen, currentView }: HeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);

  const getViewTitle = () => {
    switch (currentView) {
      case 'hero':
        return 'Strona Główna';
      case 'wiki':
        return 'Baza Wiedzy (Wiki)';
      case 'module':
        return 'Moduł Edukacyjny';
      default:
        return '';
    }
  };

  return (
    <header className="app-header">
      <div className="header-left">
        <button 
          className="header-menu-btn lg:hidden"
          onClick={onMenuToggle}
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>
        
        <div className="header-breadcrumb">
          <span className="breadcrumb-current">{getViewTitle()}</span>
        </div>
      </div>

      <div className="header-right">
        {/* Search */}
        <div className={`header-search ${searchOpen ? 'open' : ''}`}>
          {searchOpen ? (
            <>
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder="Szukaj w wiki..."
                className="search-input"
                autoFocus
                onBlur={() => setSearchOpen(false)}
              />
              <button 
                className="search-close"
                onClick={() => setSearchOpen(false)}
              >
                <X size={16} />
              </button>
            </>
          ) : (
            <button 
              className="header-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Szukaj"
            >
              <Search size={20} />
            </button>
          )}
        </div>

        {/* Quick Wiki Access */}
        <button 
          className="header-icon-btn"
          onClick={onWikiOpen}
          aria-label="Wiki"
        >
          <Brain size={20} />
        </button>
      </div>

      <style>{`
        .app-header {
          height: 64px;
          background: var(--surface-1);
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 1.5rem;
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .header-left {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .header-menu-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
          background: var(--surface-2);
          color: var(--foreground);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .header-menu-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        .header-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .breadcrumb-current {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--foreground);
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .header-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          border: 1px solid var(--border-subtle);
          background: var(--surface-2);
          color: var(--foreground-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .header-icon-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          background: var(--surface-3);
        }

        .header-search {
          position: relative;
          display: flex;
          align-items: center;
        }

        .header-search.open {
          width: 280px;
        }

        .header-search .search-icon {
          position: absolute;
          left: 12px;
          color: var(--foreground-muted);
          pointer-events: none;
        }

        .header-search .search-input {
          width: 100%;
          padding: 0.5rem 2.5rem;
          background: var(--surface-2);
          border: 1px solid var(--border-subtle);
          border-radius: 8px;
          color: var(--foreground);
          font-size: 0.9rem;
        }

        .header-search .search-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
        }

        .search-close {
          position: absolute;
          right: 8px;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: var(--foreground-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .search-close:hover {
          color: var(--accent-pink);
        }

        @media (max-width: 640px) {
          .header-search.open {
            position: fixed;
            top: 64px;
            left: 0;
            right: 0;
            width: 100%;
            padding: 1rem;
            background: var(--surface-1);
            border-bottom: 1px solid var(--border-subtle);
            z-index: 40;
          }
        }
      `}</style>
    </header>
  );
}
