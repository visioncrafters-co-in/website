import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesCatalog } from "@/data/services";

const Services = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const focusSlug = searchParams.get("focus");
    let timeout: ReturnType<typeof setTimeout> | null = null;

    if (focusSlug) {
      const section = document.getElementById(`service-${focusSlug}`);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
        section.classList.add("ring-2", "ring-primary/60");
        timeout = setTimeout(() => section.classList.remove("ring-2", "ring-primary/60"), 2000);
      }
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [searchParams]);

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Our Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Comprehensive digital solutions designed to elevate your business
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {servicesCatalog.map((service, idx) => (
            <div
              key={service.slug}
              id={`service-${service.slug}`}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/services/${service.slug}`)}
              onKeyDown={(event) => event.key === "Enter" && navigate(`/services/${service.slug}`)}
              className="premium-card p-6 group overflow-hidden hover-snippet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer scroll-mt-32"
              style={{ animationDelay: `${idx * 0.08}s` }}
            >
              <div className="relative mb-6 h-48 rounded-lg overflow-hidden bg-muted">
                <img 
                  src={service.primaryImage} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <service.icon className="absolute bottom-4 left-4 w-12 h-12 text-primary z-10 drop-shadow-lg" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-6">{service.shortDescription}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 4).map((feature, featureIdx) => (
                  <li key={featureIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="default"
                  className="flex-1 font-semibold justify-between"
                  onClick={(event) => {
                    event.stopPropagation();
                    navigate(`/services/${service.slug}`);
                  }}
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 font-semibold"
                  onClick={(event) => event.stopPropagation()}
                  asChild
                >
                  <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="premium-card p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Ready to Start Your Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expert services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold"
              asChild
            >
              <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                Request a Quote <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="font-semibold"
              asChild
            >
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
