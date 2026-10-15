import { useState, useEffect } from 'react';

function getSystemTheme() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    try {
      return localStorage.getItem('shivam_theme_pref') || 'auto';
    } catch {
      return 'auto';
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem('shivam_theme_pref', theme);
    } catch {}
  }, [theme]);

  // Resolve to effective theme (what the user actually sees)
  const effectiveTheme = theme === 'auto' ? getSystemTheme() : theme;

  function cycleTheme() {
    setThemeState(prev => {
      if (prev === 'auto') return 'dark';
      if (prev === 'dark') return 'light';
      return 'auto';
    });
  }

  return { theme, effectiveTheme, cycleTheme };
}
