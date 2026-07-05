import Image from "next/image";
import Link from "next/link";

import { company } from "@/content/company";

type LogoProps = {
  className?: string;
  href?: string;
  priority?: boolean;
};

export default function Logo({
  className,
  href = "/",
  priority = true,
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={company.name}
      className="inline-flex items-center"
    >
      <Image
        src={company.logo}
        alt={company.name}
        width={260}
        height={90}
        priority={priority}
        className={className ?? "h-12 w-auto"}
      />
    </Link>
  );
}