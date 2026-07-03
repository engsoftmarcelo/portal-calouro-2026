"use client";

import { useState } from "react";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

const groups = [
  {
    label: "Turma Manha",
    href: "https://chat.whatsapp.com/JXdTfJakrp5JSbbadegPo2?mode=gi_t",
    icon: Sun,
  },
  {
    label: "Turma Noite",
    href: "https://chat.whatsapp.com/Cv3JvDIl1O05JNWKy044hP?mode=gi_t",
    icon: Moon,
  },
];

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
      <div
        className={cn(
          "glass-panel w-56 origin-bottom-right p-3 transition duration-300",
          open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0",
        )}
      >
        <p className="font-mono text-xs text-primary">WHATSAPP.GROUPS</p>
        <div className="mt-3 grid gap-2">
          {groups.map((group) => {
            const Icon = group.icon;
            return (
              <a
                key={group.href}
                href={group.href}
                target="_blank"
                rel="noreferrer"
                className="interactive-ring flex items-center gap-2 rounded-md border border-white/10 px-3 py-2 text-sm text-foreground transition hover:border-primary/50 hover:bg-primary/10"
              >
                <Icon className="h-4 w-4 text-primary" />
                {group.label}
              </a>
            );
          })}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label="Abrir grupos do WhatsApp"
        aria-expanded={open}
        className="interactive-ring flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_0_26px_rgba(37,211,102,0.45)] transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </button>
    </div>
  );
}
