export const profile = {
  name: 'Malhar Sarang Bonde',
  shortName: 'Malhar Bonde',
  role: 'Tech Lead @ Valu Ventures',
  tagline: 'Tech Lead @ Valu Ventures & AI Builder',
  location: 'Mumbai, India (open to relocation)',
  education: 'B.Tech CSE (IoT, Cybersecurity & Blockchain), DJSCE Mumbai',
  status: 'Currently working at Valu Ventures',
  summary: 'I build production-grade AI systems, LLM applications, and full-stack products. Published researcher at ICAIC 2025 with 3 hackathon wins and 20+ national-level shortlists.',
  whoami: 'ai engineer, builder, published researcher, 3x hackathon winner',
  url: 'https://malhar-portfolio-neon.vercel.app',
  knowsAbout: [
    'Artificial Intelligence', 'Large Language Models', 'Agentic Workflows',
    'LangChain', 'LangGraph', 'RAG', 'Vector Embeddings',
    'Python', 'TypeScript', 'React.js', 'Next.js', 'System Design',
  ],
};

export const socials = [
  { name: 'github', url: 'https://github.com/malharrrr' },
  { name: 'linkedin', url: 'https://linkedin.com/in/malhar-bonde' },
  { name: 'email', url: 'mailto:malharbonde12@gmail.com' },
];

export const resumeUrl = 'resume.pdf';

export const projects = [
  {
    name: 'Wanderly',
    tech: 'Next.js, MongoDB Atlas, NextAuth.js, Claude/Gemini API',
    description: 'Full-stack AI trip planner with intelligent itinerary generation through multi-turn conversations. Persistent trip history, NextAuth authentication, and travel-journal UI.',
    link: 'https://wanderly-weld.vercel.app/',
  },
  {
    name: 'OmniHub',
    tech: 'TypeScript, JSON, Local Embeddings, MCP Server',
    description: 'A terminal-native memory hub and second brain designed for AI assistants (Claude/Gemini). CLI for seamless data entry and semantic search via local embeddings, zero database overhead. 900+ npm downloads.',
    link: 'https://www.npmjs.com/package/omnihub-cli',
  },
  {
    name: 'Bull AI Report',
    tech: 'Python, Flask, Gemini, yfinance, ReportLab, Matplotlib',
    description: 'An automated equity research tool generating comprehensive financial overviews. Ingests real-time market data to dynamically render typesetting and custom data visualizations into perfectly structured PDF reports.',
    link: 'https://bull-ai-report.onrender.com/',
  },
  {
    name: 'ATS Resume Builder',
    tech: 'Next.js 16, Bun, Gemini, LaTeX (pdflatex), Handlebars, Tailwind',
    description: 'Full-stack resume tailoring platform designed for maximum ATS performance. Leverages structured LLM generation to rewrite professional impact points while employing server-side LaTeX compilation for pristine PDF export.',
    link: 'https://resume-builder-kfcu.onrender.com/',
  },
  {
    name: 'Healosbench',
    tech: 'Python, Anthropic API, Hono, Zod, Drizzle ORM',
    description: 'Full eval harness for structured clinical extraction using Anthropic tool use, retry-with-feedback loops, and prompt caching across 50 clinical transcripts and 3 prompt strategies. Per-field metrics (fuzzy match, set-based F1, numeric tolerance) with hallucination detection. Schema failure rate under 2%.',
    link: 'https://github.com/malharrrr/HealosBench',
  },
  {
    name: 'DataStream',
    tech: 'Go, gRPC, TimescaleDB, WebSockets',
    description: 'A high-performance, concurrent financial data pipeline built in Go for sub-second market data ingestion. Integrates Binance WebSocket feeds and Yahoo Finance REST polling, using gRPC for low-latency communication and robust concurrency patterns (worker pools, buffered channels) for backpressure management.',
    link: 'https://github.com/malharrrr/DataStream',
  },
  {
    name: 'FeedPulse',
    tech: 'TypeScript, Next.js, Gemini API, MongoDB, Node.js',
    description: 'An interactive web application designed to help creators reverse-engineer and simulate how the xAI algorithm treats content reach. Allows users to input post data to see real-time reach estimates, ranking percentiles, and actionable feedback based on platform heuristics.',
    link: 'https://feed-pulse-zeta.vercel.app/',
  },
  {
    name: 'AI/ML Image Processing API',
    tech: 'FastAPI, Docker Compose, Ollama, HuggingFace, RMBG-2.0',
    description: 'GPU-accelerated containerized pipeline integrating RMBG-2.0 for background removal and Moondream VLM for automated image captioning. 60% reduction in end-to-end processing time via multi-container orchestration.',
    link: 'https://github.com/malharrrr/image-processing',
  },
  {
    name: 'TCARP',
    tech: 'Python, TensorFlow, PyTorch, Reinforcement Learning',
    description: 'Published at ICAIC 2025 (MIT Jaipur). Causal RL trading system using Granger Causality, DAGs, GNNs and PPO. 2.45 Sharpe ratio — 40% above all baselines, 2x higher risk-adjusted returns than MVO during high-volatility regimes.',
    link: 'https://github.com/malharrrr/TCARP',
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
    description: 'Won 2nd Runner Up at Aeravat AI Hackathon (IEEE Bombay Section). Real-time deepfake detection using MTCNN and VGG-16 for GAN artifact classification.',
    link: 'https://github.com/mkdirteamname/Aeravat',
  },
];

export const skills = [
  {
    category: 'AI & Machine Learning',
    label: 'AI/ML',
    items: 'LLMs (Claude, Gemini, OpenAI), LangChain, LangGraph, MCP, Agentic Workflows, RAG, Vector Embeddings, KV Caching, Prompt Engineering, Model Evaluation, TensorFlow, PyTorch',
  },
  {
    category: 'Languages & Backend',
    label: 'Lang/Backend',
    items: 'Python, JavaScript, TypeScript, Solidity, Bash | Node.js, FastAPI, Flask, Django, WebSockets',
  },
  {
    category: 'Databases & DevOps',
    label: 'Data/DevOps',
    items: 'MongoDB, PostgreSQL, Firebase, Vector DBs (Pinecone, Weaviate, pgvector) | Docker, Linux, Git, Redis, CI/CD',
  },
  {
    category: 'Frontend & Systems',
    label: 'Frontend/Sys',
    items: 'React.js, Next.js, Tailwind CSS | Blockchain, System Design',
  },
];

export const experience = [
  {
    role: 'Tech Lead',
    company: 'Valu Ventures',
    link: 'https://valu.ventures/',
    period: 'Sep 2026 – Present',
    current: true,
    bullets: [],
  },
  {
    role: 'Trainee Software Engineer',
    company: 'Neebal Technologies',
    period: 'Jun 2025 – Dec 2025',
    location: 'Mumbai',
    bullets: [
      'Architected a stateful multi-agent system using LangGraph to automate complex business decision-making, reducing manual processing time by 40% and enhancing decision accuracy through Agentic RAG pipelines',
      'Built a curriculum-aware RAG pipeline for an EdTech Q&A module (Agneez); implemented grade-level metadata filtering in Pinecone DB to ensure responses were pedagogically appropriate per student level (e.g. restricting quadratic solutions to factor method for Grade 6), reducing response time to under 2s',
      "Developed an Edge-AI Farmer's Assistant application; integrated a custom-trained ML model for real-time crop disease identification achieving 96% model accuracy across 20+ disease categories, providing low-latency weather and mandi updates on edge devices",
      'Automated visa monitoring workflows by deploying a notification bot, reducing user check-frequency by 90% and improving successful slot acquisition rates through automated polling and real-time alerts',
    ],
  },
];

export const achievements = [
  'Best Blockchain Project — CSI-SPIT Hackathon 2024',
  '2nd Runner Up — Aeravat AI Hackathon, IEEE Bombay Section',
  '20+ national-level hackathon shortlists (top 5% of 500+ participants)',
  'Published at ICAIC 2025 (MIT Jaipur) — causal reinforcement learning for algorithmic trading',
];
