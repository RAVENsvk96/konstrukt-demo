type SectionHeadingProps = {
  badge: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  badge,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "text-center" : ""}>
      <p className="text-sm font-semibold uppercase tracking-[0.45em] text-primary">
        {badge}
      </p>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 leading-8 text-muted ${
            centered ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}