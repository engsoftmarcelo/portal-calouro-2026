import { CoordinationCards } from "@/components/academic/CoordinationCards";
import { EvaluationRules } from "@/components/academic/EvaluationRules";
import { GlobalClassAlert } from "@/components/academic/GlobalClassAlert";
import { SubjectGrid } from "@/components/academic/SubjectGrid";
import { SectionTitle } from "@/components/shared/SectionTitle";

export const metadata = {
  title: "Vida Acadêmica | Portal do Calouro 2026",
};

export default function AcademicoPage() {
  return (
    <main className="page-shell pb-20 pt-28">
      <section className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <SectionTitle
          eyebrow="ACADEMICO.CONFIG"
          title="Grade, estratégia e coordenação"
          description="O mapa do primeiro período, com prioridades, professores, avaliação e pontos de atenção."
        />
        <div className="w-fit rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 font-mono text-xs text-primary">
          1º Periodo / Engenharia de Software
        </div>
      </section>

      <div className="space-y-14">
        <SubjectGrid />
        <GlobalClassAlert />
        <EvaluationRules />
        <CoordinationCards />
      </div>
    </main>
  );
}
