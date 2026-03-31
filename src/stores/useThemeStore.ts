import { Theme } from './types';
import { create } from 'zustand';

export interface ThemeState {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}
