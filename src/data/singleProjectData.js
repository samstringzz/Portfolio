// Import images
import Image1 from "../images/aluta.png";
import Image2 from "../images/DD-Tech Landing.png";
import Image3 from "../images/Crystal Clear.png";
import Image4 from "../images/DDSA.png";
import Image5 from "../images/Training Classroom.png";
import Image6 from "../images/Referral Dashboard.png";

// Placeholder images for new projects
import AlutaMarketDetailImage1 from "../images/aluta.png"; 
import EMigr8AppDetailImage1 from "../images/eMigr8.png";

// Import icons
import {
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiYoutube,
  FiGithub,
} from "react-icons/fi";

export const singleProjectData = {
  ProjectHeader: {
    title: "Project Management UI",
    publishDate: "Jul 26, 2021",
    tags: "UI / Frontend",
  },
  ProjectImages: [
    {
      id: 1,
      title: "Kabul Project Management UI",
      img: Image1,
    },
    {
      id: 2,
      title: "Kabul Project Management UI",
      img: Image2,
    },
    {
      id: 3,
      title: "Kabul Project Management UI",
      img: Image3,
    },
  ],
  ProjectInfo: {
    ClientHeading: "About Client",
    CompanyInfo: [
      {
        id: 1,
        title: "Name",
        details: "Company Ltd",
      },
      {
        id: 2,
        title: "Services",
        details: "UI Design & Frontend Development",
      },
      {
        id: 3,
        title: "Website",
        details: "https://company.com",
      },
      {
        id: 4,
        title: "Phone",
        details: "555 8888 888",
      },
    ],
    ObjectivesHeading: "Objective",
    ObjectivesDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
    Technologies: [
      {
        title: "Tools & Technologies",
        techs: [
          "HTML",
          "CSS",
          "JavaScript",
          "Vue.js",
          "TailwindCSS",
          "AdobeXD",
        ],
      },
    ],
    ProjectDetailsHeading: "Challenge",
    ProjectDetails: [
      {
        id: 1,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
      {
        id: 2,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 3,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
      },
      {
        id: 4,
        details:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
      },
    ],
    SocialSharingHeading: "Share This",
    SocialSharing: [
      {
        id: 1,
        name: "Twitter",
        icon: <FiTwitter />,
        url: "https://twitter.com/realstoman",
      },
      {
        id: 2,
        name: "Instagram",
        icon: <FiInstagram />,
        url: "https://instagram.com/realstoman",
      },
      {
        id: 3,
        name: "Facebook",
        icon: <FiFacebook />,
        url: "https://facebook.com/",
      },
      {
        id: 4,
        name: "LinkedIn",
        icon: <FiLinkedin />,
        url: "https://linkedin.com/",
      },
      {
        id: 5,
        name: "Youtube",
        icon: <FiYoutube />,
        url: "https://www.youtube.com/c/StomanStudio",
      },
    ],
  },
  RelatedProject: {
    title: "Related Projects",
    Projects: [
      {
        id: 1,
        title: "Mobile UI",
        img: Image4,
      },
      {
        id: 2,
        title: "Web Application",
        img: Image5,
      },
      {
        id: 3,
        title: "UI Design",
        img: Image6,
      },
      {
        id: 4,
        title: "Kabul Mobile App UI",
        img: Image3,
      },
    ],
  },
  // New featured projects
  "alutamarket": {
    ProjectHeader: {
      title: "AlutaMarket - E-commerce Platform",
      publishDate: "Feb, 2023",
      tags: "Full Stack / E-commerce",
    },
    ProjectImages: [
      {
        id: 1,
        title: "AlutaMarket Screenshot 1",
        img: AlutaMarketDetailImage1,
      },
      // Add more images as needed
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        {
          id: 1,
          title: "Role",
          details: "Full Stack Developer",
        },
        {
          id: 2,
          title: "Website",
          details: "www.alutamarket.com", // Placeholder, update with actual URL if available
        },
        {
          id: 3,
          title: "Technologies",
          details: "React, Golang, Supabase",
        },
      ],
      ObjectivesHeading: "About AlutaMarket",
      ObjectivesDetails:
        "AlutaMarket is a comprehensive e-commerce platform designed for both buyers and sellers. It allows sellers to easily upload and manage their goods and services, while buyers can browse products, interact directly with sellers, and rate items based on their experience. The platform aims to provide a seamless and secure marketplace for various transactions.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Golang", "Supabase", "Tailwind CSS"],
        },
      ],
      ProjectDetailsHeading: "Key Features & Development",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed a robust backend with Golang to handle user authentication, product management, order processing, and real-time communication between buyers and sellers.",
        },
        {
          id: 2,
          details:
            "Implemented a scalable database solution using Supabase for efficient data storage and retrieval, ensuring high performance and data integrity.",
        },
        {
          id: 3,
          details:
            "Designed and developed the user-friendly frontend with React, focusing on intuitive navigation, responsive design, and a smooth purchasing experience.",
        },
        {
          id: 4,
          details:
            "Integrated features for product ratings and reviews, enabling buyers to provide feedback and helping other users make informed decisions. Implemented secure payment gateways to ensure safe transactions for all users.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        {
          id: 1,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/", // Placeholder
        },
        {
          id: 2,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/", // Placeholder
        },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        {
          id: 1,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 2,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
      ],
    },
  },
  "emigr8-app": {
    ProjectHeader: {
      title: "eMigr8 App - Logistic Solutions",
      publishDate: "Feb, 2024",
      tags: "Frontend / Mobile App",
    },
    ProjectImages: [
      {
        id: 1,
        title: "eMigr8 App Screenshot 1",
        img: EMigr8AppDetailImage1,
      },
      // Add more images as needed
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        {
          id: 1,
          title: "Role",
          details: "Mobile App Developer",
        },
        {
          id: 2,
          title: "Website",
          details: "#", // Placeholder, update with actual URL if available
        },
        {
          id: 3,
          title: "Technologies",
          details: "React, Tailwind CSS",
        },
      ],
      ObjectivesHeading: "About eMigr8 App",
      ObjectivesDetails:
        "eMigr8 App is a specialized logistic solutions application tailored for individuals planning to relocate. It provides a seamless experience for managing various aspects of travel and migration, from documentation to logistical planning. The app aims to simplify the often complex process of moving to a new location.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["React", "Tailwind CSS", "Vite"],
        },
      ],
      ProjectDetailsHeading: "Key Features & Development",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Developed a responsive and interactive user interface using React, ensuring a smooth experience across various devices and screen sizes.",
        },
        {
          id: 2,
          details:
            "Leveraged Tailwind CSS for efficient and customizable styling, enabling rapid UI development and maintaining a consistent design language.",
        },
        {
          id: 3,
          details:
            "Implemented features for travel planning, document management, and communication tools to streamline the relocation process for users.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        {
          id: 1,
          name: "LinkedIn",
          icon: <FiLinkedin />,
          url: "https://linkedin.com/", // Placeholder
        },
        {
          id: 2,
          name: "GitHub",
          icon: <FiGithub />,
          url: "https://github.com/", // Placeholder
        },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        {
          id: 1,
          title: "Web Application",
          img: Image5,
        },
        {
          id: 2,
          title: "Mobile UI",
          img: Image4,
        },
        {
          id: 3,
          title: "UI Design",
          img: Image6,
        },
      ],
    },
  },
};
