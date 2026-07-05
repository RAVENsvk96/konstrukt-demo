import { site } from "@/content/site";

import ClassicHero from "./classic/Hero";
import ClinicHero from "./clinic/Hero";
import BarberHero from "./barber/Hero";

import ClassicServices from "./classic/Services";
import ClinicServices from "./clinic/Services";
import BarberServices from "./barber/Services";

import ClassicWhyUs from "./classic/WhyUs";
import ClinicWhyUs from "./clinic/WhyUs";
import BarberWhyUs from "./barber/WhyUs";

import ReviewsClassic from "@/components/sections/Reviews";
import ReviewsBarber from "./barber/Reviews";

import ContactClassic from "@/components/sections/Contact";
import ContactBarber from "./barber/Contact";

const heroes = {
  classic: ClassicHero,
  clinic: ClinicHero,
  barber: BarberHero,
};

const services = {
  classic: ClassicServices,
  clinic: ClinicServices,
  barber: BarberServices,
};

const whyUs = {
  classic: ClassicWhyUs,
  clinic: ClinicWhyUs,
  barber: BarberWhyUs,
};

const reviews = {
  classic: ReviewsClassic,
  clinic: ReviewsClassic,
  barber: ReviewsBarber,
};

const contacts = {
  classic: ContactClassic,
  clinic: ContactClassic,
  barber: ContactBarber,
};

export const Hero = heroes[site.variant];
export const Services = services[site.variant];
export const WhyUs = whyUs[site.variant];
export const Reviews = reviews[site.variant];
export const Contact = contacts[site.variant];