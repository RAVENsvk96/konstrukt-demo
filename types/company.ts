export interface Company {
  name: string;
  slogan: string;

  city: string;
  address: string;
  areaServed: string;

  website: string;

  description: string;

  phone: string;
  email: string;

  openingHours: string;
  openingHoursSchema: string[];

  priceRange: string;

  mapUrl: string;

  logo: string;
  heroImage: string;
  ogImage: string;

  socialLinks: SocialLink[];
}

  interface SocialLink {
  platform: string;
  label: string;
  href: string;
}