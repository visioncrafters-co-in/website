import { BookOpen, Code2, Smartphone, TrendingUp, Palette, Database, Globe, Search, Zap, Users, Clock, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Courses = () => {
  const courses = [
    {
      icon: Code2,
      title: "Full Stack Web Development",
      description: "Master modern web development from frontend to backend. Build dynamic, responsive websites and web applications.",
      duration: "3 Months",
      level: "Beginner to Advanced",
      badge: "Popular",
      badgeColor: "bg-primary",
      features: [
        "HTML5, CSS3, JavaScript",
        "React & TypeScript",
        "Node.js & Express",
        "MongoDB & SQL",
        "RESTful APIs",
        "Deployment & DevOps"
      ],
      color: "text-primary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Learn to build native and cross-platform mobile applications for iOS and Android platforms.",
      duration: "2.5 Months",
      level: "Intermediate",
      badge: "Trending",
      badgeColor: "bg-secondary",
      features: [
        "React Native",
        "Flutter Development",
        "Mobile UI/UX Design",
        "State Management",
        "API Integration",
        "App Store Deployment"
      ],
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing Mastery",
      description: "Comprehensive digital marketing course covering SEO, SEM, social media, and content marketing strategies.",
      duration: "2 Months",
      level: "Beginner Friendly",
      badge: "New",
      badgeColor: "bg-accent",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Strategy",
        "Google Analytics",
        "PPC Campaigns",
        "Email Marketing"
      ],
      color: "text-accent",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Create stunning user interfaces and experiences. Learn design principles, tools, and prototyping.",
      duration: "2 Months",
      level: "Beginner to Intermediate",
      badge: "Creative",
      badgeColor: "bg-info",
      features: [
        "Figma & Adobe XD",
        "Design Principles",
        "User Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Portfolio Building"
      ],
      color: "text-info",
    },
    {
      icon: Database,
      title: "Data Science & Analytics",
      description: "Dive into data science, machine learning, and analytics to make data-driven decisions.",
      duration: "3.5 Months",
      level: "Advanced",
      badge: "Hot",
      badgeColor: "bg-warning",
      features: [
        "Python & R",
        "Data Analysis",
        "Machine Learning",
        "Data Visualization",
        "SQL & NoSQL",
        "Real-world Projects"
      ],
      color: "text-warning",
    },
    {
      icon: Globe,
      title: "E-commerce Development",
      description: "Build full-featured e-commerce platforms with payment gateways, inventory management, and more.",
      duration: "2.5 Months",
      level: "Intermediate",
      badge: "In-Demand",
      badgeColor: "bg-success",
      features: [
        "Shopify & WooCommerce",
        "Payment Integration",
        "Inventory Management",
        "Order Processing",
        "Security Best Practices",
        "Performance Optimization"
      ],
      color: "text-success",
    },
  ];

  const highlights = [
    { icon: Users, title: "Expert Instructors", description: "Learn from industry professionals" },
    { icon: Clock, title: "Flexible Schedule", description: "Learn at your own pace" },
    { icon: Award, title: "Certification", description: "Get industry-recognized certificates" },
    { icon: Zap, title: "Hands-on Projects", description: "Build real-world applications" },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 bg-background animated-bg">
      <div className="container mx-auto px-4 relative z-10">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-20 space-y-6 animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Courses Offered</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            Comprehensive courses designed to transform you into a skilled professional. 
            Learn from experts and build real-world projects.
          </p>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {highlights.map((highlight, idx) => (
            <div
              key={idx}
              className="premium-card p-6 text-center hover-snippet group"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="relative mb-4 flex justify-center">
                <highlight.icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-lg font-bold mb-2">{highlight.title}</h3>
              <p className="text-sm text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="premium-card p-6 group overflow-hidden hover-snippet relative"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${course.badgeColor} text-white`}>
                  {course.badge}
                </Badge>
              </div>

              {/* Icon Section */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <course.icon className={`w-10 h-10 ${course.color}`} />
                </div>
                <div className={`absolute inset-0 blur-2xl ${course.color} opacity-0 group-hover:opacity-30 transition-opacity`} />
              </div>

              {/* Course Info */}
              <h3 className="text-2xl font-bold mb-3 pr-16">{course.title}</h3>
              <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{course.description}</p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4" />
                  <span>{course.level}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6 space-y-2">
                <h4 className="font-semibold text-sm mb-2">What's Included:</h4>
                {course.features.slice(0, 4).map((feature, featureIdx) => (
                  <div key={featureIdx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className={`w-4 h-4 ${course.color} flex-shrink-0`} />
                    <span>{feature}</span>
                  </div>
                ))}
                {course.features.length > 4 && (
                  <div className="text-sm text-primary font-medium mt-2">
                    + {course.features.length - 4} more topics
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Button
                className="w-full font-semibold group/btn"
                asChild
              >
                <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                  Enroll Now
                  <Zap className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Our Courses Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Why Choose Our Courses?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide the best learning experience with practical, industry-relevant curriculum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="premium-card p-8 hover-snippet">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Comprehensive Curriculum</h3>
              <p className="text-muted-foreground">
                Our courses are designed by industry experts and cover everything from fundamentals to advanced topics.
              </p>
            </div>

            <div className="premium-card p-8 hover-snippet">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Expert Mentorship</h3>
              <p className="text-muted-foreground">
                Get personalized guidance from experienced instructors and industry professionals throughout your journey.
              </p>
            </div>

            <div className="premium-card p-8 hover-snippet">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Career Support</h3>
              <p className="text-muted-foreground">
                Receive career guidance, resume reviews, and job placement assistance to kickstart your career.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <div className="premium-card p-12 text-center space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="gradient-text">Ready to Start Learning?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join hundreds of students who have transformed their careers with our comprehensive courses. 
            Start your journey today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="font-semibold"
              asChild
            >
              <a href="https://forms.gle/PKLjH1GEC54Z4WGZ9" target="_blank" rel="noopener noreferrer">
                All Courses
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

export default Courses;

