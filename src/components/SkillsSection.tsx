const skillCategories = [
  { label: "Languages", items: ["Python", "JavaScript", "HTML", "CSS", "Java", "Kotlin"] },
  { label: "Frameworks", items: ["Django", "Node.js"] },
  { label: "Databases", items: ["MongoDB", "MySQL"] },
  { label: "AI & ML", items: ["OpenCV", "Google Gemini API", "AI Agents"] },
  { label: "Tools", items: ["Git", "GitHub", "Android Studio"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Skills</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-10">Tech Stack</h3>

        <div className="space-y-8">
          {skillCategories.map((cat) => (
            <div key={cat.label}>
              <h4 className="text-sm font-mono text-muted-foreground mb-3">{cat.label}</h4>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-md bg-secondary text-secondary-foreground text-sm font-mono border border-border hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default"
                  >
                    {item}
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

export default SkillsSection;
