  import React from 'react';
  import { 
    Code, Brain, Globe, Database, Cpu, PenTool, 
    Github, Linkedin, Instagram, ExternalLink 
  } from 'lucide-react';
  import { big } from 'framer-motion/client';

  // ✅ 1. NAVIGATION LINKS (Updated)
  export const navLinks = [
    { id: "home", title: "Home" },
    { id: "domains", title: "Domains" },
    { id: "work", title: "Workshops" }, // New
    { id: "projects", title: "Projects" }, // New
    { id: "team", title: "Team" },
  ];

  // ✅ 2. WORKSHOPS DATA
  export const workshops = [
    {
      id: 1,
      title: "Intro to Graph Theory",
      date: "Oct 15, 2025",
      image: "https://images.unsplash.com/photo-1543286386-713df548e9cc?auto=format&fit=crop&q=80&w=1000",
      description: "A deep dive into nodes, edges, and the mathematics behind social networks."
    },
    {
      id: 2,
      title: "React & Three.js",
      date: "Nov 20, 2025",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000",
      description: "Building 3D immersive websites using React Fiber and shaders."
    },
    {
      id: 3,
      title: "AI in Finance",
      date: "Jan 10, 2026",
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?auto=format&fit=crop&q=80&w=1000",
      description: "Predicting stock market trends using LSTM and Neural Networks."
    }
  ];

  // ✅ 3. PROJECTS DATA
  export const projects = [
  {
    id: 1,
    title: "AlgoVisualizer",
    tech: ["React", "Algorithms", "CSS"],
    description: "A visual playground to see sorting and pathfinding algorithms in action.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop", 
  },
  {
    id: 2,
    title: "MatCom Official Site",
    tech: ["React", "Tailwind", "Framer"],
    description: "The futuristic official website for the Mathematics & Computing department.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Crypto Predictor",
    tech: ["Python", "ML", "Flask"],
    description: "Real-time cryptocurrency price prediction model using historical data.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop",
  }
];

  // ... (Domains aur Team data waisa hi rahega, niche copy paste kar lena purana wala agar missing ho)
  // Agar purana data chahiye toh bata dena, main full file de dunga dobara.
  export const domains = [
    {
      id: 1,
      title: "Web Development",
      description: "Crafting futuristic, high-performance, and responsive web experiences using MERN stack and Three.js.",
      icon: <Globe size={40} />,
      bgImage: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600",
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Exploring Neural Networks and Predictive Modeling to solve complex mathematical problems.",
      icon: <Brain size={40} />,
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=600",
    },
    {
      id: 3,
      title: "Scientific Computing",
      description: "Simulating real-world phenomena through computational algorithms and pure mathematics.",
      icon: <Cpu size={40} />,
      bgImage: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=600",
    },
    {
      id: 4,
      title: "Competitive Programming",
      description: "Mastering Data Structures and Algorithms to crack global coding challenges.",
      icon: <Code size={40} />,
      bgImage: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=600",
    },
    {
      id: 5,
      title: "Data Science",
      description: "Analyzing massive datasets to extract insights using advanced statistical methods.",
      icon: <Database size={40} />,
      bgImage: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=600",
    },
    {
      id: 6,
      title: "Creative Design",
      description: "Visualizing mathematics through UI/UX design and compelling digital art.",
      icon: <PenTool size={40} />,
      bgImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=600",
    },
  ];

  export const teamMembers = [
    {
      id: 1,
      name: "Himanshu",
      role: "Club Coordinator",
      category: "Coordinators",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Himanshu",
      socials: { linkedin: "#", instagram: "#" }
    },
    {
      id: 2,
      name: "Shanchit Sharma",
      role: "Tech Lead",
      category: "Final Year",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Shanchit",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 3,
      name: "Dharuva Thakur",
      role: "Management Head",
      category: "Final Year",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dharuva",
      socials: { linkedin: "#", instagram: "#" }
    },
    {
      id: 4,
      name: "Krishna Narzary",
      role: "Web Developer",
      category: "Pre-Final Year",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Krishna",
      socials: { linkedin: "#", github: "#" }
    },
    {
      id: 5,
      name: "Prince Khandelwal",
      role: "Executive Member",
      category: "2nd Year",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Prince",
      socials: { linkedin: "#", instagram: "#" }
    },
    {
      id: 6,
      name: "Aastha Chaudhary",
      role: "Volunteer",
      category: "1st Year",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aastha",
      socials: { instagram: "#" }
    },
  ];