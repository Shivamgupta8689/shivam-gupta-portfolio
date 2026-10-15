import { experience, bio } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import styles from './About.module.css';

export default function About() {
  const revealRef = useReveal();
  return (
    <section id="about" className={styles.section}>
      <div className="section-glow">
        <div className="section-eyebrow">ABOUT</div>
      </div>
      <div ref={revealRef} className="reveal">
        <p className={styles.bio}>{bio}</p>
        <div className={styles.timelineTable}>
          {experience.map((row, i) => (
            <div key={i} className={styles.timelineRow}>
              <div className={styles.timelineDate}>{row.date}</div>
              <div className={styles.timelineDetail}>
                <h3 className={styles.timelineTitle}>{row.title}</h3>
                <div className={styles.roleCompany}>{row.company}</div>
                <p>{row.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
