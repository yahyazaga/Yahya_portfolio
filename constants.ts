
import { Project, Skill, Service } from './types';

// High-quality Unsplash images for reliable loading
export const YAHYA_IMAGES = {
  hero: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80", 
  about: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80", 
  magic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80", 
  cool: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80", 
  winter: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?auto=format&fit=crop&w=800&q=80",
  workspace: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
  travel: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80"
};

// Live Wallpapers for Background Engine
export const BACKGROUND_WALLPAPERS = {
  neon: [
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1920&q=80", // Cyberpunk City
    "https://images.unsplash.com/photo-1563089145-599997674d42?auto=format&fit=crop&w=1920&q=80", // Neon Abstract
  ],
  nature: [
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1920&q=80", // Mountains
    "https://images.unsplash.com/photo-1501854140884-074bf6bca138?auto=format&fit=crop&w=1920&q=80", // Ocean
  ],
  islamic: [
    "https://images.unsplash.com/photo-1564121211835-e88c852648ab?auto=format&fit=crop&w=1920&q=80", // Mosque
    "https://images.unsplash.com/photo-1542438408-abb26010438c?auto=format&fit=crop&w=1920&q=80", // Geometric
  ],
  minimal: [
    "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1920&q=80", // White Abstract
  ],
  matrix: [
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80", // Code
  ]
};

export const SOUNDS = {
  hover: "https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3", 
  click: "https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3", 
  success: "https://assets.mixkit.co/active_storage/sfx/1435/1435-preview.mp3", 
  type: "https://assets.mixkit.co/active_storage/sfx/2366/2366-preview.mp3", 
  achieve: "https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3", 
  whoosh: "https://assets.mixkit.co/active_storage/sfx/1487/1487-preview.mp3", 
  glitch: "https://assets.mixkit.co/active_storage/sfx/2153/2153-preview.mp3",
  hologram: "https://assets.mixkit.co/active_storage/sfx/1628/1628-preview.mp3",
};

export const PLAYLIST = [
  { title: "Lofi Coding", url: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3", type: 'lofi' },
  { title: "Deep Focus", url: "https://assets.mixkit.co/music/preview/mixkit-hip-hop-02-738.mp3", type: 'lofi' },
  { title: "Nasheed (Vocals)", url: "https://assets.mixkit.co/music/preview/mixkit-dreaming-big-31.mp3", type: 'nasheed' }, // Placeholder
  { title: "Cyberpunk Run", url: "https://assets.mixkit.co/music/preview/mixkit-driving-ambition-32.mp3", type: 'cyber' },
];

export const SUPERPOWERS = [
  { title: "Bug Hunter", desc: "Can spot a missing semicolon from a mile away.", icon: "Zap" },
  { title: "Logic Master", desc: "Translating chaos into structured algorithms.", icon: "Brain" },
  { title: "UI Visionary", desc: "Making pixels look expensive since 2023.", icon: "Eye" },
  { title: "Fast Learner", desc: "Absorbing docs faster than AI.", icon: "BookOpen" },
];

export const TECH_NEWS = [
  { title: "AI Takes Over Coding?", source: "TechDaily", time: "2h ago" },
  { title: "C++23 Features You Need", source: "DevPoint", time: "5h ago" },
  { title: "React 19 Released", source: "FrontendMaster", time: "1d ago" },
];

export const YAHYA_DATA = {
  name: "Yahya Khan",
  title: ["BSCS Student", "Beginner Programmer", "C++ Learner", "Future Software Engineer", "Content Creator"],
  location: "Pakistan",
  bio: {
    short: "BSCS student living the hostel life, obsessed with C++ and building the future.",
    long: "I'm currently pursuing my BSCS. My days are a blend of hostel life chaos, attending lectures, and grinding code. I'm deeply interested in Object-Oriented Programming (OOP) and Digital Marketing. My routine? Discipline is key—Gym after Asr, prayers on time, and late-night coding sessions.",
    values: ["Islamic Values", "Discipline", "Honesty", "Continuous Learning"]
  },
  contact: {
    email: "yahya.contact@placeholder.com", 
    phone: "+92 300 1234567", 
    address: "Hostel City, Pakistan" 
  }
};

export const TIMELINE_DATA = [
  { year: "2020", title: "Matriculation", desc: "Built the foundation of knowledge.", icon: "School" },
  { year: "2022", title: "Intermediate", desc: "Pre-Engineering studies & first curiosity about tech.", icon: "BookOpen" },
  { year: "2023", title: "BSCS Started", desc: "Entered University. The coding journey begins.", icon: "University" },
  { year: "2024", title: "First C++ Project", desc: "Created console-based management systems.", icon: "Code" },
  { year: "2025", title: "Present Day", desc: "Learning OOP, DSA, and building this portfolio.", icon: "User" },
];

export const ROUTINE_DATA = [
  { time: "5:00 AM", activity: "Fajr & Quran", icon: "Moon" },
  { time: "8:00 AM", activity: "University / Lectures", icon: "Book" },
  { time: "4:00 PM", activity: "Asr & Gym", icon: "Dumbbell" },
  { time: "8:00 PM", activity: "Dinner & Rest", icon: "Coffee" },
  { time: "10:00 PM", activity: "Deep Work / Coding", icon: "Code" },
];

export const GOALS_DATA = [
  { title: "Master C++", desc: "Understand memory management & STL deep dive.", progress: 65 },
  { title: "Full Stack Dev", desc: "Learn React, Node, and Databases.", progress: 30 },
  { title: "Build SaaS", desc: "Launch a real product users pay for.", progress: 10 },
  { title: "AI Integration", desc: "Learn Python & ML basics.", progress: 15 },
];

export const SKILLS: Skill[] = [
  { name: "C++", level: 65, category: "Programming", isReal: true, funnyDescription: "I speak memory addresses." },
  { name: "OOP", level: 70, category: "Programming", isReal: true, funnyDescription: "Everything is an object, even my problems." },
  { name: "Logic Building", level: 60, category: "Programming", isReal: true, funnyDescription: "Connecting dots... eventually." },
  { name: "Digital Marketing", level: 40, category: "Other", isReal: true, funnyDescription: "I know how to sell ice to eskimos (theoretically)." },
  { name: "Islamic Studies", level: 90, category: "Other", isReal: true, funnyDescription: "The foundation of everything." },
  { name: "Web Development", level: 20, category: "Programming", isReal: false, funnyDescription: "Still figuring out how to center a div." },
  { name: "UI/UX Design", level: 15, category: "Tools", isReal: false, funnyDescription: "I like pretty colors." },
  { name: "Linux", level: 30, category: "Tools", isReal: true, funnyDescription: "sudo make me a sandwich" },
  { name: "Git", level: 45, category: "Tools", isReal: true, funnyDescription: "commit -m 'fixed bugs again'" },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Student Mgmt System",
    description: "Console-based app built with C++ using OOP principles.",
    tech: ["C++", "OOP", "File Handling"],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    isReal: true
  },
  {
    id: 2,
    title: "E-Commerce Landing",
    description: "Modern landing page design with responsive layout.",
    tech: ["HTML", "CSS", "JS"],
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    link: "#",
    isReal: false
  },
  {
    id: 3,
    title: "Portfolio V1",
    description: "My first attempt at a personal website.",
    tech: ["React", "Tailwind"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    link: "#",
    isReal: false
  },
  {
    id: 4,
    title: "Dino Game Clone",
    description: "Recreating the classic chrome dino runner.",
    tech: ["C++", "Graphics.h"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    link: "#",
    isReal: false
  }
];

export const SERVICES: Service[] = [
  { title: "C++ Tutoring", description: "Helping beginners grasp the basics of C++ and logic.", icon: null, isReal: true },
  { title: "Digital Marketing Setup", description: "Setting up basic social media campaigns.", icon: null, isReal: true },
  { title: "Web Development", description: "Building responsive websites.", icon: null, isReal: false },
  { title: "App Prototyping", description: "Creating high-fidelity wireframes.", icon: null, isReal: false },
];

export const HADITHS = [
  "The best among you are those who have the best manners and character.",
  "Speak good or remain silent.",
  "Modesty brings nothing but good.",
  "A good word is charity."
];

export const COMPLIMENTS = [
  "Your code is compiling perfectly today!",
  "You have a great eye for design!",
  "Your logic is undeniable.",
  "You bring positive energy to the server.",
  "Debugging wizard in the making!"
];

export const COLOR_PALETTES = [
  { id: 'neon', name: "Neon Galaxy", primary: "#6A5CED", secondary: "#00D4FF", accent: "#FF7A00", bg: "#0F111A", desc: "Futuristic & Deep" },
  { id: 'samurai', name: "Cyber Samurai", primary: "#FF0055", secondary: "#ffffff", accent: "#FF2A6D", bg: "#050505", desc: "Aggressive Red" },
  { id: 'aurora', name: "Aurora Winter", primary: "#2dd4bf", secondary: "#e0f2fe", accent: "#99f6e4", bg: "#0f172a", desc: "Icy & Calm" },
  { id: 'islamic', name: "Golden Royal", primary: "#FFD700", secondary: "#10b981", accent: "#D4AF37", bg: "#022c22", desc: "Spiritual Gold" },
  { id: 'matrix', name: "Hacker Mode", primary: "#22c55e", secondary: "#000000", accent: "#4ade80", bg: "#000000", desc: "Code Rain" },
  { id: 'ocean', name: "Ocean Wave", primary: "#0ea5e9", secondary: "#7dd3fc", accent: "#38bdf8", bg: "#0c4a6e", desc: "Deep Blue" },
  { id: 'minimal', name: "Ultra Minimal", primary: "#333333", secondary: "#666666", accent: "#000000", bg: "#ffffff", desc: "Clean White" },
];

export const ACHIEVEMENTS_LIST = [
  { id: 'scroll_master', title: "Scroll Master", icon: "ArrowDown", desc: "Explored the entire page." },
  { id: 'theme_switcher', title: "Chameleon", icon: "Palette", desc: "Tried a new look." },
  { id: 'gamer', title: "Gamer", icon: "Gamepad2", desc: "Played a game." },
  { id: 'dev_tools', title: "Hacker", icon: "Terminal", desc: "Opened the terminal." },
  { id: 'click_frenzy', title: "Click Frenzy", icon: "MousePointer", desc: "Clicked 10 things." },
  { id: 'easter_egg', title: "Secret Agent", icon: "Eye", desc: "Found the hidden zone." },
];

export const AI_WIDGET_DATA = {
  motivation: [
    "Consistency beats intensity.",
    "Code is poetry written for machines.",
    "Every bug you fix is a lesson learned.",
    "Don't stop when you're tired, stop when you're done."
  ],
  tips: [
    "Tip: Use const references in C++ to avoid copying large objects.",
    "Tip: Comment 'Why', not 'What'.",
    "Tip: Learn keybindings, mouse usage slows you down.",
    "Tip: Drink water. Your brain needs it."
  ],
  ideas: [
    "Build a Todo App in CLI.",
    "Create a weather dashboard.",
    "Make a simple physics engine.",
    "Design a portfolio for a cat."
  ]
};

export const ACHIEVEMENTS_DATA = [
  { id: 1, title: "Code Commits", value: 150, suffix: "+", icon: "GitCommit" },
  { id: 2, title: "Projects Built", value: 10, suffix: "+", icon: "Folder" },
  { id: 3, title: "Hours Coding", value: 500, suffix: "+", icon: "Clock" },
  { id: 4, title: "Tea Consumed", value: 1000, suffix: " Cups", icon: "Coffee" },
];

export const CERTIFICATIONS_DATA = [
  { 
    title: "C++ Fundamentals", 
    issuer: "University", 
    date: "2023", 
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Digital Marketing 101", 
    issuer: "Google Garage", 
    date: "2024", 
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80" 
  },
  { 
    title: "Problem Solving (Basic)", 
    issuer: "HackerRank", 
    date: "2024", 
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80" 
  }
];

export const SETUP_DATA = [
  { name: "VS Code", type: "IDE", icon: "Code" },
  { name: "Ubuntu", type: "OS", icon: "Terminal" },
  { name: "Mechanical Keyb", type: "Gear", icon: "Keyboard" },
  { name: "Noise Cancelling", type: "Audio", icon: "Headphones" },
  { name: "Coffee Mug", type: "Fuel", icon: "Coffee" },
  { name: "Git", type: "Version Control", icon: "GitBranch" }
];

export const QUOTES_DATA = [
  { text: "Clean code always looks like it was written by someone who cares.", author: "Robert C. Martin" },
  { text: "Acquire knowledge, and learn tranquility and dignity.", author: "Umar ibn Al-Khattab (RA)" },
  { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
  { text: "Discipline is doing what needs to be done, even if you don't want to.", author: "Unknown" }
];

export const CHAT_DATA = {
  greeting: "Salam! I'm Yahya's AI Assistant. Ask me anything!",
  unknown: "I'm still learning! Try asking about my skills, C++, or my hostel life.",
  responses: [
    { keywords: ["hi", "hello", "salam", "hey"], answer: "Walaikum Assalam! How can I help you today?" },
    { keywords: ["skill", "stack", "tech"], answer: "I specialize in C++, OOP, and Logic Building. I'm also learning Web Dev!" },
    { keywords: ["project", "work"], answer: "I've built a Student Management System in C++. Check out the Projects section!" },
    { keywords: ["contact", "email", "phone"], answer: "You can reach me via the Contact section form!" },
    { keywords: ["gym", "hobby", "hobbies"], answer: "I hit the gym after Asr prayer. Health is wealth!" },
    { keywords: ["c++", "cpp"], answer: "C++ is my first love. It's tough but gives you full control." },
    { keywords: ["hostel"], answer: "Hostel life is chaotic but fun. It teaches you independence." }
  ]
};
