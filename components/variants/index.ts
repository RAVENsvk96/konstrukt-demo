import { site } from "@/content/site";

import ClassicHero from "./classic/Hero";
import ClinicHero from "./clinic/Hero";

import ClassicServices from "./classic/Services";
import ClinicServices from "./clinic/Services";

import ClassicWhyUs from "./classic/WhyUs";
import ClinicWhyUs from "./clinic/WhyUs";

export const Hero =
  site.variant === "clinic" ? ClinicHero : ClassicHero;

export const Services =
  site.variant === "clinic" ? ClinicServices : ClassicServices;

export const WhyUs =
  site.variant === "clinic" ? ClinicWhyUs : ClassicWhyUs;