import { AlertTriangle, Calculator } from "lucide-react";
import { evaluationRules } from "@/data/academic";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function EvaluationRules() {
  return (
    <section className="space-y-6">
      <SectionTitle
        eyebrow="RULES.EVALUATION"
        title="Regras do jogo"
        description="Os dois sistemas que mais pegam calouro: nota e frequencia."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {evaluationRules.map((rule) => {
          const isDanger = rule.tone === "danger";
          const Icon = isDanger ? AlertTriangle : Calculator;

          return (
            <GlassCard
              key={rule.title}
              className={isDanger ? "border-danger/40 p-5" : "border-primary/35 p-5"}
            >
              <div className="flex items-start gap-4">
                <div
                  className={
                    isDanger
                      ? "rounded-md border border-danger/30 bg-danger/10 p-3 text-danger"
                      : "rounded-md border border-primary/30 bg-primary/10 p-3 text-primary"
                  }
                >
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{rule.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{rule.summary}</p>
                </div>
              </div>
              <ul className="mt-5 grid gap-3 text-sm text-foreground">
                {rule.items.map((item) => (
                  <li key={item} className="rounded-md border border-white/10 bg-white/[0.035] px-3 py-2">
                    {item}
                  </li>
                ))}
              </ul>
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
}
