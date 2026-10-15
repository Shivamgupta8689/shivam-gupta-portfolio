import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import ProjectItem from './ProjectItem';
import styles from './Projects.module.css';

export default function Projects() {
  const revealRef = useReveal();
  return (
    <section id="projects" className={styles.section}>
      <div className="section-glow">
        <div className="section-eyebrow">PROJECTS</div>
      </div>
      <div ref={revealRef} className={`reveal ${styles.projectsIndex}`}>
        {projects.map((project, i) => (
          <ProjectItem key={project.num} project={project} defaultOpen={i === 0} index={i} />
        ))}
      </div>
    </section>
  );
}
