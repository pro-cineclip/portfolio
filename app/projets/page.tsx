"use client";

import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, Clapperboard } from "lucide-react";

export default function ProjetsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 20% 30%, rgba(201,169,110,0.05) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[var(--accent)] text-xs font-body tracking-widest uppercase mb-4 block">
              — Projets
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-6xl leading-tight mb-6 max-w-2xl">
              Cas d&apos;études <em className="text-[var(--accent)] not-italic">&amp;</em> démonstrations
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-[var(--text-muted)] text-lg max-w-xl leading-relaxed">
              Des montages concrets sur des biens réels — hooks, rythme, overlays
              de description et intros aux couleurs du réseau.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Placeholder */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <FadeIn>
          <div className="border border-dashed border-[var(--border)] rounded-lg py-24 px-8 text-center">
            <div className="w-12 h-12 bg-[var(--surface)] border border-[var(--border)] rounded flex items-center justify-center mx-auto mb-5">
              <Clapperboard size={20} className="text-[var(--accent)]" />
            </div>
            <h2 className="font-heading text-2xl mb-3">Bientôt disponibles</h2>
            <p className="font-body text-[var(--text-muted)] text-sm max-w-sm mx-auto leading-relaxed">
              Les cas d&apos;études et démonstrations vidéo arrivent prochainement.
              Contactez-moi pour voir des exemples de montages en avant-première.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 border border-[var(--border)] text-[var(--text)] font-body text-sm rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
            >
              Me contacter <ArrowRight size={14} />
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
