import { Eye, Target, Rocket, Users } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "2019", title: "Founded", description: "Vision Crafters was born with a mission to transform digital experiences" },
    { year: "2020", title: "First 50 Projects", description: "Delivered exceptional solutions to startups and businesses" },
    { year: "2022", title: "Expanded Team", description: "Grew our talented team and launched internship programs" },
    { year: "2024", title: "250+ Projects", description: "Celebrating success with 180+ happy clients worldwide" },
  ];

  const values = [
    { icon: Eye, title: "Vision", description: "We see beyond the obvious to create innovative solutions" },
    { icon: Target, title: "Precision", description: "Every pixel, every line of code crafted with perfection" },
    { icon: Rocket, title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: Users, title: "Collaboration", description: "Your success is our success. We grow together" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">About Vision Crafters</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Vision Crafters, founded in June 2025, is a digital solutions company that helps businesses grow with modern and reliable technology services. We offer website and app development, digital marketing, portfolio design, project guidance, billing software, e-commerce solutions, and SEO services. With a focus on creativity, performance, and user-friendly design, we build digital experiences that make brands stand out and bring ideas to life.
          </p>
        </div>

        {/* Values Section */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="gradient-text">Our Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="premium-card p-8 text-center group"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="relative inline-block mb-6">
                  <value.icon className="w-16 h-16 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24 text-center glass-card p-12 rounded-3xl">
          <h2 className="text-4xl font-bold gradient-text mb-6">Team - Vision Crafters</h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto mb-8">
            At Vision Crafters, our team is made up of passionate designers, developers, marketers, and creators who love building meaningful digital solutions. We work together, blending creativity with technical expertise, to turn ideas into smooth, impactful digital experiences. Each team member brings unique skills, helping us deliver thoughtful, efficient, and client-focused results.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
