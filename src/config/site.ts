import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Mechatronic Bot Technologies GmbH",
  // alias: "MBT GmbH",
  description:
    // "Helping Mankind and Nature Through Automation",
    "Wir helfen Mensch und Natur durch Automatisierung",
  url: "https://mbt-systems.de/",
  lang: "de",
  locale: "de_DE",
  author: "MBT GmbH",
  twitter: "@Devgelo",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com",
    facebook: "https://facebook.com/itsnoira/",
    linkedin: "https://linkedin.com/in/mashnunul-huq-javed-53715a110",
    github: "https://github.com/devgelo-labs/astro-starter-pro",
  },
  navLinks: [
    { key: "home", href: "/" },
    { key: "about", href: "/about" },
    { key: "services", href: "/services", 
      children: [
      { key: "robotics", href: "/services/robotics" },
      { key: "mining", href: "/services/mining" }
    ]},
    { key: "blog", href: "/blog" },
    { key: "contact", href: "/contact" },
  ],
  footerLinks: [
    { key: "footer_LN", href: "/legal" },
    { key: "footer_GTC", href: "/gtc" },
    { key: "footer_P", href: "/privacy" },
  ],
};
