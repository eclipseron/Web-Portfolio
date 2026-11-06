import type { VNode } from 'vue'

export interface ProjectSpec {
  label: string
  value: string
}

export interface ProjectImage {
  src: string
  alt: string
  label: string
  caption: string
}

export interface ProjectDetail {
  id: string
  title: string
  description: string
  imgUrl?: string
  previewUrl?: string
  githubUrl?: string
  tags: string[]
  status: string
  images: ProjectImage[]
  brief: {
    headline: string
    challenge: VNode
    solution: VNode
    impact: VNode
    specs: ProjectSpec[]
  }
  architecture: {
    title: string
    detail: string
  }[]
}

export const TOP_PROJECTS: ProjectDetail[] = [
  {
    id: "paroki-samara",
    title: "Profile Website for Paroki Kosambi Baru",
    description: "End-to-end solution for Paroki Kosambi Baru Profile and content management system",
    imgUrl: "/img/icon-samara.svg",
    previewUrl: "https://parokikosambibaru.or.id",
    tags: ["Javascript", "Go", "Next.js", "Gin", "MySQL", "Google Cloud"],
    status: "Live in Production",
    images: [
      {
        src: "/img/showcase/paroki-samara/ui-paroki-kosambi.webp",
        alt: "Tampilan Website Profile Paroki Kosambi Baru",
        label: "WEB PROFILE PAROKI KOSAMBI BARU",
        caption: "Tampilan Website Profile Paroki Kosambi Baru pada Layar Desktop dan Mobile"
      },
      {
        src: "/img/showcase/paroki-samara/web-traffic-paroki-kosambi.webp",
        alt: "Paroki Kosambi Baru Go Gin CMS backend and GCP architecture",
        label: "SEO OPTIMIZATION",
        caption: "Optimisasi SEO yang menghasilkan 2 ribu pengunjung web sepanjang April - November 2026"
      }
    ],
    brief: {
      headline:
        "An end-to-end digital publishing platform and parish profile engineered to serve thousands of monthly readers with reliable cloud infrastructure.",
      challenge: (
        <p>
          Parish announcements, liturgical schedules, and e-magazines were scattered across manual channels, making it difficult for parishioners to find timely information and for the media team to publish updates.
        </p>
      ),
      solution: (
        <p>
          Forged a custom RESTful CMS backend in Go (Gin) paired with a fast, SEO-friendly Next.js frontend, backed by MySQL and deployed on Google Cloud Platform.
        </p>
      ),
      impact: (
        <div>
          <ul class="list-disc ml-5 space-y-1">
            <li>Sustains up to 9,000 requests/month and 1,000+ average monthly active visitors.</li>
            <li>Streamlines the editorial workflow for the Social Communication division.</li>
          </ul>
        </div>
      ),
      specs: [
        { label: "Architecture", value: "Decoupled REST API + SSR Web" },
        { label: "Backend Core", value: "Go (Gin) + MySQL" },
        { label: "Infrastructure", value: "Google Cloud Platform (GCP)" },
        { label: "Traffic Scale", value: "~9,000 req/mo · 1,000+ visitors" }
      ]
    },
    architecture: [
      {
        title: "High-Throughput Go & Gin API",
        detail: "Designed clean, low-latency REST endpoints in Go using the Gin framework to serve articles, e-magazine issues, and parish schedules with minimal memory overhead."
      },
      {
        title: "Relational Content Modeling in MySQL",
        detail: "Structured schemas for structured articles, media assets, categories, and role-based editorial permissions to keep publishing workflows organized."
      },
      {
        title: "Next.js SSR for SEO & Reader Experience",
        detail: "Built a responsive public portal and e-magazine reader with server-side rendering so congregation members can discover articles via search engines and read comfortably on mobile devices."
      },
      {
        title: "Cloud Deployment on GCP",
        detail: "Configured production hosting, storage, and monitoring on Google Cloud Platform to ensure consistent uptime during peak weekend mass hours."
      }
    ],
  },
  {
    id: "flxa",
    title: "FLXA",
    description: "Cloud-based solution and blockchain gamification for mobile credit efficiency",
    imgUrl: "/img/icon-flxa.png",
    tags: ["Competition", "Huawei Cloud", "Go", "Javascript", "PostgreSQL", "Docker", "Blockchain", "IOTA"],
    status: "2nd Place Winner (APAC)",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "FLXA mobile credit efficiency and gamification dashboard",
        label: "FIG 01 // GAMIFIED CREDIT DASHBOARD",
        caption: "User interface showcasing mobile credit efficiency tracking, quest progression, and verifiable rewards."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "FLXA Huawei Cloud and IOTA Tangle distributed ledger architecture",
        label: "FIG 02 // HUAWEI CLOUD & IOTA LEDGER",
        caption: "Containerized Go backend on Huawei Cloud bridging PostgreSQL transactional state with feeless IOTA Tangle anchoring."
      }
    ],
    brief: {
      headline:
        "Award-winning cloud platform combining Go microservices and IOTA distributed ledger gamification to optimize unused mobile credit and data resources.",
      challenge: (
        <p>
          Users frequently lose value from expiring or underutilized mobile credit balances, while telecom ecosystems lack transparent, engaging mechanisms to incentivize efficient resource exchange.
        </p>
      ),
      solution: (
        <p>
          Engineered a containerized Go backend on Huawei Cloud integrated with PostgreSQL and the feeless IOTA Tangle blockchain to power verifiable reward gamification.
        </p>
      ),
      impact: (
        <p>
          Awarded 2nd Place in the Student Track at the Huawei Developer Competition APAC 2024 finals in Bangkok, Thailand.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Cloud-Native + Web3 Ledger" },
        { label: "Backend Core", value: "Go + PostgreSQL + Docker" },
        { label: "Cloud & Ledger", value: "Huawei Cloud + IOTA Tangle" },
        { label: "Recognition", value: "2nd Place APAC 2024 (Bangkok)" }
      ]
    },
    architecture: [
      {
        title: "Containerized Go Backend on Huawei Cloud",
        detail: "Built core transaction and user-state services in Go, packaged with Docker and deployed across Huawei Cloud infrastructure for elastic scalability."
      },
      {
        title: "Feeless Micro-Transactions with IOTA",
        detail: "Integrated the IOTA distributed ledger to record gamified rewards and credit efficiency milestones transparently without burdening users with gas fees."
      },
      {
        title: "Transactional Integrity with PostgreSQL",
        detail: "Maintained strict relational consistency for user balances, activity logs, and quest progression alongside asynchronous ledger anchoring."
      }
    ],
  },
  {
    id: "ha-hyperbase",
    title: "Hyperbase for Home Assistant",
    description: "Hyperbase integration for Home Assistant to collect commercial IoT data into local data center",
    imgUrl: "/img/icon-hyperbase.svg",
    previewUrl: "https://eclipseron.github.io/homeassistant-hyperbase",
    githubUrl: "https://github.com/eclipseron/homeassistant-hyperbase",
    tags: ["College project", "Python", "IoT", "Home Assistant", "Docker", "ScyllaDB", "PostgreSQL", "MQTT", "IT infrastructure"],
    status: "Open Source Integration",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Home Assistant Hyperbase integration configuration and telemetry dashboard",
        label: "FIG 01 // HOME ASSISTANT INTEGRATION UI",
        caption: "Custom component configuration flow and real-time entity state monitoring inside Home Assistant."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "MQTT, ScyllaDB, and PostgreSQL local data center ingestion pipeline",
        label: "FIG 02 // LOCAL DATA CENTER PIPELINE",
        caption: "High-throughput telemetry ingestion routing IoT sensor events into ScyllaDB time-series storage and PostgreSQL."
      }
    ],
    brief: {
      headline:
        "A custom Home Assistant integration and local data-center pipeline that captures high-frequency commercial IoT telemetry into ScyllaDB and PostgreSQL.",
      challenge: (
        <p>
          Commercial smart-home sensors often lock telemetry in vendor clouds or overwrite historical states, making long-term local analytics and high-throughput ingestion difficult.
        </p>
      ),
      solution: (
        <p>
          Developed a custom Python integration for Home Assistant that bridges device state events over MQTT/REST into a self-hosted Hyperbase backend powered by ScyllaDB and PostgreSQL.
        </p>
      ),
      impact: (
        <p>
          Enables full data sovereignty and high-write-throughput time-series archiving for commercial IoT ecosystems inside a local data center.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Event-Driven IoT Pipeline" },
        { label: "Core Language", value: "Python (Home Assistant Core)" },
        { label: "Storage Engine", value: "ScyllaDB + PostgreSQL" },
        { label: "Protocols", value: "MQTT · REST · Docker" }
      ]
    },
    architecture: [
      {
        title: "Native Home Assistant Custom Component",
        detail: "Written in asynchronous Python following Home Assistant's config-flow and entity-listener standards for seamless UI setup."
      },
      {
        title: "Hybrid ScyllaDB & PostgreSQL Storage",
        detail: "Leveraged ScyllaDB's wide-column, low-latency write path for continuous sensor time-series data alongside PostgreSQL for relational metadata and project configuration."
      },
      {
        title: "Containerized Local Data Center",
        detail: "Orchestrated MQTT brokers, Hyperbase services, and database nodes via Docker to run reliably on local server hardware."
      }
    ],
  },
  {
    id: "fitmotion",
    title: "FitMotion",
    description: "Track user's physical activities using machine learning and data collection system to recognize phone accelerometer pattern",
    imgUrl: "/img/icon-bangkit.jpg",
    githubUrl: "https://github.com/eclipseron/FitMotion-Core",
    tags: ["Bangkit Academy", "Python", "FastAPI", "Google Cloud", "Docker"],
    status: "Graduated with Distinction",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "FitMotion accelerometer pattern recognition and workout tracking view",
        label: "FIG 01 // ACTIVITY TELEMETRY & TRACKING",
        caption: "Real-time physical activity classification and accelerometer waveform telemetry visualization."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "FitMotion-Core FastAPI and Google Cloud ML inference pipeline",
        label: "FIG 02 // FASTAPI & GCP INFERENCE ENGINE",
        caption: "Dockerized FastAPI service on Google Cloud Platform handling sensor window ingestion and ML classification."
      }
    ],
    brief: {
      headline:
        "Cloud-hosted activity recognition backend that ingests raw smartphone accelerometer streams and classifies physical exercises using machine learning.",
      challenge: (
        <p>
          Accurately recognizing physical workouts from noisy mobile sensor data requires a fast ingestion pipeline and reliable cloud inference without draining mobile battery.
        </p>
      ),
      solution: (
        <p>
          Built the core backend service in Python with FastAPI, containerized with Docker on Google Cloud Platform, to collect sensor windows and serve ML activity predictions.
        </p>
      ),
      impact: (
        <p>
          Delivered a complete end-to-end ML-backed fitness tracking platform, contributing to graduating with Distinction from Bangkit Academy 2024.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "ML Inference & Telemetry API" },
        { label: "Backend Core", value: "Python (FastAPI)" },
        { label: "Cloud Platform", value: "Google Cloud Platform (GCP)" },
        { label: "Milestone", value: "Bangkit 2024 Distinction" }
      ]
    },
    architecture: [
      {
        title: "High-Performance FastAPI Ingestion",
        detail: "Engineered asynchronous endpoints in FastAPI with strict Pydantic validation to process multi-axis accelerometer time-series payloads."
      },
      {
        title: "Model Serving Pipeline",
        detail: "Integrated the trained machine learning pipeline directly into the backend service to classify movement patterns with minimal latency."
      },
      {
        title: "Dockerized GCP Deployment",
        detail: "Packaged the application and its ML dependencies into lightweight Docker images deployed on Google Cloud Platform."
      }
    ],
  },
  {
    id: "eyefata",
    title: "EYEFATA",
    description: "Human fitness level prediction from saccadic and smooth-pursuit eye movement patterns",
    imgUrl: "/img/icon-eyefata.png",
    githubUrl: "https://github.com/CapstoneDTETIA06/EyeFata",
    previewUrl: "https://acadstaff.ugm.ac.id/karya_files/eyefata--pemanfaatan-eye-tracker-dan-heart-rate-sensor-untuk-mendeteksi-tingkat-kebugaran-individu-dcfcd07e645d245babe887e5e2daa016",
    tags: ["College project", "Python", "Javascript", "C#", "Next.js", "TailwindCSS"],
    status: "Published UGM Capstone",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "EYEFATA visual stimulus calibration and fitness diagnostic dashboard",
        label: "FIG 01 // OCULAR STIMULUS & DIAGNOSTIC UI",
        caption: "Next.js diagnostic dashboard displaying saccadic/smooth-pursuit gaze traces and predicted fitness level."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "EYEFATA C# eye-tracker SDK, heart-rate sensor, and Python ML pipeline",
        label: "FIG 02 // SENSOR FUSION ARCHITECTURE",
        caption: "Hardware-in-the-loop pipeline bridging C# eye-tracker streams and heart-rate biometrics into Python analytics."
      }
    ],
    brief: {
      headline:
        "Non-invasive human fitness prediction system combining eye-tracking hardware, heart-rate biometrics, and multi-language software pipelines.",
      challenge: (
        <p>
          Traditional physical fitness assessments require exhausting physical exertion, creating barriers for rapid screening or subjects with mobility constraints.
        </p>
      ),
      solution: (
        <p>
          Integrated C# hardware interfacing for eye-trackers, Python analytical/prediction services, and a Next.js visual stimulus &amp; diagnostic dashboard.
        </p>
      ),
      impact: (
        <p>
          Successfully demonstrated correlation and automated prediction of individual fitness levels from saccadic and smooth-pursuit ocular movements alongside heart-rate sensors.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Hardware-in-the-Loop + Web UI" },
        { label: "Core Stack", value: "Python · C# · Next.js" },
        { label: "Sensors", value: "Eye Tracker + Heart Rate Sensor" },
        { label: "Origin", value: "DTETI UGM Capstone Project" }
      ]
    },
    architecture: [
      {
        title: "C# & Python Sensor Acquisition Bridge",
        detail: "Captured high-frequency gaze coordinates and biometric heart-rate streams from hardware sensors with synchronized timestamps."
      },
      {
        title: "Ocular Pattern Feature Extraction",
        detail: "Processed saccadic latency, velocity, and smooth-pursuit accuracy in Python to feed the fitness classification model."
      },
      {
        title: "Interactive Stimulus & Reporting UI",
        detail: "Built a Next.js and TailwindCSS interface to render precise visual tracking targets and display instant diagnostic summaries."
      }
    ],
  },
  {
    id: "enova",
    title: "Enova.id",
    description: "Web profile for PT Inovasi Teknologi Berkelanjutan",
    imgUrl: "/img/icon-enova.png",
    previewUrl: "https://enova.id",
    tags: ["Typescript", "Next.js", "TailwindCSS"],
    status: "Live in Production",
    images: [
      {
        src: "/img/showcase/enova/ui-enovaid-1.webp",
        alt: "Enova.id company profile website",
        label: "HOMEPAGE",
        caption: "Clean, high-contrast landing experience crafted for PT Inovasi Teknologi Berkelanjutan."
      },
      {
        src: "/img/showcase/enova/ui-enovaid-2.webp",
        alt: "Enova.id Next.js SSR and modular TypeScript component structure",
        label: "COMPANY SERVICES AND PORTFOLIO PAGE",
        caption: "TypeScript and Next.js rendering pipeline optimized for SEO discoverability and fast mobile load times."
      }
    ],
    brief: {
      headline:
        "A sleek, fast-loading corporate digital presence crafted for PT Inovasi Teknologi Berkelanjutan.",
      challenge: (
        <p>
          The company needed a trustworthy, modern web profile to showcase its sustainable technology solutions, portfolio, and corporate identity to prospective clients.
        </p>
      ),
      solution: (
        <p>
          Built a strongly-typed Next.js application styled with TailwindCSS, focusing on clean visual hierarchy, responsive performance, and search engine visibility.
        </p>
      ),
      impact: (
        <p>
          Established the official production web presence at enova.id with sub-second page transitions and mobile-first responsiveness.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Static & SSR Web Application" },
        { label: "Core Stack", value: "TypeScript · Next.js · TailwindCSS" },
        { label: "Focus", value: "Performance & Corporate Identity" },
        { label: "Deployment", value: "Production (enova.id)" }
      ]
    },
    architecture: [
      {
        title: "Type-Safe Component System",
        detail: "Developed reusable UI sections in TypeScript and Next.js to maintain strict consistency across landing pages and service breakdowns."
      },
      {
        title: "Responsive TailwindCSS Styling",
        detail: "Crafted fluid layouts that adapt cleanly from mobile viewports to widescreen desktop displays."
      }
    ],
  },
  {
    id: "night-login",
    title: "Night Login",
    description: "Web profile for a DTETI student community",
    imgUrl: "/img/icon-nl.png",
    githubUrl: "https://github.com/Night-Login/night-login-website-2024",
    previewUrl: "https://nightlogin.id",
    tags: ["Typescript", "Next.js", "TailwindCSS"],
    status: "Live & Open Source",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Night Login community divisions and event showcase portal",
        label: "FIG 01 // COMMUNITY HUB & DIVISIONS",
        caption: "Dark-themed community portal introducing DTETI UGM students to Night Login's specialized tech divisions."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Night Login modular Next.js and TypeScript frontend architecture",
        label: "FIG 02 // COLLABORATIVE WEB ARCHITECTURE",
        caption: "Modular Next.js and TypeScript codebase structured for multi-developer open-source collaboration."
      }
    ],
    brief: {
      headline:
        "The official portal for DTETI UGM's premier student technology community, showcasing divisions, events, and developer culture.",
      challenge: (
        <p>
          Incoming engineering students needed a central hub to explore Night Login&apos;s specialized tech communities, activities, and recruitment tracks.
        </p>
      ),
      solution: (
        <p>
          Collaboratively engineered the 2024 community website using TypeScript, Next.js, and TailwindCSS with a bold dark-mode aesthetic that reflects the community&apos;s identity.
        </p>
      ),
      impact: (
        <p>
          Served as the primary onboarding and showcase platform for DTETI UGM students exploring software, cyber, and data divisions.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Modern Jamstack Web" },
        { label: "Core Stack", value: "TypeScript · Next.js · TailwindCSS" },
        { label: "Organization", value: "Night Login (DTETI UGM)" },
        { label: "Domain", value: "nightlogin.id" }
      ]
    },
    architecture: [
      {
        title: "Modular Next.js Architecture",
        detail: "Structured pages and division showcases so multiple community contributors could work in parallel via GitHub pull requests."
      },
      {
        title: "Signature Dark Aesthetic with TailwindCSS",
        detail: "Translated the community's visual identity into responsive, accessible components."
      }
    ],
  },
  {
    id: "ppsmb-kesatria",
    title: "PPSMB Kesatria 2023",
    imgUrl: "/img/icon-kesatria.png",
    githubUrl: "https://github.com/PPSMB-Kesatria/kesatria23-frontend",
    previewUrl: "https://kesatria-preview.eclipseron.web.id/",
    description: "Information dashboard for faculty of engineering student orientation",
    tags: ["Javascript", "Next.js", "TailwindCSS"],
    status: "Completed & Archived Preview",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "PPSMB Kesatria 2023 orientation dashboard and student guide",
        label: "FIG 01 // ORIENTATION MISSION DASHBOARD",
        caption: "Interactive orientation portal accessed by 1,000+ incoming engineering freshmen at UGM."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "PPSMB Kesatria 2023 static and edge delivery architecture",
        label: "FIG 02 // HIGH-BURST TRAFFIC DELIVERY",
        caption: "Lightweight Next.js bundle delivery engineered to stay responsive on congested campus mobile networks."
      }
    ],
    brief: {
      headline:
        "Centralized information hub and interactive guide for incoming freshmen at the Faculty of Engineering, Universitas Gadjah Mada.",
      challenge: (
        <p>
          Over a thousand incoming engineering freshmen needed simultaneous access to orientation schedules, assignments, faculty maps, and announcements during PPSMB Kesatria.
        </p>
      ),
      solution: (
        <p>
          Built a fast, mobile-friendly Next.js and TailwindCSS web platform designed to handle high burst traffic from students on campus.
        </p>
      ),
      impact: (
        <p>
          Successfully guided the 2023 cohort of UGM Engineering freshmen through orientation week with zero downtime.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "High-Availability Event Portal" },
        { label: "Core Stack", value: "JavaScript · Next.js · TailwindCSS" },
        { label: "Audience", value: "1,000+ Engineering Freshmen" },
        { label: "Event", value: "PPSMB Kesatria 2023 (FT UGM)" }
      ]
    },
    architecture: [
      {
        title: "Lightweight Next.js Delivery",
        detail: "Optimized assets and page bundles so students could load schedules and guidebooks quickly on mobile connections."
      },
      {
        title: "Themed UI System",
        detail: "Implemented custom layouts and interactive components matching the official PPSMB Kesatria 2023 visual theme."
      }
    ],
  },
  {
    id: "gkipi",
    title: "GKIPI",
    imgUrl: "/img/icon-gkipi.png",
    description: "Web based marketplace for small business in GKIPI",
    githubUrl: "https://github.com/GKIPI/frontend-gkipi",
    tags: ["Javascript", "Next.js", "TailwindCSS", "MongoDB"],
    status: "Open Source Project",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "GKIPI small business marketplace storefront and catalog",
        label: "FIG 01 // MERCHANT STOREFRONT & CATALOG",
        caption: "Responsive web marketplace showcasing community small business products and vendor profiles."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "GKIPI Next.js and MongoDB document store architecture",
        label: "FIG 02 // MONGODB CATALOG ARCHITECTURE",
        caption: "Flexible document-based product catalog and merchant directory powered by Next.js and MongoDB."
      }
    ],
    brief: {
      headline:
        "A dedicated community e-commerce marketplace connecting small business owners and congregation members within GKIPI.",
      challenge: (
        <p>
          Small and medium businesses within the community lacked a unified catalog where members could discover and support local merchants.
        </p>
      ),
      solution: (
        <p>
          Developed a web-based marketplace using Next.js, TailwindCSS, and MongoDB for flexible product catalog and merchant management.
        </p>
      ),
      impact: (
        <p>
          Provided local merchants with a structured digital storefront to display products and connect directly with buyers.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Fullstack Web Marketplace" },
        { label: "Core Stack", value: "Next.js · TailwindCSS · MongoDB" },
        { label: "Data Model", value: "Document Store (Catalog & Vendors)" },
        { label: "Focus", value: "Community SME Empowerment" }
      ]
    },
    architecture: [
      {
        title: "Flexible Catalog Schema in MongoDB",
        detail: "Stored varied merchant profiles and product attributes in MongoDB to accommodate diverse small-business inventory."
      },
      {
        title: "Search & Storefront UI in Next.js",
        detail: "Built responsive product cards, category filters, and merchant pages styled with TailwindCSS."
      }
    ],
  },
  {
    id: "cekmata",
    title: "Cekmata.org",
    description: "Web based system for eye disease detection",
    githubUrl: "https://github.com/eclipseron/cekmata.org",
    tags: ["College project", "Javascript", "Python", "FastAPI", "Next.js", "ONNX", "PostgreSQL", "Azure"],
    status: "Open Source System",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Cekmata.org eye image upload and disease classification interface",
        label: "FIG 01 // OCULAR SCREENING INTERFACE",
        caption: "Browser-based screening workflow allowing users to upload ocular images and view confidence breakdowns."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Cekmata.org FastAPI, ONNX Runtime, and Microsoft Azure deployment topology",
        label: "FIG 02 // ONNX & AZURE INFERENCE PIPELINE",
        caption: "Lightweight CPU inference engine using ONNX Runtime inside FastAPI with PostgreSQL on Microsoft Azure."
      }
    ],
    brief: {
      headline:
        "Cloud-deployed ocular disease screening platform running ONNX-accelerated deep learning inference via FastAPI and Azure.",
      challenge: (
        <p>
          Early screening for common eye conditions is often inaccessible in areas without immediate specialist equipment, and raw deep-learning models are too heavy for standard web servers.
        </p>
      ),
      solution: (
        <p>
          Converted the computer vision model to ONNX runtime and wrapped it in a Python FastAPI backend backed by PostgreSQL and Next.js, deployed on Microsoft Azure.
        </p>
      ),
      impact: (
        <p>
          Delivered fast, browser-accessible preliminary eye disease classification with lightweight CPU inference.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Decoupled AI Inference + Web App" },
        { label: "Backend & AI", value: "Python · FastAPI · ONNX Runtime" },
        { label: "Database & Cloud", value: "PostgreSQL · Microsoft Azure" },
        { label: "Frontend", value: "Next.js" }
      ]
    },
    architecture: [
      {
        title: "ONNX Runtime Inference Engine",
        detail: "Executed eye image classification models using ONNX Runtime inside FastAPI for high-speed, low-memory inference without requiring expensive GPU instances."
      },
      {
        title: "PostgreSQL Screening Records",
        detail: "Persisted user screening sessions, image metadata, and classification confidence scores in PostgreSQL."
      },
      {
        title: "Next.js Diagnostic Interface on Azure",
        detail: "Provided an intuitive image upload and result visualization workflow hosted on Microsoft Azure."
      }
    ],
  },
  {
    id: "berkati-id",
    title: "Berkati",
    description: "Desktop app for non-profit organization",
    previewUrl: "https://eclipseron.github.io/Berkati-id/",
    githubUrl: "https://github.com/eclipseron/Berkati-id",
    tags: ["College project", "C#", "ASP.Net", "PostgreSQL", "Docker", "Amazon Web Service (AWS)"],
    status: "Open Source & Documented",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Berkati C# desktop client for donor and aid management",
        label: "FIG 01 // DESKTOP MANAGEMENT SUITE",
        caption: "C# desktop application interface for tracking donor contributions, inventory, and distribution programs."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "Berkati ASP.NET Core, Docker, and AWS PostgreSQL architecture",
        label: "FIG 02 // ASP.NET & AWS CLOUD BACKEND",
        caption: "Object-oriented ASP.NET service layer and Dockerized PostgreSQL database hosted on Amazon Web Services."
      }
    ],
    brief: {
      headline:
        "A C# and ASP.NET management suite backed by PostgreSQL on AWS to help non-profit organizations coordinate donors, aid distribution, and operations.",
      challenge: (
        <p>
          Non-profit teams managing donations and community aid programs struggled with fragmented spreadsheets and lacked audit-ready tracking.
        </p>
      ),
      solution: (
        <p>
          Engineered a strongly-typed C# desktop client and ASP.NET service layer connected to a containerized PostgreSQL database hosted on AWS.
        </p>
      ),
      impact: (
        <p>
          Streamlined donor tracking, inventory management, and transparent reporting for non-profit operations.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "Desktop Client + Cloud Backend" },
        { label: "Core Stack", value: "C# · ASP.NET · PostgreSQL" },
        { label: "Infrastructure", value: "Docker · Amazon Web Services (AWS)" },
        { label: "Domain", value: "Non-Profit Resource Management" }
      ]
    },
    architecture: [
      {
        title: "Object-Oriented C# & ASP.NET Core",
        detail: "Implemented clean domain models, authentication, and business logic following solid object-oriented design principles."
      },
      {
        title: "PostgreSQL & Docker on AWS",
        detail: "Deployed the relational database and API layer inside Docker containers on Amazon Web Services for centralized access."
      }
    ],
  },
  {
    id: "rental-bahari",
    title: "RentalBahari",
    description: "Web based dashboard for car renting system",
    previewUrl: "https://rental-bahari-fe.vercel.app/",
    githubUrl: "https://github.com/fajarrw/rentalBahari",
    tags: ["College project", "Javascript", "Express.js", "Next.js", "TailwindCSS", "MongoDB"],
    status: "Live Demo & Open Source",
    images: [
      {
        src: "/img/showcase/placeholder.webp",
        alt: "RentalBahari vehicle reservation and fleet management dashboard",
        label: "FIG 01 // FLEET & BOOKING DASHBOARD",
        caption: "Interactive Next.js dashboard for browsing vehicle availability, booking schedules, and rental status."
      },
      {
        src: "/img/showcase/placeholder.webp",
        alt: "RentalBahari Express.js REST API and MongoDB backend architecture",
        label: "FIG 02 // EXPRESS.JS & MONGODB API",
        caption: "RESTful Node.js (Express.js) backend managing conflict-aware reservation windows in MongoDB."
      }
    ],
    brief: {
      headline:
        "Fullstack vehicle rental and fleet management dashboard built with Express.js, MongoDB, and Next.js.",
      challenge: (
        <p>
          Managing vehicle availability, booking schedules, and customer records manually leads to double-bookings and slow checkout experiences.
        </p>
      ),
      solution: (
        <p>
          Created a RESTful Node.js (Express.js) backend with MongoDB and an interactive Next.js management dashboard for real-time fleet booking.
        </p>
      ),
      impact: (
        <p>
          Digitized the end-to-end car rental lifecycle from vehicle browsing and reservation to admin fleet monitoring.
        </p>
      ),
      specs: [
        { label: "Architecture", value: "REST API + SPA Dashboard" },
        { label: "Backend Core", value: "Node.js (Express.js) + MongoDB" },
        { label: "Frontend", value: "Next.js + TailwindCSS" },
        { label: "Deployment", value: "Vercel Live Preview" }
      ]
    },
    architecture: [
      {
        title: "Express.js REST API & MongoDB",
        detail: "Handled vehicle inventory, date-range availability checks, and booking state transitions via REST endpoints."
      },
      {
        title: "Next.js Fleet Dashboard",
        detail: "Built responsive customer booking views and administrative controls styled with TailwindCSS."
      }
    ],
  }
]

export function getProjectById(id: string): ProjectDetail | undefined {
  return TOP_PROJECTS.find((project) => project.id === id)
}

