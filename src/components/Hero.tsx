
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
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div ref={heroRef} className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/30 blur-3xl"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 md:pr-8">
            <div className="relative">
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary rounded-full mb-5 animate-fade-in">
                Expert Software Development
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
                Crafting Digital <br />
                <span className="relative inline-block">
                  Experiences
                  <span className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/10"></span>
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                We build innovative software solutions that help businesses grow, scale, and succeed in the digital landscape.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <a href="#contact">
                    Get started
                  </a>
                </Button>
                
                <Button asChild variant="outline" size="lg">
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
                  <span className="block font-medium">Trusted by teams worldwide</span>
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
                    <span className="ml-1 text-muted-foreground">5.0 (28 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card shadow-xl animate-float">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
                  alt="Code on screen"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white rounded-lg p-4 shadow-lg glass-card flex items-center space-x-3 animate-fade-in">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 4L10 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Clean Code</p>
                  <p className="text-xs text-muted-foreground">Built with precision</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-lg p-4 shadow-lg glass-card flex items-center space-x-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">24/7 Support</p>
                  <p className="text-xs text-muted-foreground">We're here to help</p>
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
