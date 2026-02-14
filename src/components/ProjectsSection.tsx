const projects = [
  {
    title: "AI EventAgent",
    subtitle: "Hackathon Project (Google X Kaggle)",
    description:
      "I designed and developed an AI-powered assistant to help students and faculty quickly discover and navigate events efficiently.",
    tech: ["Python", "Google Gemini"],
  },
  {
    title: "Pixora",
    subtitle: "Cloud Album Sharing Platform",
    description:
      "I built Pixora, a cloud-based album sharing platform that allows users to create and share photo albums with a secure backend architecture.",
    tech: ["Django", "GitHub"],
  },
  {
    title: "AI Rapid Application Demo",
    subtitle: "RAISE Exhibition Winner – 1st Prize",
    description:
      "As a team lead, I coordinated and presented rapid web application development using Firebase Studio and Replit, demonstrating scalable application building. We secured 1st Prize in the competition.",
    tech: ["Firebase Studio", "Replit"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Projects</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Featured Projects</h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={i} className="card-glow rounded-lg p-6 flex flex-col">
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary font-mono font-bold text-sm">0{i + 1}</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-1">{project.title}</h4>
              <p className="text-xs text-primary font-mono mb-3">{project.subtitle}</p>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
