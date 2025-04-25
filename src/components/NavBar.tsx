import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Globe, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen]);

  const getNavBackgroundClasses = () => {
    if (isMobileMenuOpen) {
      return 'bg-white/80 backdrop-blur-md shadow-lg';
    }
    if (isScrolled) {
      return 'bg-transparent md:bg-white/80 md:backdrop-blur-md md:shadow-lg';
    }
    return 'bg-transparent';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${getNavBackgroundClasses()}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 h-20`}>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <span className={`ml-2 text-3xl font-bold font-sans text-white 
                  ${isMobileMenuOpen ? 'text-turquoise-dark' : ''} 
                  ${isScrolled ? 'md:text-turquoise-dark' : ''}
                `}>
                  EGE TOUR
                </span>
              </div>
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {['Home', 'About Us', 'Tour Packages', 'Testimonials'].map((item) => (
                <a
                  key={item}
                  href={`#${item === 'About Us' ? 'about' : item === 'Tour Packages' ? 'packages' : item.toLowerCase().replace(' ', '-')}`}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 text-white/80 hover:text-white 
                    ${isMobileMenuOpen || isScrolled ? 'md:text-gray-600 md:hover:text-turquoise' : ''}
                  `}
                >
                  {item}
                </a>
              ))}
              <a href="#contact">
                <Button 
                  variant="default" 
                  className={`bg-turquoise hover:bg-turquoise-dark text-white rounded-full transition-all duration-300 transform hover:scale-105 
                    ${isMobileMenuOpen || isScrolled ? 'md:shadow-md' : ''}
                  `}
                >
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md transition-colors text-white 
                ${isMobileMenuOpen ? 'text-gray-600 hover:text-gray-900' : ''}
              `}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-md shadow-lg">
          {['Home', 'About Us', 'Tour Packages', 'Testimonials', 'Contact Us'].map((item) => (
            <a
              key={item}
              href={`#${item === 'About Us' ? 'about' : item === 'Contact Us' ? 'contact' : item === 'Tour Packages' ? 'packages' : item.toLowerCase().replace(' ', '-')}`}
              className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-turquoise hover:text-white transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
