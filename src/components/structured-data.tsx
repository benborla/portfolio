import { DATA } from "@/data/resume";

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    description: DATA.description,
    jobTitle: "Fullstack Engineer",
    worksFor: {
      "@type": "Organization",
      name: DATA.work[0]?.company || "Freelancer",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: DATA.location,
      addressCountry: "Philippines",
    },
    alumniOf: DATA.education.length > 0 ? DATA.education.map((edu: any) => ({
      "@type": "Organization",
      name: edu.school,
    })) : undefined,
    knowsAbout: DATA.skills,
    sameAs: [
      DATA.contact.social.GitHub.url,
      DATA.contact.social.LinkedIn.url,
      DATA.contact.social.X.url,
    ],
    email: DATA.contact.email[0],
    telephone: DATA.contact.tel,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}