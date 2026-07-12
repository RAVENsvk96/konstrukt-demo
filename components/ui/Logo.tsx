import Link from "next/link";
import { company } from "@/content/company";

type LogoProps = {
  className?: string;
};

export default function Logo({
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={company.name}
      className={`inline-flex flex-col leading-none transition-all duration-300 hover:opacity-90 ${className}`}
    >
      <span className="text-2xl font-semibold tracking-[0.14em] text-foreground sm:text-[1.75rem]">
        {company.name}
      </span>

      <span className="mt-2 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-primary">
        {company.slogan}
      </span>
    </Link>
  );
}