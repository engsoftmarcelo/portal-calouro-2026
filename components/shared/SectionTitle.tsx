type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <div>
      <p className="terminal-label">&gt; {eyebrow}</p>
      <h2 className="mt-3 max-w-full break-words text-2xl font-bold leading-tight text-foreground sm:text-3xl md:max-w-3xl md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-muted md:text-base">{description}</p>
      ) : null}
    </div>
  );
}
