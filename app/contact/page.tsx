"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/FadeIn";
import { Mail, MapPin, Clock, Send, Github, Linkedin, Twitter } from "lucide-react";

const infos = [
  { icon: Mail, label: "Email", value: "hello@baptiste.dev" },
  { icon: MapPin, label: "Localisation", value: "Paris, France" },
  { icon: Clock, label: "Disponibilité", value: "Réponse sous 24h" },
];

const socials = [
  { icon: Github, label: "GitHub", handle: "@baptiste", href: "#" },
  { icon: Linkedin, label: "LinkedIn", handle: "Baptiste", href: "#" },
  { icon: Twitter, label: "Twitter", handle: "@baptiste_dev", href: "#" },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 40% at 70% 10%, rgba(201,169,110,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn>
            <span className="text-[var(--accent)] text-xs font-body tracking-widest uppercase mb-4 block">
              — Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-heading text-5xl md:text-6xl leading-tight mb-6 max-w-2xl">
              Parlons de votre{" "}
              <em className="text-[var(--accent)] not-italic">projet</em>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-body text-[var(--text-muted)] text-lg max-w-xl leading-relaxed">
              Une idée, une question, une collaboration ? Je suis ouvert à toute
              discussion. N&apos;hésitez pas à me contacter.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-28">
        <div className="grid lg:grid-cols-5 gap-12">

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-8">
            <FadeIn direction="left">
              <div className="space-y-4">
                {infos.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-4 p-4 bg-[var(--surface)] border border-[var(--border)] rounded-lg"
                  >
                    <div className="w-9 h-9 bg-[var(--accent-dim)] rounded flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[var(--accent)]" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-[var(--text-muted)] mb-0.5">{label}</p>
                      <p className="font-body text-sm text-[var(--text)]">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.15}>
              <div>
                <p className="font-body text-xs text-[var(--text-muted)] tracking-widest uppercase mb-4">
                  Réseaux
                </p>
                <div className="space-y-3">
                  {socials.map(({ icon: Icon, label, handle, href }) => (
                    <a
                      key={label}
                      href={href}
                      className="flex items-center gap-3 text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors duration-200 group"
                    >
                      <Icon size={16} />
                      <span className="font-body text-sm">{label}</span>
                      <span className="font-body text-xs text-[var(--text-muted)] group-hover:text-[var(--accent)] ml-auto transition-colors">
                        {handle}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Form */}
          <FadeIn direction="right" delay={0.1} className="lg:col-span-3">
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[var(--surface)] border border-[var(--accent)] rounded-lg p-10 text-center h-full flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 bg-[var(--accent-dim)] rounded-full flex items-center justify-center mb-5">
                  <Send size={22} className="text-[var(--accent)]" />
                </div>
                <h3 className="font-heading text-2xl mb-3">Message envoyé !</h3>
                <p className="font-body text-[var(--text-muted)] text-sm max-w-xs">
                  Merci pour votre message. Je vous réponds dans les 24h.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="mt-6 text-[var(--accent)] font-body text-sm hover:underline"
                >
                  Envoyer un autre message
                </button>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[var(--surface)] border border-[var(--border)] rounded-lg p-8 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs text-[var(--text-muted)] mb-1.5 tracking-wide">
                      Nom *
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jean Dupont"
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded px-4 py-3 font-body text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-[var(--text-muted)] mb-1.5 tracking-wide">
                      Email *
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jean@example.com"
                      className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded px-4 py-3 font-body text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-xs text-[var(--text-muted)] mb-1.5 tracking-wide">
                    Sujet
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded px-4 py-3 font-body text-sm text-[var(--text)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200"
                  >
                    <option value="">Sélectionner un sujet</option>
                    <option>Nouveau projet</option>
                    <option>Mission freelance</option>
                    <option>Collaboration</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block font-body text-xs text-[var(--text-muted)] mb-1.5 tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Décrivez votre projet ou votre demande..."
                    className="w-full bg-[var(--surface-2)] border border-[var(--border)] rounded px-4 py-3 font-body text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-200 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-[var(--accent)] text-[var(--background)] font-body font-semibold text-sm rounded hover:bg-[var(--accent-light)] transition-colors duration-200 disabled:opacity-60"
                >
                  {status === "sending" ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
                        className="w-4 h-4 border-2 border-[var(--background)] border-t-transparent rounded-full"
                      />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message <Send size={15} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>
    </>
  );
}
