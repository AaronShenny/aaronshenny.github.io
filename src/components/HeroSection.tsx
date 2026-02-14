import { useEffect, useState } from "react";

const phrases = [
  "Building intelligent systems.",
  "Automating the mundane.",
  "Shipping full-stack apps.",
  "Exploring AI frontiers.",
];

const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentPhrase(phrase.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
          if (charIndex + 1 === phrase.length) {
            setTimeout(() => setIsDeleting(true), 1500);
          }
        } else {
          setCurrentPhrase(phrase.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
          if (charIndex <= 1) {
            setIsDeleting(false);
            setPhraseIndex((p) => (p + 1) % phrases.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(185 85% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 85% 50% / 0.3) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, hsl(185 85% 50%), transparent 70%)' }} />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <p className="font-mono text-primary text-sm mb-4 animate-fade-in-up opacity-0 tracking-widest uppercase">
          Welcome
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up opacity-0 animate-delay-100 text-foreground">
          Aaron <span className="text-gradient">Shenny</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-6 animate-fade-in-up opacity-0 animate-delay-200">
          AI-Focused Developer | Full-Stack Builder
        </p>
        <p className="text-sm text-muted-foreground mb-10 animate-fade-in-up opacity-0 animate-delay-300 max-w-xl mx-auto leading-relaxed">
          I build intelligent systems and scalable web applications. I'm currently pursuing an Integrated Master of Computer Applications (MCA) at Rajagiri College of Social Sciences. My focus is on AI, automation, and full-stack development.
        </p>
        <div className="font-mono text-primary text-sm md:text-base animate-fade-in-up opacity-0 animate-delay-400">
          <span className="text-muted-foreground">{">"} </span>
          <span className="cursor-blink">{currentPhrase}</span>
        </div>
        <p className="text-xs text-muted-foreground/60 mt-8 italic animate-fade-in-up opacity-0 animate-delay-400">
          Automating stuff. Making life easier.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
