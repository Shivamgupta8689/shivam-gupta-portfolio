import { skillGroups } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { FaJava } from 'react-icons/fa';
import {
  SiPython, SiC, SiJavascript, SiHtml5, SiCss, SiReact,
  SiMui, SiNodedotjs, SiExpress, SiSocketdotio, SiMysql,
  SiMongodb, SiFirebase, SiGit, SiGithub, SiPostman, SiGooglegemini,
} from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import styles from './Skills.module.css';

const iconMap = {
  FaJava,
  SiPython,
  SiC,
  SiJavascript,
  SiHtml5,
  SiCss3: SiCss,
  SiReact,
  SiMui,
  MdDevices,
  SiNodedotjs,
  SiExpress,
  TbApi,
  SiSocketdotio,
  SiMysql,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiPostman,
  VscVscode,
  SiGooglegemini,
};

export default function Skills() {
  const revealRef = useReveal();
  return (
    <section id="skills" className={styles.section}>
      <div className="section-glow">
        <div className="section-eyebrow">SKILLS</div>
      </div>
      <div ref={revealRef} className={`reveal ${styles.skillsWrapper}`}>
        {skillGroups.map(group => (
          <div key={group.name} className={styles.skillGroup}>
            <h3 className={styles.groupName}>{group.name}</h3>
            <div className={styles.tileGrid}>
              {group.skills.map(skill => {
                const Icon = iconMap[skill.icon];
                return (
                  <div key={skill.label} className={styles.tile}>
                    {Icon ? (
                      <Icon size={32} aria-hidden="true" style={{ fill: 'currentColor' }} />
                    ) : null}
                    <span>{skill.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
