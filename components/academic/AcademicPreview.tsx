import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { subjects } from "@/data/academic";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SubjectDeck } from "@/components/academic/SubjectDeck";

export function AcademicPreview() {
  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="ACADEMICO.PREVIEW"
          title="As primeiras batalhas do semestre"
          description="Algoritmos, Web e Projeto Integrado sao o nucleo do primeiro periodo."
        />
        <Link
          href="/academico"
          className="interactive-ring inline-flex w-fit items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-3 font-mono text-sm text-foreground transition hover:border-primary/50 hover:text-primary"
        >
          Ver grade completa
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {subjects.slice(0, 3).map((subject) => (
          <SubjectDeck key={subject.slug} subject={subject} compact />
        ))}
      </div>
    </section>
  );
}
