import { company } from "@/content/company";
import { faq } from "@/content/faq";
import { site } from "@/content/site";

const schemaTypes = {
  classic: "AutoRepair",
  clinic: "Dentist",
  barber: "HairSalon",
  beauty: "BeautySalon",
  construction: "GeneralContractor",
} as const;

export default function StructuredData() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": schemaTypes[site.variant],
    "@id": `${company.website}/#business`,

    name: company.name,
    description: company.description,
    slogan: company.slogan,

    url: company.website,
    logo: `${company.website}${company.logo}`,
    image: `${company.website}${company.ogImage}`,

    telephone: company.phone,
    email: company.email,

    address: {
      "@type": "PostalAddress",
      streetAddress: company.address,
      addressLocality: company.city,
      addressCountry: "SK",
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: company.areaServed,
    },

    openingHours: company.openingHoursSchema,
    priceRange: company.priceRange,

    ...(company.socialLinks.length > 0
      ? {
          sameAs: company.socialLinks,
        }
      : {}),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${company.website}/#website`,

    name: company.name,
    description: site.seo.description,
    url: company.website,
    inLanguage: site.language,

    publisher: {
      "@id": `${company.website}/#business`,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${company.website}/#faq`,

    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />

      {faq.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </>
  );
}