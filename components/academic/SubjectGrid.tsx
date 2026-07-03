import { subjects } from "@/data/academic";
import { SubjectDeck } from "@/components/academic/SubjectDeck";
import { SectionTitle } from "@/components/shared/SectionTitle";

export function SubjectGrid() {
  return (
    <section className="space-y-6">
      <SectionTitle
        eyebrow="SUBJECTS.DECK"
        title="Disciplinas do 1º periodo"
        description="Toque ou clique em um card para ver docentes por turno e dicas de sobrevivencia."
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {subjects.map((subject) => (
          <SubjectDeck key={subject.slug} subject={subject} />
        ))}
      </div>
    </section>
  );
}
