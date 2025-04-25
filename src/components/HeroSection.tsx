
import { Button } from "@/components/ui/button";
import { Map, Compass } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="object-cover w-full h-full"
          poster="https://images.unsplash.com/photo-1589561454226-796a8aa89b05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-flying-over-istanbul-2766/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
            Discover the Magic of{" "}
            <span className="bg-gradient-to-r from-turquoise-light to-turquoise bg-clip-text text-transparent">
              Türkiye
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            Experience authentic Turkish hospitality as we guide you through the wonders 
            of this enchanting country.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              size="lg" 
              className="bg-turquoise hover:bg-turquoise-dark text-white rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Map className="mr-2 h-5 w-5" /> Explore Tour Packages
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Compass className="mr-2 h-5 w-5" /> About Our Services
            </Button>
          </div>
        </div>
      </div>

      {/* Modern abstract shapes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
      <div className="absolute -bottom-48 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-turquoise/20 rounded-full blur-3xl"></div>
    </div>
  );
};

export default HeroSection;
