import { company } from "@/data/company";
import { faq } from "@/data/faq";

export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: company.name,
    description: company.description,
    url: company.website,
    logo: `${company.website}${company.logo}`,
    image: `${company.website}${company.ogImage}`,
    telephone: company.phone,
    email: company.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: company.city,
      addressCountry: "SK",
    },
    areaServed: company.areaServed,
    openingHours: company.openingHoursSchema,
    priceRange: company.priceRange,
    sameAs: company.socialLinks,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}