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
  },
  {
    id: 2,
    title: "Laundry Website",
    category: "Web Application",
    img: Crystal,
    externalUrl: "https://crystalclearglobalservices.com/",
  },
  {
    id: 3,
    title: "Referral Dashboard",
    category: "Web Application",
    img: Referral,
    externalUrl: "https://test.dd-referrals.com",
  },
  {
    id: 4,
    title: "Tech School Landing Page",
    category: "Web Application",
    img: DDTech,
    externalUrl: "https://dd-techhub.com",
  },
  {
    id: 5,
    title: "Tech School Portal",
    category: "Web Application",
    img: Training,
    externalUrl: "https://training.dd-techhub.com",
  },
  {
    id: 6,
    title: "Classroom Portal",
    category: "Web Application",
    img: Classroom,
    externalUrl: "https://classroom.dd-techhub.com",
  },
  {
    id: 7,
    title: "Multi-web Landing Page",
    category: "Web Application",
    img: Floating,
    externalUrl: "https://lady-gold.vercel.app",
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
  },
];
