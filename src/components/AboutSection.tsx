import { Globe, MapPin, Clock, Star } from 'lucide-react';
import pamukkaleImage from '@/img/pamukkale.jpg';

const AboutSection = () => {
  const features = [
    {
      icon: <Globe className="h-10 w-10 text-turquoise" />,
      title: "Local Expertise",
      description: "Our guides are locals with deep knowledge of Turkish culture, history, and hidden gems most tourists never see."
    },
    {
      icon: <MapPin className="h-10 w-10 text-turquoise" />,
      title: "Customized Itineraries",
      description: "Every journey is tailored to your interests, ensuring your Turkish adventure is exactly what you dreamed."
    },
    {
      icon: <Clock className="h-10 w-10 text-turquoise" />,
      title: "24/7 Support",
      description: "Our dedicated team is always available to assist with any needs during your stay in Türkiye."
    },
    {
      icon: <Star className="h-10 w-10 text-turquoise" />,
      title: "Premium Experiences",
      description: "From luxury accommodations to authentic cultural exchanges, we curate moments that last a lifetime."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Ege Tour!</h2>
          <div className="w-24 h-1 bg-turquoise mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            With over 35 years of experience, we specialize in creating unforgettable journeys across Türkiye's diverse landscapes, rich history, and vibrant culture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img 
              src={pamukkaleImage}
              alt="Turkish landscape" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif font-medium text-lg italic text-turquoise-dark">
                "Discover the beauty where East meets West"
              </p>
            </div>
          </div>
          
          <div className="mt-8 md:mt-0">
            <h3 className="text-2xl font-bold mb-4">Your Gateway to Authentic Turkish Experiences</h3>
            <p className="mb-6">
              At Turkish Travel Tales, we believe that travel should be transformative. Our incoming travel agency specializes in creating immersive experiences that connect you with the heart and soul of Türkiye.
            </p>
            <p className="mb-6">
              From the bustling bazaars of Istanbul to the otherworldly landscapes of Cappadocia, from the ancient ruins along the Aegean coast to the pristine beaches of the Turkish Riviera, we craft journeys that showcase the best of this magnificent country.
            </p>
            <p className="font-bold">
              Our commitment to excellence, attention to detail, and passion for Turkish culture ensures that every trip we organize is not just a vacation, but a collection of memorable stories to take home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md text-center card-hover"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
