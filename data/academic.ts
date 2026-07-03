export type SubjectIcon =
  | "python"
  | "web"
  | "team"
  | "agile"
  | "logic"
  | "chip"
  | "philosophy";

export type Subject = {
  slug: string;
  title: string;
  workload: string;
  tag: string;
  icon: SubjectIcon;
  priority: "critical" | "project" | "normal";
  description: string;
  morning: string[];
  night: string[];
  tip?: string;
};

export const subjects: Subject[] = [
  {
    slug: "intro-algoritmos",
    title: "Intro. a Algoritmos",
    workload: "144h",
    tag: "Materia critica",
    icon: "python",
    priority: "critical",
    description:
      "O pilar do curso: Python, logica, loops e listas. Se dedicar pouco aqui, trava o curso todo.",
    morning: ["Carlos Barreto", "Gabriel Fonseca"],
    night: ["Filipe Torio", "Luiz Henrique"],
    tip: "Pratique desde a primeira semana. Beecrowd ajuda muito.",
  },
  {
    slug: "interfaces-web",
    title: "Interfaces Web",
    workload: "54h",
    tag: "Front-end",
    icon: "web",
    priority: "normal",
    description:
      "HTML, CSS, JavaScript e Git. Aqui o site do grupo ganha vida e Flexbox vira ferramenta diaria.",
    morning: ["Diego Barros", "Rommel Carneiro"],
    night: ["Diego Barros", "Rommel Carneiro"],
  },
  {
    slug: "ti-aplicacoes-web",
    title: "TI: Aplicações Web",
    workload: "68h",
    tag: "Projeto pratico",
    icon: "team",
    priority: "project",
    description:
      "O momento de gloria: aplicar Algoritmos e Web para resolver um problema real em equipe.",
    morning: ["Cleiton", "Diego", "Rommel"],
    night: ["Cleiton", "Danilo", "Luiz Henrique"],
  },
  {
    slug: "fundamentos-es",
    title: "Fundamentos de E.S.",
    workload: "90h",
    tag: "Metodologia agil",
    icon: "agile",
    priority: "normal",
    description:
      "Scrum, Kanban e historias de usuario. Nao e programacao pesada, mas organiza o caos.",
    morning: ["Eveline Alonso Veloso"],
    night: ["Ramon Lacerda Marques"],
  },
  {
    slug: "computabilidade",
    title: "Computabilidade",
    workload: "72h",
    tag: "Logica matematica",
    icon: "logic",
    priority: "normal",
    description:
      "Logica proposicional, conjuntos e inducao. As listas de exercicios sao parte da sobrevivencia.",
    morning: ["Monica da Consolacao"],
    night: ["Monica da Consolacao"],
  },
  {
    slug: "intro-computacao",
    title: "Intro. à Computação",
    workload: "72h",
    tag: "Hardware & IA",
    icon: "chip",
    priority: "normal",
    description:
      "Historia, binario, hardware e IA. Uma base teorica essencial para entender o ecossistema.",
    morning: ["Soraia Lucia da Silva"],
    night: ["Soraia Lucia da Silva"],
  },
  {
    slug: "filosofia",
    title: "Filosofia",
    workload: "36h",
    tag: "Humanas",
    icon: "philosophy",
    priority: "normal",
    description:
      "Logica, pensamento critico e etica na modernidade. Expande o repertorio para alem do codigo.",
    morning: ["Rene Armand Dentz"],
    night: ["Jose Claudio Henriques"],
  },
];

export const evaluationRules = [
  {
    title: "Notas e prazos",
    tone: "primary" as const,
    summary: "A PUC Minas trabalha com 100 pontos por semestre.",
    items: [
      "Aprovacao com minimo de 60 pontos.",
      "Pedido de revisao em ate 2 dias uteis apos a nota.",
      "Reavaliacao substitui prova perdida conforme Plano de Ensino.",
    ],
  },
  {
    title: "Frequencia",
    tone: "danger" as const,
    summary: "Falta e nota reprovam de forma independente.",
    items: [
      "Minimo de 75% de presenca obrigatoria.",
      "Contestacao de faltas em ate 10 dias uteis no SGA.",
      "Atestados justificam provas, mas nao abonam faltas.",
    ],
  },
];

export const coordinators = [
  {
    name: "Prof.ª Soraia Silva",
    role: "Coordenadora",
    description: "Coordenadora de Engenharia de Software na PUC Minas Praça da Liberdade.",
    linkedin: "https://www.linkedin.com/in/soraia-silva-b73812207/",
  },
  {
    name: "Prof.ª Eveline Veloso",
    role: "Colegiado",
    description: "Membro do colegiado e professora de Fundamentos de Engenharia de Software.",
    linkedin: "https://www.linkedin.com/in/eveline-alonso-b7bb8264/",
  },
];
