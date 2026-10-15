import { useEffect, useRef } from 'react';
import HeroScene from './HeroScene';
import { useFinePointer } from '../hooks/useFinePointer';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { useMagnetic } from '../hooks/useMagnetic';
import styles from './Hero.module.css';

const SHIVAM = ['S','h','i','v','a','m'];
const GUPTA  = ['G','u','p','t','a'];

function HeroLetter({ char, idx, lettersRef }) {
  const ref = useRef(null);
  useEffect(() => {
    if (lettersRef && ref.current) lettersRef.current[idx] = ref.current;
  }, []);
  return (
    <span
      ref={ref}
      className={styles.heroLetter}
      aria-hidden="true"
      style={{ '--letter-idx': idx }}
    >
      {char}
    </span>
  );
}

export default function Hero({ theme }) {
  const isFine = useFinePointer();
  const prefersReduced = useReducedMotion();

  const sectionRef  = useRef(null);
  const spotlightRef = useRef(null);
  const introRef    = useRef(null);
  const actionsRef  = useRef(null);
  const lettersRef  = useRef({});

  const viewBtnRef    = useRef(null);
  const contactBtnRef = useRef(null);
  useMagnetic(viewBtnRef, isFine && !prefersReduced);
  useMagnetic(contactBtnRef, isFine && !prefersReduced);

  // Spotlight, letter repel, parallax
  useEffect(() => {
    if (!isFine || prefersReduced) return;
    const section = sectionRef.current;
    const spotlight = spotlightRef.current;
    const intro = introRef.current;
    const actions = actionsRef.current;
    if (!section || !spotlight) return;

    // --- Spotlight ---
    function onMouseMoveSpot(e) {
      const rect = section.getBoundingClientRect();
      spotlight.style.setProperty('--mouse-x', (e.clientX - rect.left) + 'px');
      spotlight.style.setProperty('--mouse-y', (e.clientY - rect.top) + 'px');
      spotlight.style.opacity = '1';
    }
    function onMouseLeaveSpot() { spotlight.style.opacity = '0'; }
    section.addEventListener('mousemove', onMouseMoveSpot);
    section.addEventListener('mouseleave', onMouseLeaveSpot);

    // --- Letter data cache ---
    const allLetters = Object.values(lettersRef.current);
    let letterData = [];
    function cacheMetrics() {
      letterData = allLetters.map(el => {
        const r = el.getBoundingClientRect();
        return { el, cx: r.left + r.width / 2, cy: r.top + r.height / 2, curX: 0, curY: 0, curRot: 0, targetX: 0, targetY: 0, targetRot: 0 };
      });
    }
    setTimeout(cacheMetrics, 700);
    window.addEventListener('resize', cacheMetrics);
    window.addEventListener('scroll', cacheMetrics, { passive: true });

    // --- Repel + parallax ---
    function onMouseMove(e) {
      const rect = section.getBoundingClientRect();
      const normX = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const normY = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      const px = -normX * 6, py = -normY * 6;
      if (intro) intro.style.transform = `translate3d(${px}px,${py}px,0)`;
      if (actions) actions.style.transform = `translate3d(${px * 0.75}px,${py * 0.75}px,0)`;

      cacheMetrics(); // keep letter positions fresh
      const threshold = 120, maxPush = 18;
      letterData.forEach(item => {
        const dx = item.cx - e.clientX, dy = item.cy - e.clientY;
        const dist = Math.hypot(dx, dy);
        if (dist < threshold) {
          const factor = (threshold - dist) / threshold;
          const push = factor * maxPush;
          const angle = Math.atan2(dy, dx);
          item.targetX = Math.cos(angle) * push;
          item.targetY = Math.sin(angle) * push;
          item.targetRot = (dx > 0 ? 1 : -1) * (factor * 6);
        } else {
          item.targetX = item.targetY = item.targetRot = 0;
        }
      });
    }

    function onMouseLeave() {
      letterData.forEach(item => { item.targetX = item.targetY = item.targetRot = 0; });
      if (intro) intro.style.transform = '';
      if (actions) actions.style.transform = '';
    }

    section.addEventListener('mousemove', onMouseMove);
    section.addEventListener('mouseleave', onMouseLeave);

    // RAF loop for letter spring
    let rafId;
    function loop() {
      const lf = 0.14;
      letterData.forEach(item => {
        item.curX += (item.targetX - item.curX) * lf;
        item.curY += (item.targetY - item.curY) * lf;
        item.curRot += (item.targetRot - item.curRot) * lf;
        if (Math.abs(item.curX) > 0.01 || Math.abs(item.curY) > 0.01 || Math.abs(item.curRot) > 0.01) {
          item.el.style.transform = `translate3d(${item.curX.toFixed(2)}px,${item.curY.toFixed(2)}px,0) rotate(${item.curRot.toFixed(2)}deg)`;
        } else {
          item.el.style.transform = '';
        }
      });
      rafId = requestAnimationFrame(loop);
    }
    rafId = requestAnimationFrame(loop);

    return () => {
      section.removeEventListener('mousemove', onMouseMoveSpot);
      section.removeEventListener('mouseleave', onMouseLeaveSpot);
      section.removeEventListener('mousemove', onMouseMove);
      section.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('resize', cacheMetrics);
      window.removeEventListener('scroll', cacheMetrics);
      cancelAnimationFrame(rafId);
    };
  }, [isFine, prefersReduced]);

  return (
    <section className={styles.heroSection} id="home" ref={sectionRef}>
      {/* Three.js background */}
      <HeroScene theme={theme} />

      {/* Vignette */}
      <div className={styles.vignette} aria-hidden="true" />

      {/* Spotlight — FIX 2: low opacity via CSS var, correct dark-mode blend */}
      <div className={styles.spotlight} id="hero-spotlight" ref={spotlightRef} aria-hidden="true" />

      {/* Content */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle} aria-label="Shivam Gupta">
          <span className={styles.heroTitleLine} aria-hidden="true">
            {SHIVAM.map((c, i) => (
              <HeroLetter key={i} char={c} idx={i} lettersRef={lettersRef} />
            ))}
          </span>
          <span className={`${styles.heroTitleLine} ${styles.heroTitleAccent}`} aria-hidden="true">
            {GUPTA.map((c, i) => (
              <HeroLetter key={i + SHIVAM.length} char={c} idx={i + SHIVAM.length} lettersRef={lettersRef} />
            ))}
          </span>
        </h1>

        <p className={styles.heroIntro} ref={introRef} id="hero-intro-text">
          Full-stack developer building real-time and AI-powered web apps. I care about interfaces that feel effortless and code that is easy to maintain.
        </p>

        <div className={styles.heroActions} ref={actionsRef} id="hero-actions-bar">
          <a ref={viewBtnRef} href="#projects" className="btn btn-primary">View projects</a>
          <a ref={contactBtnRef} href="#contact" className="btn btn-outline">Contact me</a>
        </div>
      </div>
    </section>
  );
}
