import { useState, useEffect, useMemo } from 'react';
import { Search, X, BookOpen, Microscope, Activity, Brain, Stethoscope } from 'lucide-react';
import { wikiEntries } from '../../data/wikiEntries';
import type { WikiEntry } from '../../types';

const categoryIcons: Record<string, React.ReactNode> = {
  anatomy: <Microscope size={14} />,
  physiology: <Activity size={14} />,
  pathology: <Stethoscope size={14} />,
  cognition: <Brain size={14} />,
  clinical: <BookOpen size={14} />,
};

const categoryLabels: Record<string, string> = {
  anatomy: 'Anatomia',
  physiology: 'Fizjologia',
  pathology: 'Patologia',
  cognition: 'Kognitywistyka',
  clinical: 'Kliniczne',
};

const categoryClasses: Record<string, string> = {
  anatomy: 'badge-anatomy',
  physiology: 'badge-physiology',
  pathology: 'badge-pathology',
  cognition: 'badge-cognition',
  clinical: 'badge-clinical',
};

export function WikiSystem() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [selectedEntry, setSelectedEntry] = useState<WikiEntry | null>(null);

  // Filter entries based on search and category
  const filteredEntries = useMemo(() => {
    return wikiEntries.filter((entry) => {
      const matchesCategory = selectedCategory === 'all' || entry.category === selectedCategory;
      const matchesSearch = 
        searchQuery === '' ||
        entry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.titleLatin?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
        entry.content.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, selectedCategory]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedEntry(null);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div className="wiki-system">
      {/* Header */}
      <div className="wiki-header">
        <h1>Baza Wiedzy Neuropsychologicznej</h1>
        <p>Przeszukuj bazę terminów, definicji i pojęć z zakresu neuropsychologii i neurobiologii.</p>
      </div>

      {/* Search */}
      <div className="wiki-search-container">
        <div className="wiki-search-wrapper">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Wpisz termin, np. 'hipokamp', 'LTP', 'afazja'..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="wiki-search-input"
          />
          {searchQuery && (
            <button 
              className="search-clear"
              onClick={() => setSearchQuery('')}
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Category Filters */}
      <div className="wiki-categories">
        <button
          className={`wiki-category-btn ${selectedCategory === 'all' ? 'active' : ''}`}
          onClick={() => setSelectedCategory('all')}
        >
          Wszystkie
        </button>
        {Object.entries(categoryLabels).map(([key, label]) => (
          <button
            key={key}
            className={`wiki-category-btn ${selectedCategory === key ? 'active' : ''}`}
            onClick={() => setSelectedCategory(key)}
          >
            {categoryIcons[key]}
            {label}
          </button>
        ))}
      </div>

      {/* Results Count */}
      <div className="wiki-results-count">
        Znaleziono <strong>{filteredEntries.length}</strong> {filteredEntries.length === 1 ? 'hasło' : filteredEntries.length < 5 ? 'hasła' : 'haseł'}
      </div>

      {/* Entries Grid */}
      {filteredEntries.length > 0 ? (
        <div className="wiki-grid">
          {filteredEntries.map((entry) => (
            <div
              key={entry.id}
              className="wiki-card"
              onClick={() => setSelectedEntry(entry)}
            >
              <div className="wiki-card-header">
                <div>
                  <div className="wiki-card-title">{entry.title}</div>
                  {entry.titleLatin && (
                    <div className="wiki-card-latin">{entry.titleLatin}</div>
                  )}
                </div>
                <span className={`wiki-card-badge ${categoryClasses[entry.category]}`}>
                  {categoryIcons[entry.category]}
                  {categoryLabels[entry.category]}
                </span>
              </div>
              <div className="wiki-card-definition">
                {entry.definition}
              </div>
              <div className="wiki-card-footer">
                <span className="wiki-card-modules">
                  Powiązane moduły: {entry.relatedModules.length}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="wiki-empty">
          <Brain size={48} className="empty-icon" />
          <h3>Nie znaleziono haseł</h3>
          <p>Spróbuj innych słów kluczowych lub wybierz inną kategorię.</p>
        </div>
      )}

      {/* Entry Modal */}
      {selectedEntry && (
        <div 
          className="wiki-modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedEntry(null);
            }
          }}
        >
          <div className="wiki-modal">
            <button 
              className="wiki-modal-close"
              onClick={() => setSelectedEntry(null)}
            >
              <X size={18} />
            </button>
            
            <div className="wiki-modal-content">
              <div className="wiki-modal-header">
                <div className="wiki-modal-badges">
                  <span className={`wiki-card-badge ${categoryClasses[selectedEntry.category]}`}>
                    {categoryIcons[selectedEntry.category]}
                    {categoryLabels[selectedEntry.category]}
                  </span>
                </div>
                <h2 className="wiki-modal-title">{selectedEntry.title}</h2>
                {selectedEntry.titleLatin && (
                  <p className="wiki-modal-latin">{selectedEntry.titleLatin}</p>
                )}
              </div>

              <div className="wiki-modal-body">
                <div className="wiki-section">
                  <h3>Definicja</h3>
                  <p>{selectedEntry.definition}</p>
                </div>

                {selectedEntry.etymology && (
                  <div className="wiki-section">
                    <h3>Etymologia</h3>
                    <p className="etymology-text">{selectedEntry.etymology}</p>
                  </div>
                )}

                <div className="wiki-section">
                  <h3>Znaczenie Kliniczne</h3>
                  <p>{selectedEntry.clinicalRelevance}</p>
                </div>

                <div 
                  className="wiki-section wiki-full-content"
                  dangerouslySetInnerHTML={{ __html: selectedEntry.content }}
                />

                {selectedEntry.relatedTerms.length > 0 && (
                  <div className="wiki-section">
                    <h3>Powiązane Terminy</h3>
                    <div className="related-terms">
                      {selectedEntry.relatedTerms.map((term, i) => (
                        <span key={i} className="related-term">{term}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="wiki-section">
                  <h3>Moduły Powiązane</h3>
                  <div className="related-modules">
                    {selectedEntry.relatedModules.map((moduleId, i) => (
                      <span key={i} className="related-module">Moduł {moduleId.replace('module-', '')}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .wiki-search-wrapper {
          position: relative;
          max-width: 600px;
        }

        .wiki-search-input {
          width: 100%;
          padding: 1rem 3rem;
          background: var(--surface-1);
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius);
          color: var(--foreground);
          font-size: 1rem;
          transition: all 0.3s;
        }

        .wiki-search-input:focus {
          outline: none;
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
        }

        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--foreground-muted);
        }

        .search-clear {
          position: absolute;
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: none;
          background: var(--surface-3);
          color: var(--foreground-muted);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .search-clear:hover {
          background: var(--accent-pink);
          color: white;
        }

        .wiki-results-count {
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          color: var(--foreground-muted);
        }

        .wiki-results-count strong {
          color: var(--accent-cyan);
        }

        .wiki-card-footer {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border-subtle);
        }

        .wiki-card-modules {
          font-size: 0.8rem;
          color: var(--foreground-muted);
        }

        .wiki-empty {
          text-align: center;
          padding: 4rem 2rem;
          color: var(--foreground-muted);
        }

        .wiki-empty .empty-icon {
          margin-bottom: 1rem;
          opacity: 0.5;
        }

        .wiki-empty h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--foreground);
        }

        .wiki-modal-badges {
          margin-bottom: 0.75rem;
        }

        .wiki-section {
          margin-bottom: 1.5rem;
        }

        .wiki-section h3 {
          font-size: 1rem;
          color: var(--accent-cyan);
          margin-bottom: 0.5rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .wiki-section p {
          color: var(--foreground-muted);
          line-height: 1.7;
        }

        .etymology-text {
          font-family: var(--font-accent);
          font-style: italic;
        }

        .wiki-full-content {
          background: var(--surface-2);
          padding: 1.5rem;
          border-radius: var(--radius);
        }

        .wiki-full-content p {
          margin-bottom: 1rem;
        }

        .wiki-full-content p:last-child {
          margin-bottom: 0;
        }

        .wiki-full-content ul,
        .wiki-full-content ol {
          margin-left: 1.5rem;
          margin-bottom: 1rem;
          color: var(--foreground-muted);
        }

        .wiki-full-content li {
          margin-bottom: 0.5rem;
        }

        .related-terms,
        .related-modules {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .related-term,
        .related-module {
          padding: 0.4rem 0.8rem;
          background: var(--surface-2);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          font-size: 0.85rem;
          color: var(--foreground-muted);
        }

        .related-module {
          background: rgba(0, 212, 255, 0.1);
          border-color: rgba(0, 212, 255, 0.2);
          color: var(--accent-cyan);
        }
      `}</style>
    </div>
  );
}
