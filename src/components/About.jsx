export default function About() {
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
      className="relative min-h-screen mb-6 flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ROOT DIV */}
      <div className="flex flex-col gap-2 p-4  w-full h-full rounded-lg bg-indigo-500/20">
        {/* Header */}
        <div className="items-center p-2 w-full h-full">
          <h1 className="justify-self-center font-bold text-5xl md:text-6xl text-indigo-300">
            Who am I?
          </h1>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="cols-span-2 w-full h-full">
            {/* Picture Area */}
            <div className="p-2 w-full h-full rounded-bl-lg bg-indigo-600/20">
              <div>
                <img src="" alt="Sample Picture" />
              </div>
            </div>
          </div>
          <div className=" cols-span-2 p-2 space-y-2 w-full text-justify h-full rounded-lg bg-indigo-500/20">
            {/* Personality */}
            <div className="group p-4 space-y-4 rounded-tl-lg rounded-tr-lg bg-indigo-500/20">
              <h1 className="font-bold justify-self-center text-2xl md:text-3xl text-indigo-200 transition-all duration-500 ease-out group-hover:text-5xl">
                Personality
              </h1>
              <p className="font-normal text-xs md:text-lg text-indigo-100">
                A guy who is just going through everyday entering a room with
                his head held up high, even if he's not the brightest he could
                outshine everyone with his personality.
              </p>
              <p className="font-normal text-xs md:text-lg text-indigo-100">
                Sometimes a little shy, most of the times a loud mouth where he
                says the first things that come to mind
              </p>
              <p className="font-normal text-xs md:text-lg text-indigo-100">
                A person who like to speak the truth, who is bluntly honest and
                a realist
              </p>
            </div>
            {/* Hobbies */}
            <div className="group p-2 space-y-4 space-x-2 bg-indigo-500/20">
              <h1 className="font-bold justify-self-center text-2xl md:text-3xl text-indigo-200 transition-all duration-500 ease-out group-hover:text-5xl">
                Hobbies
              </h1>
              {/* Bento Grid Root */}
              <div className="grid grid-cols-3 gap-4 m-4">
                <div className="border border-white/20 col-span-2 rounded-lg p-2 transition-all duration-300 ease-in hover:border-white hover:bg-indigo-400/20">
                  <p className="font-normal justify-self-center text-xs md:text-lg text-indigo-100">
                    Watch and Analyze Movies
                  </p>
                </div>
                {listHobbies.map((listHobbies, index) => (
                  <div className="border border-white/20 rounded-lg p-2 transition-all duration-300 ease-in hover:border-white hover:bg-indigo-400/20">
                    <p
                      key={index}
                      className="font-normal justify-self-center text-xs md:text-lg text-indigo-100"
                    >
                      {listHobbies}
                    </p>
                  </div>
                ))}
                <div className="border border-white/20 col-span-2 rounded-lg p-2 transition-all duration-300 ease-in hover:border-white hover:bg-indigo-400/20">
                  <p className="font-normal justify-self-center text-xs md:text-lg text-indigo-100">
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
