const resources = require("./src/data/resources");
const url = process.env.SITE_URL || "https://monad-wireless.github.io/";
const baseUrl = "/TP2026-T7/";
const quotes = [
    'Build on "do not touch" and "it works on my machine"',
    'Redneck engineering at its finest',
    'Built after stealing the wheel chair from Marika Gombitova and drinking and drifting for 12 hours straight.'
];
module.exports = {
  title: "MONAD-SEC - Team 7",
  tagline: "Exploring presence through Wi-Fi signals.",
  favicon: "img/logo.svg",
  url,
  baseUrl,
  onBrokenLinks: "throw",
  onBrokenAnchors: "throw",
  i18n: { defaultLocale: "en", locales: ["en"] },
  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: require.resolve("./sidebars.js") },
        blog: false,
        theme: { customCss: require.resolve("./src/css/custom.css") },
      },
    ],
  ],
  themeConfig: {
    colorMode: { defaultMode: "dark", disableSwitch: true },
    navbar: {
      title: "MONAD-SEC",
      logo: { alt: "", src: "img/logo.svg" },
      items: [
        { to: "/", label: "Project", position: "right" },
        { to: "/#team", label: "Our team", position: "right" },
        { to: "#", label: "Methodology", position: "right" },
        { to: "#", label: "Meetings", position: "right" },
        {
          to: "/docs/intro",
          label: "Documentation ↗",
          position: "right",
          className: "nav-docs",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright 2026 Team 07<br>${quotes[Math.floor(Math.random() * quotes.length)]}`,
    },
  },
  customFields: { resources },
};
