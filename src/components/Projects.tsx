
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "healthcare-portal",
    title: "Healthcare Patient Portal",
    category: "Healthcare",
    description: "A HIPAA-compliant patient portal built on Drupal for a regional healthcare network, integrating with their EHR system.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/projects/healthcare-portal",
    color: "from-green-500/80 to-teal-500/80"
  },
  {
    id: "government-cms",
    title: "Government Agency CMS",
    category: "Government",
    description: "A FedRAMP-compliant content management system for a federal agency, providing secure document management and public information sharing.",
    image: "https://images.unsplash.com/photo-1569407228235-9a8e17e90b7b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/projects/government-cms",
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    id: "medical-research",
    title: "Medical Research Platform",
    category: "Healthcare",
    description: "A collaborative research platform for healthcare institutions to securely share and manage clinical trial data and research findings.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/projects/medical-research",
    color: "from-teal-500/80 to-emerald-500/80"
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, projects.length);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, { threshold: 0.1 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      itemsRef.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="projects" className="py-20 gradient-bg-2" ref={sectionRef}>
      {/* Colorful background elements */}
      <div className="absolute top-20 left-20 w-72 h-72 color-dot color-dot-3"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 color-dot color-dot-4"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal-on-scroll">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 rounded-full mb-5">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our portfolio of successful implementations for healthcare and government organizations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`rounded-xl glass-card card-hover reveal-on-scroll overflow-hidden relative ${
                index === 0 ? 'glass-card-green' : 
                index === 1 ? 'glass-card-blue' : 
                'glass-card-teal'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 ease-out"
                  style={{ 
                    transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} flex items-center justify-center opacity-0 transition-opacity duration-300`} 
                  style={{ opacity: activeIndex === index ? 0.7 : 0 }}
                >
                  <Button asChild variant="secondary" className="bg-white text-primary hover:bg-white/90">
                    <Link to={project.link}>View Project</Link>
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <span className={`text-xs font-medium px-2 py-1 rounded-full 
                  ${project.category === 'Healthcare' ? 'bg-green-100 text-green-600' : 
                   'bg-blue-100 text-blue-600'}`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-green-500/20 text-green-600 hover:bg-green-500/10">
            <Link to="/projects" className="px-6">
              View All Projects
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
