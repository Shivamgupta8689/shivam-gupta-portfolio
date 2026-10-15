import { useEffect, useRef } from 'react';
import { useFinePointer } from '../hooks/useFinePointer';
import { useReducedMotion } from '../hooks/useReducedMotion';
import styles from './CustomCursor.module.css';

export default function CustomCursor() {
  const isFine = useFinePointer();
  const prefersReduced = useReducedMotion();
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (!isFine || prefersReduced) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    document.body.classList.add('custom-cursor-active');
    dot.style.display = 'block';
    ring.style.display = 'flex';

    let mouseX = -100, mouseY = -100;
    let ringX = -100, ringY = -100;
    let isVisible = false;
    let rafId;

    function onMouseMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) { ringX = mouseX; ringY = mouseY; isVisible = true; }
      dot.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    }

    function onMouseDown() { ring.classList.add(styles.activeClick); }
    function onMouseUp() { ring.classList.remove(styles.activeClick); }
    function onDocLeave() { dot.style.opacity = '0'; ring.style.opacity = '0'; isVisible = false; }
    function onDocEnter() { dot.style.opacity = '1'; ring.style.opacity = '1'; }

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onDocLeave);
    document.addEventListener('mouseenter', onDocEnter);

    // Lerp ring loop
    function renderCursor() {
      if (isVisible) {
        ringX += (mouseX - ringX) * 0.18;
        ringY += (mouseY - ringY) * 0.18;
        ring.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
      }
      rafId = requestAnimationFrame(renderCursor);
    }
    rafId = requestAnimationFrame(renderCursor);

    // Hover states: links, buttons, skill tiles, hero letters
    const linkEls = document.querySelectorAll('a, button, .skill-tile, .hero-letter');
    function onLinkEnter() {
      if (!ring.dataset.hoverProject) {
        ring.classList.add(styles.hoverLink);
        dot.style.opacity = '0.6';
      }
    }
    function onLinkLeave() {
      ring.classList.remove(styles.hoverLink);
      dot.style.opacity = '1';
    }
    linkEls.forEach(el => {
      el.addEventListener('mouseenter', onLinkEnter);
      el.addEventListener('mouseleave', onLinkLeave);
    });

    // Project rows — "Open" / "Close" label
    function onProjectSummaryEnter(e) {
      const details = e.currentTarget.closest('details');
      ring.classList.remove(styles.hoverLink);
      ring.classList.add(styles.hoverProject);
      ring.dataset.hoverProject = 'true';
      ring.textContent = details?.open ? 'Close' : 'Open';
      dot.style.opacity = '0';
    }
    function onProjectSummaryLeave() {
      ring.classList.remove(styles.hoverProject);
      delete ring.dataset.hoverProject;
      ring.textContent = '';
      dot.style.opacity = '1';
    }
    function onProjectToggle(e) {
      if (ring.dataset.hoverProject) {
        ring.textContent = e.detail.open ? 'Close' : 'Open';
      }
    }

    const summaries = document.querySelectorAll('details summary');
    summaries.forEach(s => {
      s.addEventListener('mouseenter', onProjectSummaryEnter);
      s.addEventListener('mouseleave', onProjectSummaryLeave);
    });
    document.addEventListener('projecttoggle', onProjectToggle);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onDocLeave);
      document.removeEventListener('mouseenter', onDocEnter);
      document.removeEventListener('projecttoggle', onProjectToggle);
      linkEls.forEach(el => {
        el.removeEventListener('mouseenter', onLinkEnter);
        el.removeEventListener('mouseleave', onLinkLeave);
      });
      summaries.forEach(s => {
        s.removeEventListener('mouseenter', onProjectSummaryEnter);
        s.removeEventListener('mouseleave', onProjectSummaryLeave);
      });
    };
  }, [isFine, prefersReduced]);

  if (!isFine || prefersReduced) return null;

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
