
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="font-display font-bold text-lg">
            NN Solutions
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-sm font-medium hover:text-primary/80 transition-colors story-link">
            Services
          </a>
          <a href="#projects" className="text-sm font-medium hover:text-primary/80 transition-colors story-link">
            Work
          </a>
          <Link to="/projects" className="text-sm font-medium hover:text-primary/80 transition-colors story-link">
            Projects
          </Link>
          <a href="#team" className="text-sm font-medium hover:text-primary/80 transition-colors story-link">
            Team
          </a>
          <a href="#contact" className="text-sm font-medium hover:text-primary/80 transition-colors story-link">
            Contact
          </a>
        </nav>

        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact">
              Get in touch
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
          >
            {isMobileMenuOpen ? (
              <path 
                d="M18 6L6 18M6 6L18 18" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            ) : (
              <path 
                d="M4 6H20M4 12H20M4 18H20" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm transition-transform duration-300 transform origin-top ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-5 flex flex-col space-y-4">
          <a 
            href="#services" 
            className="text-sm font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#projects" 
            className="text-sm font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Work
          </a>
          <Link 
            to="/projects" 
            className="text-sm font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <a 
            href="#team" 
            className="text-sm font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </a>
          <Button asChild className="w-full">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get in touch
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
