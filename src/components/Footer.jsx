import { useRef } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useMagnetic } from '../hooks/useMagnetic';
import { useFinePointer } from '../hooks/useFinePointer';
import styles from './Footer.module.css';

export default function Footer() {
  const { cycleTheme } = useTheme();
  const isFine = useFinePointer();
  const btnRef = useRef(null);
  useMagnetic(btnRef, isFine);

  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerInner} container`}>
        <div className={styles.copy}>
          © 2026 All rights reserved. Made with ❤️
        </div>
        <button
          ref={btnRef}
          className={styles.themeBtn}
          aria-label="Switch theme"
          onClick={cycleTheme}
        >
          <span aria-hidden="true">◐</span>
          <span>Switch theme</span>
        </button>
      </div>
    </footer>
  );
}
