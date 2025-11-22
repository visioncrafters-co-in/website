import { Check, Zap, Shield, Clock, Award } from "lucide-react";

const WhyUs = () => {
  const benefits = [
    { icon: Zap, title: "Lightning Fast Delivery", description: "We deliver projects on time without compromising quality" },
    { icon: Shield, title: "100% Satisfaction Guarantee", description: "We ensure complete satisfaction with unlimited revisions" },
    { icon: Clock, title: "24/7 Support", description: "Round-the-clock support for all your queries and concerns" },
    { icon: Award, title: "Industry Experts", description: "Team of certified professionals with 5+ years experience" },
  ];


  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Why Vision Crafters?</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            We don't just build digital products. We craft experiences that transform businesses and delight users.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="premium-card p-8 text-center"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <benefit.icon className="w-14 h-14 text-primary mb-6 mx-auto" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* What Makes Us Special Section */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="gradient-text">What Makes Us Special</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { feature: "Custom Design", description: "Tailored solutions that perfectly match your brand identity" },
              { feature: "Responsive Development", description: "Seamless experience across all devices and screen sizes" },
              { feature: "SEO Optimization", description: "Built-in SEO best practices for better search rankings" },
              { feature: "Performance Optimization", description: "Lightning-fast load times and optimal performance" },
              { feature: "24/7 Support", description: "Round-the-clock assistance whenever you need us" },
              { feature: "Student Project Guidance", description: "Turning student project ideas into polished, well-guided outcomes with expert support." },
              { feature: "Training & Documentation", description: "Comprehensive guides to help you manage your project" },
              { feature: "Scalable Architecture", description: "Future-proof solutions that grow with your business" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="premium-card p-6 hover-snippet group"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2">{item.feature}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl font-bold gradient-text mb-2">98%</div>
            <div className="text-lg text-foreground/70">Client Satisfaction Rate</div>
          </div>
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl font-bold gradient-text mb-2">85%</div>
            <div className="text-lg text-foreground/70">Repeat Client Rate</div>
          </div>
          <div className="glass-card p-8 text-center hover-lift">
            <div className="text-5xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-lg text-foreground/70">Average Rating</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
