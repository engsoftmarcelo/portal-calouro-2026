import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { usefulLinks, type UsefulLink } from "@/data/home";
import { GlassCard } from "@/components/shared/GlassCard";
import { cn } from "@/lib/utils";

const toneClasses: Record<UsefulLink["tone"], string> = {
  green: "text-primary border-primary/30 bg-primary/10",
  cyan: "text-accent border-accent/30 bg-accent/10",
  pink: "text-danger border-danger/30 bg-danger/10",
  purple: "text-secondary border-secondary/30 bg-secondary/10",
  amber: "text-warning border-warning/30 bg-warning/10",
  slate: "text-muted border-white/15 bg-white/5",
};

export function UsefulLinks() {
  return (
    <GlassCard className="p-5 md:p-6">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="terminal-label">&gt; QUICK.ACCESS</p>
          <h2 className="mt-3 text-2xl font-bold">Links úteis</h2>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {usefulLinks.map((link) => (
          <LinkCard key={link.title} link={link} />
        ))}
      </div>
    </GlassCard>
  );
}

function LinkCard({ link }: { link: UsefulLink }) {
  const Icon = link.icon;
  const content = (
    <>
      <span className={cn("flex h-10 w-10 items-center justify-center rounded-md border", toneClasses[link.tone])}>
        <Icon className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-foreground">{link.title}</span>
        <span className="mt-1 block text-xs text-muted">{link.description}</span>
      </span>
      {link.external ? <ExternalLink className="h-4 w-4 text-muted" /> : null}
    </>
  );

  const className =
    "interactive-ring flex min-h-20 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.035] p-3 transition hover:border-primary/40 hover:bg-white/[0.07]";

  if (link.external) {
    return (
      <a href={link.href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={link.href} className={className}>
      {content}
    </Link>
  );
}
