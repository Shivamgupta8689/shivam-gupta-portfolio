import { useState, useRef } from 'react';
import { personal } from '../data/portfolio';
import { useMagnetic } from '../hooks/useMagnetic';
import { useFinePointer } from '../hooks/useFinePointer';
import { useReveal } from '../hooks/useReveal';
import ContactForm from './ContactForm';
import styles from './Contact.module.css';

export default function Contact() {
  const [formOpen, setFormOpen] = useState(false);
  const isFine = useFinePointer();
  const toggleRef = useRef(null);
  const emailRef = useRef(null);
  const githubRef = useRef(null);
  const linkedinRef = useRef(null);
  const revealRef = useReveal();
  useMagnetic(toggleRef, isFine);
  useMagnetic(emailRef, isFine);
  useMagnetic(githubRef, isFine);
  useMagnetic(linkedinRef, isFine);

  function toggle() { setFormOpen(o => !o); }

  return (
    <section id="contact" className={styles.section}>
      <div className="section-glow">
        <div className="section-eyebrow">CONTACT</div>
      </div>

      <div ref={revealRef} className="reveal">
        <a
          ref={emailRef}
          href={`mailto:${personal.email}`}
          className={styles.emailLink}
        >
          {personal.email}
        </a>

        <div className={styles.socialLinks}>
          <a ref={githubRef} href={personal.github} target="_blank" rel="noopener noreferrer">
            GitHub ↗
          </a>
          <a ref={linkedinRef} href={personal.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn ↗
          </a>
        </div>

        <button
          ref={toggleRef}
          className={styles.toggleBtn}
          aria-expanded={formOpen}
          aria-controls="contact-form-container"
          id="contact-toggle-btn"
          type="button"
          onClick={toggle}
        >
          {formOpen ? 'Close form' : 'Send me a message'}
        </button>

        <ContactForm isOpen={formOpen} toggleBtnRef={toggleRef} />
      </div>
    </section>
  );
}
