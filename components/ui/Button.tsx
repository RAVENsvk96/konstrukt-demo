import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Button({
  href,
  children,
  className = "",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap
        rounded-xl
        bg-primary
        px-6 py-3
        font-semibold
        text-white
        transition-all duration-300
        hover:-translate-y-0.5
        hover:bg-primary-hover
        hover:shadow-lg
        hover:shadow-primary/30
        active:scale-[0.98]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2
        focus-visible:ring-offset-zinc-950
        ${className}
      `}
    >
      {children}
    </Link>
  );
}