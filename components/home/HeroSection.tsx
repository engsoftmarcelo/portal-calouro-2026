"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, MotionConfig, type Variants } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles, Terminal } from "lucide-react";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.18,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export function HeroSection() {
  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate min-h-screen overflow-hidden pt-24">
        <div className="absolute inset-0 -z-30 bg-circuit-grid bg-[size:42px_42px] opacity-45" />
        <div className="absolute inset-0 -z-20 bg-tech-sheen" />

        {/* Video is served from /public with metadata preload and a poster, keeping first paint light. */}
        <video
          className="hero-video-mask absolute right-[-12%] top-14 -z-10 h-[58vh] w-[78vw] max-w-5xl object-contain opacity-[0.11] mix-blend-screen md:right-[-8%] md:top-6 md:h-[72vh] md:opacity-[0.24]"
          src="/media/logos/logo_animacao.mp4"
          poster="/media/logos/logo-daes.png"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />

        <div className="page-shell grid min-h-[calc(100vh-6rem)] items-center gap-10 pb-16 lg:grid-cols-[1.02fr_0.98fr]">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl">
            <motion.div
              variants={item}
              className="mb-5 inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2 font-mono text-xs text-primary shadow-glow"
            >
              <Sparkles className="h-4 w-4" />
              BOOT.SEQUENCE / CALOURO_2026
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl font-extrabold leading-[1.02] text-foreground md:text-6xl xl:text-7xl"
            >
              Bem-vindo ao seu primeiro deploy na Engenharia de Software.
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
              Um portal de entrada para dominar Canvas, SGA, grade, grupos, prazos e a vida no campus
              sem perder tempo procurando link espalhado.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#setup"
                className="interactive-ring inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 font-mono text-sm font-bold text-black shadow-glow transition hover:bg-white"
              >
                Inicializar setup
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/academico"
                className="interactive-ring inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-mono text-sm text-foreground transition hover:border-accent/50 hover:text-accent"
              >
                <Terminal className="h-4 w-4" />
                Ver grade
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {["Canvas", "SGA", "Grade"].map((label) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3">
                  <ShieldCheck className="mb-2 h-4 w-4 text-primary" />
                  <p className="font-mono text-xs text-muted">{label}.READY</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
            className="relative min-h-[420px] lg:min-h-[640px]"
          >
            <div className="absolute inset-x-5 bottom-8 h-24 rounded-[50%] bg-primary/10 blur-3xl" />
            <div className="absolute left-1/2 top-8 h-full w-[92%] max-w-[560px] -translate-x-1/2 lg:left-auto lg:right-8 lg:w-full lg:translate-x-0 xl:right-0 xl:max-w-[680px]">
              {/* Next/Image generates responsive sizes and modern formats from the transparent mascot asset. */}
              <Image
                src="/media/logos/mascote-byte.png"
                alt="Byte, mascote tecnologico do DAES Lourdes"
                width={734}
                height={710}
                priority
                sizes="(max-width: 768px) 86vw, (max-width: 1200px) 46vw, 620px"
                className="h-auto w-full animate-float object-contain drop-shadow-[0_0_34px_rgba(0,255,157,0.28)]"
              />
            </div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
              className="glass-panel absolute bottom-4 left-0 max-w-sm p-4"
            >
              <div className="scanline" />
              <p className="font-mono text-xs text-primary">BYTE.STATUS</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Acompanhando sua jornada do primeiro login ao primeiro projeto.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}
