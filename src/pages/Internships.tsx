import {
  Code2,
  Smartphone,
  Brain,
  TrendingUp,
  Cloud,
  Award,
  Clock,
  Users,
  Compass,
  Layers,
  Rocket,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Internships = () => {
  const programs = [
    {
      icon: Code2,
      title: "Web Development",
      duration: "2-3 Months",
      level: "Beginner to Advanced",
      badge: "Most Popular",
      description: "Master modern web development with React, TypeScript, and cutting-edge frameworks.",
      skills: ["HTML/CSS/JS", "React & TypeScript", "APIs & Databases", "Version Control"],
      color: "text-electric-blue",
    },
    {
      icon: Smartphone,
      title: "App Development",
      duration: "2-3 Months",
      level: "Intermediate",
      badge: "Trending",
      description: "Build native and cross-platform mobile applications for iOS and Android.",
      skills: ["React Native", "Flutter", "Mobile UI/UX", "App Deployment"],
      color: "text-royal-purple",
    },
    {
      icon: Brain,
      title: "AI/ML Internship",
      duration: "3 Months",
      level: "Advanced",
      badge: "Hot",
      description: "Dive into artificial intelligence and machine learning with real-world projects.",
      skills: ["Python", "TensorFlow", "Data Analysis", "ML Algorithms"],
      color: "text-violet-glow",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      duration: "1-2 Months",
      level: "Beginner Friendly",
      badge: "New",
      description: "Learn modern digital marketing strategies and grow businesses online.",
      skills: ["SEO/SEM", "Social Media", "Content Marketing", "Analytics"],
      color: "text-teal-neon",
    },
    {
      icon: Cloud,
      title: "Cloud Computing",
      duration: "2-3 Months",
      level: "Intermediate",
      badge: "In-Demand",
      description: "Master cloud platforms and DevOps practices for scalable applications.",
      skills: ["AWS/Azure", "Docker", "CI/CD", "Infrastructure"],
      color: "text-electric-blue",
    },
  ];

  const benefits = [
    { icon: Award, title: "Certificate", description: "Industry-recognized completion certificate" },
    { icon: Users, title: "Live Projects", description: "Work on real client projects" },
    { icon: Clock, title: "Flexible Hours", description: "Learn at your own pace" },
  ];

  const journey = [
    {
      icon: Compass,
      title: "Discover & Align",
      description: "Pick a track, meet your mentor, and map your first sprint with clear success metrics.",
      badge: "Week 1",
    },
    {
      icon: Layers,
      title: "Build & Iterate",
      description: "Pair program with leads, ship weekly demos, and learn to gather actionable feedback.",
      badge: "Week 2-6",
    },
    {
      icon: Rocket,
      title: "Showcase & Launch",
      description: "Polish your capstone, present to the community, and publish your job-ready portfolio.",
      badge: "Final Week",
    },
  ];

  const testimonials = [
    {
      quote: "The mentorship felt like working with a real product team. I shipped two apps and landed my first offer.",
      name: "Sanjeev B",
      role: "App Development Intern",
    },
    {
      quote: "Live marketing dashboards, weekly critiques, and real budgets made the experience insanely practical.",
      name: "Avanthika P",
      role: "Digital Marketing Intern",
    },
    {
      quote: "From Git workflows to client calls, everything mirrored industry standards. Highly recommend it.",
      name: "Samini M",
      role: "Web Development Intern",
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Internship Programs</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 leading-relaxed relative z-10">
            Launch your career with hands-on experience, mentorship from industry experts, and real-world projects
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 relative z-10">
            {[
              { label: "Interns Trained", value: "70+" },
              { label: "Hiring Partners", value: "25+" },
              { label: "Average Rating", value: "4.8/5" },
            ].map((stat) => (
              <div key={stat.label} className="text-center premium-card py-6">
                <div className="text-4xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="glass-card p-6 text-center hover-lift"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <benefit.icon className="w-12 h-12 text-electric-blue mx-auto mb-4 animate-float" />
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {programs.map((program, idx) => (
            <div
              key={idx}
              className="glass-card p-8 hover-lift group relative overflow-hidden"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-electric-blue to-royal-purple text-white px-4 py-1 rounded-full text-sm font-semibold pulse-glow">
                {program.badge}
              </div>

              <div className="relative mb-6">
                <program.icon className={`w-16 h-16 ${program.color} animate-float`} />
                <div className={`absolute inset-0 blur-2xl ${program.color} opacity-0 group-hover:opacity-50 transition-opacity`} />
              </div>

              <h3 className="text-3xl font-semibold mb-2">{program.title}</h3>
              
              <div className="flex gap-4 mb-4 text-sm">
                <span className="text-foreground/60">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {program.duration}
                </span>
                <span className="text-foreground/60">
                  <Award className="w-4 h-4 inline mr-1" />
                  {program.level}
                </span>
              </div>

              <p className="text-foreground/70 mb-6">{program.description}</p>

              <div className="mb-6">
                <h4 className="font-semibold mb-3 text-lg">What You'll Learn:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {program.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2 text-sm text-foreground/70"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${program.color} bg-current`} />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <Button
                className="w-full bg-gradient-to-r from-electric-blue via-royal-purple to-violet-glow hover:scale-105 transition-transform"
                asChild
              >
                <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                  Apply Now
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-left">
            <div>
              <p className="uppercase tracking-[0.2em] text-xs text-foreground/60 mb-3">Career Concierge</p>
              <h2 className="text-4xl font-bold gradient-text">Not Sure Which Program to Choose?</h2>
              <p className="text-lg text-foreground/70 max-w-2xl">
                Schedule a free consultation with our career counselor to map out the perfect internship path for you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <Button
                size="lg"
                className="flex-1 sm:flex-none bg-gradient-to-r from-electric-blue via-royal-purple to-violet-glow hover:opacity-90"
                asChild
              >
                <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                  Secure your slot
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-neon text-teal-neon hover:bg-teal-neon hover:text-background"
                asChild
              >
                <a href="/contact">Schedule consultation</a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {journey.map((step) => (
              <div key={step.title} className="premium-card p-6 border-dashed border-2 border-border/60 relative overflow-hidden">
                <span className="absolute top-4 right-4 text-xs font-semibold text-foreground/60">{step.badge}</span>
                <div className="flex items-center gap-3 mb-4">
                  <step.icon className="w-6 h-6 text-secondary" />
                  <h3 className="text-xl font-semibold">{step.title}</h3>
                </div>
                <p className="text-sm text-foreground/70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="uppercase text-xs tracking-[0.3em] text-foreground/50 mb-2">Intern Stories</p>
              <h2 className="text-3xl font-bold">Hear it from the builders</h2>
            </div>
            <Button
              variant="ghost"
              className="inline-flex items-center gap-2 text-primary"
              asChild
            >
              <a href="https://share.google/PSPNeT7MsTKG6EMyh" target="_blank" rel="noopener noreferrer">
                Read success stories
                <Star className="w-4 h-4" />
              </a>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="glass-card p-6 space-y-4">
                <p className="text-base text-foreground/80 leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-foreground/60">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
