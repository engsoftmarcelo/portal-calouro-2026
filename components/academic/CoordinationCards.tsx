import { Linkedin, UserRoundCheck, Video } from "lucide-react";
import { coordinators } from "@/data/academic";
import { GlassCard } from "@/components/shared/GlassCard";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TechTag } from "@/components/shared/TechTag";

export function CoordinationCards() {
  return (
    <section id="coordenacao" className="space-y-6 scroll-mt-28">
      <SectionTitle
        eyebrow="COORDENACAO.CONTACT"
        title="Conheça a coordenação"
        description="Quando o assunto envolve grade, ajuste ou duvida academica, esse e o caminho certo."
      />

      <GlassCard className="p-5 md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-md border border-accent/30 bg-accent/10 text-accent">
            <Video className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Atendimento por videoconferencia</h3>
            <a
              href="mailto:engenhariadesoftware.lourdes@pucminas.br"
              className="mt-2 block break-all font-mono text-sm text-accent"
            >
              engenhariadesoftware.lourdes@pucminas.br
            </a>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        {coordinators.map((person) => (
          <GlassCard key={person.linkedin} className="p-5">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-primary/30 bg-primary/10 text-primary">
                <UserRoundCheck className="h-6 w-6" />
              </div>
              <div className="min-w-0">
                <h3 className="text-xl font-bold">{person.name}</h3>
                <TechTag tone={person.role === "Coordenadora" ? "primary" : "cyan"} className="mt-2">
                  {person.role}
                </TechTag>
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted">{person.description}</p>
            <a
              href={person.linkedin}
              target="_blank"
              rel="noreferrer"
              className="interactive-ring mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 font-mono text-sm text-foreground transition hover:border-primary/50 hover:text-primary"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
