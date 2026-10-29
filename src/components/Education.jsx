import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useReducedMotion,
} from "framer-motion";

// EDUCATION DATA
const EDUCATION = [
  {
    school: "Polytechnic University of the Philippines",
    degree: "Bachelor of Science in Information Technology",
    period: "Sept. 2026 - Present",
    description:
      "Continued my journey learning what the tech industry could offer here in PUP",
  },
  {
    school: "Polytechnic University of the Philippines",
    degree: "Diploma in Information Technology",
    period: "Sept. 2023 - Sept. 2026",
    description: "Graduated with honors. Built my first projects here.",
  },
  {
    school: "Jose Rizal University",
    degree: "STEM",
    period: "June 2023",
  },
  {
    school: "University of Santo Tomas",
    degree: "Junior High School",
    period: "August 2021",
  },
];

/* -------------------------------------------------------------------------
   2. ONE TIMELINE ENTRY
   The dot lights up once the scroll line reaches it.
   ------------------------------------------------------------------------- */
function TimelineItem({ item }) {
  const ref = useRef(null);
  // Fires when the entry crosses ~60% down the viewport (matches the line).
  const reached = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });

  return (
    <li
      ref={ref}
      className="relative grid gap-2 pl-10 md:grid-cols-[12rem_1fr] md:gap-0 md:pl-0"
    >
      {/* Dot sitting on the line */}
      <span
        aria-hidden="true"
        className="absolute left-px top-1.5 flex h-4 w-4 items-center justify-center md:left-[calc(12rem-7px)]"
      >
        <span
          className={`h-4 w-4 rounded-full border-2 transition-colors duration-500 ${
            reached
              ? "border-indigo-400 bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.18)]"
              : "border-slate-600 bg-slate-950"
          }`}
        />
      </span>

      {/* Period */}
      <p
        className={`pt-0.5 text-sm font-medium transition-colors duration-500 md:pr-10 md:text-right ${
          reached ? "text-indigo-300" : "text-slate-500"
        }`}
      >
        {item.period}
      </p>

      {/* Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-indigo-500/40 md:ml-10">
        <h3 className="text-lg font-semibold text-slate-100">{item.school}</h3>
        <p className="mt-1 text-indigo-300">{item.degree}</p>
        {item.description && (
          <p className="mt-3 max-w-prose text-sm leading-relaxed text-slate-400">
            {item.description}
          </p>
        )}
      </div>
    </li>
  );
}

// EDUCATION SECTION
export default function Education() {
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Progress of the list through the viewport, 0 -> 1
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 60%", "end 60%"],
  });

  // Spring = the "smooth" feel. Softens jumpy mouse-wheel scrolling.
  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.4,
  });

  return (
    <section id="education" className="bg-slate-950 px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Education
        </h2>
        <p className="mt-3 max-w-xl text-slate-400">
          Where I studied, from my most recent school back to where it started.
        </p>

        <div ref={listRef} className="relative mt-16">
          {/* Track (grey) */}
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-2 top-0 w-0.5 bg-slate-800 md:left-48"
          />
          {/* Fill (indigo) - grows as you scroll */}
          <motion.div
            aria-hidden="true"
            style={{
              scaleY: reduceMotion ? 1 : smooth,
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-2 top-0 w-0.5 bg-gradient-to-b from-indigo-400 to-indigo-600 md:left-48"
          />

          <ol className="space-y-12">
            {EDUCATION.map((item) => (
              <TimelineItem key={`${item.school}-${item.period}`} item={item} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
