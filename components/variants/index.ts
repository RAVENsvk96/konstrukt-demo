import { site } from "@/content/site";

import ClassicHero from "./classic/Hero";
import ClinicHero from "./clinic/Hero";

export const Hero = site.variant === "clinic" ? ClinicHero : ClassicHero;