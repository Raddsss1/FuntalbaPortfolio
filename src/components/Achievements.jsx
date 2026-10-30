import { BookCheck, GraduationCap, Medal } from "lucide-react";
import { useState, useEffect } from "react";

// Certificate Card
// (moved outside Certificates so it isn't re-created every time the popup opens)
function CertificateCard({ certs, onView }) {
  const { image } = certs;
  return (
    <div className="group w-72 shrink-0 snap-start rounded-xl border border-slate-800 bg-slate-900/60 p-2 transition-all ease-out duration-300 hover:border-indigo-500/40 hover:-translate-y-6">
      <div className="flex flex-col p-4 rounded-lg bg-slate-950/40 ">
        <img src={image.src} alt={image.alt} />
        {/* Heading/Title */}
        <h3 className="pt-4 text-lg md:text-xl font-bold text-slate-100">
          {certs.course}
        </h3>
        <p className="text-xs md:text-sm font-semibold text-slate-100 mb-2">
          {certs.company}
        </p>
        <p className="text-xs md:text-sm font-normal text-slate-100 mb-4" l>
          {certs.date}
        </p>
        <button
          type="button"
          onClick={() => onView(certs)}
          className="p-2 rounded-lg bg-slate-500/60 text-slate-100 text-left cursor-pointer transition-all duration-300 group-hover:bg-indigo-600"
        >
          {certs.alt}
        </button>
      </div>
    </div>
  );
}

export default function Achievements() {
  // LIST OF CERTIFICATION
  const listCertificates = [
    {
      image: { src: "/WorkatoFL1.jpg", alt: "WorkatoLvl1" },
      course: "Workato Foundations 1",
      company: "Workato Academy",
      date: "October 14, 2026",
      src: "/Workato-Foundations-1-Certificate.pdf",
      alt: "View Certificate",
    },
    {
      image: { src: "/WorkatoFL1.jpg", alt: "WorkatoLvl1" },
      course: "Workato Foundations 1",
      company: "Workato Academy",
      date: "October 14, 2026",
      src: "/Workato-Foundations-1-Certificate.pdf",
      alt: "View Certificate",
    },
    {
      image: { src: "/WorkatoFL1.jpg", alt: "WorkatoLvl1" },
      course: "Workato Foundations 1",
      company: "Workato Academy",
      date: "October 14, 2026",
      src: "/Workato-Foundations-1-Certificate.pdf",
      alt: "View Certificate",
    },
    {
      image: { src: "/WorkatoFL1.jpg", alt: "WorkatoLvl1" },
      course: "Workato Foundations 1",
      company: "Workato Academy",
      date: "October 14, 2026",
      src: "/Workato-Foundations-1-Certificate.pdf",
      alt: "View Certificate",
    },
    {
      image: { src: "/WorkatoFL1.jpg", alt: "WorkatoLvl1" },
      course: "Workato Foundations 1",
      company: "Workato Academy",
      date: "October 14, 2026",
      src: "/Workato-Foundations-1-Certificate.pdf",
      alt: "View Certificate",
    },
  ];

  // LIST OF ACHIEVEMENTS
  const listAchievements = [
    {
      icon: <GraduationCap size={60} />,
      title: "BSIT Ladderized Examination",
      description:
        "Passed the Ladderized Examination that was held in August and transferred from Diploma in Information Technology to the Bachelors in Science of Information Technology",
      year: "August 2026",
    },
    {
      icon: <BookCheck size={60} />,
      title: "Capstone: EcoPoints",
      description:
        "In partial fulfillment of the Requirements for the program Diploma in Information Technology. Presented and created EcoPoints as part of my achievements.",
      year: "September 2025 - July 2026",
    },
    {
      icon: <Medal size={60} />,
      title: "Academic Honors",
      description:
        "Consistently recognized as part of the Dean's List / President's List",
      year: "September 2025 - July 2026",
    },
  ];

  // Popup state: null = closed, otherwise the certificate being viewed
  const [selected, setSelected] = useState(null);

  // While the popup is open: close on Escape and lock the page scroll
  useEffect(() => {
    if (!selected) return;
    const onKey = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section
      id="achievements"
      className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ROOT DIV */}
      <div className="flex flex-col items-center bg-slate-900/60 p-4 rounded-xl h-full w-full max-w-7xl">
        {/* Dashed Border */}
        <div className="w-full max-w-7xl rounded-xl border border-dashed border-slate-800 p-6 text-center text-slate-500">
          {/* ACHIEVEMENTS SECTION */}
          {/* HEADER */}
          <h1 className="mb-8 flex justify-center w-full max-w-[80rem] text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Achievements
          </h1>
          {/* ACHIEVEMENTS: build your achievements part here, below the certificates */}
          {/* Inner Card */}
          <div className="mt-2 grid w-full max-w-7xl gap-4 md:grid-cols-2">
            {listAchievements.map((achievement) => (
              <div
                key={achievement.title}
                className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 text-center transition-colors duration-300 hover:border-indigo-500/40 md:last:odd:col-span-2"
              >
                <div className="group flex flex-col items-center justify-center rounded-lg bg-slate-950/40 p-4">
                  <span className="mt-4 transition-all duration-300 ease-out text-slate-500 group-hover:-translate-y-2 group-hover:text-indigo-300">
                    {achievement.icon}
                  </span>
                  <h3 className="mb-4 pt-4 text-lg md:text-2xl font-bold text-slate-100">
                    {achievement.title}
                  </h3>
                  <p className="mb-2 text-xs md:text-sm font-semibold text-slate-100">
                    {achievement.description}
                  </p>
                  <p className="mb-4 text-xs md:text-sm font-normal text-slate-100">
                    {achievement.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Certifications */}
          <h2 className="flex justify-center mt-12 w-full max-w-[80rem] text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
            Certifications
          </h2>
          {/* Horizontal scroller */}
          <div className="w-full snap-x snap-mandatory scroll-px-2 overflow-x-auto px-2 pt-8 pb-4 mb-2 [scrollbar-width:thin] [scrollbar-color:#475569_transparent]">
            <div className="flex w-max gap-4 mb-4">
              {listCertificates.map((certs) => (
                <CertificateCard
                  key={certs.source}
                  certs={certs}
                  onView={setSelected}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CERTIFICATE POPUP */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selected.course}
            className="flex h-[85vh] w-full max-w-5xl flex-col rounded-xl border border-slate-800 bg-slate-900 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-100">
                {selected.course}
              </h3>
              <div className="flex items-center gap-2">
                <a
                  href={selected.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-slate-500/60 px-3 py-1.5 text-xs md:text-sm text-slate-100 transition-colors duration-300 hover:bg-indigo-600"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500/60 text-slate-100 transition-colors duration-300 hover:bg-indigo-600"
                >
                  ✕
                </button>
              </div>
            </div>
            {/* PDF viewer */}
            <object
              data={selected.src}
              type="application/pdf"
              className="h-full w-full rounded-lg bg-white"
            >
              <p className="p-6 text-slate-700">
                Your browser can't preview PDFs here.{" "}
                <a
                  href={selected.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Open the certificate instead
                </a>
                .
              </p>
            </object>
          </div>
        </div>
      )}
    </section>
  );
}
