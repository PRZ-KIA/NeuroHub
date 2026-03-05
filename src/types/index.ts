// Types for Neuropsychology Portal

export interface WikiEntry {
  id: string;
  title: string;
  titleLatin?: string;
  category: 'anatomy' | 'physiology' | 'pathology' | 'cognition' | 'clinical';
  definition: string;
  etymology?: string;
  clinicalRelevance: string;
  relatedModules: string[];
  relatedTerms: string[];
  content: string;
}

export interface Module {
  id: string;
  title: string;
  titlePolish: string;
  description: string;
  icon: string;
  color: string;
  topics: string[];
  clinicalCase?: ClinicalCase;
}

export interface ClinicalCase {
  id: string;
  patientName: string;
  year: string;
  diagnosis: string;
  description: string;
  findings: string;
  significance: string;
  citations: string[];
}

export interface BrainRegion {
  id: string;
  name: string;
  nameLatin: string;
  position: [number, number, number];
  color: string;
  description: string;
  relatedModules: string[];
}

export interface NavigationNode {
  id: string;
  label: string;
  labelPolish: string;
  path: string;
  position: { x: number; y: number; z: number };
  color: string;
}

export type ViewMode = 'hero' | 'module' | 'wiki' | 'case';
