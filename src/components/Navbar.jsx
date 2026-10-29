import { Clover, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <navbar className="fixed top-0 z-50 bg-slate-900/40 w-full transition-all duration-300 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* NAME */}
          <a
            href="#"
            className="group flex p-2 gap-2 items-center font-medium text-lg"
          >
            <h1 className="transition-all duration-300 text-indigo-300 group-hover:-translate-y-2 group-hover:text-white">
              Rodge
            </h1>
            <h1 className="transition-all duration-300 text-white group-hover:-translate-y-2 group-hover:text-indigo-300">
              Funtalba
            </h1>
            <span className="transition-all duration-300 text-white group-hover:-translate-y-2 group-hover:text-indigo-300">
              <Clover size={28} />
            </span>
          </a>
          {/* NavLinks */}
          <div className="hidden md:flex p-2 flex space-x-6 lg:space-x-8 font-light text-md">
            <a
              href="#about"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Projects
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Experience
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Certificates
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Education
            </a>
            <a
              href="#achievements"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Achievements
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 text-sm lg:text-base transition-all ease-out duration-300 hover:text-indigo-400 hover:-translate-y-2"
            >
              Skills
            </a>
          </div>
          {/* MENU BUTTON */}
          <button
            className="md:hidden items-center p-2 text-gray-300 hover:text-white " //focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>
      {/* MOBILE MENU */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-4 sm:space-y-6">
            <a
              href="#about"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Projects
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Certificates
            </a>
            <a
              href="#experience"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Experience
            </a>
            <a
              href="#education"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Education
            </a>
            <a
              href="#achievements"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Achievements
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white text-sm lg:text-base transition-colors duration-300"
            >
              Skills
            </a>
          </div>
        </div>
      )}
    </navbar>
  );
}
