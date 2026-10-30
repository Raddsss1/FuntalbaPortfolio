import { useState, useEffect } from "react";

// Sample pictures. Swap each src for your own, e.g. "/about/photo-1.jpg"
// (put your files in the /public/about folder). Add or remove items freely.
const PHOTOS = [
  {
    src: "/AboutP1.webp",
    alt: "AboutPicture1",
  },
  {
    src: "/AboutP2.webp",
    alt: "AboutPicture2",
  },
  {
    src: "AboutP3.webp",
    alt: "AboutPicture3",
  },
  {
    src: "/AboutP4.webp",
    alt: "AboutPicture4",
  },
  {
    src: "/AboutP5.webp",
    alt: "AboutPicture5",
  },
  {
    src: "/AboutP6.webp",
    alt: "AboutPicture6",
  },
  {
    src: "/AboutP7.webp",
    alt: "AboutPicture7",
  },
  {
    src: "/AboutP8.webp",
    alt: "AboutPicture8",
  },
  {
    src: "/AboutP9.webp",
    alt: "AboutPicture9",
  },
];

export default function About() {
  // Carousel state
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const prev = () => setCurrent((current - 1 + PHOTOS.length) % PHOTOS.length);
  const next = () => setCurrent((current + 1) % PHOTOS.length);

  // Auto-advance every 5s (pauses while hovering)
  useEffect(() => {
    if (paused) return;
    const id = setInterval(
      () => setCurrent((c) => (c + 1) % PHOTOS.length),
      5000,
    );
    return () => clearInterval(id);
  }, [paused]);

  const listHobbies = [
    "Play the Guitar",
    "Walk and Think",
    "Listen to Music",
    "Play Video Games",
    "Photography",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-slate-950 text-slate-200"
    >
      {/* ROOT DIV */}
      <div className="flex flex-col p-4 rounded-xl max-w-7xl border border-slate-800 bg-slate-900/60 transition-colors duration-300 hover:border-indigo-500/40">
        {/* Header */}
        <div className="items-center p-2 w-full h-full">
          <h1 className="justify-self-center font-bold text-5xl md:text-6xl text-slate-50">
            Who am I?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="cols-span-2 w-full h-full">
            {/* Picture Area */}
            <div className="p-2 w-full h-full rounded-lg border border-slate-800 bg-slate-950/40 overflow-hidden">
              <div
                className="relative h-full max-h-[34rem] overflow-hidden rounded-lg"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* Slides */}
                <div
                  className="flex h-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  {PHOTOS.map((photo) => (
                    <img
                      key={photo.src}
                      src={photo.src}
                      alt={photo.alt}
                      className="h-full w-full shrink-0 object-cover"
                    />
                  ))}
                </div>
                {/* Arrows */}
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous picture"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-xl text-slate-100 transition-colors hover:bg-indigo-500/60"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next picture"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-slate-950/70 text-xl text-slate-100 transition-colors hover:bg-indigo-500/60"
                >
                  ›
                </button>
                {/* Dots */}
                <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                  {PHOTOS.map((photo, index) => (
                    <button
                      key={photo.src}
                      type="button"
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to picture ${index + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === current
                          ? "w-6 bg-indigo-400"
                          : "w-2 bg-slate-500 hover:bg-slate-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=" cols-span-2 p-2 space-y-2 w-full text-justify h-full rounded-lg bg-slate-950/40">
            {/* Personality */}
            <div className="group p-4 space-y-4 rounded-lg border border-slate-800 bg-slate-900/60">
              <h1 className="font-bold justify-self-center text-2xl md:text-3xl text-indigo-300 transition-all duration-500 ease-out group-hover:text-5xl">
                Personality
              </h1>
              <p className="font-normal text-xs md:text-lg text-slate-400">
                A guy who is just going through everyday entering a room with
                his head held up high, even if he's not the brightest he could
                outshine everyone with his personality.
              </p>
              <p className="font-normal text-xs md:text-lg text-slate-400">
                Sometimes a little shy, most of the times a loud mouth where he
                says the first things that come to mind
              </p>
              <p className="font-normal text-xs md:text-lg text-slate-400">
                A person who like to speak the truth, who is bluntly honest and
                a realist
              </p>
            </div>
            {/* Hobbies */}
            <div className="group p-2 space-y-4 space-x-2 rounded-lg border border-slate-800 bg-slate-900/60">
              <h1 className="font-bold justify-self-center text-2xl md:text-3xl text-indigo-300 transition-all duration-500 ease-out group-hover:text-5xl">
                Hobbies
              </h1>
              {/* Bento Grid Root */}
              <div className="grid grid-cols-3 gap-4 m-4">
                <div className="border border-slate-800 col-span-2 rounded-lg p-2 transition-all duration-300 ease-in hover:border-indigo-500/40 hover:bg-indigo-500/10">
                  <p className="font-normal justify-self-center text-xs md:text-lg text-slate-300">
                    Watch and Analyze Movies
                  </p>
                </div>
                {listHobbies.map((listHobbies, index) => (
                  <div className="border border-slate-800 rounded-lg p-2 transition-all duration-300 ease-in hover:border-indigo-500/40 hover:bg-indigo-500/10">
                    <p
                      key={index}
                      className="font-normal justify-self-center text-xs md:text-lg text-slate-300"
                    >
                      {listHobbies}
                    </p>
                  </div>
                ))}
                <div className="border border-slate-800 col-span-2 rounded-lg p-2 transition-all duration-300 ease-in hover:border-indigo-500/40 hover:bg-indigo-500/10">
                  <p className="font-normal justify-self-center text-xs md:text-lg text-slate-300">
                    Explore Places
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
