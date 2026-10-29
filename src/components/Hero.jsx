import { DotIcon } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* ROOT DIV */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto w-full">
        {/* MAIN HERO SECTION */}
        <div className="flex flex-col space-y-4 justify-center md:item-start text-center md:text-left">
          {/* Top Part */}
          <div className="flex flex-row items-center justify-center">
            <h2 className="font-light text-lg md:text-xl">
              SOFTWARE DEVELOPER
            </h2>
            <DotIcon size={30} />
            <h2 className="font-light text-lg md:text-xl">
              ASPIRING GAME DEVELOPER
            </h2>
          </div>
          {/* Middle Part */}
          <div className="flex flex-col items-center justify-center space-y-4 font-medium">
            <h1 className="text-4xl md:text-7xl">Rodge Steven</h1>
            <h1 className="text-4xl md:text-7xl">Jude D. Funtalba</h1>
            <h2 className="text-sm md:text-xl font-light">
              Information Technology Student
            </h2>
          </div>
          {/* Bottom Part */}
          {/* Buttons */}
          <div className="flex items-center space-x-4 justify-center cursor-pointer">
            <a
              href="#projects"
              className="justify-self-center rounded-lg bg-indigo-500/20 text-sm font-bold p-4 w-[8rem] h-full transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-2"
            >
              View Projects
            </a>
            <a
              href="#footer"
              className="justify-self-center rounded-lg bg-indigo-500/20 text-sm font-bold p-4 w-[8rem] h-full transition-all duration-300 hover:bg-indigo-600 hover:-translate-y-2"
            >
              Get in Touch
            </a>
          </div>
        </div>
        {/* RIGHT COLUMN */}
        <div className="flex items-center justify-center">
          <div className="border border-solid border-slate-800 bg-slate-900/60 border-x-8 flex items-center overflow-hidden justify-center px-2 py-2 rounded-[8rem] w-[20rem] h-[25rem] md:w-[30rem] md:h-[35rem]">
            <img
              className="w-[20rem] h-[25rem] md:w-full md:h-[40rem]"
              src="/graduate-photo-web.JPG"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
