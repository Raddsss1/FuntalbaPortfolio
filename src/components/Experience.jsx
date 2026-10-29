import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useInView,
  useReducedMotion,
} from "framer-motion";

// Experience DATA
const Experience = [
  {
    organization:
      "Alumni Relations and Career Development Office - PUP Main Campus",
    role: "Student Assistant",
    period: "Sept. 2025 - Present",
    description:
      "Providing assistance in an office environment, organizing and document tracking while also encoding files and creating databases for it.",
  },
  {
    organization: "Extension Management Office (EMO) - PUP Main Campus",
    role: "On-The-Job Training",
    period: "Feb. 2026 - June 2026",
    description:
      "Providing assistance in an office environment while accomplishing office tasks using Microsoft Suite. Created publication materials for engagement using Canva and created a database for document tracking using Microsoft Excel.",
  },
  {
    organization:
      "Consortium of Office Management and Information Technologists (COMMIT) - Academic Organization",
    role: "Technical Committee Co-Chair",
    period: "2024 - Mar. 2026",
    description:
      "Providing technical assistance and documentation to department-wide events and enhancing my communicational and adaptability skills while gaining a personal and academic empowerment through the organization.",
  },
  {
    organization:
      "Alumni Relations and Career Development Office - PUP Main Campus",
    role: "On-The-Job Training",
    period: "Jul. 2025 - Sept. 2025",
    description:
      "Providing assistance to university-wide ARCDO and PUP career center events and accomplishing office tasks like document tracking and encoding of files. Created databases for documents using Microsoft Excel while also developing a website of PUP ARCDO using Google Site.",
  },
];

/* -------------------------------------------------------------------------
   2. ONE TIMELINE ENTRY
   The dot lights up once the scroll line reaches it.
   ------------------------------------------------------------------------- */
function TimelineItem({ item, scrollRef }) {
  const ref = useRef(null);
  // Fires when the entry crosses ~60% down the scroller (matches the line).
  // root: scrollRef = measure against the scrolling box, not the whole page.
  const reached = useInView(ref, {
    once: true,
    root: scrollRef,
    margin: "0px 0px -40% 0px",
  });

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
              ? "border-indigo-400 bg-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.18)] "
              : "border-slate-600 bg-slate-950"
          }`}
        />
      </span>

      {/* Period */}
      <p
        className={`pt-0.5 text-sm font-medium transition-colors duration-500 md:pr-8 md:text-right ${
          reached ? "text-indigo-300" : "text-slate-500"
        }`}
      >
        {item.period}
      </p>

      {/* Card */}
      <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 transition-colors duration-300 hover:border-indigo-500/40 md:ml-10">
        <h3 className="text-lg font-semibold text-slate-100">
          {item.organization}
        </h3>
        <p className="mt-1 text-indigo-300">{item.role}</p>
        {item.description && (
          <p className="mt-3 w-full text-sm leading-relaxed text-slate-400 text-justify">
            {item.description}
          </p>
        )}
      </div>
    </li>
  );
}

// EXPERIENCE SECTION
export default function EXPERIENCE() {
  const scrollRef = useRef(null);
  const listRef = useRef(null);
  const reduceMotion = useReducedMotion();

  // Progress of the list through the scroller, 0 -> 1
  const { scrollYProgress } = useScroll({
    container: scrollRef,
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
    <section id="experience" className="bg-slate-950 px-6 py-24 text-slate-200">
      {/* ROOT DIV */}
      <div className="mx-auto max-w-4xl">
        <div className="flex flex-col items-center justify-center p-6 bg-slate-900/60 rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-6xl">
            Professional Experience
          </h2>
          <p className="mt-2 max-w-3xl text-slate-400">
            My Experiences throughout the years, from my most recent experience
            to my very first.
          </p>
        </div>

        {/* Vertical scroller: shows about 3 experiences, scroll for the rest */}
        <div
          ref={scrollRef}
          className="mt-16 max-h-[48rem] overflow-y-auto pl-2 pr-4"
        >
          <div ref={listRef} className="relative">
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
              {Experience.map((item) => (
                <TimelineItem
                  key={`${item.organization}-${item.period}`}
                  item={item}
                  scrollRef={scrollRef}
                />
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
