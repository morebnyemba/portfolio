import { clientSites, contact, products, services } from "./data";

export const siteUrl = "https://morebnyemba.slykertech.net";
export const siteName = "Moreblessing Nyemba";
export const siteTitle = "Moreblessing Nyemba — Full-Stack Engineer & AI Integrations";
export const siteDescription =
  "Full-stack engineer and founder of Slyker Tech Web Services, building production systems across FinTech, WhatsApp automation, and AI/LLM integrations. Open for project work.";

export const liveSystemCount = [...products, ...clientSites].filter((p) => p.url).length;

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteName,
  url: siteUrl,
  jobTitle: "Full-Stack Engineer",
  email: `mailto:${contact.email}`,
  telephone: contact.call.replace("tel:", ""),
  knowsAbout: ["Django", "Next.js", "React", "AI integrations", "LLM", "WhatsApp automation", "FinTech"],
  worksFor: { "@type": "Organization", name: "Slyker Tech Web Services", url: contact.agency },
  sameAs: ["https://github.com/morebnyemba", contact.agency],
  makesOffer: services.map((s) => ({
    "@type": "Offer",
    name: s.name,
    description: s.description,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      price: s.price.replace("$", ""),
      priceCurrency: "USD",
      unitText: "HOUR",
    },
  })),
};
