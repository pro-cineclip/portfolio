"use client";

import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ArrowRight, Film } from "lucide-react";

const process = [
  {
    step: "01",
    title: "Envoi des rushes",
    description:
      "Tu m'envoies les fichiers bruts via WeTransfer ou Drive. Pas besoin de trier — je m'en charge.",
  },
  {
    step: "02",
    title: "Montage",
    description:
      "Structure, rythme, hook, transitions, sous-titres dynamiques et overlays de description du bien.",
  },
  {
    step: "03",
    title: "Validation",
    description:
      "Tu reçois une première version. Un aller-retour est inclus pour affiner selon tes retours.",
  },
  {
    step: "04",
    title: "Livraison",
    description:
      "Fichier final exporté au format et aux dimensions adaptés au canal de diffusion choisi.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[var(--accent)] text-xs font-body tracking-widest uppercase mb-4 block">
              — Services
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-6xl leading-tight mb-6 max-w-2xl">
              Du rush au contenu{" "}
              <em className="text-[var(--accent)] not-italic">prêt à publier</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-[var(--text-muted)] text-lg max-w-xl leading-relaxed">
              Je prends en charge l&apos;intégralité du montage vidéo pour les agences
              immobilières franchisées — de la réception des rushes jusqu&apos;à
              la livraison du fichier final.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Offers placeholder */}
      <section className="max-w-6xl mx-auto px-6 pb-28">
        <FadeIn>
          <div className="border border-dashed border-[var(--border)] rounded-lg py-20 px-8 text-center">
            <div className="w-12 h-12 bg-[var(--surface)] border border-[var(--border)] rounded flex items-center justify-center mx-auto mb-5">
              <Film size={20} className="text-[var(--accent)]" />
            </div>
            <h2 className="font-heading text-2xl mb-3">Formules à venir</h2>
            <p className="font-body text-[var(--text-muted)] text-sm max-w-sm mx-auto leading-relaxed">
              Les offres détaillées seront bientôt disponibles.
              En attendant, contactez-moi directement pour discuter de votre projet.
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

      {/* Process */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <FadeIn>
            <span className="text-[var(--accent)] text-xs font-body tracking-widest uppercase mb-4 block">
              — Mon processus
            </span>
            <h2 className="font-heading text-4xl mb-16 max-w-md">
              Comment ça se passe
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map(({ step, title, description }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div className="relative">
                  {i < process.length - 1 && (
                    <div className="hidden lg:block absolute top-4 left-full w-full h-px bg-[var(--border)] -translate-x-4" />
                  )}
                  <p className="font-heading text-4xl text-[var(--accent)] opacity-40 mb-3">
                    {step}
                  </p>
                  <h3 className="font-heading text-lg mb-2">{title}</h3>
                  <p className="font-body text-sm text-[var(--text-muted)] leading-relaxed">
                    {description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <FadeIn>
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Un bien à mettre en valeur ?
          </h2>
          <p className="font-body text-[var(--text-muted)] mb-8 max-w-sm mx-auto">
            Envoyez-moi vos rushes et discutons de ce que je peux faire pour vous.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-body font-semibold rounded hover:bg-[var(--accent-light)] transition-colors duration-200"
          >
            Prendre contact <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
