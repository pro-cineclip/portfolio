"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FadeIn from "@/components/FadeIn";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

const stats = [
  { value: "5+", label: "Années d'expérience" },
  { value: "30+", label: "Projets livrés" },
  { value: "12+", label: "Clients satisfaits" },
];

const skills = [
  "React / Next.js",
  "TypeScript",
  "UI/UX Design",
  "Node.js",
  "Figma",
  "TailwindCSS",
];

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(201,169,110,0.07) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--text) 1px, transparent 1px), linear-gradient(90deg, var(--text) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <motion.div
          style={{ y, opacity }}
          className="relative max-w-6xl mx-auto px-6 pt-24 pb-16 w-full"
        >
          <FadeIn delay={0.1}>
            <span className="inline-flex items-center gap-2 text-[var(--accent)] text-sm font-body tracking-widest uppercase mb-6">
              <span className="w-6 h-px bg-[var(--accent)]" />
              Disponible pour de nouveaux projets
            </span>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-6 max-w-4xl">
              Des vidéos{" "}
              <em className="text-[var(--accent)] not-italic">qui</em>
              <br />
              font vendre
              <br />
              <span className="text-[var(--text-muted)]">vos biens.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.35}>
            <p className="font-body text-[var(--text-muted)] text-lg max-w-xl leading-relaxed mb-10">
              Spécialisé dans les réseaux franchisés, je monte des vidéos
              immobilières qui accrochent, décrivent vos biens et donnent
              envie de les visiter.
            </p>
          </FadeIn>

          <FadeIn delay={0.45}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-[var(--background)] font-body font-semibold text-sm rounded hover:bg-[var(--accent-light)] transition-colors duration-200"
              >
                Voir mes projets <ArrowRight size={16} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--border)] text-[var(--text)] font-body text-sm rounded hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-200"
              >
                Me contacter
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.55}>
            <div className="flex items-center gap-5 mt-12">
              <span className="text-xs font-body text-[var(--text-muted)] tracking-widest uppercase">Suivre</span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </FadeIn>
        </motion.div>

        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[var(--text-muted)]"
        >
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[var(--text-muted)] to-transparent" />
        </motion.div>
      </section>

      {/* Stats */}
      <section className="border-y border-[var(--border)] bg-[var(--surface)]">
        <div className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, label }, i) => (
            <FadeIn key={label} delay={i * 0.1} direction="up">
              <div className="text-center sm:text-left sm:border-r sm:border-[var(--border)] last:border-0 sm:pr-8">
                <p className="font-heading text-4xl text-[var(--accent)] mb-1">{value}</p>
                <p className="font-body text-sm text-[var(--text-muted)]">{label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="max-w-6xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <span className="text-[var(--accent)] text-xs font-body tracking-widest uppercase mb-4 block">
              — À propos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl leading-tight mb-6">
              L&apos;immobilier{" "}
              <em className="text-[var(--accent)] not-italic">mérite</em>{" "}
              de meilleures vidéos
            </h2>
            <p className="font-body text-[var(--text-muted)] leading-relaxed mb-4">
              Je suis monteur vidéo freelance, spécialisé dans les agences
              immobilières franchisées.
            </p>
            <p className="font-body text-[var(--text-muted)] leading-relaxed mb-4">
              J&apos;ai analysé en profondeur le contenu vidéo de réseaux comme Orpi,
              LaForêt et Era Immobilier — leurs shorts Instagram, leurs chaînes
              YouTube, mais aussi les vidéos directement intégrées sur leurs sites
              internet. Ce que j&apos;y ai vu revient souvent : un cruel manque de
              vidéos de présentation des biens, même pour des appartements et maisons
              à plus de 500 000€. Et quand des vidéos existent, les mêmes défauts se
              répètent — pas de hook, un rythme mal géré, et surtout une absence de
              description des biens — ni narration, ni texte à l&apos;écran — comme
              si la caméra suffisait à vendre.
            </p>
            <p className="font-body text-[var(--text-muted)] leading-relaxed mb-6">
              Je prends en charge la totalité du montage : transitions, sous-titres
              dynamiques, overlays de description, intros/outros aux couleurs de ton
              réseau, rythme adapté au format. Tu fournis les rushes, je livre du
              contenu prêt à publier.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-body text-sm hover:gap-3 transition-all duration-200"
            >
              Découvrir mes services <ArrowRight size={14} />
            </Link>
          </FadeIn>

          <FadeIn direction="right" delay={0.15}>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="bg-[var(--surface)] border border-[var(--border)] rounded px-3 py-2 font-body text-sm text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-[var(--surface)] border-y border-[var(--border)]">
        <div className="max-w-6xl mx-auto px-6 py-20 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl mb-4">
              Un projet en tête ?
            </h2>
            <p className="font-body text-[var(--text-muted)] mb-8 max-w-md mx-auto">
              Parlons-en. Je suis disponible pour des missions freelance et des
              collaborations créatives.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--accent)] text-[var(--background)] font-body font-semibold rounded hover:bg-[var(--accent-light)] transition-colors duration-200"
            >
              Démarrer un projet <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-[var(--text-muted)]">
          © 2025 CinéClip. Tous droits réservés.
        </p>
        <p className="font-body text-xs text-[var(--text-muted)]">
          Conçu & développé avec <span className="text-[var(--accent)]">♥</span>
        </p>
      </footer>
    </>
  );
}
