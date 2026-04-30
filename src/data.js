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
export const PROJECTS = [
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
        link: 'https://github.com/malharrrr',
    },
    {
        name: 'De-Samaadhan',
        tech: 'Node.js, Next.js, Solidity, Blockchain',
        description: 'Won Best Blockchain Project at CSI-SPIT 2024. Decentralized complaint management with Aadhaar Anon integration for anonymous trustless authentication.',
        link: 'https://github.com/malharrrr',
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
        link: 'https://github.com/malharrrr',
    },
];
export const SKILLS = [
    { category: 'Languages', items: 'Python, JavaScript, TypeScript, Java, C/C++, SQL, HTML/CSS, Solidity, Bash, PHP' },
    { category: 'Backend', items: 'Django, Flask, FastAPI, Node.js, Express.js, RESTful APIs, WebSockets' },
    { category: 'Frontend', items: 'React.js, Next.js, Angular, Tailwind CSS, Responsive Web Design' },
    { category: 'AI/ML', items: 'LLMs (Claude, OpenAI, Gemini), LangChain, LangGraph, RAG, Agentic AI, TensorFlow, PyTorch, MCP' },
    { category: 'Databases', items: 'PostgreSQL, MongoDB, MySQL, SQLite, Firebase, Redis' },
    { category: 'DevOps', items: 'Docker, Git/GitHub/GitLab, Linux, Postman, NPM' },
];
export const EXPERIENCE = [
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
export const ACHIEVEMENTS = [
    'Won 3 hackathons: Best Blockchain Project (CSI-SPIT 2024), 2nd Runner Up AI Hackathon (IEEE Bombay Section)',
    'Published at ICAIC 2025 (MIT Jaipur) — causal reinforcement learning for algorithmic trading (TCARP)',
    '20+ final shortlists across national hackathons — top 5% of 500+ participants',
];
export const RESUME_URL = '/resume.pdf';
