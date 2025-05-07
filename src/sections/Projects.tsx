import Image from "next/image";
import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";

const portfolioProjects = [
  {
    company: "Acme Corp",
    year: "2022",
    title: "Dark Saas Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/4k7IdSLxh6w",
    image: darkSaasLandingPage,
  },
  {
    company: "Innovative Co",
    year: "2021",
    title: "Light Saas Landing Page",
    results: [
      { title: "Boosted sales by 20%" },
      { title: "Expanded customer reach by 35%" },
      { title: "Increased brand awareness by 15%" },
    ],
    link: "https://youtu.be/7hi5zwO75yc",
    image: lightSaasLandingPage,
  },
  {
    company: "Quantum Dynamics",
    year: "2023",
    title: "AI Startup Landing Page",
    results: [
      { title: "Enhanced user experience by 40%" },
      { title: "Improved site speed by 50%" },
      { title: "Increased mobile traffic by 35%" },
    ],
    link: "https://youtu.be/Z7I5uSRHMHg",
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <div>
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center">
            Real-World Results
          </p>
        </div>

        <h2>Featured Projects</h2>
        <p>See how I transformed concepts into engaging digital experiences</p>

        <div>
          {portfolioProjects.map((project, index) => (
            <div key={index} className="my-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-500">{project.company}</span>
                <span className="text-gray-500">{project.year}</span>
              </div>

              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <hr className="my-4" />

              <ul className="mb-4">
                {project.results.map((result, i) => (
                  <li key={i} className="text-gray-700">
                    - {result.title}
                  </li>
                ))}
              </ul>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition">
                  View Live Site
                </button>
              </a>

              <div className="mt-4">
                <Image src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
