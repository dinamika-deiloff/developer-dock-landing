
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollY * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background colorful elements */}
      <div className="absolute inset-0 -z-10">
        <div ref={heroRef} className="absolute inset-0 -z-10 overflow-hidden">
          {/* Colorful background blobs */}
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-green-500/20 blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-72 h-72 rounded-full bg-teal-500/15 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-5 animate-fade-in">
                Project Management & Drupal Development
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Empowering <br />
                <span className="text-gradient font-extrabold">
                  Healthcare & Government
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                NN Solutions delivers enterprise-grade Drupal development and expert project management services tailored for healthcare and government organizations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <a href="#contact">
                    Get started
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10 hover:text-primary">
                  <a href="#projects">
                    View our work
                  </a>
                </Button>
              </div>
              
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((index) => (
                    <div 
                      key={index} 
                      className="w-10 h-10 rounded-full border-2 border-white bg-gray-200"
                      style={{
                        backgroundImage: `url(https://images.unsplash.com/photo-1${550 + index}?w=50&h=50&fit=crop&crop=faces)`,
                        backgroundSize: 'cover'
                      }}
                    ></div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="block font-medium">Trusted by organizations nationwide</span>
                  <div className="flex items-center mt-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg 
                        key={star}
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor" 
                        className="text-primary"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-muted-foreground">5.0 (24 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card shadow-xl animate-float relative">
                {/* Add colorful gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-green-500/10 to-accent/10 z-10"></div>
                <img
                  src="https://images.unsplash.com/photo-1603695682358-4c53987809f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                  alt="Healthcare technology"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-lg glass-card glass-card-green flex items-center space-x-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 11h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Project Management</p>
                  <p className="text-xs text-muted-foreground">Delivered on time</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg glass-card glass-card-teal flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Drupal Experts</p>
                  <p className="text-xs text-muted-foreground">Enterprise solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
