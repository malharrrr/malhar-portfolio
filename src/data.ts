export const PASSWORD = 'build';

export const ASCII = `
 ███╗   ███╗ █████╗ ██╗     ██╗  ██╗ █████╗ ██████╗
 ████╗ ████║██╔══██╗██║     ██║  ██║██╔══██╗██╔══██╗
 ██╔████╔██║███████║██║     ███████║███████║██████╔╝
 ██║╚██╔╝██║██╔══██║██║     ██╔══██║██╔══██║██╔══██╗
 ██║ ╚═╝ ██║██║  ██║███████╗██║  ██║██║  ██║██║  ██║
 ╚═╝     ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝`;

export const SOCIAL = {
  email: 'malharbonde12@gmail.com',
  github: 'malharrrr',
  linkedin: 'malhar-bonde',
};

export const ABOUT = `Name      Malhar Sarang Bonde
Role      Software Engineer — Agentic AI & Full-Stack
Location  Mumbai, India (open to relocation)
Education B.Tech CSE (IoT, Cybersecurity & Blockchain), DJSCE Mumbai
Status    Immediate joiner, open to full-time roles

I build production-grade AI systems, LLM applications, and full-stack
products. Published researcher at ICAIC 2025 with 3 hackathon wins and
20+ national-level shortlists.`;

export interface Project {
  name: string;
  tech: string;
  description: string;
  link: string;
}

export const PROJECTS: Project[] = [
  {
    name: 'Wanderly',
    tech: 'Next.js, MongoDB Atlas, NextAuth.js, Claude/Gemini API',
    description: 'Full-stack AI trip planner with intelligent itinerary generation through multi-turn conversations. Persistent trip history, NextAuth authentication, and travel-journal UI.',
    link: 'https://github.com/malharrrr/wanderly',
  },
  {
    name: 'AI/ML Image Processing API',
    tech: 'FastAPI, Docker Compose, Ollama, HuggingFace, RMBG-2.0',
    description: 'GPU-accelerated containerized pipeline integrating RMBG-2.0 for background removal and Moondream VLM for automated image captioning.',
    link: 'https://github.com/malharrrr/task',
  },
  {
    name: 'TCARP',
    tech: 'Python, TensorFlow, PyTorch, Reinforcement Learning',
    description: 'Published at ICAIC 2025 (MIT Jaipur). Causal RL trading system using Granger Causality, DAGs, GNNs and PPO. 2.45 Sharpe ratio — 40% above all baselines.',
    link: 'https://github.com/malharrrr/tcarp_new',
  },
  {
    name: 'De-Samaadhan',
    tech: 'Node.js, Next.js, Solidity, Blockchain',
    description: 'Won Best Blockchain Project at CSI-SPIT 2024. Decentralized complaint management with Aadhaar Anon integration for anonymous trustless authentication.',
    link: 'https://github.com/malharrrr/De-Samaadhan',
  },
  {
    name: 'Mirage.AI',
    tech: 'TensorFlow, PyTorch, Flask, MTCNN, VGG-16',
    description: 'Won 2nd place at Aeravat AI Hackathon (IEEE Bombay Section). Real-time deepfake detection using MTCNN and VGG-16 for GAN artifact classification.',
    link: 'https://github.com/malharrrr',
  },
  {
    name: 'Legual',
    tech: 'Django, MBart, Google Flan T5, LangChain, OpenAI',
    description: 'Legal document processing platform with AI-powered translation, summarization, and Chat with PDF using instructor embeddings and vector search.',
    link: 'https://github.com/malharrrr/Legual-datahack',
  },
];

export interface SkillCategory {
  category: string;
  items: string;
}

export const SKILLS: SkillCategory[] = [
  { category: 'Languages',  items: 'Python, JavaScript, TypeScript, Java, C/C++, SQL, HTML/CSS, Solidity, Bash, PHP' },
  { category: 'Backend',    items: 'Django, Flask, FastAPI, Node.js, Express.js, RESTful APIs, WebSockets' },
  { category: 'Frontend',   items: 'React.js, Next.js, Tailwind CSS, Responsive Web Design' },
  { category: 'AI/ML',      items: 'LLMs (Claude, OpenAI, Gemini), LangChain, LangGraph, RAG, Agentic AI, TensorFlow, PyTorch, MCP' },
  { category: 'Databases',  items: 'PostgreSQL, MongoDB, MySQL, SQLite, Firebase, Redis' },
  { category: 'DevOps',     items: 'Docker, Git/GitHub/GitLab, Linux, Postman, NPM' },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Trainee Software Engineer',
    company: 'Neebal Technologies',
    period: 'Jun 2025 – Dec 2025 | Mumbai',
    bullets: [
      'Architected stateful multi-agent system using LangGraph — reduced manual processing time by 40%',
      'Built automated visa appointment monitoring bot — reduced check-frequency by 90%',
      'Developed Edge-AI Farmers Assistant with custom ML model — 96% crop disease detection accuracy',
      'Built airline management backend system in PHP with RESTful API integration',
    ],
  },
];

export const ACHIEVEMENTS: string[] = [
  'Won 3 hackathons: Best Blockchain Project (CSI-SPIT 2024), 2nd Runner Up AI Hackathon (IEEE Bombay Section)',
  'Published at ICAIC 2025 (MIT Jaipur) — causal reinforcement learning for algorithmic trading (TCARP)',
  '20+ final shortlists across national hackathons — top 5% of 500+ participants',
];

export const RESUME_URL = '/resume.pdf';

export interface PortfolioCommand {
  description: string;
  execute: () => string | string[];
}

export const portfolioData: Record<string, PortfolioCommand> = {
  help: {
    description: 'Show available commands',
    execute: () => [
      "Available commands:",
      "help        - Show this help message",
      "about       - View my bio and background",
      "projects    - List featured projects",
      "skills      - View my technical skills",
      "experience  - View my work experience",
      "achievements- View key achievements",
      "social      - Show contact details",
      "resume      - Display the resume URL",
      "ascii       - Show the terminal banner art",
      "clear       - Clear the terminal output",
      "agent       - Run the hidden agent easter egg",
      "analyze     - Run the hidden agent easter egg",
    ],
  },
  about: {
    description: 'Display the about section',
    execute: () => ABOUT,
  },
  projects: {
    description: 'Display featured projects',
    execute: () => PROJECTS.flatMap(project => [
      `Name:        ${project.name}`,
      `Tech:        ${project.tech}`,
      `Description: ${project.description}`,
      `Link:        ${project.link}`,
      '',
    ]),
  },
  skills: {
    description: 'Display skills by category',
    execute: () => SKILLS.map(skill => `${skill.category}: ${skill.items}`),
  },
  experience: {
    description: 'Display professional experience',
    execute: () => EXPERIENCE.flatMap(item => [
      `${item.role} @ ${item.company} (${item.period})`,
      ...item.bullets.map(bullet => `  - ${bullet}`),
      '',
    ]),
  },
  achievements: {
    description: 'Display achievements and awards',
    execute: () => ACHIEVEMENTS,
  },
  social: {
    description: 'Display social and contact links',
    execute: () => [
      `Email:    ${SOCIAL.email}`,
      `GitHub:   https://github.com/${SOCIAL.github}`,
      `LinkedIn: https://www.linkedin.com/in/${SOCIAL.linkedin}`,
    ],
  },
  resume: {
    description: 'Display the resume URL',
    execute: () => `Resume: ${RESUME_URL}`,
  },
  ascii: {
    description: 'Display the ASCII banner art',
    execute: () => ASCII,
  },
};