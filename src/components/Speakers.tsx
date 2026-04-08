import { motion } from "motion/react";
import { Twitter, Linkedin, Globe, Mic2, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sessionTypes = [
  {
    icon: <Mic2 size={20} />,
    label: "Keynote Sessions",
    desc: "Headline talks from industry leaders",
  },
  {
    icon: <Users size={20} />,
    label: "Panel Sessions",
    desc: "Multi-speaker deep dives",
  },
  {
    icon: <Sparkles size={20} />,
    label: "Breakout Sessions",
    desc: "Hands-on interactive workshops",
  },
  {
    icon: <Users size={20} />,
    label: "Networking Sessions",
    desc: "Connect with the community",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Speakers() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24">

      {/* ── Hero Banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d0d0d] px-8 sm:px-14 py-14 sm:py-20"
        >
          {/* Ambient glow */}
          <div className="pointer-events-none absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-container/15 blur-[130px]" />

          {/* Content */}
          <div className="relative z-10 max-w-3xl">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-container">
              <Mic2 size={12} />
              Meet the Speakers
            </div>

            <h1 className="editorial-text mb-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl">
              We're finalising an incredible lineup of community builders, tech leaders, and innovators.
            </h1>

            <p className="text-base text-white/50 sm:text-lg">
              Based in Port Harcourt — check back soon for the full announcement.
            </p>
          </div>

          {/* Session type pills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="relative z-10 mt-12 flex flex-wrap gap-3"
          >
            {sessionTypes.map((s) => (
              <motion.div
                key={s.label}
                variants={itemVariants}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
              >
                <span className="shrink-0 text-primary-container">{s.icon}</span>
                <div>
                  <p className="text-sm font-bold text-white">{s.label}</p>
                  <p className="text-xs text-white/40">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── Coming Soon placeholder ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-black py-20 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
            <Mic2 size={28} className="text-white/30" />
          </div>
          <h2 className="mb-2 text-xl font-bold text-white/60">Speaker lineup coming soon</h2>
          <p className="max-w-xs text-sm text-white/30 leading-relaxed">
            We're putting together something special. Follow us on socials so you don't miss the reveal.
          </p>
        </motion.div>
      </section>

      {/* ── Speak at ATC CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-10 py-14 sm:px-16 sm:py-20 md:px-20"
        >
          {/* Decorative rings */}
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full border-[40px] border-white/5" />

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            {/* Copy */}
            <div className="max-w-xl">
              <h2 className="editorial-text mb-4 text-3xl font-black text-on-primary sm:text-4xl md:text-5xl">
                Want to volunteer?
              </h2>
              <p className="text-base leading-relaxed text-on-primary/75 sm:text-lg">
                Join the engine room. Shape the experience, build your network, and gain behind-the-scenes access to the meetup.
              </p>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="https://forms.gle/kNF3VrBf2vsEC3iV9"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-surface px-8 py-4 text-base font-black text-primary shadow-xl transition-all hover:scale-105 active:scale-95"
              >
                Apply to volunteer
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/tickets"
                className="inline-flex items-center justify-center rounded-full border-2 border-on-primary/30 px-8 py-4 text-base font-bold text-on-primary transition-colors hover:bg-white/10"
              >
                Get a Ticket
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
}