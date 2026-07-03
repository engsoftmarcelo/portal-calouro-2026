"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Circle, Cpu, Wifi } from "lucide-react";
import { missionItems } from "@/data/home";
import { GlassCard } from "@/components/shared/GlassCard";

const storageKey = "portal-calouro-2026-missions";

export function WelcomeCard() {
  const [completed, setCompleted] = useState<number[]>([]);

  useEffect(() => {
    const saved = window.localStorage.getItem(storageKey);
    if (saved) {
      setCompleted(JSON.parse(saved) as number[]);
    }
  }, []);

  const progress = useMemo(
    () => Math.round((completed.length / missionItems.length) * 100),
    [completed.length],
  );

  function toggle(index: number) {
    setCompleted((current) => {
      const next = current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index];
      window.localStorage.setItem(storageKey, JSON.stringify(next));
      return next;
    });
  }

  return (
    <GlassCard strong className="p-5 md:p-6">
      <div className="scanline" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="terminal-label">&gt; USER.ONBOARDING</p>
            <h2 className="mt-3 text-2xl font-bold">Setup do calouro</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              Quatro passos para chegar na primeira semana com o ambiente pronto.
            </p>
          </div>
          <div className="rounded-md border border-primary/30 bg-primary/10 p-3 text-primary">
            <Cpu className="h-6 w-6" />
          </div>
        </div>

        <div className="mt-6">
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-muted">PROGRESS</span>
            <span className="text-primary">{progress}%</span>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded bg-white/10">
            <motion.div
              className="h-full rounded bg-gradient-to-r from-primary to-accent shadow-glow"
              initial={false}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        <div className="mt-6 grid gap-2">
          {missionItems.map((mission, index) => {
            const active = completed.includes(index);
            const Icon = active ? CheckCircle2 : Circle;

            return (
              <button
                key={mission}
                type="button"
                onClick={() => toggle(index)}
                className="interactive-ring flex min-h-12 items-center gap-3 rounded-md border border-white/10 px-3 py-2 text-left text-sm transition hover:border-primary/40 hover:bg-primary/10"
              >
                <Icon className={active ? "h-5 w-5 text-primary" : "h-5 w-5 text-muted"} />
                <span className={active ? "text-muted line-through" : "text-foreground"}>{mission}</span>
              </button>
            );
          })}
        </div>

        <div className="mt-5 flex items-center gap-2 rounded-md border border-accent/25 bg-accent/10 px-3 py-2 font-mono text-xs text-accent">
          <Wifi className="h-4 w-4" />
          Rede PUCMinas usa a senha pessoal do Canvas.
        </div>
      </div>
    </GlassCard>
  );
}
