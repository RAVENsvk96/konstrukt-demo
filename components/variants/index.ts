import { site } from "@/content/site";

import ClassicHero from "./classic/Hero";
import ClinicHero from "./clinic/Hero";
import BarberHero from "./barber/Hero";
import BeautyHero from "./beauty/Hero";
import ConstructionHero from "./construction/Hero";

import ClassicServices from "./classic/Services";
import ClinicServices from "./clinic/Services";
import BarberServices from "./barber/Services";
import BeautyServices from "./beauty/Services";
import ConstructionServices from "./construction/Services";

import ConstructionProcess from "./construction/Process";

import ClassicWhyUs from "./classic/WhyUs";
import ClinicWhyUs from "./clinic/WhyUs";
import BarberWhyUs from "./barber/WhyUs";
import BeautyWhyUs from "./beauty/WhyUs";
import ConstructionWhyUs from "./construction/WhyUs";

import ReviewsClassic from "@/components/sections/Reviews";
import ReviewsBarber from "./barber/Reviews";
import BeautyReviews from "./beauty/Reviews";
import ConstructionReviews from "./construction/Reviews";

import ContactClassic from "@/components/sections/Contact";
import ContactBarber from "./barber/Contact";
import BeautyContact from "./beauty/Contact";
import ConstructionContact from "./construction/Contact";

import GalleryClassic from "@/components/sections/Gallery";
import GalleryBeauty from "./beauty/Gallery";
import ConstructionGallery from "./construction/Gallery";

const heroes = {
  classic: ClassicHero,
  clinic: ClinicHero,
  barber: BarberHero,
  beauty: BeautyHero,
  construction: ConstructionHero,
};

const services = {
  classic: ClassicServices,
  clinic: ClinicServices,
  barber: BarberServices,
  beauty: BeautyServices,
  construction: ConstructionServices,
};

const processes = {
  classic: null,
  clinic: null,
  barber: null,
  beauty: null,
  construction: ConstructionProcess,
};

const whyUs = {
  classic: ClassicWhyUs,
  clinic: ClinicWhyUs,
  barber: BarberWhyUs,
  beauty: BeautyWhyUs,
  construction: ConstructionWhyUs,
};

const reviews = {
  classic: ReviewsClassic,
  clinic: ReviewsClassic,
  barber: ReviewsBarber,
  beauty: BeautyReviews,
  construction: ConstructionReviews,
};

const contacts = {
  classic: ContactClassic,
  clinic: ContactClassic,
  barber: ContactBarber,
  beauty: BeautyContact,
  construction: ConstructionContact,
};

const galleries = {
  classic: GalleryClassic,
  clinic: GalleryClassic,
  barber: GalleryClassic,
  beauty: GalleryBeauty,
  construction: ConstructionGallery,
};

export const Hero = heroes[site.variant];
export const Services = services[site.variant];
export const Process = processes[site.variant];
export const WhyUs = whyUs[site.variant];
export const Reviews = reviews[site.variant];
export const Gallery = galleries[site.variant];
export const Contact = contacts[site.variant];