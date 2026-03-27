// Import images
import DDSA from "../images/DDSA.png";
import Crystal from "../images/Crystal Clear.png";
import Referral from "../images/Referral Dashboard.png";
import DDTech from "../images/DD-Tech Landing.png";
import Training from "../images/Training Classroom.png";
import Classroom from "../images/Classroom Dashboard.png";
import Floating from "../images/Floating Page.png";
import AlutaMarketImage from "../images/aluta.png"; // Placeholder
import EMigr8AppImage from "../images/eMigr8.png"; // Placeholder

export const projectsData = [
  {
    id: 1,
    title: "DDSA Landing Page",
    category: "Web Application",
    img: DDSA,
    externalUrl: "https://ddsa-live.com",
    summary:
      "A conversion-focused landing page built to communicate a clear offer, establish trust quickly, and turn first-time visitors into qualified leads.",
    technologies: ["React", "Tailwind CSS", "Responsive Design"],
    year: "2024",
    status: "Live",
    impact: "Marketing site",
  },
  {
    id: 2,
    title: "Laundry Website",
    category: "Web Application",
    img: Crystal,
    externalUrl: "https://crystalclearglobalservices.com/",
    summary:
      "A polished service website for a laundry brand, designed to make booking and service discovery easier across mobile and desktop.",
    technologies: ["React", "Tailwind CSS", "Brand UI"],
    year: "2024",
    status: "Live",
    impact: "Service platform",
  },
  {
    id: 3,
    title: "Referral Dashboard",
    category: "Web Application",
    img: Referral,
    externalUrl: "https://test.dd-referrals.com",
    summary:
      "A dashboard experience for tracking referrals, managing user activity, and giving stakeholders a clearer view of growth performance.",
    technologies: ["React", "Dashboard UI", "API Integration"],
    year: "2024",
    status: "In use",
    impact: "Internal product",
  },
  {
    id: 4,
    title: "Tech School Landing Page",
    category: "Web Application",
    img: DDTech,
    externalUrl: "https://dd-techhub.com",
    summary:
      "A modern education landing page structured to explain programs, communicate trust, and guide prospective students toward enrollment.",
    technologies: ["React", "Tailwind CSS", "Motion"],
    year: "2024",
    status: "Live",
    impact: "Education marketing",
  },
  {
    id: 5,
    title: "Tech School Portal",
    category: "Web Application",
    img: Training,
    externalUrl: "https://training.dd-techhub.com",
    summary:
      "A training portal that organizes learning workflows, supports course access, and gives users a smoother educational journey online.",
    technologies: ["React", "Portal UI", "User Workflows"],
    year: "2024",
    status: "Live",
    impact: "Learning platform",
  },
  {
    id: 6,
    title: "Classroom Portal",
    category: "Web Application",
    img: Classroom,
    externalUrl: "https://classroom.dd-techhub.com",
    summary:
      "A classroom management interface designed to streamline lesson access, student interaction, and digital learning operations.",
    technologies: ["React", "Education UI", "State Management"],
    year: "2024",
    status: "Live",
    impact: "Classroom system",
  },
  {
    id: 7,
    title: "Multi-web Landing Page",
    category: "Web Application",
    img: Floating,
    externalUrl: "https://lady-gold.vercel.app",
    summary:
      "A multi-section promotional site created to present multiple service offers with a cohesive brand experience and strong visual pacing.",
    technologies: ["React", "Landing Page Design", "Responsive UI"],
    year: "2023",
    status: "Live",
    impact: "Campaign site",
  },
  {
    id: 8,
    title: "AlutaMarket",
    category: "E-commerce Web Application",
    img: AlutaMarketImage,
    description: "An e-commerce website for buyers and sellers, allowing users to upload goods and services, interact with sellers, and rate products.",
    technologies: ["React", "Golang", "Supabase"],
    isFeatured: true,
    slug: "alutamarket",
    year: "2024",
    status: "Case Study",
    impact: "Marketplace",
    summary:
      "A multi-vendor marketplace experience focused on product discovery, seller interaction, and scalable commerce workflows.",
  },
  {
    id: 9,
    title: "eMigr8 App",
    category: "Logistic Solutions App",
    img: EMigr8AppImage,
    description: "A logistic solutions application designed for individuals looking to relocate, focusing on travel and migration needs. I worked on the frontend using React and Tailwind CSS.",
    technologies: ["React", "Tailwind CSS"],
    isFeatured: true,
    slug: "emigr8-app",
    year: "2024",
    status: "Case Study",
    impact: "Relocation product",
    summary:
      "A relocation-focused product interface that simplifies migration-related flows with clearer frontend interactions and guided user journeys.",
  },
];
