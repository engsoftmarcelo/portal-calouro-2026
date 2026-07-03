import { cn } from "@/lib/utils";

const toneClasses = {
  primary: "border-primary/40 bg-primary/10 text-primary",
  cyan: "border-accent/40 bg-accent/10 text-accent",
  pink: "border-danger/40 bg-danger/10 text-danger",
  amber: "border-warning/40 bg-warning/10 text-warning",
  slate: "border-white/15 bg-white/5 text-muted",
};

type TechTagProps = {
  children: React.ReactNode;
  tone?: keyof typeof toneClasses;
  className?: string;
};

export function TechTag({ children, tone = "slate", className }: TechTagProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center rounded border px-2.5 py-1 font-mono text-xs",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
