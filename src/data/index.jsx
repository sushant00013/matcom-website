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
      title: "INVESTMENT INFERNO",
      date: "Oct 15, 2025",
      image: "public/inferno.jpg",
      description: "nvestment Inferno 2.0 is an immersive stock market simulation event that combines learning and entertainment. Participants trade self-created stocks representing diverse sectors on a dedicated platform over 12 hours, striving to maximize their virtual portfolio. Real-time updates and news on Instagram enhance the experience, with rewards for the top three participants."
    },
    {
      id: 2,
      title: "OPEN-CV WORKSHOP",
      date: "Nov 20, 2025",
      image: "public/opencv.jpg",
      description: "OpenCV Workshop: Dive into the world of computer vision with our beginner-friendly OpenCV workshop! Learn to harness the power of image processing and object detection through hands-on coding sessions. Perfect for anyone eager to explore Al and machine learning applications in real-time vision tasks."
    },
    {
      id: 3,
      title: "CODE-O-TREASURE",
      date: "Jan 10, 2026",
      image: "public/inferno.jpg",
      description: "Code-O-Treasure is an exhilarating cryptography-based treasure hunt where teams decode puzzles, follow clues, and compete for points. With bonus challenges, strategic key usage, and live leaderboard updates, it combines teamwork, problem-solving, and adventure for an unforgettable experience."
    }
  ];

  // ✅ 3. PROJECTS DATA
  export const projects = [
  {
    id: 1,
    title: "Parking Solutions",
    tech: ["React", "Algorithms", "CSS"],
    description: "This system revolutionizes urban parkin-g with real-time space detection and private spot sharing. Using YOLO and Mask R-CNN for AI-driven detection, it integrates user-friendly features like secure registration, space listing, reservations, video verification, and payment processing.",
    link: "#",
    
    image: "image5.jpg", 
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
    title: "Algo Trading Bot",
    tech: ["Python", "ML", "Flask"],
    description: "AlgoBot is an advanced trading system that automates buy and sell decisions using ML, sentiment analysis, and risk management strategies. It adapts to real-time market trends, integrates psychological factors like fear and greed, and ensures a secure, user-friendly interface.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "SenioGuide",
    tech: ["Python", "ML", "Flask"],
    description: "SenioGuide is an intuitive platform designed to assist elderly individuals in navigating applications like messaging and payment apps. By offering step-by-step guidance and interactive cues, it simplifies complex tasks, empowering users to stay connected and independent.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "image2.jpg",
  },
  {
    id: 5,
    title: "Swift Snip",
    tech: ["Python", "ML", "Flask"],
    description: "Real-time cryptocurrency price prediction model using historical data.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "image3.jpg",
  },
  {
    id: 6,
    title: "Spoof Call Detection",
    tech: ["Python", "ML", "Flask"],
    description: "Real-time cryptocurrency price prediction model using historical data.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "AeroVigil",
    tech: ["Python", "ML", "Flask"],
    description: "Real-time cryptocurrency price prediction model using historical data.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "image7.png",
  },
  {
    id: 8,
    title: "FashioAI",
    tech: ["Python", "ML", "Flask"],
    description: "FashioAI is an innovative platform that combines ML,AR, and 3D rendering to provide users with an immersive virtual shopping experience. It allows individuals to try on garments virtually, visualizing how they would look on their bodies in real-time. By analyzing body shapes and predicting garment sizes.",
    link: "#",
    // 👇 ADD THIS LINE
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop",
  },
];

  
  export const domains = [
    {
      id: 1,
      title: "Web Development",
      description: "Crafting futuristic, high-performance, and responsive web experiences using MERN stack and Three.js.",
      icon: <Globe size={40} />,
      bgImage: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Exploring Neural Networks and Predictive Modeling to solve complex mathematical problems.",
      icon: <Brain size={40} />,
      bgImage: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      title: "Blockchain",
      description: "Blockchain is a decentralized digital ledger that records transactions securely and transparently across multiple computers.",
      icon: <Cpu size={40} />,
      bgImage: "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvY2tjaGFpbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      title: "AR/VR",
      description: "AR (Augmented Reality) overlays digital elements onto the real world to enhance user experience in real time. VR (Virtual Reality) creates a fully immersive digital environment where users can interact with a simulated world",
      icon: <Code size={40} />,
      bgImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      title: "App development",
      description: "Web development is the creation and maintenance of websites and web applications. It includes front-end design and back-end programming to make websites functional and interactive.",
      icon: <Database size={40} />,
      bgImage: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      title: "Finance",
      description: "The finance domain focuses on managing money, investments, and financial planning for individuals and organizations.",
      icon: <PenTool size={40} />,
      bgImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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