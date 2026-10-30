import { Mail, Phone, MapPin, Briefcase, Code, ArrowUp } from "lucide-react";

/* -------------------------------------------------------------------------
   1. EDIT YOUR DETAILS HERE
   ------------------------------------------------------------------------- */

// Name and short line under it
const footerInfo = {
  name: "Rodge Steven Jude D. Funtalba",
  tagline: "Software developer, Aspiring Game Developer",
};

// Quick links. href must match the `id` of each section on your page.
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

// Contact details. Add or remove items freely.
// external: true = opens in a new tab (use it for websites like LinkedIn)
const contactLinks = [
  {
    icon: <Mail size={18} />,
    label: "rodgestevenjude.funtalba@gmail.com",
    href: "mailto:rodgestevenjude.funtalba@gmail.com",
    external: false,
  },
  {
    icon: <Phone size={18} />,
    label: "+63 992 066 4511",
    href: "tel:+639920664511",
    external: false,
  },
  {
    icon: <Briefcase size={18} />,
    label: "LinkedIn",
    href: "linkedin.com/in/steven-funtalba-0308m/",
    external: true,
  },
  {
    icon: <Code size={18} />,
    label: "GitHub",
    href: "https://github.com/Raddsss1",
    external: true,
  },
  {
    icon: <MapPin size={18} />,
    label: "Metro Manila, Philippines",
    href: "", // empty = plain text, not a link
    external: false,
  },
];

/* -------------------------------------------------------------------------
   2. THE FOOTER
   ------------------------------------------------------------------------- */
export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 pt-16 pb-8 text-slate-400">
      <div className="mx-auto max-w-7xl">
        {/* TOP: 3 columns */}
        <div className="grid gap-10 md:grid-cols-3">
          {/* Name + tagline */}
          <div>
            <h2 className="text-2xl font-bold text-slate-50">
              {footerInfo.name}
            </h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed">
              {footerInfo.tagline}
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className=" mb-4 text-sm font-semibold text-slate-100">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-indigo-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-slate-100">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-3 transition-colors duration-300 hover:text-indigo-300"
                    >
                      <span className="text-indigo-300">{item.icon}</span>
                      {item.label}
                    </a>
                  ) : (
                    <span className="flex items-center gap-3">
                      <span className="text-indigo-300">{item.icon}</span>
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {footerInfo.name}. All rights reserved.
          </p>
          <p>Built with React, Vite and Tailwind CSS</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-slate-300 transition-colors duration-300 hover:border-indigo-500/40 hover:text-indigo-300"
          >
            Back to top
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
