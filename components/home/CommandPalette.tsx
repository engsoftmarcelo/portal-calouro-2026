"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Terminal } from "lucide-react";
import { searchRoutes } from "@/data/home";
import { cn } from "@/lib/utils";

export function CommandPalette() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = query
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    const match = Object.entries(searchRoutes).find(([keyword]) => normalized.includes(keyword));

    if (!match) {
      setFailed(true);
      window.setTimeout(() => setFailed(false), 520);
      return;
    }

    const href = match[1];
    if (href.startsWith("http")) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(href);
  }

  return (
    <form onSubmit={submit} className="-mt-10">
      <label
        className={cn(
          "glass-panel-strong interactive-ring mx-auto flex max-w-3xl items-center gap-3 px-4 py-3 transition",
          failed ? "border-danger/70" : "focus-within:border-primary/60",
        )}
      >
        <Terminal className="h-5 w-5 text-primary" />
        <input
          ref={inputRef}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Buscar por sga, canvas, grade, wifi..."
          className="w-full bg-transparent font-mono text-sm text-foreground outline-none placeholder:text-muted/60"
          autoComplete="off"
        />
        <button
          type="submit"
          aria-label="Buscar"
          className="interactive-ring inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary text-black transition hover:bg-white"
        >
          <Search className="h-4 w-4" />
        </button>
      </label>
    </form>
  );
}
