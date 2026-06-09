// import { motion } from "motion/react";
// import { Twitter, Linkedin, Globe, Mic2, Users, Sparkles, ArrowRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const sessionTypes = [
//   {
//     icon: <Mic2 size={20} />,
//     label: "Keynote Sessions",
//     desc: "Headline talks from industry leaders",
//   },
//   {
//     icon: <Users size={20} />,
//     label: "Panel Sessions",
//     desc: "Multi-speaker deep dives",
//   },
//   {
//     icon: <Sparkles size={20} />,
//     label: "Breakout Sessions",
//     desc: "Hands-on interactive workshops",
//   },
//   {
//     icon: <Users size={20} />,
//     label: "Networking Sessions",
//     desc: "Connect with the community",
//   },
// ];

// const containerVariants = {
//   hidden: {},
//   show: {
//     transition: { staggerChildren: 0.1 },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
// };

// export default function Speakers() {
//   return (
//     <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24">

//       {/* ── Hero Banner ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 32 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7, ease: "easeOut" }}
//           className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d0d0d] px-8 sm:px-14 py-14 sm:py-20"
//         >
//           {/* Ambient glow */}
//           <div className="pointer-events-none absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
//           <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-container/15 blur-[130px]" />

//           {/* Content */}
//           <div className="relative z-10 max-w-3xl">
//             {/* Badge */}
//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-container">
//               <Mic2 size={12} />
//               Meet the Speakers
//             </div>

//             <h1 className="editorial-text mb-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl">
//               We're finalising an incredible lineup of community builders, tech leaders, and innovators.
//             </h1>

//             <p className="text-base text-white/50 sm:text-lg">
//               Based in Port Harcourt — check back soon for the full announcement.
//             </p>
//           </div>

//           {/* Session type pills */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             animate="show"
//             className="relative z-10 mt-12 flex flex-wrap gap-3"
//           >
//             {sessionTypes.map((s) => (
//               <motion.div
//                 key={s.label}
//                 variants={itemVariants}
//                 className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
//               >
//                 <span className="shrink-0 text-primary-container">{s.icon}</span>
//                 <div>
//                   <p className="text-sm font-bold text-white">{s.label}</p>
//                   <p className="text-xs text-white/40">{s.desc}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* ── Coming Soon placeholder ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="flex flex-col items-center justify-center rounded-2xl border border-white/8 bg-black py-20 text-center"
//         >
//           <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
//             <Mic2 size={28} className="text-white/30" />
//           </div>
//           <h2 className="mb-2 text-xl font-bold text-white/60">Speaker lineup coming soon</h2>
//           <p className="max-w-xs text-sm text-white/30 leading-relaxed">
//             We're putting together something special. Follow us on socials so you don't miss the reveal.
//           </p>
//         </motion.div>
//       </section>

//       {/* ── Speak at ATC CTA ── */}
//       <section className="max-w-7xl mx-auto px-4 sm:px-6">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.98 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-10 py-14 sm:px-16 sm:py-20 md:px-20"
//         >
//           {/* Decorative rings */}
//           <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
//           <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full border-[40px] border-white/5" />

//           <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
//             {/* Copy */}
//             <div className="max-w-xl">
//               <h2 className="editorial-text mb-4 text-3xl font-black text-on-primary sm:text-4xl md:text-5xl">
//                 Want to volunteer?
//               </h2>
//               <p className="text-base leading-relaxed text-on-primary/75 sm:text-lg">
//                 Join the engine room. Shape the experience, build your network, and gain behind-the-scenes access to the meetup.
//               </p>
//             </div>

//             {/* Actions */}
//             <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
//               <a
//                 href="https://forms.gle/kNF3VrBf2vsEC3iV9"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group inline-flex items-center justify-center gap-2 rounded-full bg-surface px-8 py-4 text-base font-black text-primary shadow-xl transition-all hover:scale-105 active:scale-95"
//               >
//                 Apply to volunteer
//                 <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
//               </a>
//               <Link
//                 to="/tickets"
//                 className="inline-flex items-center justify-center rounded-full border-2 border-on-primary/30 px-8 py-4 text-base font-bold text-on-primary transition-colors hover:bg-white/10"
//               >
//                 Get a Ticket
//               </Link>
//             </div>
//           </div>
//         </motion.div>
//       </section>

//     </div>
//   );
// }



import { useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { Mic2, Users, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const sessionTypes = [
  { icon: <Mic2 size={20} />, label: "Keynote Sessions", desc: "Headline talks from industry leaders" },
  { icon: <Users size={20} />, label: "Panel Sessions", desc: "Multi-speaker deep dives" },
  { icon: <Sparkles size={20} />, label: "Breakout Sessions", desc: "Hands-on interactive workshops" },
  { icon: <Users size={20} />, label: "Networking Sessions", desc: "Connect with the community" },
];

const speakers = [
  { name: "Eden Udoma", role: "Lead Organizer", image: "/eden.jpg", track: "Innovation", color: "bg-violet-950/60 text-violet-300 border-violet-800/50" },
  { name: "Godswill Augustine",  role: "General Manager, Silicon Delta Innovation Hub", image: "/Godswill.png", track: "Innovation",     color: "bg-violet-950/60 text-violet-300 border-violet-800/50" },
  { name: "Tope James Moses", role: "Co-Founder, ATC Africa", image: "/Tope.png", track: "Ecosystem", color: "bg-emerald-950/60 text-emerald-300 border-emerald-800/50" },
  { name: "Lesley Jumbo", role: "Tech Professional", image: "/lesley.png", track: "Technology", color: "bg-cyan-950/60 text-cyan-300 border-cyan-800/50" },
  { name: "Ayose Godfrey", role: "Chief Technology Officer, SouthBridge", image: "/ayose.png", track: "Engineering", color: "bg-orange-950/60 text-orange-300 border-orange-800/50" },
  { name: "Joy Nwaiwu", role: "Community Manager, 3MTT River State", image: "/Joy.png", track: "Community", color: "bg-pink-950/60 text-pink-300 border-pink-800/50" },
  { name: "George Boma Smith", role: "AI / Software Engineer", image: "/george.png", track: "AI & Software", color: "bg-teal-950/60 text-teal-300 border-teal-800/50" },
  { name: "Raphael Binitie Jr", role: "Founder, Muriell", image: "/raphael.png", track: "Founder", color: "bg-amber-950/60 text-amber-300 border-amber-800/50" },
];

// ── 3D tilt card ─────────────────────────────────────────────────────────────
function SpeakerCard({ speaker, index }: { speaker: typeof speakers[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-7, 7]), { stiffness: 280, damping: 28 });
  const scale = useSpring(1, { stiffness: 280, damping: 28 });
  const glowX = useSpring(useTransform(mx, [-0.5, 0.5], [-24, 24]), { stiffness: 180, damping: 20 });
  const glowY = useSpring(useTransform(my, [-0.5, 0.5], [-24, 24]), { stiffness: 180, damping: 20 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = ref.current!.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
    scale.set(1.04);
  }

  function onLeave() { mx.set(0); my.set(0); scale.set(1); }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 52, filter: "blur(10px)" }}
      animate={inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.7, delay: (index % 4) * 0.11, ease: [0.22, 1, 0.36, 1] }}
      
      style={{ perspective: 900 }}
    >
      <motion.div
        style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="relative group rounded-2xl overflow-hidden border border-white/8 bg-white/3 cursor-default"
      >
        {/* Cursor-tracked shimmer */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.10) 0%, transparent 60%)",
            x: glowX,
            y: glowY,
          }}
        />

        {/* Photo */}
        <div className="relative aspect-[3/4] overflow-hidden bg-white/5">
          <motion.img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              const fb = t.parentElement?.querySelector(".fb") as HTMLElement;
              if (fb) fb.style.display = "flex";
            }}
          />
          {/* Fallback initials */}
          <div className="fb absolute inset-0 items-center justify-center bg-white/5" style={{ display: "none" }}>
            <span className="text-5xl font-black text-white/20 select-none">
              {speaker.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
            </span>
          </div>

          {/* Gradient scrim — always visible at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-5/5 bg-gradient-to-t from-black/80 to-transparent" />

          {/* Name strip — sits on scrim */}
          <div className="absolute inset-x-0 bottom-0 px-4 pb-4 z-10">
            <h3 className="font-black text-xl text-white leading-tight">{speaker.name}</h3>
            <p className="text-sm text-white/55 mt-0.5 leading-snug">{speaker.role}</p>
          </div>
        {/* Track badge */}
        <div className="px-4 py-3">
          <motion.span
            className={`inline-block text-[12px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${speaker.color}`}
            initial={{ opacity: 0, x: -8 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: (index % 4) * 0.11 + 0.28 }}
          >
            {speaker.track}
          </motion.span>
        </div>
        </div>

      </motion.div>
    </motion.div>
  );
}

// ── Section heading with animated underline ───────────────────────────────────
function SectionHeading({ label, title }: { label: string; title: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-10"
    >
      <p className="text-[12px] font-bold uppercase tracking-widest text-primary mb-2">{label}</p>
      <div className="flex items-end gap-4">
        <h2 className="text-2xl sm:text-3xl font-black text-primary">{title}</h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="flex-1 h-px bg-white/10 mb-2"
        />
      </div>
    </motion.div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function Speakers() {
  return (
    <div className="pt-24 sm:pt-32 pb-24 space-y-16 sm:space-y-24">

      {/* ── Hero banner ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#0d0d0d] px-8 sm:px-14 py-14 sm:py-20"
        >
          <div className="pointer-events-none absolute -top-10 left-1/4 h-80 w-80 rounded-full bg-primary/25 blur-[110px]" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-primary-container/15 blur-[130px]" />

          <div className="relative z-10 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary-container"
            >
              <Mic2 size={12} />
              Meet the Speakers
            </motion.div>

            {/* Headline — each word mask-reveals */}
            <h1 className="editorial-text mb-6 text-4xl font-black leading-[1.05] text-white sm:text-5xl md:text-6xl overflow-hidden">
              {["Meet the", "incredible lineup", "shaping ATC 2025."].map((line, i) => (
                <span key={line} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.72, delay: 0.15 + i * 0.13, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="text-base text-white/50 sm:text-lg"
            >
              Community builders, tech leaders, and innovators — based in Port Harcourt and beyond.
            </motion.p>
          </div>

          {/* Session type pills */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.6 } } }}
            className="relative z-10 mt-12 flex flex-wrap gap-3"
          >
            {sessionTypes.map((s) => (
              <motion.div
                key={s.label}
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } } }}
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

      {/* ── Speaker grid ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionHeading label="Confirmed Speakers" title="Voices at ATC 2025" />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {speakers.map((speaker, i) => (
            <SpeakerCard key={speaker.name} speaker={speaker} index={i} />
          ))}
        </div>
      </section>

      {/* ── Volunteer CTA ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-primary px-10 py-14 sm:px-16 sm:py-20 md:px-20"
        >
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full border-[32px] border-white/10" />
          <div className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full border-[40px] border-white/5" />

          <div className="relative z-10 flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="editorial-text mb-4 text-3xl font-black text-on-primary sm:text-4xl md:text-5xl">
                Want to volunteer?
              </h2>
              <p className="text-base leading-relaxed text-on-primary/75 sm:text-lg">
                Join the engine room. Shape the experience, build your network, and gain behind-the-scenes access to the meetup.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">

            <a href="https://forms.gle/kNF3VrBf2vsEC3iV9"
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

    </div >
  );
}