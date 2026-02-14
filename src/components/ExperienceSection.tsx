const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Experience</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Work Experience</h3>

        <div className="card-glow rounded-lg p-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
            <h4 className="text-lg font-semibold text-foreground">Campus Ambassador – Perplexity</h4>
            <span className="font-mono text-xs text-muted-foreground mt-1 sm:mt-0">Oct 2025 – Nov 2025</span>
          </div>
          <p className="text-xs text-primary font-mono mb-3">Remote</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            I contributed to AI community outreach, promoted emerging AI tools, and engaged with students to introduce practical AI applications.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
