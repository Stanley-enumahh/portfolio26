// Edit everything on the page from here.

export const site = {
  name: "Stanlee",
  role: "Software developer",
  available: "Available for new projects",
  intro:
    "I wrote my first line of code in 2022, and it's been building and learning ever since. I build applications for the web and mobile, plus browser extensions. Send an email to hire me.",
  email: "enumah44@gmail.com",
  year: "2026",
  // Your live domain — used for SEO, share previews, and the sitemap
  url: "https://example.com",

  nav: [
    { label: "product", href: "#product" },
    { label: "projects", href: "#work" },
    { label: "experience", href: "#experience" },
    { label: "contact", href: "#contact" },
  ],

  links: [
    { label: "github", href: "https://github.com/Stanley-enumahh" },
    {
      label: "Twitter",
      href: "https://x.com/stanlee0nX/",
    },
  ],

  product: {
    name: "myDearest",
    tagline: "Handwritten letters, sent as a link.",
    description:
      "Write it once and myDearest turns it into a real handwritten letter, sealed in an envelope and delivered as a link that never expires. Made for birthdays, anniversaries, apologies, and the things people never say out loud.",
    role: "Founder",
    href: "https://www.usemydearest.xyz",
    cta: "write a letter",
    // Small facts under the description — add, remove, or reorder freely
    facts: [{ label: "pricing", value: "From ₦1,000 per letter" }],
  },

  // href: the project's website, opened in a new tab from the arrow.
  // Leave it as "#" or "" and the row shows without an arrow.
  projects: [
    {
      title: "UtilityBox",
      description: "Small tools for creatives who build cool things",
      href: "https://utility-box-zeta.vercel.app/",
    },
    {
      title: "De boothe",
      description: "An anonymous real-time chat and Q&A room for teams",
      href: "https://www.de-boothe.pro/",
    },
    {
      title: "Live Api Inspector",
      description:
        "Chrome extension - monitor activities over your network without the hassle of inspecting a tab",
      href: "https://chromewebstore.google.com/detail/live-api-inspector/jdncnpneigbmpdilmgooehjlojbhckdi",
    },
    {
      title: "Kartana",
      description:
        "Chrome extension - turn any web page into a shooting game, a stick man blasts enemies and the page's own elements to pieces.",
      href: "https://chromewebstore.google.com/detail/kartana/ikhapcfikimfcipadacoaobhmddaoegj",
    },
  ],

  experience: [
    {
      role: "Software developer and tutor",
      company: "ICE Innovation Hub",
      period: "2026 — now",
    },
    { role: "Frontend developer", company: "PrazeVent", period: "2025 — now" },
  ],
};
