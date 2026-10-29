export default function Certificates() {
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

  // Certificate Card

  function CertificateCard({ certs }) {
    const { image } = certs;
    return (
      <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-2 transition-all ease-out duration-300 hover:border-indigo-500/40 hover:-translate-y-6">
        <div className="flex flex-col p-4 rounded-lg bg-slate-950/40 ">
          <img src={image.src} alt={image.alt} />
          {/* Heading/Title */}
          <h3 className="pt-4 text-lg md:text-xl font-bold text-slate-100">
            {certs.course}
          </h3>
          <p className="text-xs md:text-sm font-semibold text-slate-100 mb-2">
            {certs.company}
          </p>
          <p className="text-xs md:text-sm font-normal text-slate-100 mb-4">
            {certs.date}
          </p>
          <a
            href={certs.src}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-500/60 cursor-pointer transition-all duration-300 group-hover:bg-indigo-600"
          >
            {certs.alt}
          </a>
        </div>
      </div>
    );
  }

  return (
    <section
      id="certificates"
      className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ROOT DIV */}
      <div className="flex flex-col items-center bg-slate-900/60 p-12 rounded-xl h-full max-w-7xl">
        <h2 className="flex justify-center w-full max-w-[80rem] mb-10 text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
          Certifications
        </h2>
        <div className="max-h-[60vh] overflow-y-auto px-2 pt-8 [scrollbar-width:thin] [scrollbar-color:#475569_transparent]">
          <div className="grid md:grid-cols-4 gap-4">
            {listCertificates.map((certs) => (
              <CertificateCard key={certs.source} certs={certs} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
