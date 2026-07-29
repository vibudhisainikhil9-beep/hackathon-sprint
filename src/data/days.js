const DAYS_DATA = [
  {
    day: 1,
    title: "Modern JS & React Core Fundamentals",
    goal: "Master foundational React concepts and component hierarchy.",
    tasks: [
      "Learn React state management, hooks (useState, useEffect), components, and props.",
      "Build a simple interactive dashboard with dynamic state updates.",
      "Practice 8-9 hours of active coding without copy-pasting tutorials."
    ],
    keywords: [
      "React crash course for beginners 2026",
      "React useState useEffect practical examples",
      "Build a dashboard React beginner"
    ]
  },
  {
    day: 2,
    title: "Tailwind CSS & Fast Styling",
    goal: "Build responsive, modern UI sections rapidly without raw CSS.",
    tasks: [
      "Master utility-first CSS classes, Flexbox, and Grid layouts.",
      "Re-skin standard HTML elements into modern startup landing page sections.",
      "Practice responsive design rules for mobile and desktop breakpoints."
    ],
    keywords: [
      "Tailwind CSS beginner crash course",
      "Tailwind responsive design tutorial",
      "Build modern landing page Tailwind CSS"
    ]
  },
  {
    day: 3,
    title: "UI Component Libraries (shadcn/ui & Framer Motion)",
    goal: "Create professional-grade visual layouts and micro-interactions.",
    tasks: [
      "Install and configure shadcn/ui and Framer Motion in a React project.",
      "Integrate pre-built cards, dialog modals, sidebars, and animated headers.",
      "Build 3 custom, highly polished UI components from scratch."
    ],
    keywords: [
      "shadcn ui Next js setup tutorial",
      "Framer motion animations React beginner",
      "Beautiful UI design React tailwind"
    ]
  },
  {
    day: 4,
    title: "Next.js App Router Basics",
    goal: "Understand Next.js architecture and SSR/CSR paradigms.",
    tasks: [
      "Master file-based routing in the Next.js App Router (/app directory structure).",
      "Understand the difference between Client Components ('use client') and Server Components.",
      "Build a multi-page web application layout with dynamic routes."
    ],
    keywords: [
      "Next.js app router crash course for beginners",
      "Next js project setup step by step"
    ]
  },
  {
    day: 5,
    title: "Instant Frontend Deployment",
    goal: "Achieve frictionless, instant deployment to share live prototypes.",
    tasks: [
      "Practice Git version control commands (git add, commit, push, branch).",
      "Link GitHub repository to Vercel for automated CI/CD deployment.",
      "Host 2 landing pages live on Vercel with clean custom URLs."
    ],
    keywords: [
      "Git and GitHub for beginners full tutorial",
      "How to deploy Next js on Vercel"
    ]
  },
  {
    day: 6,
    title: "Weekend UI Replication Sprint (Part 1)",
    goal: "Replicate real-world high-converting startup UI under time pressure.",
    tasks: [
      "Select a modern tech startup landing page (e.g., Linear, Stripe, or OpenAI).",
      "Set up Next.js + Tailwind CSS + shadcn/ui boilerplate.",
      "Clone the Hero section, Navigation, and Feature sections completely from scratch."
    ],
    keywords: [
      "Clone startup landing page React Tailwind",
      "Advanced Tailwind CSS layout design"
    ]
  },
  {
    day: 7,
    title: "Weekend UI Replication Sprint (Part 2)",
    goal: "Complete full UI clone without looking at video tutorials.",
    tasks: [
      "Complete footer, pricing tables, interactive modals, and mobile navigation for the clone.",
      "Test responsiveness across mobile, tablet, and desktop screens.",
      "Deploy the completed clone live on Vercel and verify loading speeds."
    ],
    keywords: [
      "Clone startup landing page React Tailwind",
      "Next js responsive design layout"
    ]
  },
  {
    day: 8,
    title: "Supabase Backend-as-a-Service (BaaS)",
    goal: "Store and retrieve structured relational data seamlessly.",
    tasks: [
      "Create a Supabase project and set up relational SQL database tables.",
      "Connect Supabase to Next.js using @supabase/supabase-js SDK.",
      "Perform full CRUD (Create, Read, Update, Delete) operations from frontend forms."
    ],
    keywords: [
      "Supabase crash course Next js",
      "Supabase database CRUD operations React"
    ]
  },
  {
    day: 9,
    title: "Auth & User Management",
    goal: "Implement secure authentication and protected application routes.",
    tasks: [
      "Implement Google OAuth sign-in using Supabase Auth or NextAuth.",
      "Manage user session state and conditionally render navigation elements.",
      "Create protected dashboard routes that redirect non-authenticated users."
    ],
    keywords: [
      "Supabase auth Google sign in Next js",
      "Next auth session protected routes"
    ]
  },
  {
    day: 10,
    title: "Python FastAPI / Node Express Basics",
    goal: "Create lightweight, fast backends to handle heavy processing.",
    tasks: [
      "Build custom REST API endpoints using Python FastAPI or Node.js Express.",
      "Handle incoming JSON payloads, headers, query params, and HTTP status codes.",
      "Fetch data from your custom backend API inside your Next.js frontend."
    ],
    keywords: [
      "FastAPI beginner tutorial build REST API",
      "Node js Express API step by step"
    ]
  },
  {
    day: 11,
    title: "Third-Party API Integration",
    goal: "Extend application capability using existing industry APIs.",
    tasks: [
      "Connect third-party APIs (Twilio for WhatsApp/SMS, Google Maps, or Stripe test keys).",
      "Render dynamic API data (e.g., interactive maps or payment triggers) in UI.",
      "Store and manage API keys safely using environment variables (.env.local)."
    ],
    keywords: [
      "How to integrate external APIs in Next js",
      "Google Maps API React tutorial",
      "Twilio API node js example"
    ]
  },
  {
    day: 12,
    title: "Git Collaboration & Team Workflow",
    goal: "Prevent code breakage while collaborating under hackathon time limits.",
    tasks: [
      "Practice creating feature branches and making Pull Requests on GitHub.",
      "Intentionally generate a git merge conflict and resolve it cleanly.",
      "Set up a shared .env template and team development workflow."
    ],
    keywords: [
      "Git branches pull requests merge conflicts tutorial",
      "GitHub team workflow hackathon"
    ]
  },
  {
    day: 13,
    title: "Full-Stack App Sprint (Part 1 - Architecture & Database)",
    goal: "Build a full-stack CRUD application from scratch.",
    tasks: [
      "Plan database schema for an app (e.g., real-time task manager or event portal).",
      "Build authenticated backend routes and connect database tables in Supabase.",
      "Build frontend layout, forms, and dynamic data fetch hooks."
    ],
    keywords: [
      "Build full stack Next js Supabase app",
      "Full stack web application step by step"
    ]
  },
  {
    day: 14,
    title: "Full-Stack App Sprint (Part 2 - Deployment & Polish)",
    goal: "Ship a fully dynamic, working full-stack app.",
    tasks: [
      "Wire up form submissions, database inserts, and real-time UI re-renders.",
      "Deploy database and application to Vercel/Supabase live environments.",
      "Perform end-to-end user flow testing on a mobile device."
    ],
    keywords: [
      "Build full stack Next js Supabase app",
      "Vercel fullstack deployment tutorial"
    ]
  },
  {
    day: 15,
    title: "AI SDKs & Gemini / OpenAI Integration",
    goal: "Incorporate Generative AI capabilities into core web apps.",
    tasks: [
      "Obtain Gemini API / OpenAI API keys and configure Vercel AI SDK.",
      "Build custom prompt chains and stream AI responses directly into the UI.",
      "Create an interactive AI feature (e.g., AI pitch generator or notes summarizer)."
    ],
    keywords: [
      "Gemini API Next js tutorial",
      "Vercel AI SDK integration Next js",
      "OpenAI API Node js beginner"
    ]
  },
  {
    day: 16,
    title: "Basic RAG & Vector Databases",
    goal: "Build context-aware AI applications using custom datasets.",
    tasks: [
      "Understand vector embeddings and similarity search using Pinecone or Supabase Vector.",
      "Build a 'Chat with PDF/Document' feature.",
      "Combine user query context with database search results before sending to LLM."
    ],
    keywords: [
      "RAG tutorial for beginners LangChain",
      "Pinecone vector database Next js",
      "Build chat with PDF Next js AI"
    ]
  },
  {
    day: 17,
    title: "Pitch Deck & Demo Engineering",
    goal: "Master the 3-minute presentation that convinces judges.",
    tasks: [
      "Study top 3 winning hackathon pitch videos on YouTube.",
      "Create a 5-slide pitch deck (Problem, Solution, Live Demo, Tech Stack, Business Impact).",
      "Record a 3-minute voiceover product demo showing core working features."
    ],
    keywords: [
      "How to win a hackathon pitch",
      "Best hackathon pitch deck examples",
      "How to demo product in hackathon"
    ]
  },
  {
    day: 18,
    title: "Mock 24-Hour Solo Hackathon (Build Phase)",
    goal: "Build a complete MVP under 24-hour time constraint.",
    tasks: [
      "Select a problem prompt (e.g., \"AI civic issue reporter for Hyderabad\").",
      "Build frontend UI, Supabase database, and AI API integration within 12 continuous hours.",
      "Deploy live working URL to Vercel."
    ],
    keywords: [
      "Hackathon full stack project build fast",
      "Build and deploy MVP in 24 hours"
    ]
  },
  {
    day: 19,
    title: "Mock 24-Hour Solo Hackathon (Demo Phase)",
    goal: "Complete project presentation under mock competition rules.",
    tasks: [
      "Fix critical bugs and polish mobile UI appearance.",
      "Create a pitch deck on Pitch.com or Canva matching the mock app.",
      "Record and finalize a crisp 2-minute live demo video."
    ],
    keywords: [
      "Hackathon product presentation demo",
      "How to record hackathon demo video"
    ]
  },
  {
    day: 20,
    title: "Team Formation & Networking",
    goal: "Assemble a balanced team for major city hackathons.",
    tasks: [
      "Join hackathon communities on Devfolio, Unstop, and Discord channels.",
      "Reach out to potential teammates (designers, backend devs, pitchers).",
      "Update GitHub profile and create a portfolio landing page featuring your sprint projects."
    ],
    keywords: [
      "Find hackathon team members Devfolio",
      "Portfolio for hackathon developers"
    ]
  },
  {
    day: 21,
    title: "Final Polish & Event Submission",
    goal: "Lock in hackathon entries for major hubs (Hyd, Blr, Mumbai).",
    tasks: [
      "Apply to 2-3 upcoming hackathons on Devfolio/Unstop.",
      "Review all 21-day code repositories and structure reusable starter templates.",
      "Perform a final full-stack dry run to ensure you can build an MVP in under 6 hours."
    ],
    keywords: [
      "Devfolio hackathon registration guide",
      "Hackathon winning checklist"
    ]
  }
];

export default DAYS_DATA;
