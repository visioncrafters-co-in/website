import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { servicesCatalog } from "@/data/services";

const Home = () => {
  const [counters, setCounters] = useState({ projects: 0, clients: 0, interns: 0, years: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const animateCounter = (target: number, key: keyof typeof counters, duration: number = 2000) => {
      const start = 0;
      const increment = target / (duration / 16);
      let current = start;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCounters((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 16);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(60, "projects");
            animateCounter(40, "clients");
            animateCounter(70, "interns");
            animateCounter(1, "years");
          }
        });
      },
      { threshold: 0.5 }
    );

    const counterSection = document.getElementById("counter-section");
    if (counterSection) observer.observe(counterSection);

    return () => observer.disconnect();
  }, []);

  const domains = useMemo(() => servicesCatalog.slice(0, 6), []);

  return (
    <div className="min-h-screen bg-background animated-bg">
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="gradient-text">Shaping Your Vision</span>
                <br />
                <span className="text-foreground font-bold">Into Reality</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                We craft world-class <span className="text-primary font-bold">Websites</span>, 
                <span className="text-secondary font-bold"> Mobile Apps</span>, 
                <span className="text-accent font-bold"> Digital Marketing</span> & 
                <span className="text-info font-bold"> Software Solutions</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 font-semibold"
                >
                  <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                    Start Service <ArrowRight className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 font-semibold"
                >
                  <a href="https://wa.me/919626051320" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Our Domains Section */}
        <section className="py-24 relative bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="gradient-text">Our Domains</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive digital solutions tailored to your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domains.map((domain, idx) => (
                <button
                  key={domain.slug}
                  type="button"
                  onClick={() => navigate(`/services?focus=${domain.slug}`)}
                  className="premium-card p-8 group cursor-pointer hover-snippet relative text-left focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none transition-transform"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                  aria-label={`Explore ${domain.title} services`}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <domain.icon className="w-14 h-14 text-primary mb-6 group-hover:scale-110 group-hover:text-secondary transition-all duration-300" />
                  <h3 className="text-2xl font-bold mb-3">{domain.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">
                    {domain.shortDescription}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                    View in Services <ArrowRight className="w-4 h-4" />
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Counters */}
        <section id="counter-section" className="py-24 relative overflow-hidden bg-background">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                <span className="gradient-text">Why Choose Us</span>
              </h2>
              <p className="text-xl text-muted-foreground">Trusted by businesses worldwide</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: counters.projects, label: "Projects Done", suffix: "+", color: "text-primary" },
                { value: counters.clients, label: "Happy Clients", suffix: "+", color: "text-secondary" },
                { value: counters.interns, label: "Interns Mentored", suffix: "+", color: "text-accent" },
                { value: counters.years, label: "Years Expertise", suffix: "+", color: "text-info" },
              ].map((stat, idx) => (
                <div key={idx} className="premium-card p-8 text-center hover-snippet">
                  <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-lg text-muted-foreground font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
