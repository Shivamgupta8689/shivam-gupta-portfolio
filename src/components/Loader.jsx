import { useEffect, useRef, useState } from 'react';
import styles from './Loader.module.css';

const SCRIPT = [
  { t: 'cmd', text: 'whoami' },
  { t: 'out', text: 'shivam-gupta  //  full-stack developer' },
  { t: 'cmd', text: 'ls projects/' },
  { t: 'out', text: 'study-planner  chat-app  lost-and-found  blog-app' },
  { t: 'cmd', text: 'npm run launch' },
  { t: 'bar' },
  { t: 'out', text: '✔ build complete', accent: true },
  { t: 'out', text: 'launching portfolio...', accent: true },
];

const TYPE_MS = 24;   // typing speed per letter
const BAR_MS = 38;    // progress bar speed
const SHAKE_MS = 700; // shake and glitch time
const EXIT_MS = 900;  // curtain time

export default function Loader({ onDone }) {
  const [lines, setLines] = useState([]);
  const [phase, setPhase] = useState('typing'); // typing | shake | exit
  const skipRef = useRef(false);
  const wakeRef = useRef(null);
  const doneRef = useRef(false);

  // Lock scroll and hold the hero animation while the loader is visible
  useEffect(() => {
    document.documentElement.classList.add('is-loading');
    return () => document.documentElement.classList.remove('is-loading');
  }, []);

  useEffect(() => {
    let cancelled = false;
    let exitTimer;
    setLines([]);

    const sleep = (ms) =>
      new Promise((res) => {
        if (skipRef.current) return res();
        const id = setTimeout(res, ms);
        wakeRef.current = () => { clearTimeout(id); res(); };
      });

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onDone();
    };

    const goExit = () => {
      setPhase('exit');
      exitTimer = setTimeout(finish, EXIT_MS);
    };

    async function run() {
      await sleep(350);
      for (const step of SCRIPT) {
        if (cancelled || skipRef.current) break;

        if (step.t === 'cmd') {
          setLines((l) => [...l, { kind: 'cmd', text: '' }]);
          for (let i = 1; i <= step.text.length; i++) {
            if (cancelled || skipRef.current) break;
            const text = step.text.slice(0, i);
            setLines((l) => {
              const c = l.slice();
              c[c.length - 1] = { kind: 'cmd', text };
              return c;
            });
            await sleep(TYPE_MS);
          }
          await sleep(200);
        } else if (step.t === 'out') {
          setLines((l) => [...l, { kind: 'out', text: step.text, accent: step.accent }]);
          await sleep(240);
        } else if (step.t === 'bar') {
          setLines((l) => [...l, { kind: 'bar', pct: 0 }]);
          for (let p = 5; p <= 100; p += 5) {
            if (cancelled || skipRef.current) break;
            setLines((l) => {
              const c = l.slice();
              c[c.length - 1] = { kind: 'bar', pct: p };
              return c;
            });
            await sleep(BAR_MS);
          }
          await sleep(180);
        }
      }
      if (cancelled) return;
      if (!skipRef.current) {
        setPhase('shake');
        await sleep(SHAKE_MS);
      }
      if (!cancelled) goExit();
    }

    run();
    return () => {
      cancelled = true;
      clearTimeout(exitTimer);
    };
  }, [onDone]);

  // Any key, Escape or a click skips the intro
  useEffect(() => {
    const skip = () => {
      skipRef.current = true;
      wakeRef.current?.();
    };
    window.addEventListener('keydown', skip);
    return () => window.removeEventListener('keydown', skip);
  }, []);

  const skipClick = () => {
    skipRef.current = true;
    wakeRef.current?.();
  };

  return (
    <div
      className={`${styles.overlay} ${phase === 'exit' ? styles.exit : ''}`}
      role="status"
      aria-label="Loading portfolio"
      onClick={skipClick}
    >
      <div
        className={`${styles.win} ${phase === 'shake' ? styles.shake : ''} ${
          phase === 'exit' ? styles.winExit : ''
        }`}
      >
        <div className={styles.topbar} aria-hidden="true">
          <i /><i /><i />
          <span>shivam@portfolio: ~</span>
        </div>

        <div className={styles.body} aria-hidden="true">
          {lines.map((ln, i) => {
            const isLast = i === lines.length - 1;
            if (ln.kind === 'cmd') {
              return (
                <div key={i} className={styles.line}>
                  <span className={styles.prompt}>$</span> {ln.text}
                  {isLast && phase === 'typing' && <span className={styles.caret} />}
                </div>
              );
            }
            if (ln.kind === 'bar') {
              const n = Math.round(ln.pct / 5);
              return (
                <div key={i} className={`${styles.line} ${styles.out}`}>
                  [{'█'.repeat(n)}{'░'.repeat(20 - n)}] {ln.pct}%
                </div>
              );
            }
            return (
              <div
                key={i}
                className={`${styles.line} ${styles.out} ${ln.accent ? styles.accent : ''} ${
                  ln.accent && phase === 'shake' ? styles.glitch : ''
                }`}
              >
                {ln.text}
              </div>
            );
          })}
        </div>
      </div>

      <p className={styles.hint}>Press any key to skip</p>
    </div>
  );
}