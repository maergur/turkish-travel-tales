
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Globe className="h-8 w-8 text-turquoise" />
                <span className="ml-2 text-xl font-bold font-serif text-turquoise-dark">
                  Turkish Travel Tales
                </span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#" className="px-3 py-2 text-sm font-medium hover:text-turquoise">
                Home
              </a>
              <a href="#about" className="px-3 py-2 text-sm font-medium hover:text-turquoise">
                About Us
              </a>
              <a href="#packages" className="px-3 py-2 text-sm font-medium hover:text-turquoise">
                Tour Packages
              </a>
              <a href="#testimonials" className="px-3 py-2 text-sm font-medium hover:text-turquoise">
                Testimonials
              </a>
              <a href="#contact">
                <Button variant="default" className="bg-turquoise hover:bg-turquoise-dark btn-hover-effect">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-turquoise hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-turquoise hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a
              href="#packages"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-turquoise hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tour Packages
            </a>
            <a
              href="#testimonials"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-turquoise hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium bg-turquoise text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
