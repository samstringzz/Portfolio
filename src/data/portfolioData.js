export const heroData = {
  title: "Hi, I'm Oluwatosin Ayinde 👋",
  subtitle: "Mobile & Full Stack Developer",
  description: "Cross-platform mobile developer specializing in iOS & Android applications. Currently building innovative solutions, transforming complex requirements into seamless user experiences.",
  cta: {
    primary: "View My Work",
    secondary: "Download Resume"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/in/oluwatosin-ayinde-41b434367?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "mailto:ayindeoluwatosin09@gmail.com",
    github: "https://github.com/samstringzz"
  }
};

export const aboutData = {
  title: "About Me",
  description: `I'm a Mobile & Full Stack Developer currently working at YIP Online, where I architect and develop cross-platform mobile applications for both iOS and Android ecosystems. My expertise spans the entire mobile development lifecycle, from API integration and state management to performance optimization and deployment.

At YIP Online, I've been instrumental in building robust mobile solutions that serve thousands of users daily. I specialize in React Native for cross-platform development, seamlessly integrating RESTful APIs and GraphQL endpoints while ensuring optimal performance across devices. My approach combines clean architecture principles with modern development practices to deliver maintainable, scalable applications.

Beyond mobile development, I bring a comprehensive full-stack skill set including React, Next.js, PHP, and modern backend technologies. This versatility allows me to bridge the gap between mobile frontends and backend services, creating cohesive solutions that deliver exceptional user experiences. I'm passionate about crafting elegant solutions to complex problems and continuously evolving with emerging technologies.`
};

export const achievementsData = [
  {
    title: "Cross-Platform Mobile Solutions",
    description: "Architected and delivered production-ready iOS & Android applications at YIP Online, implementing complex API integrations and achieving 4.8+ app store ratings with 99.5% crash-free sessions.",
    icon: "📱"
  },
  {
    title: "Performance Optimization",
    description: "Optimized mobile app performance reducing initial load time by 45% and API response handling by 60%, resulting in significantly improved user retention and engagement metrics.",
    icon: "⚡"
  },
  {
    title: "Scalable Architecture",
    description: "Designed and implemented scalable application architectures serving 10,000+ active users, with robust state management, offline-first capabilities, and seamless real-time data synchronization.",
    icon: "🚀"
  },
  {
    title: "Full-Stack Expertise",
    description: "Successfully delivered 15+ web and mobile projects spanning e-commerce, educational platforms, and SaaS solutions, integrating modern frontend frameworks with robust backend systems.",
    icon: "💼"
  }
];

export const projectsData = [
  {
    title: "Modern E-commerce Platform",
    category: "Full Stack",
    tags: ["React", "PHP", "MySQL"],
    description: "A feature-rich e-commerce platform with real-time inventory management and secure payment processing.",
    achievements: [
      "Implemented real-time inventory tracking reducing stock discrepancies by 90%",
      "Integrated secure payment gateway processing $100K+ monthly transactions",
      "Built responsive UI resulting in 40% increase in mobile conversions"
    ],
    image: "/path-to-your-image.jpg"
  },
  {
    title: "Task Management System",
    category: "Web Application",
    tags: ["Next.js", "Supabase"],
    description: "A collaborative task management system with real-time updates and team collaboration features.",
    achievements: [
      "Developed real-time collaboration features using WebSocket",
      "Implemented role-based access control for enhanced security",
      "Created intuitive UI/UX leading to 50% increase in user adoption"
    ],
    image: "/path-to-your-image.jpg"
  }
];

export const experienceData = [
  {
    id: 1,
    role: "Mobile Developer",
    company: "YIP Online",
    type: "Full-time",
    period: "2024 - Present",
    location: "Remote",
    description: "Leading mobile application development for cross-platform solutions serving thousands of users across iOS and Android platforms.",
    achievements: [
      "Architected and developed production-ready cross-platform mobile applications using React Native for iOS and Android",
      "Implemented robust API integration layers, connecting mobile apps with RESTful and GraphQL backend services",
      "Optimized app performance achieving 45% reduction in load times and maintaining 99.5% crash-free sessions",
      "Integrated advanced features including real-time notifications, offline storage, and seamless data synchronization",
      "Collaborated with cross-functional teams using Agile methodologies to deliver features on schedule",
      "Implemented state management solutions using Redux and Context API for scalable application architecture",
      "Conducted code reviews and established best practices for mobile development workflows"
    ],
    technologies: ["React Native", "TypeScript", "Redux", "RESTful APIs", "GraphQL", "Firebase", "iOS", "Android", "Git"]
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Freelance & Contract Work",
    type: "Freelance",
    period: "2022 - 2024",
    location: "Remote",
    description: "Delivered comprehensive web solutions for diverse clients, spanning e-commerce, educational platforms, and business applications.",
    achievements: [
      "Built and deployed 15+ production web applications using React, Next.js, and PHP",
      "Developed custom e-commerce platforms processing $100K+ in monthly transactions",
      "Created educational management systems for tech schools including student portals and classroom dashboards",
      "Implemented secure authentication systems and role-based access control",
      "Integrated payment gateways and third-party APIs for enhanced functionality",
      "Optimized database queries and application performance, improving load times by 60%"
    ],
    technologies: ["React.js", "Next.js", "PHP", "MySQL", "Supabase", "Tailwind CSS", "JavaScript", "REST APIs"]
  }
];

export const skillsData = {
  categories: [
    {
      title: "Mobile Development",
      icon: "📱",
      skills: [
        { name: "React Native", level: 90 },
        { name: "iOS Development", level: 85 },
        { name: "Android Development", level: 85 },
        { name: "Mobile UI/UX", level: 88 },
        { name: "App Performance", level: 87 },
        { name: "Native Modules", level: 80 }
      ]
    },
    {
      title: "Frontend Development",
      icon: "💻",
      skills: [
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 88 },
        { name: "TypeScript", level: 85 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Redux/State Management", level: 87 }
      ]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 82 },
        { name: "PHP", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 78 },
        { name: "MySQL", level: 83 },
        { name: "Supabase", level: 85 }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "CI/CD Pipelines", level: 75 },
        { name: "Docker", level: 70 },
        { name: "Jest/Testing", level: 80 },
        { name: "Agile/Scrum", level: 85 }
      ]
    }
  ]
};

export const statsData = [
  {
    id: 1,
    title: "Projects Completed",
    value: 15,
    suffix: "+",
    icon: "🎯"
  },
  {
    id: 2,
    title: "Happy Clients",
    value: 12,
    suffix: "+",
    icon: "😊"
  },
  {
    id: 3,
    title: "Code Commits",
    value: 2500,
    suffix: "+",
    icon: "💻"
  },
  {
    id: 4,
    title: "App Store Rating",
    value: 4.8,
    suffix: "/5.0",
    icon: "⭐"
  }
];

export const blogData = [
  {
    title: "Building Scalable Applications with Next.js and Supabase",
    description: "Learn how to leverage the power of Next.js and Supabase to build scalable, real-time applications that can handle millions of users while maintaining performance and security.",
    link: "https://medium.com/@yourprofile/nextjs-supabase"
  },
  {
    title: "Modern PHP Development: Best Practices for 2024",
    description: "Discover the latest best practices in PHP development, from modern frameworks to performance optimization techniques that will take your applications to the next level.",
    link: "https://medium.com/@yourprofile/modern-php"
  }
];

export const testimonialsData = [
  {
    quote: "Working with [Your Name] was an absolute pleasure. Their expertise in both frontend and backend development helped us deliver our project ahead of schedule. The attention to detail and commitment to quality was outstanding.",
    author: "John Smith",
    role: "Project Manager",
    company: "Tech Solutions Inc."
  }
];

export const contactData = {
  title: "Let's Build Something Amazing",
  description: "Have a project in mind or want to discuss potential opportunities? I'm always open to new challenges and collaborations.",
  email: "ayindeoluwatosin09@gmail.com",
  phone: "+234 816 088 4797",
  linkedin: "https://www.linkedin.com/in/oluwatosin-ayinde-41b434367"
}; 