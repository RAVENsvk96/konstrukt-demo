import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap rounded-xl
        bg-[#A7865A] px-6 py-3
        font-semibold text-white
        transition-all duration-300 ease-out
        hover:-translate-y-0.5 hover:bg-[#8D6E47] hover:shadow-xl hover:shadow-[#A7865A]/20
        active:translate-y-0 active:scale-[0.98]
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A7865A] focus-visible:ring-offset-2
        ${className}
      `}
    >
      {children}
    </Link>
  );
}