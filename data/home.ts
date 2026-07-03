import {
  BookOpen,
  GraduationCap,
  Landmark,
  Mail,
  Map,
  MonitorCheck,
  Network,
  type LucideIcon,
} from "lucide-react";

export type UsefulLink = {
  title: string;
  description: string;
  href: string;
  external?: boolean;
  icon: LucideIcon;
  tone: "green" | "cyan" | "pink" | "purple" | "amber" | "slate";
};

export const usefulLinks: UsefulLink[] = [
  {
    title: "Canvas LMS",
    description: "Salas, tarefas e avisos",
    href: "https://canvas.pucminas.br/",
    external: true,
    icon: MonitorCheck,
    tone: "pink",
  },
  {
    title: "SGA Aluno",
    description: "Notas, faltas e secretaria",
    href: "https://www.pucminas.br/sgaalunos",
    external: true,
    icon: GraduationCap,
    tone: "cyan",
  },
  {
    title: "Vida Academica",
    description: "Grade, docentes e regras",
    href: "/academico",
    icon: BookOpen,
    tone: "green",
  },
  {
    title: "E-mail PUC",
    description: "Outlook institucional",
    href: "https://outlook.office.com",
    external: true,
    icon: Mail,
    tone: "purple",
  },
  {
    title: "ICEI",
    description: "Instituto e comunicados",
    href: "https://www.pucminas.br/icei",
    external: true,
    icon: Landmark,
    tone: "amber",
  },
  {
    title: "Campus Lourdes",
    description: "Mapa e pontos-chave",
    href: "https://www.pucminas.br/unidade/praca-da-liberdade/Paginas/default.aspx",
    external: true,
    icon: Map,
    tone: "slate",
  },
  {
    title: "Rede PUCMinas",
    description: "Wi-Fi com senha pessoal",
    href: "#setup",
    icon: Network,
    tone: "cyan",
  },
];

export const missionItems = [
  "Entrar no Canvas e colocar foto de perfil",
  "Abrir o SGA e conferir dados academicos",
  "Seguir o Instagram @daeslourdes",
  "Entrar no grupo oficial da turma no WhatsApp",
];

export const searchRoutes: Record<string, string> = {
  canvas: "https://canvas.pucminas.br/",
  sga: "https://www.pucminas.br/sgaalunos",
  notas: "https://www.pucminas.br/sgaalunos",
  faltas: "https://www.pucminas.br/sgaalunos",
  email: "https://outlook.office.com",
  outlook: "https://outlook.office.com",
  grade: "/academico",
  materias: "/academico",
  algoritmos: "/academico",
  coordenacao: "/academico#coordenacao",
  wifi: "#setup",
  campus: "https://www.pucminas.br/unidade/praca-da-liberdade/Paginas/default.aspx",
};
