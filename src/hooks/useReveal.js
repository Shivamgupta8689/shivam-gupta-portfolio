import { useEffect, useRef } from 'react';

/**
 * useReveal — attaches an IntersectionObserver to a ref element.
 * When visible it adds the CSS class "is-visible" (paired with .reveal in global.css).
 * Fires once only; reduces motion: skips animation, applies visible immediately.
 */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  const prefersReduced = typeof window !== 'undefined'
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
    : false;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (prefersReduced) {
      el.classList.add('is-visible');
      el.style.opacity = '1';
      return;
    }

    if (!('IntersectionObserver' in window)) {
      el.classList.add('is-visible');
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return ref;
}
