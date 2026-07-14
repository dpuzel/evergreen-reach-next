/** Site-wide content & contact config — edit here first */

export const site = {
  name: "Evergreen Reach",
  tagline: "For the businesses that build communities.",
  url: "https://www.evergreen-reach.com",
  email: "hello@evergreen-reach.com",
  phone: "(208) 269-5369",
  phoneHref: "tel:2082695369",
  hours: "Mon–Fri, 8am–5pm Pacific",
  formspree: "https://formspree.io/f/mrevjdrq",
  gaId: "G-3DYZH734MD",
} as const;

export const navLinks = [
  { href: "#story", label: "Story" },
  { href: "#services", label: "What We Do" },
  { href: "#process", label: "How It Works" },
  { href: "#plans", label: "Plans" },
] as const;

export const services = [
  {
    title: "Google Business Profile",
    description:
      "Your Google listing is often the first impression people get. We make sure it's accurate, active, and working for you — not sitting half-finished.",
    items: [
      "Profile optimization & verification",
      "Posts, photos & updates that get seen",
      "Review monitoring & responses",
      "Weekly insights on local visibility",
    ],
    icon: "map" as const,
  },
  {
    title: "Website Care",
    description:
      "We handle the monthly upkeep so your site stays fast, secure, and quietly working in the background — while you run the business.",
    items: [
      "Security updates, speed & plugin care",
      "Small content or design tweaks",
      "Backup monitoring & quick fixes",
      "Quarterly website health reports",
    ],
    icon: "desktop" as const,
  },
  {
    title: "Local Lead Gen",
    description:
      "Being found is one thing. Being chosen is everything. We help turn your online presence into real customers nearby.",
    items: [
      "Local SEO & visibility boosts",
      "Content that attracts the right people",
      "Competitor-aware adjustments",
      "Optimization from real local search trends",
    ],
    icon: "chart" as const,
  },
] as const;

export const steps = [
  {
    num: "01",
    title: "Discovery chat",
    body: "A relaxed conversation — text, email, or call. We talk about your business, what's frustrating online, and what success looks like for you.",
  },
  {
    num: "02",
    title: "Audit & roadmap",
    body: "We look at your Google presence, website, and local visibility. Then we build a clear, no-jargon plan tailored to your business.",
  },
  {
    num: "03",
    title: "We handle the work",
    body: "This is the monthly care part. Posts, updates, maintenance, optimizations — month after month, so you don't have to.",
  },
  {
    num: "04",
    title: "Monthly reports",
    body: "A simple report on what we worked on and how things are progressing. Call if you want, messages if you prefer.",
  },
] as const;

export const plans = [
  {
    name: "Basic Care",
    price: 99,
    blurb: "A solid start with reliable monthly care.",
    features: [
      "Google Business Profile optimization & management",
      "Basic website health checks & updates",
      "Monthly progress report",
      "Email support",
    ],
    cta: "Start with Basic",
    popular: false,
  },
  {
    name: "Standard Care",
    price: 169,
    blurb: "The right balance — most businesses love this one.",
    features: [
      "Everything in Basic",
      "Full GBP management + content",
      "Regular website maintenance & improvements",
      "Local lead generation support",
      "Priority email + chat support",
    ],
    cta: "Choose Standard",
    popular: true,
  },
  {
    name: "Premium Care",
    price: 249,
    blurb: "Full support for businesses ready to shine locally.",
    features: [
      "Everything in Standard",
      "Full website care + proactive improvements",
      "Quarterly strategy calls (30 min)",
      "Advanced lead generation focus",
      "Direct phone/text access",
    ],
    cta: "Go Premium",
    popular: false,
  },
] as const;

export const quotes = [
  {
    text: "I've talked to a few agencies before and they all sounded the same — pushy and full of jargon. This seems different. Like they actually get what it's like running a small business.",
  },
  {
    text: "I don't need someone to promise me the moon. I just need someone who's going to show up, be honest, and handle the stuff I don't have time for. That's what I'm looking for.",
  },
  {
    text: "The fact that there's no long contract and I can cancel anytime? That alone made me feel way more comfortable reaching out.",
  },
] as const;

export const values = [
  {
    title: "Rooted in honesty",
    body: "We tell you exactly what's happening and what's possible. No fluff. Ever.",
    icon: "check" as const,
  },
  {
    title: "Grown together",
    body: "Your success is our success. We celebrate your wins like they're our own.",
    icon: "people" as const,
  },
  {
    title: "Reaching further",
    body: "We help your business become the obvious choice in your community.",
    icon: "arrow" as const,
  },
] as const;
