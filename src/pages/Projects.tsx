
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projectsData = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce solution with integrated payment processing and inventory management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    color: "from-purple-500/80 to-indigo-500/80"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "A patient-focused mobile application for booking appointments and tracking health metrics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "An intuitive dashboard for financial analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "from-teal-500/80 to-emerald-500/80"
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    category: "Mobile Development",
    description: "A modern social networking platform focused on connecting creative professionals.",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "from-pink-500/80 to-purple-500/80"
  },
  {
    id: "crm-system",
    title: "CRM System",
    category: "Web Development",
    description: "A comprehensive customer relationship management system for a real estate company.",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    color: "from-amber-500/80 to-orange-500/80"
  },
  {
    id: "productivity-app",
    title: "Productivity App",
    category: "UI/UX Design",
    description: "A task management application designed to increase productivity and workflow efficiency.",
    image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80",
    color: "from-green-500/80 to-teal-500/80"
  }
];

// Project categories for filtering
const categories = [
  { label: "All", value: "all" },
  { label: "Web Development", value: "web-development" },
  { label: "Mobile Development", value: "mobile-development" },
  { label: "UI/UX Design", value: "ui-ux-design" }
];

const ProjectsPage = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  // Filter projects based on active category
  const filteredProjects = activeCategory === "all" 
    ? projectsData 
    : projectsData.filter(project => 
        project.category.toLowerCase().replace(/\s+/g, '-') === activeCategory
      );

  return (
    <div className="min-h-screen overflow-hidden" ref={sectionRef}>
      <Navbar />
      
      {/* Hero section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-5">
              Our Portfolio
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">
              Our <span className="text-gradient">Creative Work</span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-8 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              Explore our portfolio of successful projects that showcase our expertise in web development, mobile app creation, and UI/UX design.
            </p>
          </div>
        </div>
      </section>
      
      {/* Category filters */}
      <section className="py-6">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-3">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.value
                      ? 'bg-primary text-white'
                      : 'bg-secondary/70 hover:bg-secondary'
                  }`}
                  onClick={() => setActiveCategory(category.value)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects grid */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => {
                // Determine which card style to use based on index or other criteria
                const cardVariants = [
                  'glass-card-purple',
                  'glass-card-blue',
                  'glass-card-teal',
                  'glass-card-pink',
                  'glass-card-orange',
                  'glass-card-blue'
                ];
                
                const cardClass = cardVariants[index % cardVariants.length];
                
                return (
                  <div
                    key={project.id}
                    className={`rounded-xl glass-card card-hover reveal-on-scroll overflow-hidden relative ${cardClass}`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
                        style={{
                          transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)'
                        }}
                      />
                      <div 
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 transition-opacity duration-300`}
                        style={{ opacity: hoveredProject === project.id ? 0.7 : 0 }}
                      >
                        <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                          <Link to={`/projects/${project.id}`} className="flex items-center gap-2">
                            <span>View Project</span>
                            <ExternalLink size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full 
                        ${index % 6 === 0 ? 'bg-purple-100 text-purple-600' : 
                         index % 6 === 1 ? 'bg-blue-100 text-blue-600' : 
                         index % 6 === 2 ? 'bg-teal-100 text-teal-600' :
                         index % 6 === 3 ? 'bg-pink-100 text-pink-600' :
                         index % 6 === 4 ? 'bg-amber-100 text-amber-600' :
                         'bg-green-100 text-green-600'}`}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
                      <div className="mt-4">
                        <Link 
                          to={`/projects/${project.id}`} 
                          className="text-sm font-medium inline-flex items-center text-primary hover:underline"
                        >
                          Read Case Study
                          <svg className="w-4 h-4 ml-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.5 12.5L11 8L6.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No projects found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* CTA section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help bring your vision to life with innovative solutions tailored to your needs.
            </p>
            <Button asChild size="lg">
              <Link to="/contact" className="px-8">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectsPage;
