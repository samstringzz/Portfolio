const C = "/covers";
const APP = "/projects/apps";

const defaultSocial = [
  { id: 1, name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com/" },
  { id: 2, name: "GitHub", icon: "github", url: "https://github.com/" },
];

export const additionalProjectsData = {
  "emigr8-companion": {
    ProjectHeader: {
      title: "eMigr8 Visa Companion — Global Tech Mobility App",
      publishDate: "2025",
      tags: "React Native / Expo / iOS & Android — Live",
    },
    displayType: "Mobile",
    storeLinks: [
      {
        id: 1,
        label: "App Store",
        url: "https://apps.apple.com/us/app/emigr8-visa-companion/id6791632754",
      },
      {
        id: 2,
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.eMigr8.companion",
      },
    ],
    ProjectImages: [
      { id: 1, title: "eMigr8 Companion — Home", img: `${APP}/eMigr81.webp` },
      { id: 2, title: "eMigr8 Companion — Routes", img: `${APP}/eMigr82.webp` },
      { id: 3, title: "eMigr8 Companion — Hub", img: `${APP}/eMigr83.webp` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (Expo 55)" },
        { id: 3, title: "Status", details: "Live on App Store & Google Play" },
        { id: 4, title: "Bundle ID", details: "com.eMigr8.companion" },
        {
          id: 5,
          title: "App Store",
          details: "Download on the App Store",
          url: "https://apps.apple.com/us/app/emigr8-visa-companion/id6791632754",
        },
        {
          id: 6,
          title: "Google Play",
          details: "Get it on Google Play",
          url: "https://play.google.com/store/apps/details?id=com.eMigr8.companion",
        },
        { id: 7, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About eMigr8 Visa Companion",
      ObjectivesDetails:
        "eMigr8 Visa Companion is the production mobile app for the eMigr8 visa ecosystem — now live on the App Store and Google Play. It guides users through onboarding, personalised visa routes, quests, coaching, partner services, premium content, and subscription billing. Built on Expo 55 with React Native 0.83, it ships multi-environment builds with EAS and over-the-air updates.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native 0.83",
            "Expo 55",
            "TypeScript",
            "Expo Router",
            "Firebase",
            "Google & Apple Sign-In",
            "React Native Maps",
            "Expo IAP",
            "NativeWind",
            "TanStack Query",
            "Zustand",
            "PostHog",
            "EAS Build & Update",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Structured the app around visa routes, quests, dashboard, hub content, coaching marketplace, partner marketplace, companions, wallet, and billing — with separate coach-facing flows and role-aware navigation.",
        },
        {
          id: 2,
          details:
            "Integrated Firebase auth, secure storage, Face ID unlock, push notifications, in-app purchases, and Google Maps for location-aware features across the companion experience.",
        },
        {
          id: 3,
          details:
            "Configured multi-env EAS pipelines (development, staging, production) with OTA updates, web export, and Cloudflare deployment for the web companion surface.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Visa Architect", img: "/covers/architect.png" },
        { id: 2, title: "eMigr8 Gateway", img: `${APP}/gateway1.png` },
        { id: 3, title: "eMigr8 Affiliate Portal", img: "/covers/partner.png" },
      ],
    },
  },
  auvra: {
    ProjectHeader: {
      title: "Auvra — Cultural Heritage Mobile App",
      publishDate: "2025",
      tags: "React Native / Expo / iOS & Android — In Development",
    },
    displayType: "Mobile",
    ProjectImages: [
      { id: 1, title: "Auvra — Home", img: `${APP}/auvra1.png` },
      { id: 2, title: "Auvra — Vault", img: `${APP}/auvra2.png` },
      { id: 3, title: "Auvra — Badges", img: `${APP}/auvra3.png` },
      { id: 4, title: "Auvra — Registry", img: `${APP}/auvra4.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (planned)" },
        { id: 3, title: "Status", details: "In development" },
        {
          id: 4,
          title: "Website",
          details: "goauvra.com",
          url: "https://goauvra.com",
        },
        { id: 5, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About Auvra",
      ObjectivesDetails:
        "Auvra is a mobile-first platform for preserving and passing down cultural heritage, built for simultaneous iOS and Android release. Creators, communities, and families use it to store oral histories, languages, and rituals through contribution badges, collectible badges, My Vault, collaboration hubs, and AI-assisted transcription via Lens AI.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "Expo 54",
            "TypeScript",
            "Expo Router",
            "Redux Toolkit",
            "Redux Persist",
            "Expo Camera",
            "Face ID",
            "Reanimated",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built core flows for cultural contribution badges, collectible creator badges, secure vault storage, and collaboration with revenue-sharing mechanics.",
        },
        {
          id: 2,
          details:
            "Implemented Expo Router navigation with secure auth (Face ID, secure store), camera/photo evidence capture, and QR code sharing for registry discovery.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Rejoyly", img: "/covers/rejoyly-1.png" },
        { id: 2, title: "Nobzo Mobile", img: `${APP}/nobzo1.jpeg` },
        { id: 3, title: "SabiGuy Mobile", img: `${APP}/sabi1.png` },
      ],
    },
  },
  nobzo: {
    ProjectHeader: {
      title: "Nobzo — Short-Form Video Platform",
      publishDate: "2025",
      tags: "React Native / Expo / iOS & Android — In Development",
    },
    displayType: "Mobile",
    ProjectImages: [
      { id: 1, title: "Nobzo — Feed", img: `${APP}/nobzo1.jpeg` },
      { id: 2, title: "Nobzo — Profile", img: `${APP}/nobzo2.jpeg` },
      { id: 3, title: "Nobzo — Discover", img: `${APP}/nobzo3.jpeg` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (planned)" },
        { id: 3, title: "Status", details: "In development" },
        { id: 4, title: "Category", details: "Social / Video" },
        { id: 5, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About Nobzo",
      ObjectivesDetails:
        "Nobzo is a high-performance short-form video and meme sharing platform with a TikTok-style vertical feed, targeting launch on both iOS and Android. Real-time likes, comments, and share metrics sync instantly over Socket.io, with optimised FlatList windowing and lazy video player initialisation to keep scrolling smooth.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "Expo 54",
            "Expo Router",
            "NativeWind",
            "Socket.io",
            "expo-video",
            "Firebase",
            "Google & Apple Sign-In",
            "EAS Update",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Optimised the video feed with windowSize tuning, getItemLayout, React.memo comparisons, and lazy player creation only when a card is active — reducing memory pressure during fast scroll.",
        },
        {
          id: 2,
          details:
            "Centralised Socket.io listeners for likeUpdate, commentUpdate, and memeShared events so engagement metrics stay in sync without pull-to-refresh.",
        },
        {
          id: 3,
          details:
            "Shipped social auth (Google/Apple), deep-link onboarding based on feedSetupCompleted state, and OTA updates via EAS for rapid JS fixes.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Rejoyly", img: "/covers/rejoyly-1.png" },
        { id: 2, title: "Auvra", img: `${APP}/auvra1.png` },
        { id: 3, title: "ThryftUp Tablet", img: "/covers/thryftup-1.png" },
      ],
    },
  },
  sabiguy: {
    ProjectHeader: {
      title: "SabiGuy — Services Marketplace",
      publishDate: "2025",
      tags: "React Native / Expo / iOS & Android — In Development",
    },
    displayType: "Mobile",
    ProjectImages: [
      { id: 1, title: "SabiGuy — Home", img: `${APP}/sabi1.png` },
      { id: 2, title: "SabiGuy — Booking", img: `${APP}/sabi3.png` },
      { id: 3, title: "SabiGuy — Provider", img: `${APP}/sabi4.png` },
      { id: 4, title: "SabiGuy — Wallet", img: `${APP}/sabi5.png` },
      { id: 5, title: "SabiGuy — Chat", img: `${APP}/sabi6.png` },
      { id: 6, title: "SabiGuy — Profile", img: `${APP}/sabi7.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Mobile Developer" },
        { id: 2, title: "Platform", details: "iOS & Android (planned)" },
        { id: 3, title: "Status", details: "In development" },
        {
          id: 4,
          title: "Website",
          details: "sabiguy.com",
          url: "https://sabiguy.com",
        },
        { id: 5, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About SabiGuy",
      ObjectivesDetails:
        "SabiGuy connects customers with trusted service providers for everyday tasks, with simultaneous iOS and Android release planned. The app delivers dual-sided experiences — service users browse, book, pay, and track jobs; providers manage availability, wallet earnings, KYC onboarding, and real-time messaging with an AI support chatbot.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React Native",
            "Expo 55",
            "TypeScript",
            "Expo Router",
            "Zustand",
            "Socket.io",
            "React Native Maps",
            "Paystack",
            "WebRTC",
            "NativeWind",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built role-based navigation separating service user and provider flows — bookings, wallet, withdrawals, KYC, and dashboard analytics per role.",
        },
        {
          id: 2,
          details:
            "Integrated map-based location selection, Paystack checkout with escrow-style payment verification, and real-time Socket.io messaging.",
        },
        {
          id: 3,
          details:
            "Added AI-powered support chatbot with dynamic FAQ suggestions and booking-aware conversation context.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Rejoyly", img: "/covers/rejoyly-1.png" },
        { id: 2, title: "Nobzo Mobile", img: `${APP}/nobzo1.jpeg` },
        { id: 3, title: "ThryftUp Tablet", img: "/covers/thryftup-1.png" },
      ],
    },
  },
  wetrave: {
    ProjectHeader: {
      title: "WeTrave — Event Booking Platform",
      publishDate: "2025",
      tags: "Next.js / Firebase / Web",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "WeTrave — Home", img: `${APP}/goodjoys1.png` },
      { id: 2, title: "WeTrave — Events", img: `${APP}/goodjoys2.png` },
      { id: 3, title: "WeTrave — Admin", img: `${APP}/goodjoys3.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Full Stack Developer" },
        { id: 2, title: "Brand", details: "GoodJoys Ent." },
        { id: 3, title: "Category", details: "Events & Ticketing" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About WeTrave",
      ObjectivesDetails:
        "WeTrave is an event discovery and ticket booking platform with a public storefront for guests and a full admin panel for organisers — managing events, reservations, users, QR check-in scanning, contact submissions, and email notifications.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 16",
            "React 19",
            "TypeScript",
            "Tailwind CSS 4",
            "Firebase",
            "Framer Motion",
            "Recharts",
            "QR Scanning",
            "EmailJS / Nodemailer",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built public event listing, detail, and checkout flows with Firebase-backed data and responsive UI components.",
        },
        {
          id: 2,
          details:
            "Delivered admin tooling for reservations, user management, event updates, QR ticket scanning at entry, and contact form review.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "MakerMan Tech", img: `${APP}/makerman1.png` },
        { id: 2, title: "Rejoyly Landing", img: `${APP}/rejoyly-landing1.png` },
        { id: 3, title: "DDSA Landing Page", img: "/covers/ddsa.png" },
      ],
    },
  },
  makermantech: {
    ProjectHeader: {
      title: "MakerMan Tech — Agency Marketing Site",
      publishDate: "2025",
      tags: "Next.js / Static Export / Web",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "MakerMan Tech — Hero", img: `${APP}/makerman1.png` },
      { id: 2, title: "MakerMan Tech — Services", img: `${APP}/makerman2.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Frontend Developer" },
        { id: 2, title: "Website", details: "makerman.tech" },
        { id: 3, title: "Region", details: "Oakville, Halton Region" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About MakerMan Tech",
      ObjectivesDetails:
        "Marketing site for MakerMan Tech — a digital transformation agency offering custom software, web design & SEO, business process automation, AI implementation, and analytics dashboards for SMBs in Oakville and Halton Region, Ontario.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Next.js 16",
            "React 19",
            "Tailwind CSS 4",
            "Motion",
            "Static Export",
            "reCAPTCHA",
            "Playwright CI",
            "JSON-LD SEO",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built with Next.js App Router and static export (output: export) for deployment to Plesk staging/production workflows.",
        },
        {
          id: 2,
          details:
            "Contact form posts to the live MakerMan backend with reCAPTCHA v2, structured SEO metadata, and JSON-LD for local business discovery.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "WeTrave", img: `${APP}/goodjoys1.png` },
        { id: 2, title: "Rejoyly Landing", img: `${APP}/rejoyly-landing1.png` },
        { id: 3, title: "DDSA Landing Page", img: "/covers/ddsa.png" },
      ],
    },
  },
  "emigr8-companion-admin": {
    ProjectHeader: {
      title: "eMigr8 Companion Admin",
      publishDate: "2025",
      tags: "React / Firebase / Admin Panel",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "Admin Dashboard", img: `${APP}/eMigr8-admin1.png` },
      { id: 2, title: "Route Designer", img: `${APP}/eMigr8Admin2.png` },
      { id: 3, title: "Content Publisher", img: `${APP}/eMigr8Admin3.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Full Stack Developer" },
        { id: 2, title: "Category", details: "Admin & Operations" },
        { id: 3, title: "Stack", details: "React + Vite + Firebase" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About the Admin Panel",
      ObjectivesDetails:
        "Operations panel for the eMigr8 Companion ecosystem — managing visa routes and pathway design, coaches, talents, content publishing, quests, sessions, package bookings, Stripe pricing offers, device push notifications, and analytics dashboards for member progress and registrations.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "React 19",
            "Vite",
            "TypeScript",
            "Firebase",
            "Gemini AI",
            "PostHog",
            "Recharts",
            "React Router",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built admin views for route designer, content publisher, coach/talent management, default tasks, quests, sessions, and package bookings.",
        },
        {
          id: 2,
          details:
            "Integrated Stripe offers tab, pricing configuration, device push campaigns, and admin activity logging with analytics charts.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "eMigr8 Companion", img: `${APP}/eMigr81.webp` },
        { id: 2, title: "eMigr8 Gateway", img: `${APP}/gateway1.png` },
        { id: 3, title: "Visa Architect", img: "/covers/architect.png" },
      ],
    },
  },
  "visa-architect-stripe": {
    ProjectHeader: {
      title: "Visa Architect — Stripe & Cloud Functions",
      publishDate: "2025",
      tags: "Firebase Functions / Stripe / Backend",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "Visa Architect Platform", img: "/covers/architect.png" },
      { id: 2, title: "eMigr8 Gateway", img: `${APP}/gateway2.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Backend Developer" },
        { id: 2, title: "Runtime", details: "Firebase Functions (Node 20)" },
        { id: 3, title: "Product", details: "Visa Architect" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About the Backend",
      ObjectivesDetails:
        "Serverless payment and assessment backend powering Visa Architect — Stripe checkout sessions, subscriptions, webhooks, Gemini-powered visa assessment generation, rate limiting, artifact persistence to Cloud Storage, and scheduled retry jobs for failed assessments.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Firebase Functions",
            "Node.js 20",
            "Stripe",
            "Firebase Admin",
            "Google Gemini API",
            "Cloud Storage",
            "Apple App Store Server Library",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Implemented createCheckoutSession, createSubscriptionCheckoutSession, createPaymentIntent, retrieveSession, and stripeWebhook with CORS, origin allowlists, and auth/App Check enforcement.",
        },
        {
          id: 2,
          details:
            "Built generateAssessment, claimAssessment, recoverAssessmentFromArtifact, and retryPendingAssessments (scheduled every 15 minutes) with daily rate limits and tier-aware access control.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Visa Architect", img: "/covers/architect.png" },
        { id: 2, title: "eMigr8 Gateway", img: `${APP}/gateway1.png` },
        { id: 3, title: "eMigr8 Companion", img: `${APP}/eMigr81.webp` },
      ],
    },
  },
  "rejoyly-landing": {
    ProjectHeader: {
      title: "Rejoyly — Marketing Website",
      publishDate: "2025",
      tags: "Next.js / Marketing / Web",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "Rejoyly Landing", img: `${APP}/rejoyly-landing1.png` },
      { id: 2, title: "Rejoyly Join Flow", img: `${APP}/rejoyly-landing2.png` },
      { id: 3, title: "Rejoyly App Promo", img: `${APP}/rejoyly-landing3.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Frontend Developer" },
        { id: 2, title: "Product", details: "Rejoyly ecosystem" },
        { id: 3, title: "Pages", details: "Landing, Join, Legal" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About the Site",
      ObjectivesDetails:
        "Next.js marketing site for Rejoyly — a P2P marketplace for preloved kids' items. Includes landing page, app download/referral capture (/join), privacy policy, terms of service, and API routes proxying contact and referral submissions to the Rejoyly backend.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: ["Next.js 16", "React 19", "GSAP", "Tailwind CSS 4", "TypeScript"],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built conversion-focused landing and /join referral flow with app store links and query-param preservation on /downloads redirects.",
        },
        {
          id: 2,
          details:
            "Implemented POST /api/contact and POST /api/referral routes proxying to the Rejoyly API with environment-aware base URL configuration.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "Rejoyly Mobile", img: "/covers/rejoyly-1.png" },
        { id: 2, title: "ThryftUp Tablet", img: "/covers/thryftup-1.png" },
        { id: 3, title: "MakerMan Tech", img: `${APP}/makerman1.png` },
      ],
    },
  },
  "emigr8-gateway": {
    ProjectHeader: {
      title: "eMigr8 Gateway — Auth & API Platform",
      publishDate: "2025",
      tags: "Express / Firebase / Platform",
    },
    displayType: "Web",
    ProjectImages: [
      { id: 1, title: "eMigr8 Gateway — Portal", img: `${APP}/gateway1.png` },
      { id: 2, title: "eMigr8 Gateway — SDK", img: `${APP}/gateway2.png` },
    ],
    ProjectInfo: {
      ClientHeading: "Project Details",
      CompanyInfo: [
        { id: 1, title: "Role", details: "Full Stack Developer" },
        { id: 2, title: "Category", details: "Auth Gateway & API Proxy" },
        { id: 3, title: "Hosting", details: "gateway.emigr8.ai" },
        { id: 4, title: "Year", details: "2025" },
      ],
      ObjectivesHeading: "About eMigr8 Gateway",
      ObjectivesDetails:
        "Central auth gateway and API proxy for the eMigr8 product suite. Verifies Firebase ID tokens, resolves user roles and subscription tiers from Firestore, enforces subscription governance (active, grace, past due), injects trusted RBAC headers into downstream requests, and returns paywall teasers when free-tier limits are reached.",
      Technologies: [
        {
          title: "Tools & Technologies",
          techs: [
            "Express.js",
            "Firebase Admin",
            "Firestore",
            "Hono",
            "React 19",
            "TypeScript",
            "Injectable JS SDK",
            "Vite",
          ],
        },
      ],
      ProjectDetailsHeading: "Engineering Highlights",
      ProjectDetails: [
        {
          id: 1,
          details:
            "Built the gateway hard border — token verification, role/tier resolution, and contextual header injection (x-emigr8-user-id, x-emigr8-rbac-role, x-emigr8-subscription-state) for downstream micro-apps.",
        },
        {
          id: 2,
          details:
            "Shipped emigr8-sdk.js for third-party integrations — login redirects, usage tracking, paywall triggers, and authenticated fetch proxying with return_url token handoff.",
        },
        {
          id: 3,
          details:
            "Implemented value teaser responses when free-tier users exhaust credits, driving conversion without blocking the entire partner tool surface.",
        },
      ],
      SocialSharingHeading: "Share This Project",
      SocialSharing: defaultSocial,
    },
    RelatedProject: {
      title: "More Projects",
      Projects: [
        { id: 1, title: "eMigr8 Companion", img: `${APP}/eMigr81.webp` },
        { id: 2, title: "Visa Architect Stripe Backend", img: "/covers/architect.png" },
        { id: 3, title: "Visa Architect", img: "/covers/architect.png" },
      ],
    },
  },
};
