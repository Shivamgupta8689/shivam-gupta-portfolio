import { useState, useEffect, useRef } from 'react';

const SECTION_IDS = ['home', 'about', 'projects', 'skills', 'contact'];

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = SECTION_IDS.map(id => document.getElementById(id)).filter(Boolean);
    if (!('IntersectionObserver' in window) || sections.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(sec => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}
