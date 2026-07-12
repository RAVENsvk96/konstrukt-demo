import { site } from "@/content/site";

import ClassicHero from "./classic/Hero";
import ClinicHero from "./clinic/Hero";
import BarberHero from "./barber/Hero";
import BeautyHero from "./beauty/Hero";

import ClassicServices from "./classic/Services";
import ClinicServices from "./clinic/Services";
import BarberServices from "./barber/Services";
import BeautyServices from "./beauty/Services";

import ClassicWhyUs from "./classic/WhyUs";
import ClinicWhyUs from "./clinic/WhyUs";
import BarberWhyUs from "./barber/WhyUs";
import BeautyWhyUs from "./beauty/WhyUs";

import ReviewsClassic from "@/components/sections/Reviews";
import ReviewsBarber from "./barber/Reviews";
import BeautyReviews from "./beauty/Reviews";

import ContactClassic from "@/components/sections/Contact";
import ContactBarber from "./barber/Contact";
import BeautyContact from "./beauty/Contact";

import GalleryClassic from "@/components/sections/Gallery";
import GalleryBeauty from "./beauty/Gallery";

const heroes = {
  classic: ClassicHero,
  clinic: ClinicHero,
  barber: BarberHero,
  beauty: BeautyHero,
};

const services = {
  classic: ClassicServices,
  clinic: ClinicServices,
  barber: BarberServices,
  beauty: BeautyServices,
};

const whyUs = {
  classic: ClassicWhyUs,
  clinic: ClinicWhyUs,
  barber: BarberWhyUs,
  beauty: BeautyWhyUs,
};

const reviews = {
  classic: ReviewsClassic,
  clinic: ReviewsClassic,
  barber: ReviewsBarber,
  beauty: BeautyReviews,
};

const contacts = {
  classic: ContactClassic,
  clinic: ContactClassic,
  barber: ContactBarber,
  beauty: BeautyContact,
};

const galleries = {
  classic: GalleryClassic,
  clinic: GalleryClassic,
  barber: GalleryClassic,
  beauty: GalleryBeauty,
};

export const Hero = heroes[site.variant];
export const Services = services[site.variant];
export const WhyUs = whyUs[site.variant];
export const Reviews = reviews[site.variant];
export const Gallery = galleries[site.variant];
export const Contact = contacts[site.variant];