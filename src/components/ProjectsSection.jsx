import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Jernih",
    description: "A web app for real-time water quality monitoring, pollution reporting, and interactive data visualization.",
    image: "/projects/Jernih.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://jernih.vercel.app",
    githubUrl: "https://github.com/Allen-pie/Jernih_Frontend",
  },
  {
    id: 2,
    title: "DiamondCut Motors",
    description: "An online showroom platform with a car catalog and pricing details",
    image: "/projects/CarShowroom.jpeg",
    tags: ["HTML", "CSS", "JS"],
    // demoUrl: "",
    githubUrl: "https://github.com/vins-github/Car-Showroom"
  },
  {
    id: 3,
    title: "Subway Surfer Control With Your Hand",
    description: "A computer vision project to control the Subway Surfer game using real-time hand gesture recognition.",
    image: "/projects/subwaysurf (1).png",
    tags: ["Python", "OpenCV", "MediaPipe"],    
    // demoUrl: "#",
    githubUrl: "https://github.com/vins-github/subwaySurf",
  },
  {
    id: 4,
    title: "To-Do List",
    description: "To do list web app with task management features including add, delete, and mark as complete.",
    image: "/projects/To-do list.png",
    tags: ["HTML", "CSS", "JS"],    
    demoUrl: "https://vins-github.github.io/-CodingCamp-290925-ArvinDewonoto/",
    githubUrl: "https://github.com/vins-github/-CodingCamp-290925-ArvinDewonoto",
  },
  {
    id: 5,
    title: "Reflected XSS Vulnerability Analysis",
    description: "Security analysis project demonstrating reflected XSS vulnerability detection and exploitation using Burp Suite on PortSwigger Web Security Academy lab environment.",
    image: "/projects/xss-analysis.png",
    tags: ["Burp Suite", "Security", "XSS", "Penetration Testing"],    
    demoUrl: "https://drive.google.com/file/d/1yphfINgZYCf8v6LNMN9eJV6KyUSzuAsQ/view?usp=sharing",
    // githubUrl:,
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <ExternalLink size={20} />
                        </a>
                      ) : null}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/vins-github"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};