"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BookOpen, Home, Menu, Moon, Sun, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Portal", icon: Home },
  { href: "/academico", label: "Academico", icon: BookOpen },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("portal-theme") as "dark" | "light" | null;
    const initialTheme = savedTheme ?? "dark";
    document.documentElement.dataset.theme = initialTheme;
    setTheme(initialTheme);
  }, []);

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("portal-theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-background/70 backdrop-blur-2xl">
      <div className="page-shell flex h-[72px] items-center justify-between py-3">
        <Link href="/" className="interactive-ring flex items-center gap-3 rounded-md">
          <Image
            src="/media/logos/logo-daes.png"
            alt="Logo DAES Lourdes"
            width={48}
            height={48}
            className="h-11 w-11 object-contain drop-shadow-[0_0_12px_rgba(0,255,157,0.25)]"
            priority
          />
          <div>
            <p className="font-mono text-sm font-bold text-foreground">DAES_LOURDES</p>
            <p className="font-mono text-[11px] text-muted">Student OS 2026</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="interactive-ring inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 font-mono text-xs text-muted transition hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
            className="interactive-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-muted transition hover:border-primary/50 hover:text-primary"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
            className="interactive-ring inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/5 text-muted transition hover:border-primary/50 hover:text-primary md:hidden"
          >
            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "border-t border-white/10 bg-background/95 px-4 py-4 backdrop-blur-2xl transition md:hidden",
          menuOpen ? "block" : "hidden",
        )}
      >
        <nav className="grid gap-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="interactive-ring flex items-center gap-3 rounded-md border border-white/10 px-4 py-3 text-sm text-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
