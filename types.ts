export enum StatusState {
  UNDETECTED = 'UNDETECTED',
  DETECTED = 'DETECTED',
  UPDATING = 'UPDATING',
  TESTING = 'TESTING',
  OFFLINE = 'OFFLINE'
}

export interface Feature {
  name: string;
  status: 'SAFE' | 'RISK' | 'UNSAFE';
}

export interface Product {
  id: string;
  name: string;
  category: 'Panel' | 'Feature' | 'Utility' | 'Other';
  status: StatusState;
  lastUpdated: string;
  version: string;
  downloadUrl?: string;
  requirementUrl?: string;
  recommendedEmulatorUrl?: string; // New field
  cleanEmulatorUrl?: string; // New field
  description?: string;
  youtubeVideoId?: string;
  features?: Feature[];
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  type: 'info' | 'warning' | 'success';
}