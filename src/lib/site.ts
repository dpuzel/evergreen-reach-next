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
  { href: "/#story", label: "Story" },
  { href: "/#services", label: "What We Do" },
  { href: "/#process", label: "How It Works" },
  { href: "/plans", label: "Plans" },
  { href: "/notes", label: "Field Notes" },
  { href: "/porch", label: "Front Porch" },
] as const;

export const fieldNotes = {
  path: "/notes",
  title: "Field Notes",
  eyebrow: "From the caretaker bench",
  intro:
    "Practical writing about Google listings, websites that quietly rot, and getting found by the right people nearby. No funnels. Just notes from the work.",
  teaser:
    "We write down the useful stuff. A few short notes from the work, if you want to sit with them.",
} as const;

export const servicesIntro =
  "No bloated packages. No mystery retainers. Just steady online care, so a good local shop shows up honestly and stays that way.";

export const services = [
  {
    title: "Google Business Profile",
    tag: "Every plan",
    description:
      "Your Google listing is usually the first thing people nearby see. We keep it honest and current, not half-finished or forgotten.",
    items: [
      "We help you claim it if it isn't yet, then keep your hours, phone, and address right.",
      "Current photos, plus a post when something real happens.",
      "Leftover pins and wrong details we spot get cleaned up, or flagged to Google when they aren't yours to change.",
      "A short note each month on what we checked and changed.",
    ],
    icon: "map" as const,
  },
  {
    title: "Website Care",
    tag: "Standard Care and Premium Care",
    description:
      "Your website shouldn't be one more thing on your plate. We walk it every month and keep it telling the truth while you run the business.",
    items: [
      "Every month we check links, hours, phone, and anything that's stopped being true.",
      "We look at it on a phone, the way a lot of your customers will.",
      "Then we make one fix or small improvement you can see.",
      "Like a refreshed page, a new photo, an updated services list, or a clearer contact page.",
    ],
    icon: "desktop" as const,
  },
  {
    title: "Local eyes",
    tag: "Strongest on Premium Care",
    description:
      "Most of what goes wrong online happens quietly. A stranger edits your hours, a second listing pops up, an old address hangs around. We keep watch, so you hear it from us first.",
    items: [
      "On every plan, we keep an eye out for wrong hours, stray listings, and old addresses.",
      "On Premium Care, each month we tell you about one thing we caught before you did, and what we did about it.",
      "Once a quarter on Premium Care, we take a real look at what's working, as a half-hour call or a one-page sheet.",
    ],
    icon: "chart" as const,
  },
] as const;

export const steps = [
  {
    num: "01",
    title: "We walk your digital front porch",
    body: "Listing, hours, photos, leftover pins. What we see goes on a plain sheet.",
  },
  {
    num: "02",
    title: "You get that sheet",
    body: "No score out of a hundred. Just what we saw and one next move each.",
  },
  {
    num: "03",
    title: "We handle the work",
    body: "If you want us to keep tending, pick a plan. Every plan covers your Google listing. Standard Care and Premium Care add your website.",
  },
  {
    num: "04",
    title: "Simple check-ins",
    body: "A plain note each month on what we tended. Not a strategy deck. Email us anytime. On Premium Care, you can text us too.",
  },
] as const;

export const plansPath = "/plans";

export const plansHome = {
  heading: "Plans",
  intro:
    "Start with a free Front Porch walk. If you'd like us to keep things tended after that, there are three ways to do it.",
  more: "See what each month looks like",
} as const;

export const plansPage = {
  heading: "What each month looks like",
  intro:
    "Every plan starts with a free Front Porch walk. We take a slow look at how your shop shows up online and write down what a neighbor would notice. If you'd like us to keep it tended after that, here's what we do each month.",
  underCards:
    "Start with a free Front Porch walk. If you want us to keep tending after that, your $149 setup counts toward your first month.",
  addOnsHeading: "Add-ons",
  addOnsIntro: "One-time help, no plan needed.",
  addOnsUnder:
    "Other listings, like Apple Maps, Bing, or Yelp, out of date? Ask us. We'll sort them out with you, and tell you what's involved before we start.",
} as const;

export const plans = [
  {
    name: "Basic Care",
    slug: "basic-care",
    price: 99,
    blurb:
      "For a shop that already has a website and wants its Google card kept honest.",
    features: [
      "We keep your hours, phone, and address right on Google.",
      "We add new photos and a post when something real happens, whether you tell us or we spot it.",
      "Each month you get a short note, in plain words, on what we checked and what we changed.",
    ],
  },
  {
    name: "Standard Care",
    slug: "standard-care",
    price: 169,
    blurb: "For a shop whose website is starting to go stale.",
    features: [
      "Everything in Basic Care.",
      "Every month we walk your site: links, hours, phone, and anything that's stopped being true, plus how it looks on a phone.",
      "Then we make one fix or small improvement you can see, like a refreshed page, a new photo, an updated services list, or a clearer contact page.",
    ],
  },
  {
    name: "Premium Care",
    slug: "premium-care",
    price: 249,
    blurb: "For a shop that wants a person they can text.",
    features: [
      "Everything in Standard Care.",
      "Text our line anytime, and we'll reply the same business day.",
      "Once a quarter, we take a real look at what's working. Your pick: a half-hour call, or a one-page sheet you can read on a break. We'll send you a copy.",
      "Each month, we tell you about one thing we caught before you did, and what we did about it, like a stranger's edit that changed your hours on Google, a second listing for your shop that shouldn't be there, or a new review worth a reply.",
    ],
  },
] as const;

export const addOns = [
  {
    name: "First cleanup",
    priceFrom: 149,
    blurb: "One afternoon spent getting the basics right.",
    features: [
      "We fix your hours, phone, and address on Google, and help you claim your listing if it isn't yet.",
      "We clear up the obvious leftovers from your Front Porch walk.",
      "We take down wrong or dated photos you've posted, and flag the rest to Google.",
    ],
    after:
      "Bigger messes get quoted before we start. If you start a plan, the $149 counts toward your first month, so nobody pays twice.",
  },
  {
    name: "Photo tune-up",
    priceFrom: 79,
    blurb:
      "Send us the pictures you've got. We pick the good ones, clean them up, and put them where people actually look.",
    features: [
      "We go through what you send, keep the sharp ones, and set aside anything blurry or out of date.",
      "Light touch-ups: straightened, cropped, brightened, and sized right for Google and your site.",
      "Each one goes where it does some work: the outside so people can find your door, the inside, your crew, and the real work. On your site, they replace stale or stock shots.",
      "We take down old, duplicate, or wrong photos you've posted and flag the rest to Google. Each new one gets a short plain description so Google and screen readers can tell what's in it.",
    ],
    after:
      "Up to about 20 photos. If you have more, we'll quote it before we start. No good photos yet? We'll send a short list of what to snap on your phone. Send good pictures, we take care of the rest.",
  },
  {
    name: "Seasonal pass",
    priceFrom: 49,
    blurb:
      "For the stretches when your week changes, like holidays, fire season, or harvest.",
    features: [
      "We write one post about what's different, in plain words.",
      "We check that your hours on Google and your site match the season.",
    ],
    after:
      "It's for shops not on a plan, or for anyone who wants one more post than their plan covers. It's a one-time pass, not another subscription.",
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
    body: "We make sure what neighbors find online matches the shop they'll walk into.",
    icon: "arrow" as const,
  },
] as const;
