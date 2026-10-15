// src/data/portfolio.js
// Single source of truth for all portfolio content

export const personal = {
  name: 'Shivam Gupta',
  brand: 'Shivam Gupta',
  intro:
    "Full-stack developer building real-time and AI-powered web apps. I care about interfaces that feel effortless and code that is easy to maintain.",
  email: 'devshivam.infinite@gmail.com',
  github: 'https://github.com/Shivamgupta8689',
  linkedin: 'https://linkedin.com/in/shivam-gupta-657005323',
};

export const projects = [
  {
    num: '01',
    title: 'AI Smart Study Planner',
    description:
      'Uses Gemini AI to create personalized timetables, summarize notes, generate quizzes and track daily study progress.',
    github: 'https://github.com/Shivamgupta8689/smart-study-planner',
    highlightLabel: 'Highlight',
    highlight: 'Real-time sync across sessions with secure sign-in.',
    tags: ['React', 'Node.js', 'Firebase', 'Gemini AI'],
    image: '/images/smart-study.png',
  },
  {
    num: '02',
    title: 'Real-Time Chat App',
    description:
      'Messaging with instant two-way communication and saved message history.',
    github: 'https://github.com/Shivamgupta8689/Chat-application',
    highlightLabel: 'Highlight',
    highlight: 'JWT login, messages stored in MongoDB.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO'],
    image: '/images/chatapp2.png',
  },
  {
    num: '03',
    title: 'Campus Lost & Found',
    description:
      'Students report and recover lost items, with private real-time chat.',
    github: 'https://github.com/Shivamgupta8689/lost-and-found-system',
    highlightLabel: 'Highlight',
    highlight: 'Chats are removed automatically once an item is claimed.',
    tags: ['React', 'Node.js', 'Firebase', 'Socket.IO'],
    image: '/images/lost-and-found.png',
  },
  {
    num: '04',
    title: 'Blog Application',
    description:
      'Users securely create, edit, delete and manage posts.',
    github: 'https://github.com/Shivamgupta8689/blog_website2',
    highlightLabel: 'Recognition',
    highlight: 'Won Best User Experience at the Inovatex college competition.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Material UI'],
    image: '/images/blog.png',
  },
  {
    num: '05',
    title: 'ASAP – Hotel Emergency Response',
    description:
      'AI-assisted platform where guests report incidents via QR code and staff and managers respond in real time, with Gemini-powered analysis and crisis chat.',
    github: 'https://github.com/Shivamgupta8689/ASAP',
    highlightLabel: 'Highlight',
    highlight: 'Live safety banners and manager escalation, updated instantly across all roles.',
    tags: ['React', 'Node.js', 'Express', 'Firebase', 'Gemini AI', 'Tailwind CSS'],
    image: '/images/asap.png',
  },
];

export const experience = [
  {
    date: 'Nov 2025 – Feb 2026',
    title: 'Frontend Developer',
    company: 'MyEZZ',
    description:
      'Redesigned UI flows, built responsive React components, and worked with the backend team to fix security issues and recurring bugs.',
  },
  {
    date: 'Jun – Aug 2024',
    title: 'Data Analytics Intern',
    company: 'IBM SkillsBuild',
    description:
      'Analyzed large datasets with Python, SQL and Excel, and built dashboards to share key metrics.',
  },
  {
    date: '2023 – 2027',
    title: 'B.E. Computer Engineering',
    company: 'Lokmanya Tilak College of Engineering',
    description: 'CGPA 9.3 / 10, topped Semester 3 with a 10.0.',
  },
  {
    date: '2025 – 2026',
    title: 'Leadership & Community',
    company: 'Coding Club & GFG Chapter',
    description:
      'President of the Coding Club and Technical Head of the GFG Chapter. Organized contests and workshops, mentored juniors.',
  },
  {
    date: 'Hackathons',
    title: 'Competitive Milestones',
    company: 'Quasar 4.0 & Incuverse',
    description:
      'Finalist at Quasar 4.0 and Incuverse inter-college hackathons.',
  },
];

// icon: string key matching the iconMap in Skills.jsx
export const skillGroups = [
  {
    name: 'Languages',
    skills: [
      { label: 'Java', icon: 'FaJava' },
      { label: 'Python', icon: 'SiPython' },
      { label: 'C', icon: 'SiC' },
      { label: 'JavaScript', icon: 'SiJavascript' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { label: 'HTML', icon: 'SiHtml5' },
      { label: 'CSS', icon: 'SiCss3' },
      { label: 'React.js', icon: 'SiReact' },
      { label: 'Material UI', icon: 'SiMui' },
      { label: 'Responsive Design', icon: 'MdDevices' },
    ],
  },
  {
    name: 'Backend and databases',
    skills: [
      { label: 'Node.js', icon: 'SiNodedotjs' },
      { label: 'Express.js', icon: 'SiExpress' },
      { label: 'REST APIs', icon: 'TbApi' },
      { label: 'Socket.IO', icon: 'SiSocketdotio' },
      { label: 'MySQL', icon: 'SiMysql' },
      { label: 'MongoDB', icon: 'SiMongodb' },
      { label: 'Firebase', icon: 'SiFirebase' },
    ],
  },
  {
    name: 'Tools',
    skills: [
      { label: 'Git', icon: 'SiGit' },
      { label: 'GitHub', icon: 'SiGithub' },
      { label: 'Postman', icon: 'SiPostman' },
      { label: 'VS Code', icon: 'VscVscode' },
      { label: 'Gemini AI', icon: 'SiGooglegemini' },
    ],
  },
];


export const bio =
  "I like building things that work well and feel good to use. I build full-stack web apps with React and Node.js, and I enjoy adding AI where it genuinely helps. Outside my own projects, I lead the technical work of student clubs, helping other students learn by organizing contests and workshops.";