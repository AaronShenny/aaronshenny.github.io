import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder – no backend
    alert("Thanks for reaching out! (This is a placeholder – connect a backend to send messages.)");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-mono text-primary text-sm tracking-widest uppercase mb-2">// Contact</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Get in Touch</h3>

        <div className="flex flex-wrap gap-4 mb-10">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>GitHub</span>
            <span className="text-primary">↗</span>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>LinkedIn</span>
            <span className="text-primary">↗</span>
          </a>
          <a
            href="mailto:hello@example.com"
            className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
          >
            <span>Email</span>
            <span className="text-primary">↗</span>
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
            className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all resize-none"
            required
          />
          <button
            type="submit"
            className="font-mono text-sm px-6 py-3 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-opacity glow"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
