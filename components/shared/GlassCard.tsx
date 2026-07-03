import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  strong?: boolean;
};

export function GlassCard({ className, strong = false, ...props }: GlassCardProps) {
  return (
    <div
      className={cn(strong ? "glass-panel-strong" : "glass-panel", "relative overflow-hidden", className)}
      {...props}
    />
  );
}
