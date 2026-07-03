"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Binary,
  Braces,
  BrainCircuit,
  Code2,
  Cpu,
  Lightbulb,
  UsersRound,
  type LucideIcon,
} from "lucide-react";
import type { Subject, SubjectIcon } from "@/data/academic";
import { TechTag } from "@/components/shared/TechTag";
import { cn } from "@/lib/utils";

const iconMap: Record<SubjectIcon, LucideIcon> = {
  python: Braces,
  web: Code2,
  team: UsersRound,
  agile: BrainCircuit,
  logic: Binary,
  chip: Cpu,
  philosophy: Lightbulb,
};

const priorityStyles = {
  critical: {
    border: "border-danger/45",
    icon: "text-danger",
    tag: "pink" as const,
  },
  project: {
    border: "border-primary/45",
    icon: "text-primary",
    tag: "primary" as const,
  },
  normal: {
    border: "border-white/10",
    icon: "text-accent",
    tag: "slate" as const,
  },
};

type SubjectDeckProps = {
  subject: Subject;
  compact?: boolean;
};

export function SubjectDeck({ subject, compact = false }: SubjectDeckProps) {
  const [flipped, setFlipped] = useState(false);
  const Icon = iconMap[subject.icon];
  const styles = priorityStyles[subject.priority];

  return (
    <div className={cn("[perspective:1400px]", compact ? "h-[21rem]" : "h-[22rem]")}>
      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        className="interactive-ring h-full w-full rounded-lg text-left"
        aria-pressed={flipped}
      >
        <motion.div
          className="relative h-full w-full rounded-lg"
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <div
            className={cn(
              "glass-panel absolute inset-0 flex flex-col justify-between p-5 [backface-visibility:hidden]",
              styles.border,
            )}
          >
            <div className="scanline" />
            <div className="relative">
              <div className={cn("mb-5 flex h-12 w-12 items-center justify-center rounded-md border border-white/10 bg-white/5", styles.icon)}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold leading-tight">{subject.title}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <TechTag tone={styles.tag}>{subject.tag}</TechTag>
                <TechTag>{subject.workload}</TechTag>
              </div>
              <p className="mt-4 text-sm leading-6 text-muted">{subject.description}</p>
            </div>
            <p className="relative font-mono text-xs text-muted">CLICK.FLIP</p>
          </div>

          <div className="glass-panel absolute inset-0 flex flex-col justify-between border-secondary/40 bg-black/70 p-5 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <div>
              <p className="terminal-label">&gt; DOCENTES</p>
              <h4 className="mt-3 text-xl font-bold">{subject.title}</h4>
            </div>

            <div className="grid gap-4 text-sm">
              <ProfessorShift label="Manha" names={subject.morning} tone="warning" />
              <ProfessorShift label="Noite" names={subject.night} tone="accent" />
            </div>

            {subject.tip ? (
              <p className="rounded-md border border-primary/25 bg-primary/10 px-3 py-2 text-xs leading-5 text-primary">
                {subject.tip}
              </p>
            ) : (
              <p className="font-mono text-xs text-muted">PLANO.DE.ENSINO / CANVAS</p>
            )}
          </div>
        </motion.div>
      </button>
    </div>
  );
}

function ProfessorShift({
  label,
  names,
  tone,
}: {
  label: string;
  names: string[];
  tone: "warning" | "accent";
}) {
  return (
    <div className="rounded-md border border-white/10 bg-white/[0.04] p-3">
      <p className={cn("font-mono text-xs", tone === "warning" ? "text-warning" : "text-accent")}>
        {label}
      </p>
      <p className="mt-2 leading-6 text-foreground">{names.join(" & ")}</p>
    </div>
  );
}
