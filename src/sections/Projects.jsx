import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "IT Consultant Firm",
    description:
      "Remlex Technologies IT solutions platform offering web development, digital marketing, and IT consulting services for businesses",
    image: "./projects/remlex.png",
    tags: [
      "React",
      "Inertia.js",
      "Laravel",
      "Typescript",
      "Google API Integration",
      "LocationAPI Integration",
      "Mysql",
      "Tailwind",
      "Shadcn UI",
    ],
    link: "https://remlextech.com/",
    github: "#",
  },
  {
    title: "Singles Platform",
    description:
      "Gen21singles is a dating platform that connects individuals seeking meaningful relationships, offering a user-friendly interface, advanced matching algorithms, and secure communication features.",
    image: "./projects/gen218.png",
    tags: [
      "React",
      "Inertia.js",
      "Laravel",
      "Typescript",
      "Google API Integration",
      "Mysql",
      "Tailwind",
      "Shadcn UI",
    ],
    link: "https://gen218singles.com/",
    github: "#",
  },
  {
    title: "Tech. Expert",
    description:
      "A comprehensive IT solutions platform offering web development, digital marketing, and IT consulting services for businesses of all sizes.",
    image: "./projects/yemtechit-project.png",
    tags: [
      "React",
      "Laravel",
      "Typescript",
      "API Integration",
      "Mysql",
      "Tailwind",
      "Shadcn UI",
    ],
    link: "https://yemtechit.com/",
    github: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A scalable e-commerce platform featuring product management, shopping cart, payment integration, and order tracking.",
    image: "./projects/shadowguard.png",
    tags: ["Wordpress", "Javascript", "online paymen", "Mysql", "Hubspot"],
    link: "https://shadowguardinc.com/",
    github: "#",
  },
  {
    title: "Logistics Company Website",
    description:
      "Logistics and transportation company website with booking system, shipment tracking, and customer portal.",
    image: "./projects/routeco.png",
    tags: ["React", "Laravel", "Mysql", "Typescript", "Tailwind", "Shadcn UI"],
    link: "https://routecodesystemsltd.ca/",
    github: "#",
  },
  {
    title: "Web Hosting and VPS",
    description:
      "Web Hosting, VPS Hosting, and integrations with WHMCS for seamless client management.",
    image: "./projects/seelhosting-project.png",
    tags: ["Laravel", "Socket.io", "Mysql", "WHMCS", "Typescript", "Shadcn UI"],
    link: "https://seelhosting.ca/",
    github: "#",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that showcase my skills and passion for technology,
            designed to solve real-world problems
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    target="_blank"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
