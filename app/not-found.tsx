import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center pt-24">
      <section className="glass-panel max-w-xl p-8 text-center">
        <p className="terminal-label">ROUTE.NOT_FOUND</p>
        <h1 className="mt-3 text-3xl font-bold">Esta rota ainda nao foi implantada.</h1>
        <p className="mt-3 text-sm text-muted">
          O portal principal e a area academica ja estao prontos para uso.
        </p>
        <Link
          href="/"
          className="interactive-ring mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-3 font-mono text-sm font-bold text-black"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar ao portal
        </Link>
      </section>
    </main>
  );
}
