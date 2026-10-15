import { useState, useRef, useEffect } from 'react';
import toast from 'react-hot-toast';
import styles from './ContactForm.module.css';

// Formspree ID is public (not a secret). The env variable is optional.
const FORM_ENDPOINT =
  import.meta.env.VITE_FORM_ENDPOINT || 'https://formspree.io/f/xpwgneez';

const CONTACT_EMAIL = 'devshivam.infinite@gmail.com';

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());
}

export default function ContactForm({ isOpen, toggleBtnRef }) {
  const containerRef = useRef(null);
  const nameRef = useRef(null);
  const isOpenRef = useRef(isOpen);
  const closeTimerRef = useRef(null);

  const [nameVal, setNameVal] = useState('');
  const [emailVal, setEmailVal] = useState('');
  const [msgVal, setMsgVal] = useState('');
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');
  const [msgErr, setMsgErr] = useState('');
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  // Always know the latest open state inside timers
  useEffect(() => {
    isOpenRef.current = isOpen;
  }, [isOpen]);

  // Closed form must not be keyboard focusable
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    if (isOpen) el.removeAttribute('inert');
    else el.setAttribute('inert', '');
  }, [isOpen]);

  // Focus Name when opened
  useEffect(() => {
    if (isOpen && nameRef.current) {
      const t = setTimeout(() => nameRef.current?.focus(), 300);
      return () => clearTimeout(t);
    }
  }, [isOpen]);

  // After the form closes, bring the form back for the next message
  useEffect(() => {
    if (!isOpen && success) {
      const t = setTimeout(() => setSuccess(false), 500);
      return () => clearTimeout(t);
    }
  }, [isOpen, success]);

  // Escape closes the form and returns focus to the toggle button
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    function onKey(e) {
      if ((e.key === 'Escape' || e.key === 'Esc') && isOpen) {
        e.stopPropagation();
        toggleBtnRef?.current?.click();
        setTimeout(() => toggleBtnRef?.current?.focus(), 10);
      }
    }
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [isOpen, toggleBtnRef]);

  // Clear any pending timer on unmount
  useEffect(() => () => clearTimeout(closeTimerRef.current), []);

  async function handleSubmit(e) {
    e.preventDefault();
    setNameErr('');
    setEmailErr('');
    setMsgErr('');
    setFailed(false);

    // Honeypot: bots fill this hidden field, people do not
    const hp = e.target.querySelector('input[name="_gotcha"]');
    if (hp && hp.value.trim() !== '') return;

    let valid = true;
    if (!nameVal.trim()) { setNameErr('Please enter your name.'); valid = false; }
    if (!emailVal.trim() || !validateEmail(emailVal)) {
      setEmailErr('Enter a valid email address.');
      valid = false;
    }
    if (!msgVal.trim()) { setMsgErr('Please enter your message.'); valid = false; }
    if (!valid) return;

    setSending(true);
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: nameVal.trim(),
          email: emailVal.trim(),
          message: msgVal.trim(),
        }),
      });

      if (!res.ok) throw new Error('Server returned ' + res.status);

      toast.success("Thank you for your message! I'll get back to you soon.");
      setSuccess(true);
      setSending(false);
      setNameVal('');
      setEmailVal('');
      setMsgVal('');

      // Close after 3s, but only if the person has not already closed it
      closeTimerRef.current = setTimeout(() => {
        if (isOpenRef.current) toggleBtnRef?.current?.click();
      }, 3000);
    } catch (err) {
      setSending(false);
      setFailed(true);
      toast.error(
        err instanceof TypeError
          ? 'Network error. Please try again later.'
          : 'Oops! Something went wrong. Please try again.'
      );
    }
  }

  return (
    <div
      ref={containerRef}
      id="contact-form-container"
      className={`${styles.formContainer} ${isOpen ? styles.expanded : styles.collapsed}`}
      aria-hidden={!isOpen}
    >
      {success ? (
        <p className={styles.successMsg}>Thanks, I will reply to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* Honeypot */}
          <input
            type="text"
            name="_gotcha"
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: 'none' }}
          />

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-name">Name</label>
            <input
              ref={nameRef}
              id="contact-name"
              name="name"
              type="text"
              className={`${styles.input} ${nameErr ? styles.invalid : ''}`}
              placeholder="Your name"
              autoComplete="name"
              required
              value={nameVal}
              onChange={(e) => { setNameVal(e.target.value); setNameErr(''); }}
            />
            <div className={styles.fieldError} aria-live="polite">{nameErr}</div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              className={`${styles.input} ${emailErr ? styles.invalid : ''}`}
              placeholder="you@example.com"
              autoComplete="email"
              required
              value={emailVal}
              onChange={(e) => { setEmailVal(e.target.value); setEmailErr(''); }}
            />
            <div className={styles.fieldError} aria-live="polite">{emailErr}</div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              className={`${styles.textarea} ${msgErr ? styles.invalid : ''}`}
              placeholder="Tell me about your project or opportunity..."
              rows={5}
              required
              value={msgVal}
              onChange={(e) => { setMsgVal(e.target.value); setMsgErr(''); }}
            />
            <div className={styles.fieldError} aria-live="polite">{msgErr}</div>
          </div>

          <button type="submit" className={styles.submitBtn} disabled={sending}>
            {sending ? 'Sending…' : 'Send message'}
          </button>

          {failed && (
            <div className={styles.errorBanner} aria-live="assertive">
              Could not send. Email me directly at{' '}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          )}
        </form>
      )}
    </div>
  );
}