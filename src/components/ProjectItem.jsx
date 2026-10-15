import { useRef, useEffect } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';
import { useFinePointer } from '../hooks/useFinePointer';
import styles from './ProjectItem.module.css';

/* Palette colours (same as HeroScene light palette) used for gradient placeholders */
const PALETTE_PAIRS = [
  ['#2446E8', '#7C3AED'],
  ['#0891B2', '#2446E8'],
  ['#7C3AED', '#DB2777'],
  ['#DB2777', '#D97706'],
];

function GradientPlaceholder({ title, pairIdx }) {
  const [c1, c2] = PALETTE_PAIRS[pairIdx % PALETTE_PAIRS.length];
  return (
    <div
      className={styles.gradientPlaceholder}
      style={{ background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)` }}
      role="img"
      aria-label={title}
    />
  );
}

export default function ProjectItem({ project, defaultOpen = false, index = 0 }) {
  const detailsRef = useRef(null);
  const toggleRef  = useRef(null);
  const githubRef  = useRef(null);
  const isFine = useFinePointer();
  useMagnetic(githubRef, isFine);

  // Sync +/- marker with open state
  useEffect(() => {
    const el = detailsRef.current;
    if (!el) return;
    function onToggle() {
      if (toggleRef.current) {
        toggleRef.current.textContent = el.open ? '–' : '+';
      }
      el.dispatchEvent(new CustomEvent('projecttoggle', { bubbles: true, detail: { open: el.open } }));
    }
    el.addEventListener('toggle', onToggle);
    return () => el.removeEventListener('toggle', onToggle);
  }, []);

  return (
    <details
      ref={detailsRef}
      className={styles.projectRow}
      defaultOpen={defaultOpen}
    >
      {/* FIX 6: project title is h3 */}
      <summary className={styles.projectSummary}>
        <div className={styles.titleWrap}>
          <span className={styles.projectNum}>{project.num}</span>
          <h3 className={styles.projectTitle}>{project.title}</h3>
        </div>
        <span ref={toggleRef} className={styles.projectToggle} aria-hidden="true">
          {defaultOpen ? '–' : '+'}
        </span>
      </summary>

      <div className={styles.projectBody}>
        {/* Image / Gradient placeholder */}
        <div className={styles.screenshotWrap}>
          {project.image ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className={styles.screenshotImg}
              loading="lazy"
            />
          ) : (
            <GradientPlaceholder title={project.title} pairIdx={index} />
          )}
        </div>

        {/* Description + GitHub */}
        <div className={styles.projectLeft}>
          <p>{project.description}</p>
          <a
            ref={githubRef}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
          >
            See on GitHub ↗
          </a>
        </div>

        {/* Highlight + Tags */}
        <div className={styles.projectRight}>
          <div className={styles.highlightBox}>
            <div className={styles.highlightLabel}>{project.highlightLabel}</div>
            <div className={styles.highlightText}>{project.highlight}</div>
          </div>
          <div className={styles.techTags}>
            {project.tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </details>
  );
}
