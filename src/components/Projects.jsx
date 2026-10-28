export default function Projects() {
  // Project1 Bullet Points
  const project1 = [
    "▪ Testing and Defect Tracking of the software",
    "▪ Created the layout, design, and the contents of the website",
    "▪ Implemented an easy and interactive UI/UX design on the website",
    "▪ Ensuring that the software of the project is up to standards and complies with the necessary requirements",
  ];

  // Project2 Bullet Points
  const project2 = [
    "▪ Monitors students attendance in the meeting that are in their unique class code",
    "▪ Identifies the students status based on the specific time they entered in the meeting",
    "▪ Retrieves the Google Meet conference ID for their class that records from any connected Google Account",
    "▪ Retrieving the students information that are enrolled in a unique class code after every Google Meet Class to record and summarize the data",
  ];

  // Project3 Bullet Points
  const project3 = [
    "▪ Education & Projects",
    "▪ Professional Experiences ",
    "▪ Set of Tech & Soft Skills",
    "▪ Showcase of Achievements",
  ];

  // Project4 Bullet Points
  const project4 = [
    "▪ Deployed in itch.io",
    "▪ Entry for the 20 Second Game Jam",
    "▪ First Creation of a Simple Game ",
    "▪ A simple but fun game",
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen mb-6 flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* ROOT DIV */}
      <div className="grid grid-cols-4 gap-4 w-[80rem] items-center justify-center">
        {/* PROJECT #1 (EcoPoints) */}
        <div className="col-span-4 p-4 rounded-lg bg-indigo-500/20">
          <div className="flex flex-col col-span-4 p-8 rounded-lg bg-indigo-600/20">
            <div className="grid grid-cols-4 space-y-2 gap-x-4">
              {/* Project Title */}
              <div className="col-span-4">
                <h2 className="font-normal text-md md:text-md text-indigo-200">
                  Capstone Project ~ Quality Assurance | UI/UX
                </h2>
                <h1 className="font-bold text-4xl md:text-5xl text-indigo-300">
                  Ecopoints
                </h1>
              </div>
              {/* Project Description */}
              <div className="space-y-6 col-span-3 col-start-1 ">
                <p className="text-justify font-normal text-xs md:text-xl text-indigo-200">
                  A web application and prototype machine that encourages
                  students, staffs and professors inside a university to
                  practice recycling plastic bottles to gain digital points.
                  Bridging the gap between environmental action and immediate
                  gratification.
                </p>
                {/* Bullet Points */}
                <ul>
                  {project1.map((item, index) => (
                    // 3. Provide a unique key (use stable IDs instead of index if data changes)
                    <li
                      className="font-normal text-xs md:text-lg text-indigo-200"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-normal text-xs md:text-md text-indigo-300">
                  September 2025 - July 2026
                </p>
              </div>
              {/* IMAGE */}
              <div className="col-start-4">
                <img
                  src="/ecopoints-qr-code.svg"
                  className="justify-self-center rounded-2xl w-[12rem] h-[12rem]"
                />
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT #2 (Focus ~ Student Monitoring System)*/}
        <div className="flex flex-col col-span-4 p-4 rounded-lg bg-indigo-500/20">
          <div className="flex flex-col col-span-4 p-8 rounded-lg bg-indigo-600/20">
            <div className="grid grid-cols-4 space-y-2 gap-x-4">
              {/* Project Title */}
              <div className="col-span-4">
                <h2 className="font-normal text-md md:text-md text-indigo-200">
                  Software Developer
                </h2>
                <h1 className="font-bold text-4xl md:text-5xl text-indigo-300">
                  Focus: Student Monitoring System
                </h1>
              </div>
              {/* Project Description */}
              <div className="space-y-6 col-span-4 col-start-1">
                <p className="text-justify font-normal text-xs md:text-xl text-indigo-200">
                  a web-based extension integrated with Google Meet to monitor
                  the students' attendance within their meeting. It helps
                  professors to monitor their students' attendance by retrieving
                  Google Meet meeting records and synchronizing the students'
                  information with the system's database.
                </p>
                {/* Bullet Points */}
                <ul>
                  {project2.map((item, index) => (
                    // 3. Provide a unique key (use stable IDs instead of index if data changes)
                    <li
                      className="font-normal text-xs md:text-lg text-indigo-200"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-normal text-xs md:text-md text-indigo-300">
                  October 2026
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT #3 (Personal Portfolio)*/}
        <div className="flex flex-col col-span-2 p-4 rounded-lg bg-indigo-500/20">
          <div className="flex flex-col col-span-4 p-8 rounded-lg bg-indigo-600/20">
            <div className="grid grid-cols-4 space-y-2 gap-x-4">
              {/* Project Title */}
              <div className="col-span-4">
                <h2 className="font-normal text-md md:text-md text-indigo-200">
                  Software Developer
                </h2>
                <h1 className="font-bold text-4xl md:text-5xl text-indigo-300">
                  Personal Portfolio
                </h1>
              </div>
              {/* Project Description */}
              <div className="space-y-6 col-span-4 col-start-1">
                <p className="text-justify font-normal text-xs md:text-xl text-indigo-200">
                  a web-based portfolio to showcase my projects, experiences,
                  and skills throughout my journey in the tech industry
                </p>
                {/* Bullet Points */}
                <ul>
                  {project3.map((item, index) => (
                    // 3. Provide a unique key (use stable IDs instead of index if data changes)
                    <li
                      className="font-normal text-xs md:text-lg text-indigo-200"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-normal text-xs md:text-md text-indigo-300">
                  October 2026
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* PROJECT #4 (Coin Adventure Game) */}
        <div className="flex flex-col col-span-2 p-4 rounded-lg bg-indigo-500/20">
          <div className="flex flex-col col-span-4 p-8 rounded-lg bg-indigo-600/20">
            <div className="grid grid-cols-4 space-y-2 gap-x-4">
              {/* Project Title */}
              <div className="col-span-4">
                <h2 className="font-normal text-md md:text-md text-indigo-200">
                  Game Developer
                </h2>
                <h1 className="font-bold text-4xl md:text-5xl text-indigo-300">
                  Coin Adventure
                </h1>
              </div>
              {/* Project Description */}
              <div className="space-y-6 col-span-4 col-start-1">
                <p className="text-justify font-normal text-xs md:text-xl text-indigo-200">
                  Collect coins in under 20 seconds and beware of dangerous
                  blocks that could end your session
                </p>
                {/* Bullet Points */}
                <ul>
                  {project4.map((item, index) => (
                    // 3. Provide a unique key (use stable IDs instead of index if data changes)
                    <li
                      className="font-normal text-xs md:text-lg text-indigo-200"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="font-normal text-xs md:text-md text-indigo-300">
                  October 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
