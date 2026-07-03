import { Github, Instagram, Landmark } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-white/[0.035] py-10">
      <div className="page-shell flex flex-col gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <p className="font-mono text-sm text-foreground">© 2026 DAES_LOURDES_OS v3.0</p>
          <p className="mt-2 text-sm text-muted">
            System Status: <span className="font-mono text-primary">ONLINE</span> | Belo Horizonte Node
          </p>
        </div>
        <div className="flex justify-center gap-3">
          <a
            href="https://www.instagram.com/daeslourdes?igsh=MTdjcGtmaTlvOGdicg=="
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram do DAES Lourdes"
            className="interactive-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
          >
            <Instagram className="h-4 w-4" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="interactive-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.pucminas.br/icei"
            target="_blank"
            rel="noreferrer"
            aria-label="ICEI PUC Minas"
            className="interactive-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-muted transition hover:border-primary/40 hover:text-primary"
          >
            <Landmark className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
