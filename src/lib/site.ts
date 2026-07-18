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
      "When someone searches for what you do nearby, your Google listing is usually the first thing they see. We keep it sharp, honest, and working for you, not half-finished or forgotten.",
    items: [
      "Get your listing set up right and kept accurate",
      "Fresh posts and photos that help you show up",
      "We watch reviews and help you respond thoughtfully",
      "Simple check-ins on how you're showing up locally",
    ],
    icon: "map" as const,
  },
  {
    title: "Website Care",
    description:
      "Your website shouldn't be one more thing on your plate. We quietly keep it healthy, updated, and ready for customers, while you run the business.",
    items: [
      "Keep things secure, loading fast, and up to date",
      "Small text or design tweaks when you need them",
      "Backups and a quick fix if something breaks",
      "A plain-English check-in on site health every quarter",
    ],
    icon: "desktop" as const,
  },
  {
    title: "Local Lead Gen",
    description:
      "Getting found is nice. Getting chosen by the right people nearby is the goal. We help more of the right locals find you, and actually reach out.",
    items: [
      "Help more local customers find you online",
      "Simple ideas for content that brings the right people",
      "Keep an eye on what similar businesses are doing",
      "Adjust based on what's actually working in your area",
    ],
    icon: "chart" as const,
  },
] as const;

export const steps = [
  {
    num: "01",
    title: "Discovery chat",
    body: "A relaxed conversation, text, email, or call. We talk about your business, what's frustrating online, and what success looks like for you.",
  },
  {
    num: "02",
    title: "Audit & roadmap",
    body: "We look at your Google presence, website, and local visibility. Then we build a clear, no-jargon plan tailored to your business.",
  },
  {
    num: "03",
    title: "We handle the work",
    body: "This is the monthly care part. Posts, updates, maintenance, optimizations, month after month, so you don't have to.",
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
    blurb: "The right balance. Most businesses love this one.",
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
    text: "I've talked to a couple agencies. Same pitch every time: pushy, full of buzzwords, and I leave more confused than when I started. This felt different. Like they actually get what it's like to run a small shop.",
  },
  {
    text: "I don't need the moon. I need someone who shows up, tells me the truth, and handles the online stuff I keep putting off. That's all I'm looking for.",
  },
  {
    text: "No long contract and I can cancel anytime? Honestly that alone made it easier to just send the message and see if we're a fit.",
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
