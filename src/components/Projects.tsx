
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce solution with integrated payment processing and inventory management.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80",
    link: "/projects/ecommerce-platform",
    color: "from-purple-500/80 to-indigo-500/80"
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    category: "Mobile Development",
    description: "A patient-focused mobile application for booking appointments and tracking health metrics.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/projects/healthcare-app",
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    id: "financial-dashboard",
    title: "Financial Dashboard",
    category: "UI/UX Design",
    description: "An intuitive dashboard for financial analytics with real-time data visualization.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    link: "/projects/financial-dashboard",
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
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-600 rounded-full mb-5">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recent <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our portfolio of successful projects that demonstrate our expertise and commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => itemsRef.current[index] = el}
              className={`rounded-xl glass-card card-hover reveal-on-scroll overflow-hidden relative ${
                index === 0 ? 'glass-card-purple' : 
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
                  ${index === 0 ? 'bg-purple-100 text-purple-600' : 
                   index === 1 ? 'bg-blue-100 text-blue-600' : 
                   'bg-teal-100 text-teal-600'}`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mt-2">{project.title}</h3>
                <p className="text-muted-foreground mt-2 line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-blue-500/20 text-blue-600 hover:bg-blue-500/10">
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
