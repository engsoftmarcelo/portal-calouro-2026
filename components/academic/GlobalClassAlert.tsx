import { Globe2, Mail } from "lucide-react";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function GlobalClassAlert() {
  return (
    <section className="space-y-6">
      <SectionTitle
        eyebrow="GLOBAL.CLASSES"
        title="Uma optativa presencial em ingles"
        description="Uma chance boa de treinar idioma e ainda contar horas, se houver vaga no ajuste."
      />
      <GlassCard className="p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
            <Globe2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Brazil in the Globalized World</h3>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-muted">
              Em 2026/1, a disciplina sera ofertada presencialmente no campus Lourdes, quarta-feira,
              10h40. Vale acompanhar o SGA no periodo de ajustes.
            </p>
            <a
              href="mailto:engenhariadesoftware.lourdes@pucminas.br"
              className="interactive-ring mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 font-mono text-xs text-accent transition hover:border-accent/50 hover:bg-accent/10"
            >
              <Mail className="h-4 w-4" />
              engenhariadesoftware.lourdes@pucminas.br
            </a>
          </div>
        </div>
      </GlassCard>
    </section>
  );
}
