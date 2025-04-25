
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { tourPackages, TourPackage } from '@/data/tourData';
import { MapPin, Calendar, DollarSign } from 'lucide-react';

const PackagesSection = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('featured');
  
  const filteredPackages = filter === 'all' 
    ? tourPackages 
    : tourPackages.filter(pkg => pkg.featured);

  return (
    <section id="packages" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tour Packages</h2>
          <div className="w-24 h-1 bg-turquoise mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Explore our carefully curated selection of experiences, designed to showcase the best of what Türkiye has to offer.
          </p>
          
          <div className="flex justify-center mt-8 mb-12">
            <div className="inline-flex rounded-md shadow-sm">
              <button
                onClick={() => setFilter('featured')}
                className={`px-4 py-2 text-sm font-medium rounded-l-lg transition-colors ${
                  filter === 'featured'
                    ? 'bg-turquoise text-white hover:bg-turquoise-dark'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-gray-200`}
              >
                Featured Tours
              </button>
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 text-sm font-medium rounded-r-lg transition-colors ${
                  filter === 'all'
                    ? 'bg-turquoise text-white hover:bg-turquoise-dark'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                } border border-l-0 border-gray-200`}
              >
                All Tours
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map((tourPackage) => (
            <TourCard key={tourPackage.id} tourPackage={tourPackage} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-6 text-lg">
            Don't see what you're looking for? We specialize in custom itineraries!
          </p>
          <Button 
            size="lg" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-terracotta hover:bg-terracotta-dark btn-hover-effect"
          >
            Request Custom Tour
          </Button>
        </div>
      </div>
    </section>
  );
};

const TourCard = ({ tourPackage }: { tourPackage: TourPackage }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <div className="relative h-60 overflow-hidden">
        <img
          src={tourPackage.imageUrl}
          alt={tourPackage.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        {tourPackage.featured && (
          <div className="absolute top-4 right-4 bg-gold text-white text-xs px-2 py-1 rounded-full font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <CardHeader>
        <CardTitle>{tourPackage.title}</CardTitle>
        <CardDescription className="flex items-center text-turquoise-dark">
          <MapPin className="h-4 w-4 mr-1" /> {tourPackage.location}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 line-clamp-3">{tourPackage.description}</p>
        
        <div className="flex justify-between mt-4 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1 text-turquoise" />
            <span>{tourPackage.duration}</span>
          </div>
          <div className="flex items-center font-bold text-base">
            <DollarSign className="h-4 w-4 mr-1 text-turquoise" />
            <span>${tourPackage.price}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button className="w-full bg-turquoise hover:bg-turquoise-dark btn-hover-effect">
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PackagesSection;
