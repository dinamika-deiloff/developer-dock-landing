
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Implement scroll reveal functionality
    const handleReveal = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll');
      
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    // Initial check
    handleReveal();
    
    // Add event listener
    window.addEventListener('scroll', handleReveal);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleReveal);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
