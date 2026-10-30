import { useState } from "react";
import {
  MessageCircle,
  RefreshCw,
  Users,
  Clock,
  Lightbulb,
  Code,
  Paintbrush,
  BrainCircuit,
  Flag,
  Boxes,
  Bug,
} from "lucide-react";

// FILTER BUTTONS
// Every skill's `category` must match one of these names exactly.
const categories = ["All", "Coding", "Design", "Software & Tools", "Game Dev"];

export default function Skills() {
  // LIST OF SKILLS
  const listSkills = [
    {
      icon: <Bug size={36} />,
      title: "Git & GitHub",
      category: "Software & Tools",
    },
    {
      icon: <Code size={36} />,
      title: "HTML, CSS, JavaScript",
      category: "Coding",
    },
    {
      icon: <Code size={36} />,
      title: "React Framework and TailwindCSS",
      category: "Coding",
    },
    {
      icon: <Paintbrush size={36} />,
      title: "Adobe Photoshop & Adobe Illustrator",
      category: "Design",
    },
    {
      icon: <Paintbrush size={36} />,
      title: "Canva",
      category: "Design",
    },
    {
      icon: <Paintbrush size={36} />,
      title: "Blender",
      category: "Design",
    },
    {
      icon: <BrainCircuit size={36} />,
      title: "Unity & Godot",
      category: "Game Dev",
    },
    {
      icon: <Flag size={36} />,
      title: "UI/UX Designer",
      category: "Design",
    },
    {
      icon: <Flag size={36} />,
      title: "Quality Assurance",
      category: "Software & Tools",
    },
    {
      icon: <Boxes size={36} />,
      title: "Microsoft Suite",
      category: "Software & Tools",
    },
  ];

  // LIST OF SOFT SKILLS (sample entries, replace with your own)
  const listSoftSkills = [
    {
      icon: <MessageCircle size={28} />,
      title: "Detail-Oriented",
    },
    {
      icon: <RefreshCw size={28} />,
      title: "Adaptability",
    },
    {
      icon: <Users size={28} />,
      title: "Good Communication",
    },
    {
      icon: <Clock size={28} />,
      title: "Time Management",
    },
    {
      icon: <Lightbulb size={28} />,
      title: "Critical Thinking",
    },
  ];

  // Which filter button is active
  const [activeCategory, setActiveCategory] = useState("All");

  // Skills to show for the active filter
  const visibleSkills =
    activeCategory === "All"
      ? listSkills
      : listSkills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* HEADER */}
      <h2 className="mb-8 flex justify-center w-full max-w-[80rem] text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        Skills
      </h2>

      {/* FILTER BUTTONS */}
      <div className="mb-6 flex w-full max-w-7xl flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            aria-pressed={activeCategory === category}
            className={`rounded-full border px-4 py-1.5 text-xs md:text-sm font-semibold transition-colors duration-300 ${
              activeCategory === category
                ? "border-indigo-500 bg-indigo-600 text-white"
                : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-indigo-500/40"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* SKILLS GRID
          flex-wrap + justify-center keeps an incomplete last row centered,
          so any number of filtered results looks right. */}
      <div className="mt-2 grid grid-cols-2 md:flex w-full max-w-7xl md:flex-wrap justify-center gap-4">
        {visibleSkills.map((skills) => (
          <div
            key={skills.title}
            className="w-full md:w-[calc((100%_-_2rem)/3)] rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition-colors duration-300 hover:border-indigo-500/40"
          >
            <div className="group flex flex-col items-center justify-center rounded-lg bg-slate-950/40 p-4">
              <span className="transition-all duration-300 ease-out text-slate-500 group-hover:-translate-y-2 group-hover:text-indigo-300">
                {skills.icon}
              </span>
              <h3 className="mb-2 pt-4 text-base md:text-lg font-bold text-slate-100">
                {skills.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* SOFT SKILLS */}
      <h2 className="mt-16 mb-8 flex justify-center w-full max-w-[80rem] text-3xl md:text-5xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        Soft Skills
      </h2>
      <div className="grid grid-cols-2 md:flex w-full max-w-7xl md:flex-wrap justify-center gap-4">
        {listSoftSkills.map((soft) => (
          <div
            key={soft.title}
            className="w-full md:w-[calc((100%_-_2rem)/3)] rounded-xl border border-slate-800 bg-slate-900/60 p-3 text-center transition-colors duration-300 hover:border-indigo-500/40"
          >
            <div className="group flex flex-col items-center justify-center rounded-lg bg-slate-950/40 p-4">
              <span className="transition-all duration-300 ease-out text-slate-500 group-hover:-translate-y-1 group-hover:text-indigo-300">
                {soft.icon}
              </span>
              <h3 className="mb-1 pt-3 text-base font-bold text-slate-100">
                {soft.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
