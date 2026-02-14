const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// About</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">About Me</h3>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a passionate developer with a strong foundation in Python and full-stack development. I enjoy solving real-world problems through automation and intelligent systems.
          </p>
          <p>
            I believe in learning by building. Every project I create is an opportunity to push my limits and improve technically and strategically.
          </p>
          <p>
            As a team lead, I secured <span className="text-primary font-semibold">1st Place</span> at the RAISE – Rajagiri AI Symposium & Exhibition, where we demonstrated AI-powered rapid application development tools using modern platforms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
