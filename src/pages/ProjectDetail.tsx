
import { useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft, Globe, Github, ExternalLink, Calendar, Users, Layers } from "lucide-react";

// Sample project data
const projectsData = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    client: "Fashion Retailer",
    category: "Web Development",
    completedDate: "March 2023",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
    teamSize: 4,
    description: "A fully responsive e-commerce solution with integrated payment processing and inventory management. This project involved creating a seamless shopping experience across devices, implementing secure payment gateways, and building a robust inventory management system.",
    challenge: "The main challenge was developing a system that could handle high-volume traffic during sales events while maintaining fast load times and a responsive interface. Additionally, integrating multiple payment gateways while ensuring security compliance required careful architecture planning.",
    solution: "We implemented a microservices architecture with dedicated services for product catalog, user authentication, payment processing, and order management. This approach allowed us to scale individual components based on demand. The frontend was built using React with server-side rendering for improved SEO and initial load performance.",
    results: "The platform launched successfully with a 98.7% uptime during the client's major seasonal sale, processing over 10,000 transactions in a single day. Page load times averaged under 2 seconds, and the conversion rate increased by 24% compared to the previous system.",
    mainImage: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
      "https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ],
    websiteUrl: "https://example.com",
    repoUrl: "https://github.com",
    color: "from-purple-500/80 to-indigo-500/80"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    client: "Regional Medical Group",
    category: "Mobile Development",
    completedDate: "November 2022",
    technologies: ["React Native", "Firebase", "Node.js", "Express", "MongoDB"],
    teamSize: 3,
    description: "A patient-focused mobile application for booking appointments and tracking health metrics. This comprehensive healthcare app allows patients to schedule appointments, receive medication reminders, track vital signs, and communicate with healthcare providers securely.",
    challenge: "Creating an intuitive interface for users of all ages and technical abilities, while ensuring strict compliance with healthcare data privacy regulations. The app needed to integrate with the client's existing electronic health record system and securely handle sensitive patient information.",
    solution: "We designed the app with accessibility as a priority, implementing clear navigation patterns and customizable text sizes. For data security, we used end-to-end encryption for all communications and followed HIPAA compliance standards throughout development. The integration with existing systems was accomplished through a custom API layer that standardized data formats.",
    results: "The app achieved a 4.8/5 star rating on app stores and saw a 68% adoption rate among patients within the first three months. Patient appointment attendance increased by 42%, and the clinic reported a 27% reduction in administrative phone calls.",
    mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ],
    websiteUrl: "https://example.com",
    repoUrl: "https://github.com",
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    client: "Investment Firm",
    category: "UI/UX Design",
    completedDate: "August 2023",
    technologies: ["React", "TypeScript", "D3.js", "Firebase", "Tailwind CSS"],
    teamSize: 2,
    description: "An intuitive dashboard for financial analytics with real-time data visualization. This dashboard provides investment managers with comprehensive portfolio analytics, risk assessments, and performance metrics in an easy-to-understand visual format.",
    challenge: "The primary challenge was processing and visualizing large datasets in real-time without compromising performance. Additionally, the dashboard needed to present complex financial information in a way that would be immediately understandable to users with varying levels of technical expertise.",
    solution: "We implemented efficient data processing algorithms and used WebSockets for real-time updates. The visualization layer was built with D3.js, with careful optimization for rendering speed. The UI was designed following extensive user research, resulting in an intuitive layout with customizable widgets that allow users to personalize their dashboard experience.",
    results: "User testing showed that the new dashboard reduced the time required for daily analysis tasks by 57%. Client feedback highlighted the improved decision-making capabilities, with managers reporting they could respond to market changes up to 3 times faster than with their previous system.",
    mainImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1560520031-3a4dc4e9de0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
    ],
    websiteUrl: "https://example.com",
    repoUrl: "https://github.com",
    color: "from-teal-500/80 to-emerald-500/80"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

  const getGradientStyle = () => {
    return { background: `linear-gradient(to bottom right, ${project.color.replace('from-', '').replace('/80', '').replace(' to-', ', ').replace('/80', '')}` };
  };

  return (
    <div className="min-h-screen overflow-hidden" ref={sectionRef}>
      <Navbar />
      
      {/* Hero section with large project image */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/20 blur-3xl opacity-60"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-accent/20 blur-3xl opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6">
          <div className="flex flex-col max-w-4xl mx-auto">
            <Link to="/projects" className="flex items-center text-sm text-muted-foreground mb-8 hover:text-primary transition-colors story-link w-fit">
              <ArrowLeft size={16} className="mr-2" />
              Back to all projects
            </Link>
            
            <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 w-fit ${
              project.id === 'ecommerce-platform' ? 'bg-purple-100 text-purple-600' : 
              project.id === 'healthcare-app' ? 'bg-blue-100 text-blue-600' : 
              'bg-teal-100 text-teal-600'
            }`}>
              {project.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 reveal-on-scroll">{project.title}</h1>
            
            <p className="text-lg text-muted-foreground mb-8 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12 reveal-on-scroll" style={{ transitionDelay: '0.2s' }}>
              {project.websiteUrl && (
                <Button asChild>
                  <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Globe size={16} />
                    Visit Website
                  </a>
                </Button>
              )}
              
              {project.repoUrl && (
                <Button asChild variant="outline">
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <Github size={16} />
                    View Repository
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* Main image section */}
      <section className="py-10">
        <div className="container mx-auto px-6">
          <div className="relative rounded-xl overflow-hidden max-w-5xl mx-auto reveal-on-scroll">
            <div className="aspect-video">
              <img 
                src={project.mainImage} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40 mix-blend-multiply`}
            ></div>
          </div>
        </div>
      </section>
      
      {/* Project info and details section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="space-y-12">
                <div className="reveal-on-scroll">
                  <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </div>
                
                <div className="reveal-on-scroll">
                  <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </div>
                
                <div className="reveal-on-scroll">
                  <h2 className="text-2xl font-bold mb-4">Results & Impact</h2>
                  <p className="text-muted-foreground">{project.results}</p>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="glass-card p-6 sticky top-24 reveal-on-scroll" style={{ transitionDelay: '0.1s' }}>
                <h3 className="text-lg font-semibold mb-4">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      project.id === 'ecommerce-platform' ? 'bg-purple-100 text-purple-600' : 
                      project.id === 'healthcare-app' ? 'bg-blue-100 text-blue-600' : 
                      'bg-teal-100 text-teal-600'
                    }`}>
                      <Users size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Client</p>
                      <p className="font-medium">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      project.id === 'ecommerce-platform' ? 'bg-purple-100 text-purple-600' : 
                      project.id === 'healthcare-app' ? 'bg-blue-100 text-blue-600' : 
                      'bg-teal-100 text-teal-600'
                    }`}>
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="font-medium">{project.completedDate}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      project.id === 'ecommerce-platform' ? 'bg-purple-100 text-purple-600' : 
                      project.id === 'healthcare-app' ? 'bg-blue-100 text-blue-600' : 
                      'bg-teal-100 text-teal-600'
                    }`}>
                      <Layers size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Team Size</p>
                      <p className="font-medium">{project.teamSize} developers</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="text-sm font-medium mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-secondary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center reveal-on-scroll">
              Project Gallery
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <div 
                  key={index} 
                  className="rounded-xl overflow-hidden glass-card reveal-on-scroll" 
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-square">
                    <img 
                      src={image} 
                      alt={`${project.title} gallery ${index + 1}`} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center reveal-on-scroll">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Interested in seeing how we can help with your project? Get in touch with our team today.
              </p>
              <Button asChild size="lg">
                <Link to="/contact" className="px-8">
                  Start Your Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related projects section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center reveal-on-scroll">
              More Projects
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {projectsData
                .filter(p => p.id !== project.id)
                .slice(0, 2)
                .map((relatedProject, index) => (
                  <div
                    key={index}
                    className={`rounded-xl glass-card card-hover reveal-on-scroll overflow-hidden relative ${
                      relatedProject.id === 'ecommerce-platform' ? 'glass-card-purple' : 
                      relatedProject.id === 'healthcare-app' ? 'glass-card-blue' : 
                      'glass-card-teal'
                    }`}
                    style={{ transitionDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={relatedProject.mainImage}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${relatedProject.color} opacity-50`}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                          <Link to={`/projects/${relatedProject.id}`} className="flex items-center gap-2">
                            <span>View Project</span>
                            <ExternalLink size={16} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <span className={`text-xs font-medium px-2 py-1 rounded-full 
                        ${relatedProject.id === 'ecommerce-platform' ? 'bg-purple-100 text-purple-600' : 
                         relatedProject.id === 'healthcare-app' ? 'bg-blue-100 text-blue-600' : 
                         'bg-teal-100 text-teal-600'}`}>
                        {relatedProject.category}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{relatedProject.title}</h3>
                      <p className="text-muted-foreground mt-2 line-clamp-2">{relatedProject.description}</p>
                    </div>
                  </div>
                ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline">
                <Link to="/projects" className="px-6">
                  View All Projects
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
