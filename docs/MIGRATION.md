# Portal do Calouro 2026

Refatoracao premium do portal estatico para **Next.js App Router + Tailwind CSS + Framer Motion**.

## Estrutura

```txt
app/
  academico/page.tsx
  globals.css
  layout.tsx
  page.tsx
components/
  academic/
    AcademicPreview.tsx
    CoordinationCards.tsx
    EvaluationRules.tsx
    GlobalClassAlert.tsx
    SubjectDeck.tsx
    SubjectGrid.tsx
  home/
    CommandPalette.tsx
    HeroSection.tsx
    UsefulLinks.tsx
    WelcomeCard.tsx
  layout/
    SiteFooter.tsx
    SiteHeader.tsx
  shared/
    FloatingWhatsApp.tsx
    GlassCard.tsx
    SectionTitle.tsx
    TechTag.tsx
data/
  academic.ts
  home.ts
public/
  media/logos/
    logo_animacao.mp4
    logo-daes.png
    mascote.png
    mascote-byte.png
```

## Rodar localmente

```bash
npm install
npm run dev
```

## Midia e performance

- O video `logo_animacao.mp4` fica em `public/media/logos` e e carregado com `preload="metadata"`, `muted`, `playsInline` e `poster`.
- O mascote e o logo usam `next/image` com `width`, `height`, `sizes` e `priority` apenas nos elementos acima da dobra.
- As fontes foram migradas para `next/font/google`, evitando CSS externo bloqueante.

## Design system

Os tokens do antigo `variables.css` viraram variaveis CSS consumidas pelo Tailwind em `tailwind.config.ts`.
O dark mode e o padrao principal, com glassmorphism, grid tecnico, acentos neon e tipografia Sans + Mono.
