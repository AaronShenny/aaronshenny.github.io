const CertificationsSection = () => {
  const certs = [
    "5-Day AI Agents Intensive Course – Google (Kaggle)",
    "MDC | Soft Skill to Secure a Job – Rajagiri College",
  ];

  return (
    <section id="certifications" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Certifications</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Certifications</h3>

        <div className="space-y-3">
          {certs.map((cert, i) => (
            <div key={i} className="card-glow rounded-lg p-5 flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
              <p className="text-foreground text-sm">{cert}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
