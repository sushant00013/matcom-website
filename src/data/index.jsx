import React from 'react';
  import { 
    Code, Brain, Globe, Database, Cpu, PenTool, 
    Github, Linkedin, Instagram, ExternalLink 
  } from 'lucide-react';

  // ✅ 1. NAVIGATION LINKS
  export const navLinks = [
    { id: "home", title: "Home" },
    { id: "domains", title: "Domains" },
    { id: "work", title: "Workshops" },
    { id: "projects", title: "Projects" },
    { id: "team", title: "Team" },
  ];

  // ✅ 2. WORKSHOPS DATA
  export const workshops = [
    {
      id: 1,
      title: "INVESTMENT INFERNO",
      date: "Oct 15, 2025",
      image: "public/inferno.jpg",
      description: "Investment Inferno 2.0 is an immersive stock market simulation event that combines learning and entertainment. Participants trade self-created stocks representing diverse sectors on a dedicated platform over 12 hours, striving to maximize their virtual portfolio."
    },
    {
      id: 2,
      title: "OPEN-CV WORKSHOP",
      date: "Nov 20, 2025",
      image: "public/opencv.jpg",
      description: "Dive into the world of computer vision with our beginner-friendly OpenCV workshop! Learn to harness the power of image processing and object detection through hands-on coding sessions."
    },
    {
      id: 3,
      title: "CODE-O-TREASURE",
      date: "Jan 10, 2026",
      image: "public/inferno.jpg",
      description: "An exhilarating cryptography-based treasure hunt where teams decode puzzles, follow clues, and compete for points using teamwork and problem-solving."
    }
  ];

  // ✅ 3. PROJECTS DATA (Updated with PDF Projects)
  export const projects = [
  {
    id: 1,
    title: "AidSync 3D",
    description: "A blockchain-based disaster relief platform using 3D reconstruction and frame interpolation to ensure transparency and efficient resource allocation during emergencies.",
    link: "#",
    image: "image1.jpg", 
  },
  {
    id: 2,
    title: "CrowdResQ",
    description: "An intelligent real-time crowd monitoring system using YOLO and CSRNet to predict density hotspots and prevent overcrowding in high-footfall areas.",
    link: "#",
    image: "image2.jpg",
  },
  {
    id: 3,
    title: "AeroCraft 3D",
    description: "A drone-based 3D modeling system equipped with IR sensors to automate spatial mapping for VFX, game development, and architectural visualization.",
    link: "#",
    image: "image3.jpg",
  },
  {
    id: 4,
    title: "Precision VibeVision",
    description: "Advanced vibration analysis using motion amplification and ML to detect minute mechanical anomalies for predictive industrial maintenance.",
    link: "#",
    image: "image4.jpg",
  },
  {
    id: 5,
    title: "RegeniCycle",
    description: "An AI-powered waste-to-energy system that automates waste classification and optimizes energy yield using IoT and machine learning.",
    link: "#",
    image: "image5.jpg",
  },
  {
    id: 6,
    title: "CarbonSync",
    description: "Leveraging machine learning to predict carbon emissions and optimize energy efficiency for sustainable, carbon-free data center operations.",
    link: "#",
    image: "image6.jpg",
  },
  {
    id: 7,
    title: "SocialCredit Score",
    description: "A novel credit assessment model integrating social network analysis with traditional standards to provide inclusive scoring for the underbanked.",
    link: "#",
    image: "image7.jpg",
  }
];

  // ✅ 4. DOMAINS DATA
  export const domains = [
    {
      id: 1,
      title: "Web Development",
      description: "Crafting futuristic, high-performance, and responsive web experiences using MERN stack and Three.js.",
      icon: <Globe size={40} />,
      bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Machine Learning",
      description: "Exploring Neural Networks and Predictive Modeling to solve complex mathematical problems.",
      icon: <Brain size={40} />,
      bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Blockchain",
      description: "Developing decentralized ledgers that record transactions securely and transparently across distributed networks.",
      icon: <Cpu size={40} />,
      bgImage: "https://plus.unsplash.com/premium_photo-1681400678259-255b10890b08?w=900&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      title: "AR/VR",
      description: "Creating fully immersive digital environments and digital overlays to enhance real-world user experiences.",
      icon: <Code size={40} />,
      bgImage: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 5,
      title: "App Development",
      description: "Building functional and interactive mobile and web applications with a focus on user-centric design.",
      icon: <Database size={40} />,
      bgImage: "https://images.unsplash.com/photo-1595675024853-0f3ec9098ac7?q=80&w=987&auto=format&fit=crop",
    },
    {
      id: 6,
      title: "Finance",
      description: "Focusing on financial modeling, algorithmic trading, and data-driven investment planning strategies.",
      icon: <PenTool size={40} />,
      bgImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // ✅ 5. TEAM MEMBERS DATA
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