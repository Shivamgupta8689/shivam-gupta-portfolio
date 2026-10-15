import { useState, useEffect, useRef } from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import { useMagnetic } from '../hooks/useMagnetic';
import { useFinePointer } from '../hooks/useFinePointer';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

function NavLink({ href, label, isActive, isFine, onClick }) {
  const ref = useRef(null);
  useMagnetic(ref, isFine);
  return (
    <a
      ref={ref}
      href={href}
      className={`${styles.navLink} ${isActive ? styles.activeLink : ''}`}
      aria-current={isActive ? 'true' : undefined}
      onClick={onClick}
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const activeSection = useActiveSection();
  const isFine = useFinePointer();
  const [menuOpen, setMenuOpen] = useState(false);
  const brandRef = useRef(null);
  useMagnetic(brandRef, isFine);

  function closeMenu() { setMenuOpen(false); }

  useEffect(() => {
    function handleKey(e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && menuOpen) closeMenu();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  return (
    <header className={styles.siteHeader}>
      <div className="container">
        <nav className={styles.navInner} aria-label="Main navigation">
          <a ref={brandRef} className={styles.brand} href="#home">Shivam Gupta</a>

          {/* Desktop links */}
          <ul className={styles.navLinks}>
            {NAV_LINKS.map(({ label, href, id }) => (
              <li key={id} className={styles.navItem}>
                <NavLink
                  href={href}
                  label={label}
                  isActive={activeSection === id}
                  isFine={isFine}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen(o => !o)}
          >
            Menu
          </button>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      <div
        id="mobile-nav-menu"
        className={`${styles.mobileNavOverlay} ${menuOpen ? styles.isOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <div className="container">
          <ul className={styles.mobileNavLinks}>
            {NAV_LINKS.map(({ label, href, id }) => (
              <li key={id}>
                <a
                  href={href}
                  className={styles.mobileNavLink}
                  aria-current={activeSection === id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
