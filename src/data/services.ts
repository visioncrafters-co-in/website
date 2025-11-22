import {
  Code2,
  Smartphone,
  TrendingUp,
  Palette,
  Lightbulb,
  Database,
  Globe,
  Search,
} from "lucide-react";

import webDevImg from "@/assets/service-web-dev.jpg";
import mobileImg from "@/assets/service-mobile.jpg";
import marketingImg from "@/assets/service-marketing.jpg";
import portfolioImg from "@/assets/service-portfolio.jpg";
import guidanceImg from "@/assets/service-guidance.jpg";
import billingImg from "@/assets/service-billing.jpg";
import ecommerceImg from "@/assets/service-ecommerce.jpg";
import seoImg from "@/assets/service-seo.jpg";

export interface ServiceDefinition {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  features: string[];
  outcomes: string[];
  stats: { label: string; value: string }[];
  icon: typeof Code2;
  primaryImage: string;
  gallery: { src: string; caption: string }[];
  spotlights: { title: string; description: string; badge: string }[];
}

export const servicesCatalog: ServiceDefinition[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription: "High-performing websites engineered for brand storytelling.",
    description:
      "We craft immersive websites that blend modern aesthetics with technical excellence. From landing pages to enterprise ecosystems, our build process prioritizes accessibility, blazing-fast performance, and CMS workflows your team will enjoy using.",
    features: [
      "Custom UI systems & design systems",
      "Next.js / React / Astro expertise",
      "Headless CMS & API integrations",
      "Global SEO + performance tuning",
    ],
    outcomes: [
      "Launch-ready responsive experience",
      "Easy-to-manage content structure",
      "Analytics + automation baked in",
      "Security hardened & future-proof",
    ],
    stats: [
      { label: "Avg. Load Time", value: "< 2s" },
      { label: "Accessibility Score", value: "95+" },
      { label: "Integrations", value: "20+" },
    ],
    icon: Code2,
    primaryImage: webDevImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
        caption: "Component-driven layouts tailored to your brand",
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
        caption: "Performance dashboards & deployment automation",
      },
    ],
    spotlights: [
      {
        title: "Headless architecture blueprints",
        description: "We map CMS models, API orchestration, and caching layers so your site scales with ease.",
        badge: "Architecture",
      },
      {
        title: "Performance-first builds",
        description: "Core Web Vitals audits and automated testing suites keep every release fast and stable.",
        badge: "Speed",
      },
      {
        title: "Design system handoff",
        description: "Tokens, Figma kits, and Storybook libraries empower your team to iterate confidently.",
        badge: "Systems",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription: "Native-quality apps with delightful mobile-first journeys.",
    description:
      "Our mobile squad designs and ships cross-platform applications that feel lightning fast and intuitive. We obsess over gesture micro-interactions, offline-first data layers, and store compliance so your release is smooth across devices.",
    features: [
      "React Native & Flutter builds",
      "Offline sync + push notifications",
      "App Store & Play Store deployment",
      "CI/CD pipelines with automated QA",
    ],
    outcomes: [
      "Consistent UX on iOS and Android",
      "Secure authentication & payments",
      "Scalable API and cloud setup",
      "Insightful analytics baseline",
    ],
    stats: [
      { label: "Platforms", value: "iOS + Android" },
      { label: "Crash-Free Users", value: "99.8%" },
      { label: "Release Cadence", value: "Bi-weekly" },
    ],
    icon: Smartphone,
    primaryImage: mobileImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=900&q=80",
        caption: "Prototype-to-production mobile flows",
      },
      {
        src: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80",
        caption: "Gesture-rich UI kits for every screen size",
      },
    ],
    spotlights: [
      {
        title: "Unified codebase strategy",
        description: "We select the right stack (React Native, Flutter, or native) for your roadmap and team.",
        badge: "Strategy",
      },
      {
        title: "Device lab QA",
        description: "Automated suites plus manual sweeps on flagship devices guarantee silky touch feedback.",
        badge: "Quality",
      },
      {
        title: "Release ops",
        description: "Store listing assets, phased rollouts, and telemetry dashboards make launches predictable.",
        badge: "Launch",
      },
    ],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortDescription: "Full-funnel campaigns that convert traffic into revenue.",
    description:
      "From smart media buying to thumb-stopping creatives, we combine data intelligence with cultural insights. Our marketing playbooks cover social, search, automation, and conversion-rate optimization for measurable growth.",
    features: [
      "Performance media & automation",
      "Social media storytelling",
      "Email/SMS lifecycle journeys",
      "Conversion-rate optimization",
    ],
    outcomes: [
      "Always-on analytics cockpit",
      "Content calendars & asset kits",
      "Optimized landing experiences",
      "Consistent brand voice everywhere",
    ],
    stats: [
      { label: "Avg. ROAS", value: "4.2x" },
      { label: "Growth Partners", value: "70+" },
      { label: "Campaigns / Year", value: "120+" },
    ],
    icon: TrendingUp,
    primaryImage: marketingImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        caption: "Data-informed dashboards highlight every KPI",
      },
      {
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=900&q=80",
        caption: "Creative-first content studios for campaigns",
      },
    ],
    spotlights: [
      {
        title: "Audience intelligence board",
        description: "Persona matrices and sentiment monitors keep targeting human and timely.",
        badge: "Insights",
      },
      {
        title: "Content sprint rooms",
        description: "Editorial calendars, hooks, and asset kits engineered for scroll-stopping impact.",
        badge: "Content",
      },
      {
        title: "Revenue cockpit",
        description: "Multi-channel dashboards tie spend to leads, MQLs, and sales team outcomes.",
        badge: "ROAS",
      },
    ],
  },
  {
    slug: "portfolio-design",
    title: "Portfolio Design",
    shortDescription: "Immersive showcases for artists, agencies, and founders.",
    description:
      "We translate your story into experiential case studies with cinematic scrolling, micro-interactions, and crystal-clear messaging. Every portfolio ships with easily editable sections so you can keep winning new clients.",
    features: [
      "Narrative-first copywriting",
      "Interactive case study layouts",
      "Media-rich galleries & reels",
      "Content management training",
    ],
    outcomes: [
      "Memorable personal brand system",
      "Optimized lead capture flows",
      "Motion-backed storytelling",
      "Seamless update workflows",
    ],
    stats: [
      { label: "Avg. Session Time", value: "3m+" },
      { label: "Case Studies Crafted", value: "150+" },
      { label: "Design Systems", value: "40+" },
    ],
    icon: Palette,
    primaryImage: portfolioImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80",
        caption: "Editorial layouts that spotlight your wins",
      },
      {
        src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        caption: "Showreel-ready grids with subtle depth",
      },
    ],
    spotlights: [
      {
        title: "Hero storytelling labs",
        description: "Narrative workshops turn your milestones into immersive hero sequences.",
        badge: "Story",
      },
      {
        title: "Interactive case kits",
        description: "Timeline sliders, comparison reveals, and prototype embeds add tactile magic.",
        badge: "Interaction",
      },
      {
        title: "Self-serve editing",
        description: "Notion-style CMS guides let you publish new wins without touching code.",
        badge: "Control",
      },
    ],
  },
  {
    slug: "project-guidance",
    title: "Project Guidance",
    shortDescription: "Fractional CTO support for product discovery to launch.",
    description:
      "Our consultants plug into your roadmap, evaluate tech choices, draft delivery plans, and coach teams through execution. Expect white-glove documentation, sprint rituals, and clarity on budget, timelines, and success metrics.",
    features: [
      "Architecture reviews & audits",
      "Sprint planning + backlog grooming",
      "Vendor management & hiring support",
      "Security, QA, and launch playbooks",
    ],
    outcomes: [
      "Aligned roadmap & OKR tracking",
      "Stack recommendations & PoCs",
      "Smooth handovers to internal teams",
      "Risk mitigation & contingency plans",
    ],
    stats: [
      { label: "Projects Coached", value: "90+" },
      { label: "Avg. Time Saved", value: "6 weeks" },
      { label: "Team Workshops", value: "45+" },
    ],
    icon: Lightbulb,
    primaryImage: guidanceImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80",
        caption: "Strategic whiteboarding & prioritization sessions",
      },
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=900&q=80",
        caption: "Product audits that surface hidden blockers",
      },
    ],
    spotlights: [
      {
        title: "Product north-star canvas",
        description: "We align business KPIs with user outcomes and technical guardrails.",
        badge: "Vision",
      },
      {
        title: "Delivery playbooks",
        description: "Rituals, cadences, and escalation paths keep every squad in sync.",
        badge: "Ops",
      },
      {
        title: "Enablement loops",
        description: "Documentation, workshops, and shadowing turn guidance into team capability.",
        badge: "Coaching",
      },
    ],
  },
  {
    slug: "billing-software",
    title: "Billing Software",
    shortDescription: "Finance-grade invoicing and subscription engines.",
    description:
      "Automate revenue workflows with customizable billing platforms. We implement secure ledgers, GST workflows, analytics, and integrations with ERPs or CRMs so your finance team gains control without spreadsheets.",
    features: [
      "GST-ready invoicing & e-way bills",
      "Usage-based & subscription billing",
      "Multi-user roles & approvals",
      "Reports, dashboards & exports",
    ],
    outcomes: [
      "Error-free reconciliation",
      "Real-time revenue visibility",
      "Payment gateway unification",
      "Audit-ready data trails",
    ],
    stats: [
      { label: "Invoices / Day", value: "10k+" },
      { label: "Payment Gateways", value: "15+" },
      { label: "Automation Rules", value: "100+" },
    ],
    icon: Database,
    primaryImage: billingImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
        caption: "Clear financial dashboards and automations",
      },
      {
        src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
        caption: "Compliance-ready documentation",
      },
    ],
    spotlights: [
      {
        title: "Process digitization",
        description: "Workshops uncover your approval chains, taxes, and reporting rituals before we automate.",
        badge: "Discovery",
      },
      {
        title: "Secure ledger core",
        description: "Role-based access, audit trails, and encryption keep finance teams compliant.",
        badge: "Security",
      },
      {
        title: "Operations cockpit",
        description: "Custom dashboards surface receivables, burn, and risk without spreadsheets.",
        badge: "Analytics",
      },
    ],
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    shortDescription: "Conversion-optimized storefronts with headless commerce.",
    description:
      "We build omnichannel commerce systems covering storefront, fulfillment, loyalty, and marketing automation. Whether Shopify, Medusa, or custom stacks, our team guarantees secure checkouts and merchandising agility.",
    features: [
      "Headless storefront architecture",
      "Inventory + order orchestration",
      "Payment, logistics, POS bridges",
      "Personalized shopping experiences",
    ],
    outcomes: [
      "Higher AOV & subscriptions",
      "Unified inventory visibility",
      "Shoppable content experiences",
      "Automation from cart to delivery",
    ],
    stats: [
      { label: "Transactions / Min", value: "500+" },
      { label: "Store Launches", value: "60+" },
      { label: "Integrations", value: "30+" },
    ],
    icon: Globe,
    primaryImage: ecommerceImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80",
        caption: "Branded storefront creative stacks",
      },
      {
        src: "https://images.unsplash.com/photo-1522199587044-4031aef69c3b?auto=format&fit=crop&w=900&q=80",
        caption: "Ops workbenches for fulfillment teams",
      },
    ],
    spotlights: [
      {
        title: "Composable commerce setup",
        description: "We stitch storefronts, PIM, OMS, and loyalty via APIs you can reconfigure anytime.",
        badge: "Composable",
      },
      {
        title: "Merchandising science",
        description: "A/B tested bundles, cross-sells, and pricing ladders raise AOV and retention.",
        badge: "Merch",
      },
      {
        title: "Fulfillment choreography",
        description: "Live dashboards sync inventory, carriers, and support teams across channels.",
        badge: "Ops",
      },
    ],
  },
  {
    slug: "seo-services",
    title: "SEO Services",
    shortDescription: "Technical and content SEO that compounds organic reach.",
    description:
      "Our SEO pods audit your site, fix crawl issues, build topical authority, and partner with your writers for evergreen growth. Expect usable dashboards, content briefs, and playbooks for ongoing optimization.",
    features: [
      "Technical & Core Web Vitals fixes",
      "Keyword + competitor intelligence",
      "Content briefs & on-page SEO",
      "Authority & backlink programs",
    ],
    outcomes: [
      "Consistent ranking improvements",
      "Search intent-aligned content",
      "Automation for audits & checks",
      "Team enablement workshops",
    ],
    stats: [
      { label: "Avg. Traffic Lift", value: "180%" },
      { label: "Keywords Tracked", value: "4k+" },
      { label: "Audit Items", value: "120+" },
    ],
    icon: Search,
    primaryImage: seoImg,
    gallery: [
      {
        src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
        caption: "Keyword universe mapping & clustering",
      },
      {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
        caption: "Monitoring suites for rankings & vitals",
      },
    ],
    spotlights: [
      {
        title: "Technical uplift squad",
        description: "We dig into crawl budgets, schema, and Core Web Vitals with dev-friendly tickets.",
        badge: "Technical",
      },
      {
        title: "Topical authority engine",
        description: "Content maps, briefs, and internal linking frameworks build trust with search algorithms.",
        badge: "Authority",
      },
      {
        title: "Measurement rituals",
        description: "Rank trackers, KPI worksheets, and review cadences keep stakeholders in sync.",
        badge: "Reporting",
      },
    ],
  },
];

export const getServiceBySlug = (slug?: string | null) =>
  servicesCatalog.find((service) => service.slug === slug);


