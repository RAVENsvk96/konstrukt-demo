import Link from "next/link";
import type { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: `
    bg-primary
    text-primary-foreground
    hover:bg-primary-hover
    hover:shadow-lg
    hover:shadow-primary/20
  `,
  secondary: `
    border
    border-border
    bg-surface
    text-foreground
    hover:border-primary/50
    hover:text-primary
  `,
  ghost: `
    bg-transparent
    text-primary
    hover:bg-primary/10
    hover:text-primary-hover
  `,
};

export default function Button({
  href,
  children,
  className = "",
  variant = "primary",
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`
        inline-flex items-center justify-center
        rounded-button
        whitespace-nowrap
        px-7 py-3.5
        text-base font-semibold
        transition-all duration-300 ease-out

        hover:-translate-y-0.5

        active:translate-y-0
        active:scale-[0.98]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2

        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </Link>
  );
}