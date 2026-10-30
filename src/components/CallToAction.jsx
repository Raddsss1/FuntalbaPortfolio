import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Briefcase, Code } from "lucide-react";

/* -------------------------------------------------------------------------
   1. EDIT YOUR DETAILS HERE
   Everything you need to change is in these two blocks.
   ------------------------------------------------------------------------- */

// Main text, button, photo and business card
const profile = {
  heading: "Let's Work Together",
  intro:
    "I'm open to internships, entry-level roles and freelance projects. If you like what you see, send me an email and let's talk.",
  ctaLabel: "Email Me",
  ctaHref: "mailto:rodgestevenjude.funtalba@gmail.com",
  // Sample images. Replace with your own files in the /public folder,
  // for example "/profile.jpg" and "/business-card.png".
  photo: {
    src: "/AboutP1.webp",
    alt: "Photo of me",
  },
  card: {
    src: "/FrontBusinessCard.webp",
    alt: "My business card",
    pdf: "/Funtalba-Business-Card-New.pdf", // optional, e.g. "/business-card.pdf". Leave "" to hide the button
  },
};

// Contact details. Add or remove items freely.
// external: true = opens in a new tab (use it for websites like LinkedIn)
const contactInfo = [
  {
    icon: <Mail size={20} />,
    label: "Email",
    value: "rodgestevenjude.funtalba@gmail.com",
    href: "mailto:your.rodgestevenjude.funtalba@gmail.com",
    external: false,
  },
  {
    icon: <Phone size={20} />,
    label: "Phone",
    value: "+63 992 066 4511",
    href: "tel:+639920664511",
    external: false,
  },
  {
    icon: <Briefcase size={20} />,
    label: "LinkedIn",
    value: "steven-funtalba",
    href: "linkedin.com/in/steven-funtalba-0308m/",
    external: true,
  },
  {
    icon: <Code size={20} />,
    label: "GitHub",
    value: "github.com/your-username",
    href: "https://github.com/Raddsss1",
    external: true,
  },
  {
    icon: <MapPin size={20} />,
    label: "Location",
    value: "Metro Manila, Philippines",
    href: "", // empty = shows as plain text, not a link
    external: false,
  },
];

/* -------------------------------------------------------------------------
   2. ONE CONTACT ITEM
   ------------------------------------------------------------------------- */
function ContactItem({ item }) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 text-indigo-300">
        {item.icon}
      </span>
      <span className="min-w-0">
        <span className="block text-xs text-slate-500">{item.label}</span>
        <span className="block truncate text-sm font-semibold text-slate-100">
          {item.value}
        </span>
      </span>
    </>
  );

  const boxStyle =
    "flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-950/40 p-3";

  // No link = plain box
  if (!item.href) return <div className={boxStyle}>{content}</div>;

  return (
    <a
      href={item.href}
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      className={`${boxStyle} transition-colors duration-300 hover:border-indigo-500/40`}
    >
      {content}
    </a>
  );
}

/* -------------------------------------------------------------------------
   3. THE SECTION
   ------------------------------------------------------------------------- */
export default function CallToAction() {
  // Popup state: true = business card is open
  const [cardOpen, setCardOpen] = useState(false);

  // While the popup is open: close on Escape and lock the page scroll
  useEffect(() => {
    if (!cardOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setCardOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [cardOpen]);

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* HEADER */}
      <h2 className="mb-10 flex justify-center w-full max-w-[80rem] text-3xl md:text-6xl font-bold tracking-tight text-slate-50 sm:text-4xl">
        {profile.heading}
      </h2>

      {/* ROOT CARD */}
      <div className="grid w-full max-w-7xl gap-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4 lg:grid-cols-[20rem_1fr]">
        {/* Photo */}
        <div className="rounded-lg bg-slate-950/40 p-4">
          <img
            src={profile.photo.src}
            alt={profile.photo.alt}
            className="aspect-square w-full h-full rounded-lg object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6 rounded-lg bg-slate-950/40 p-6">
          <p className="text-sm md:text-lg leading-relaxed text-slate-400">
            {profile.intro}
          </p>

          {/* Contact list */}
          <div className="grid gap-4 sm:grid-cols-2">
            {contactInfo.map((item) => (
              <ContactItem key={item.label} item={item} />
            ))}
          </div>

          {/* Button + business card */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <a
              href={profile.ctaHref}
              className="rounded-lg bg-indigo-600 px-6 py-4 text-center text-sm md:text-base font-semibold text-white transition-all duration-300 ease-out hover:bg-indigo-500 hover:-translate-y-2"
            >
              {profile.ctaLabel}
            </a>

            <button
              type="button"
              onClick={() => setCardOpen(true)}
              className="group flex items-center gap-4 rounded-lg border border-slate-800 bg-slate-900/60 p-2 text-left transition-colors duration-300 hover:border-indigo-500/40"
            >
              <img
                src={profile.card.src}
                alt={profile.card.alt}
                className="h-16 w-28 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="pr-2">
                <span className="block text-sm font-semibold text-slate-100">
                  My Business Card
                </span>
                <span className="block text-xs text-slate-500">
                  Click to view
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* BUSINESS CARD POPUP */}
      {cardOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setCardOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Business card"
            className="flex max-h-[90vh] w-full max-w-3xl flex-col rounded-xl border border-slate-800 bg-slate-900 p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Popup header */}
            <div className="mb-4 flex items-center justify-between gap-4">
              <h3 className="text-lg md:text-xl font-bold text-slate-100">
                My Business Card
              </h3>
              <div className="flex items-center gap-2">
                {profile.card.pdf && (
                  <a
                    href={profile.card.pdf}
                    download
                    className="rounded-lg bg-slate-500/60 px-3 py-1.5 text-xs md:text-sm text-slate-100 transition-colors duration-300 hover:bg-indigo-600"
                  >
                    Download PDF
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setCardOpen(false)}
                  aria-label="Close"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-500/60 text-slate-100 transition-colors duration-300 hover:bg-indigo-600"
                >
                  ✕
                </button>
              </div>
            </div>
            {/* Card image */}
            <img
              src={profile.card.src}
              alt={profile.card.alt}
              className="max-h-[75vh] w-full rounded-lg object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
