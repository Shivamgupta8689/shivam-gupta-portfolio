import { useEffect } from 'react';

/**
 * Applies a magnetic pull effect to the element referenced by `ref`.
 * Max pull: 8px. Only runs on fine-pointer (mouse) devices.
 */
export function useMagnetic(ref, enabled = true) {
  useEffect(() => {
    const el = ref?.current;
    if (!el || !enabled) return;

    function onMouseMove(e) {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const maxPull = 8;
      const pullX = Math.max(-maxPull, Math.min(maxPull, deltaX * 0.28));
      const pullY = Math.max(-maxPull, Math.min(maxPull, deltaY * 0.28));
      el.style.transform = `translate3d(${pullX}px, ${pullY}px, 0)`;
    }

    function onMouseLeave() {
      el.style.transition = 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'translate3d(0, 0, 0)';
      setTimeout(() => { el.style.transition = ''; }, 350);
    }

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);
    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [ref, enabled]);
}
