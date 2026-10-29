import { image } from "framer-motion/client";

/* -------------------------------------------------------------------------
   1. YOUR DATA
   Add, remove or reorder projects here. The layout renders from this array.
   size: "full" = one card per row, "half" = two cards per row on large screens
   image: optional { src, alt }. When set, it appears to the right of the text.
   ------------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "ecopoints",
    role: "Capstone Project ~ Quality Assurance | UI/UX",
    title: "Ecopoints",
    description:
      "A web application and prototype machine that encourages students, staffs and professors inside a university to practice recycling plastic bottles to gain digital points. Bridging the gap between environmental action and immediate gratification.",
    highlights: [
      "Testing and Defect Tracking of the software",
      "Created the layout, design, and the contents of the website",
      "Implemented an easy and interactive UI/UX design on the website",
      "Ensuring that the software of the project is up to standards and complies with the necessary requirements",
    ],
    period: "September 2025 - July 2026",
    size: "full",
    image: { src: "/ecopoints-qr-code.svg", alt: "Ecopoints QR code" },
  },
  {
    id: "focus",
    role: "Software Developer",
    title: "Focus: Student Monitoring System",
    description:
      "A web-based extension integrated with Google Meet to monitor the students' attendance within their meeting. It helps professors to monitor their students' attendance by retrieving Google Meet meeting records and synchronizing the students' information with the system's database.",
    highlights: [
      "Monitors students' attendance in the meeting that are in their unique class code",
      "Identifies the student's status based on the specific time they entered in the meeting",
      "Retrieves the Google Meet conference ID for their class that records from any connected Google Account",
      "Retrieving the students information that are enrolled in a unique class code after every Google Meet Class to record and summarize the data",
    ],
    period: "October 2026",
    size: "full",
  },
  {
    id: "portfolio",
    role: "Software Developer",
    title: "Personal Portfolio",
    description:
      "A web-based portfolio to showcase my projects, experiences, and skills throughout my journey in the tech industry.",
    highlights: [
      "Education & Projects",
      "Professional Experiences",
      "Set of Tech & Soft Skills",
      "Showcase of Achievements",
    ],
    period: "October 2026",
    size: "half",
  },
  {
    id: "coin-adventure",
    role: "Game Developer",
    title: "Coin Adventure",
    description:
      "Collect coins in under 20 seconds and beware of dangerous blocks that could end your session.",
    highlights: [
      "Deployed in itch.io",
      "Entry for the 20 Second Game Jam",
      "First Creation of a Simple Game",
      "A simple but fun game",
      "https://raddsss.itch.io/coin-adventure",
    ],
    period: "October 2026",
    size: "half",
  },
];

// Full class names are written out so Tailwind can detect them.
const CARD_SPAN = {
  full: "col-span-4",
  half: "col-span-4 lg:col-span-2",
};

/* -------------------------------------------------------------------------
   2. ONE PROJECT CARD
   ------------------------------------------------------------------------- */
function ProjectCard({ project }) {
  const { role, title, description, highlights, period, size, image } = project;

  return (
    <article
      className={`flex flex-col p-4 rounded-xl border border-slate-800 bg-slate-900/60 transition-colors duration-300 hover:border-indigo-500/40 ${CARD_SPAN[size]}`}
    >
      <div className="flex flex-col p-8 rounded-lg bg-slate-950/40">
        <div className="grid grid-cols-4 space-y-2 gap-x-4">
          {/* Project Title */}
          <div className="col-span-4">
            <p className="font-normal text-base text-indigo-300">{role}</p>
            <h3 className="font-bold text-4xl md:text-5xl text-slate-100">
              {title}
            </h3>
          </div>

          {/* Project Description */}
          <div
            className={`space-y-6 col-start-1 ${
              image ? "col-span-3" : "col-span-4"
            }`}
          >
            <p className="text-justify font-normal text-xs md:text-xl text-slate-400">
              {description}
            </p>

            {/* Bullet Points */}
            <ul>
              {highlights.map((item) => (
                <li
                  key={item}
                  className="font-normal text-xs md:text-lg text-slate-400"
                >
                  ▪ {item}
                </li>
              ))}
            </ul>

            <p className="font-normal text-xs md:text-base text-indigo-300">
              {period}
            </p>
          </div>

          {/* Image (optional) */}
          {image && (
            <div className="col-start-4">
              <img
                src={image.src}
                alt={image.alt}
                className="justify-self-center rounded-2xl w-[12rem] h-[12rem]"
              />
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// Projects Section
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-200"
    >
      <h2 className="flex justify-center w-full max-w-[80rem] mb-10 text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        Projects
      </h2>

      {/* ROOT DIV */}
      <div className="grid grid-cols-4 gap-4 w-full max-w-[80rem] items-center justify-center">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
