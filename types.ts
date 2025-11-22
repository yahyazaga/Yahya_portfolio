import { ReactNode } from "react";

export interface SectionProps {
  id: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string; // Placeholder URL
  link: string;
  isReal: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Tools' | 'Soft Skills' | 'Other';
  isReal: boolean;
  funnyDescription: string;
}

export interface Service {
  title: string;
  description: string;
  icon: ReactNode;
  isReal: boolean;
}

export interface ThemeColors {
  primary: string;
  secondary: string;
  accent: string;
}

export enum ThemeMode {
  LIGHT = 'light',
  DARK = 'dark',
  AUTO = 'auto'
}