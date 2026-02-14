const roadmapItems = [
  "Data Structures & Algorithms (Python)",
  "Machine Learning fundamentals",
  "Deep Learning",
  "Computer Vision",
  "Building intelligent AI assistants",
];

const AIRoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Roadmap</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">My AI Journey</h3>
        <p className="text-muted-foreground mb-8 text-sm">
          I am currently focused on mastering:
        </p>

        <div className="relative pl-6 border-l border-primary/30 space-y-6">
          {roadmapItems.map((item, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-background border-2 border-primary" />
              <p className="text-foreground text-sm">{item}</p>
            </div>
          ))}
        </div>

        <p className="text-muted-foreground text-sm mt-10 italic">
          My long-term goal is to build advanced AI systems that solve meaningful real-world problems.
        </p>
      </div>
    </section>
  );
};

export default AIRoadmapSection;
