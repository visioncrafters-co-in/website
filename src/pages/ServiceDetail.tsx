import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, CheckCircle2, ExternalLink, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getServiceBySlug } from "@/data/services";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug ?? "");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl font-bold">Service not found</h1>
          <p className="text-muted-foreground">
            The service you are looking for has been moved or no longer exists.
          </p>
          <Button onClick={() => navigate("/services")} className="font-semibold">
            Back to Services
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 space-y-16 relative z-10">
        <div className="flex flex-col gap-6">
          <Button
            variant="ghost"
            className="w-fit gap-2"
            onClick={() => navigate("/services")}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to all services
          </Button>

          <section className="relative overflow-hidden rounded-3xl bg-muted">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${service.primaryImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
            <div className="relative z-10 p-8 md:p-16 space-y-6">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                <service.icon className="w-5 h-5" />
                {service.title}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
                {service.shortDescription}
              </h1>
              <p className="text-lg text-muted-foreground max-w-3xl">
                {service.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="flex-1 font-semibold"
                  asChild
                >
                  <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                    Start this project <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="flex-1 font-semibold" asChild>
                  <Link to="/contact">Talk to our team</Link>
                </Button>
              </div>
            </div>
          </section>
        </div>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="premium-card p-8 space-y-6">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              What we deliver
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-base leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="premium-card p-8 space-y-6">
            <h2 className="text-3xl font-semibold flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-secondary" />
              Business outcomes
            </h2>
            <ul className="space-y-4">
              {service.outcomes.map((outcome) => (
                <li key={outcome} className="flex gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-base leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-semibold">Implementation spotlights</h2>
              <p className="text-muted-foreground">
                Every engagement ships with service-specific playbooks, rituals, and tooling.
              </p>
            </div>
            <Button variant="secondary" onClick={() => navigate("/services")}>
              Explore all services
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {service.spotlights.map((spotlight) => (
              <div key={spotlight.title} className="premium-card p-6 space-y-3 hover-snippet">
                <span className="text-xs uppercase tracking-[0.25em] text-primary">{spotlight.badge}</span>
                <h3 className="text-xl font-semibold">{spotlight.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{spotlight.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetail;


