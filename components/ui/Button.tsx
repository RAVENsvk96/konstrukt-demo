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
        rounded-xl
        whitespace-nowrap
        bg-primary
        px-7 py-3.5
        text-base font-semibold
        text-white
        transition-all duration-300 ease-out

        hover:-translate-y-0.5
        hover:bg-primary-hover
        hover:shadow-lg
        hover:shadow-primary/20

        active:translate-y-0
        active:scale-[0.98]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2

        disabled:pointer-events-none
        disabled:opacity-60

        ${className}
      `}
    >
      {children}
    </Link>
  );
}