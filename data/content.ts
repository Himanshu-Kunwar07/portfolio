export const me = {
  name: "Himanshu Kunwar",
  handle: "himanshu",
  role: "Full Stack Developer",
  email: "himanshukunwar07@gmail.com",
  phone: "+91 7902052966",
  linkedin: "https://linkedin.com/in/himanshu-022001",
  github: "https://github.com/Himanshu-022001",
  resume: "/Himanshu_Kunwar_Resume.pdf",
  summary:
    "Full Stack Developer with experience building responsive web applications, real-time systems, payment platforms and data-driven workflows.",
};

export const roles = [
  "Full Stack Developer",
  "Real-time systems builder",
  "React & Node engineer",
  "Data analyst",
];

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "lab", label: "Lab" },
  { id: "contact", label: "Contact" },
];

export type TerminalLine = { kind: "cmd" | "out"; text: string };

export const terminal: TerminalLine[] = [
  { kind: "cmd", text: "whoami" },
  { kind: "out", text: "himanshu-kunwar" },
  { kind: "cmd", text: "cat stack.txt" },
  { kind: "out", text: "React · TypeScript · Node · PostgreSQL · Redis" },
  { kind: "cmd", text: "ls projects/" },
  { kind: "out", text: "dashboard/  p2p-payments/  exchange/  project-manager/" },
  { kind: "cmd", text: "git log -1 --oneline" },
  { kind: "out", text: "Data Analyst @ Invedus (current)" },
];

export const stats = [
  { value: 100, suffix: "+", label: "Client websites maintained" },
  { value: 1000, suffix: "+", label: "Customers served by systems I wrote SQL for" },
  { value: 10, suffix: "%", label: "Fewer annotation errors through consistent QA" },
];

export type LogEntry = {
  hash: string;
  refs?: string[];
  title: string;
  org: string;
  period: string;
  lines: string[];
};

export const log: LogEntry[] = [
  {
    hash: "e41b7a9",
    refs: ["HEAD", "main"],
    title: "Data Analyst",
    org: "Invedus",
    period: "08/2025 – Present",
    lines: [
      "Cleaned and validated large datasets with SQL and BI tools, improving accuracy and consistency across reporting.",
      "Analyzed geospatial datasets for 3D city mapping, correcting inconsistencies to improve mapping accuracy.",
      "Reviewed annotated datasets and reduced annotation errors by 10% through consistent QA checks.",
      "Worked with a team of 5–10 across functions to standardize annotation guidelines and pipeline efficiency.",
    ],
  },
  {
    hash: "9c02d5f",
    title: "Frontend Developer",
    org: "Fourth Quarter Technology",
    period: "08/2024 – 08/2025",
    lines: [
      "Maintained client-facing websites for 100+ real estate institutional clients, keeping them reliable and responsive.",
      "Wrote and optimized SQL queries powering backend systems that served 1000+ customers.",
      "Implemented UI enhancements and worked with backend teams to improve the overall user experience.",
      "Monitored, troubleshot and resolved frontend issues while integrating new design and feature updates.",
    ],
  },
  {
    hash: "5ad83c1",
    refs: ["merge"],
    title: "Master of Computer Applications",
    org: "Galgotias University",
    period: "09/2022 – 07/2024",
    lines: ["Postgraduate degree in computer applications."],
  },
  {
    hash: "1f6e2b8",
    refs: ["init"],
    title: "B.Sc. (Computer Science)",
    org: "KL DAV PG College Roorkee",
    period: "09/2018 – 07/2021",
    lines: ["Undergraduate degree in computer science."],
  },
];

export type Project = {
  id: string;
  title: string;
  kind: string;
  period?: string;
  blurb: string;
  stack: string[];
  href: string;
  c1: string;
  c2: string;
};

export const projects: Project[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    kind: "Full stack",
    blurb: "A dashboard application. Source code and details are on GitHub.",
    stack: ["React", "TypeScript"],
    href: "https://github.com/Himanshu-Kunwar07/Dashboard",
    c1: "#ff6b3d",
    c2: "#7c3aed",
  },
  {
    id: "p2p",
    title: "Peer-to-Peer Payments",
    kind: "Real-time",
    period: "04/2026 – 07/2026",
    blurb:
      "Instant money transfers using mobile numbers, emails or usernames, secured with biometrics, PINs and OTPs, with a digital wallet for quick payments.",
    stack: ["React", "WebSocket", "Express", "Bun", "PostgreSQL"],
    href: "https://github.com/Himanshu-Kunwar07?tab=repositories",
    c1: "#4fe3c1",
    c2: "#2563eb",
  },
  {
    id: "exchange",
    title: "Centralized Exchange",
    kind: "Real-time",
    period: "01/2026 – 03/2026",
    blurb:
      "A real-time order book that matches buy and sell orders over WebSockets, with custodial wallets and a trading dashboard built for beginners.",
    stack: ["React", "WebSocket", "Express", "Bun", "Prisma", "Redis"],
    href: "https://github.com/Himanshu-Kunwar07/CentralizedExchange",
    c1: "#f59e0b",
    c2: "#ef4444",
  },
  {
    id: "project-manager",
    title: "Project Manager App",
    kind: "Full stack",
    blurb: "A project management application. Source code and details are on GitHub.",
    stack: ["React", "Node.js", "MongoDB"],
    href: "https://github.com/Himanshu-Kunwar07/trello_mongo",
    c1: "#22d3ee",
    c2: "#10b981",
  },
];

export const stackGroups = [
  {
    name: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "SQL", "C#", "VB.NET", "HTML", "CSS"],
  },
  { name: "Frontend", items: ["React.js", "Redux", "Responsive Web Development", "UI Development"] },
  {
    name: "Backend",
    items: ["Node.js", "Express.js", "Bun", "REST APIs", "ASP.NET", "Web Forms", "MVC", "Entity Framework"],
  },
  {
    name: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQL Server", "Database Design", "Query Optimization"],
  },
  { name: "Real-time & Infra", items: ["WebSocket", "Redis", "Prisma", "Stripe", "SSL"] },
  { name: "Tools", items: ["Git", "GitHub", "Visual Studio"] },
  {
    name: "Data & AI",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Machine Learning",
      "Feature Engineering",
      "Predictive Modeling",
      "EDA",
      "Data Preprocessing",
      "Model Evaluation",
      "Data Visualization",
    ],
  },
];

export const ticker = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "Bun",
  "PostgreSQL",
  "MongoDB",
  "Prisma",
  "Redis",
  "WebSocket",
  "SQL",
  "Python",
  "Git",
];
