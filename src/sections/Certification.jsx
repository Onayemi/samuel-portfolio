import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Laravel and React Full-Stack Development",
    description:
      "Comprehensive course on building full-stack web applications using Laravel for the backend and React for the frontend.",
    tags: ["React", "Laravel", "Typescript", "Rest API", "Mysql"],
    link: "https://www.udemy.com/certificate/UC-af9c6ca9-8126-48c1-9521-e2e4c583e2c7/",
  },
  {
    title: "React, Next.js & TypeScript Course",
    description:
      "Comprehensive course on building scalable web applications using React, Next.js, and TypeScript.",
    tags: ["React", "Typescript", "Next.js", "Mysql", "Shadcn UI", "Tailwind"],
    link: "https://www.udemy.com/certificate/UC-a129dfc8-43b0-46d6-b863-6975a6e77106/",
  },
  {
    title: "Data Analysis with SPSS, Excel & Tableau",
    description:
      "In-depth course on data analysis techniques using SPSS, Excel, and Tableau for effective data visualization and interpretation.",
    tags: ["SPSS", "Excel", "SQL", "Tableau", "Power BI"],
    link: "https://www.udemy.com/certificate/UC-848ee881-21a8-429b-926c-95f650d48759/",
  },
  {
    title: "AI and Machine Learning",
    description:
      "AI and Machine Learning course covering fundamental concepts, algorithms, and practical applications in various domains.",
    tags: [
      "AI",
      "ChatGPT",
      "Image Genration",
      "Animated Avatar",
      "ElevenLab Voice AI",
    ],
    link: "https://www.udemy.com/certificate/UC-ee69b2e5-2611-4e4e-a7e5-fd224c572f63/",
  },
  {
    title: "C# and .NET Development",
    description:
      "Comprehensive course on C# programming and .NET framework for building robust applications.",
    tags: ["C#", "LINQ", "OOP", "ASP.NET", "Entity Framework", "SQL Server"],
    link: "https://www.udemy.com/certificate/UC-bb370106-5220-4e26-9ce0-fa36f938a994/",
  },
];

export const Certification = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Courses
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Courses &
            <span className="font-serif italic font-normal text-white">
              {" "}
              Certifications
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Completed multiple courses on Udemy and other online platforms,
            including:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </a>
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
