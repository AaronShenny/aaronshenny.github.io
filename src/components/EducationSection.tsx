const EducationSection = () => {
  const education = [
    {
      institution: "Rajagiri College of Social Sciences",
      degree: "Integrated MCA",
      period: "2025 – 2030",
    },
    {
      institution: "Mar Thoma Public School",
      degree: "12th Grade – A1 Grade",
      period: "",
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Education</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Education</h3>

        <div className="space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="card-glow rounded-lg p-6">
              <h4 className="text-lg font-semibold text-foreground">{edu.institution}</h4>
              <p className="text-primary font-mono text-sm mt-1">{edu.degree}</p>
              {edu.period && (
                <p className="text-muted-foreground text-xs mt-2 font-mono">{edu.period}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
