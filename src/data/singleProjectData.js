import { additionalProjectsData } from "./additionalProjectsData";

const defaultSocial = [
  { id: 1, name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  { id: 2, name: "GitHub", icon: "github", url: "https://github.com/" },
];

export const singleProjectData = {
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
        img: "/aluta-new.png",
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
          icon: "linkedin",
          url: "https://linkedin.com/", // Placeholder
        },
        {
          id: 2,
          name: "GitHub",
          icon: "github",
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
          img: "/covers/training-classroom.png",
        },
        {
          id: 2,
          title: "Mobile UI",
          img: "/covers/ddsa.png",
        },
        {
          id: 3,
          title: "UI Design",
          img: "/covers/referral-dashboard.png",
        },
      ],
    },
  },
  "visa-architect": {
    ProjectHeader: {
      title: "Visa Architect — AI Immigration Platform",
      publishDate: "2025",
      tags: "AI / SaaS / Full Stack",
    },
    ProjectImages: [
      {
        id: 1,
        title: "Visa Architect Platform",
        img: "/covers/architect.png",
      },
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
          title: "Category",
          details: "AI SaaS Platform",
        },
        {
          id: 3,
          title: "Status",
          details: "Live",
        },
        {
          id: 4,
          title: "Year",
          details: "2025",
        },
      ],
      ObjectivesHeading: "About Visa Architect",
      ObjectivesDetails:
        "Visa Architect is an AI-powered visa assessment platform that analyses candidate profiles and generates personalised strategic roadmaps for high-skilled tech immigration routes — UK Global Talent, US O-1A, French Passeport Talent, and German EU Blue Card. Users submit a CV or profile text, and the platform's AI consultant (Dr. Zenith) returns a probability score for each visa route along with a prioritised 20–30 step action plan tailored to close their specific gaps.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Vite",
            "Firebase Auth",
            "Firestore",
            "Firebase Cloud Functions",
            "Google Gemini API",
            "Stripe",
            "Google Cloud Run",
            "Cloudflare Pages",
            "Firebase Storage",
            "jsPDF",
            "Google Tag Manager",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a serverless architecture with a secure Cloud Function handling all AI inference — prompts and schema are never exposed to the client. The Gemini API integration processes CV text and profile data to generate structured visa probability scores and personalised action plans across four elite immigration routes.",
        },
        {
          id: 2,
          details:
            "Implemented a freemium funnel with gated report access, Stripe Embedded Checkout integration, and a webhook-driven unlock flow. Users can preview their assessment summary but must complete payment to access the full 20–30 step roadmap — driving conversion without friction.",
        },
        {
          id: 3,
          details:
            "Designed and built a role-based admin dashboard with live assessment monitoring, Cloud Function execution logs, and full user management. Admins can view real-time submission activity, track payment status, and manage user access — all from a single interface.",
        },
        {
          id: 4,
          details:
            "Engineered rate limiting, abuse protection, and UTM/referral attribution tracking to safeguard the platform and measure acquisition channels. Additional features include PDF export of full reports, CV file upload via Firebase Storage, and real-time Firestore persistence for seamless session continuity.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        {
          id: 1,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/",
        },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        {
          id: 1,
          title: "eMigr8 Companion",
          img: "/projects/apps/eMigr81.webp",
        },
        {
          id: 2,
          title: "AlutaMarket",
          img: "/aluta-new.png",
        },
        {
          id: 3,
          title: "Web Application",
          img: "/covers/training-classroom.png",
        },
      ],
    },
  },
  "emigr8-affiliate-portal": {
    ProjectHeader: {
      title: "eMigr8 Affiliate Partner Portal",
      publishDate: "2025",
      tags: "Full Stack / SaaS / Edge Deployment",
    },
    ProjectImages: [
      {
        id: 1,
        title: "eMigr8 Affiliate Partner Portal",
        img: "/covers/partner.png",
      },
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
          title: "Category",
          details: "Affiliate & Partner Platform",
        },
        {
          id: 3,
          title: "Deployment",
          details: "Cloudflare Workers (Edge)",
        },
        {
          id: 4,
          title: "Year",
          details: "2025",
        },
      ],
      ObjectivesHeading: "About the Portal",
      ObjectivesDetails:
        "The eMigr8 Affiliate Partner Portal is a full-stack web application that gives affiliate partners a dedicated space to manage referral links, track click and conversion performance, monitor earnings, and access a leaderboard. An AI marketing assistant powered by Google Gemini is built directly into the portal, helping partners craft better campaigns and grow their reach. The platform is deployed to Cloudflare's edge network for low-latency global access.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 18",
            "TypeScript",
            "Vite",
            "Firebase Auth",
            "Firestore",
            "Google Gemini AI",
            "Recharts",
            "Lucide React",
            "Cloudflare Workers",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a role-based authentication system using Firebase Auth and Firestore, separating admin and partner access at the data layer. Admins can manage partners, approve accounts, and view platform-wide analytics, while partners see only their own referral and earnings data.",
        },
        {
          id: 2,
          details:
            "Implemented referral link management with full UTM parameter support, enabling partners to generate trackable links per campaign. Click and conversion events are captured in real time via Firestore, with Recharts powering the analytics dashboard — visualising trends, conversion rates, and top-performing links.",
        },
        {
          id: 3,
          details:
            "Integrated Google Gemini AI as an in-portal marketing assistant. Partners can prompt the AI for campaign copy, outreach strategies, and content ideas — all contextualised to the eMigr8 product — reducing the barrier to running effective affiliate campaigns.",
        },
        {
          id: 4,
          details:
            "Deployed the entire application to Cloudflare Workers via wrangler.toml, leveraging edge compute for fast global load times. The component-driven React 18 + TypeScript architecture ensures full type safety across the codebase, with Vite handling fast builds and hot module replacement during development.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        {
          id: 1,
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: 2,
          name: "GitHub",
          icon: "github",
          url: "https://github.com/",
        },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        {
          id: 1,
          title: "Visa Architect",
          img: "/covers/architect.png",
        },
        {
          id: 2,
          title: "eMigr8 Companion",
          img: "/projects/apps/eMigr81.webp",
        },
        {
          id: 3,
          title: "AlutaMarket",
          img: "/aluta-new.png",
        },
      ],
    },
  },
  "thryftup-tablet": {
    ProjectHeader: {
      title: "ThryftUp Tablet — White-Label Kids' Marketplace",
      publishDate: "2025",
      tags: "React Native / Mobile / White-Label",
    },
    displayType: "Mobile",
    ProjectImages: [
      { id: 1, title: "ThryftUp Tablet Screenshot 1", img: "/covers/thryftup-1.png" },
      { id: 2, title: "ThryftUp Tablet Screenshot 2", img: "/covers/thryftup-2.png" },
      { id: 3, title: "ThryftUp Tablet Screenshot 3", img: "/covers/thryftup-3.png" },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (Expo)" },
        { id: 3, title: "Architecture", details: "White-Label / Multi-Brand" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About ThryftUp Tablet",
      ObjectivesDetails:
        "ThryftUp Tablet is a React Native (Expo) marketplace app for buying and selling second-hand kids' items. It's built as a white-label platform — a single codebase that can be deployed as multiple fully branded apps for different businesses. Each brand variant gets its own app name, bundle identifier, icons, splash screen, and colour scheme, all resolved at build time without touching source code.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "Expo SDK 53",
            "Expo Router",
            "Pusher",
            "Google Maps",
            "expo-location",
            "EAS Build",
            "EAS Update",
            "expo-notifications",
            "expo-calendar",
            "expo-camera",
            "expo-image-picker",
            "React Navigation",
            "Gorhom Bottom Sheet",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a white-label architecture using a businesses.js file as the single source of truth for brand variants. Each variant defines its app name, bundle ID, Android package, icons, splash, and colour scheme. app.config.js resolves the active variant at build time via the APP_VARIANT env variable, and EAS build profiles in eas.json map each variant to its own channel, API URL, and business ID — so one eas build --profile thryftuptablet produces a fully branded APK/IPA without touching any source code.",
        },
        {
          id: 2,
          details:
            "Implemented real-time chat powered by Pusher with offline message sync, meetup scheduling with calendar integration, and push notifications with deep linking across offers, meetups, messages, and support tickets. Price drop alerts are delivered via Pusher real-time events, keeping buyers engaged without polling.",
        },
        {
          id: 3,
          details:
            "Designed a Trust Score system — a tiered reputation engine (Paper → Bronze → Silver → Gold → Platinum) tracking reliability, safety, and recovery metrics. Alongside it, a Joy Score tracks community engagement through gifting, bundles, and community activity, giving the marketplace a social layer beyond simple transactions.",
        },
        {
          id: 4,
          details:
            "Built a Store Owner mode giving sellers a separate dashboard to manage listings with approval status filters. A useStoreBrandColors hook and ThemeContext propagate brand colours throughout the UI at runtime using a three-level priority: store brand → white-label theme → default palette — ensuring every branded deployment feels native to its business.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        { id: 1, name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
        { id: 2, name: "GitHub", icon: "github", url: "https://github.com/" },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "eMigr8 Companion", img: "/projects/apps/eMigr81.webp" },
        { id: 2, title: "Visa Architect", img: "/covers/architect.png" },
        { id: 3, title: "eMigr8 Affiliate Portal", img: "/covers/partner.png" },
      ],
    },
  },
  "rejoyly": {
    ProjectHeader: {
      title: "Rejoyly — Peer-to-Peer Children's Marketplace",
      publishDate: "2025",
      tags: "React Native / Mobile / Marketplace",
    },
    displayType: "Mobile",
    ProjectImages: [
      { id: 1, title: "Rejoyly Screenshot 1", img: "/covers/rejoyly-1.png" },
      { id: 2, title: "Rejoyly Screenshot 2", img: "/covers/rejoyly-2.png" },
      { id: 3, title: "Rejoyly Screenshot 3", img: "/covers/rejoyly-3.png" },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (Expo)" },
        { id: 3, title: "Backend", details: "Laravel REST API" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About Rejoyly",
      ObjectivesDetails:
        "Rejoyly is a full-featured mobile marketplace built for parents to buy and sell pre-loved children's items sustainably. The app prioritises trust, safety, and community through a layered reputation system, real-time communication, and location-aware product discovery. Built on React Native 0.81 + Expo 54 with TypeScript, it communicates with a Laravel backend across staging and production environments.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native 0.81",
            "Expo 54",
            "TypeScript",
            "Expo Router",
            "Axios",
            "Pusher WebSockets",
            "Firebase Cloud Messaging",
            "React Context API",
            "Expo Secure Store",
            "Google Sign-In",
            "React Native Maps",
            "Expo Location",
            "Google Places",
            "Lottie",
            "Reanimated",
            "Gorhom Bottom Sheet",
            "Maestro E2E",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built a location-aware home feed pulling from /api/home-feed, filtered by proximity, price tier, category, and personalisation. Debounced search queries are routed to a separate browse/filter endpoint with filter-context injection (price bucket, radius, location) before hitting the search endpoint. Bundles and store profiles are discoverable from the same feed surface.",
        },
        {
          id: 2,
          details:
            "Implemented a full offer lifecycle — counter-offers, acceptance, and withdrawal — tied directly to listing threads. Once agreed, both parties schedule a meetup with location, time, notes, and optional Google Calendar sync. Transactions are completed or cancelled through an inventory-tracked order system with Pusher channel subscriptions scoped per product thread for real-time chat and typing indicators.",
        },
        {
          id: 3,
          details:
            "Designed a two-dimensional reputation layer: a Trust Score built from identity verification, meetup reliability, listing quality, and safety reports; and a Joy Score — a gamification system rewarding gifting, bundles, and community actions. Both are visualised with breakdowns and badge tiers, giving the marketplace a social layer beyond simple transactions.",
        },
        {
          id: 4,
          details:
            "The seller side includes AI-assisted product detail extraction from photos, inventory management, bundle creation with discount rules, and a full analytics view of listings, ratings, and response rates. Architecture highlights include a feature-grouped API layer with centralised 401/403 handling, deep-link routing from FCM push notifications into chats/offers/meetups, environment-aware base URL resolution via Expo public env vars, and Maestro E2E test flows for critical auth and onboarding paths.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: [
        { id: 1, name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
        { id: 2, name: "GitHub", icon: "github", url: "https://github.com/" },
      ],
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "ThryftUp Tablet", img: "/covers/thryftup-1.png" },
        { id: 2, title: "eMigr8 Companion", img: "/projects/apps/eMigr81.webp" },
        { id: 3, title: "Visa Architect", img: "/covers/architect.png" },
      ],
    },
  },
  ...additionalProjectsData,
};
