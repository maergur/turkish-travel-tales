import { Globe, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import egeTourLogo from '@/img/ege-tour-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-turquoise-light" />
              <span className="ml-2 text-xl font-bold font-serif text-white">
                Turkish Travel Tales
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Crafting unforgettable journeys across the diverse landscapes of Türkiye since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#packages" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Tour Packages
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Our Tours</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Istanbul Heritage Tours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Cappadocia Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Mediterranean Cruises
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Aegean Adventures
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-turquoise-light transition-colors">
                  Black Sea Journeys
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-turquoise-light mr-2 mt-0.5" />
                <span className="text-gray-400">
                  Sultanahmet Square, No:15
                  Fatih, Istanbul 34122
                  Türkiye
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-turquoise-light mr-2" />
                <span className="text-gray-400">+90 212 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-turquoise-light mr-2" />
                <span className="text-gray-400">info@turkishtraveltales.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <img src={egeTourLogo} alt="Ege Tour Logo" className="h-12 w-auto mx-auto mb-4" />
          <p>© {currentYear} Turkish Travel Tales. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a href="#" className="hover:text-turquoise-light transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-turquoise-light transition-colors">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-turquoise-light transition-colors">
              Cancellation Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
