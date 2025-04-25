
export interface TourPackage {
  id: number;
  title: string;
  location: string;
  description: string;
  price: number;
  duration: string;
  imageUrl: string;
  featured: boolean;
}

export const tourPackages: TourPackage[] = [
  {
    id: 1,
    title: "Istanbul Heritage Tour",
    location: "Istanbul",
    description: "Explore the historic wonders of Istanbul including the Hagia Sophia, Blue Mosque, and Topkapı Palace.",
    price: 499,
    duration: "5 days",
    imageUrl: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1336&q=80",
    featured: true
  },
  {
    id: 2,
    title: "Cappadocia Hot Air Balloon Adventure",
    location: "Cappadocia",
    description: "Experience the magical landscapes of Cappadocia from above with our premium hot air balloon tour.",
    price: 799,
    duration: "4 days",
    imageUrl: "https://images.unsplash.com/photo-1570654121453-9771cea243ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    featured: true
  },
  {
    id: 3,
    title: "Turquoise Coast Cruise",
    location: "Antalya & Fethiye",
    description: "Sail along Turkey's stunning Mediterranean coastline, exploring hidden coves and ancient ruins.",
    price: 1299,
    duration: "7 days",
    imageUrl: "https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    featured: true
  },
  {
    id: 4,
    title: "Ancient Ephesus Discovery",
    location: "Izmir",
    description: "Walk through one of the best-preserved ancient cities in the Mediterranean and explore Turkey's Aegean coast.",
    price: 599,
    duration: "4 days",
    imageUrl: "https://images.unsplash.com/photo-1590071789000-6a50ce5f151a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1090&q=80",
    featured: false
  },
  {
    id: 5,
    title: "Pamukkale & Hierapolis Excursion",
    location: "Denizli",
    description: "Discover the white travertine terraces of Pamukkale and the ancient city of Hierapolis on this unforgettable tour.",
    price: 399,
    duration: "3 days",
    imageUrl: "https://images.unsplash.com/photo-1526048598645-62b31f82b8f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80",
    featured: false
  },
  {
    id: 6,
    title: "Black Sea Cultural Journey",
    location: "Trabzon & Rize",
    description: "Explore the lush landscapes, historic monasteries, and unique culture of Turkey's beautiful Black Sea region.",
    price: 749,
    duration: "6 days",
    imageUrl: "https://images.unsplash.com/photo-1593238739120-ed130d0ce146?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    quote: "Our family trip to Istanbul and Cappadocia was absolutely magical. The guides were knowledgeable and the accommodations were perfect. We'll definitely book with Turkish Travel Tales again!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/65.jpg"
  },
  {
    id: 2,
    name: "Marco Rossi",
    location: "Italy",
    quote: "The hot air balloon ride over Cappadocia was a once-in-a-lifetime experience. Everything from the hotel to the tours was perfectly organized. Highly recommended!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "United Kingdom",
    quote: "I was amazed at how seamless our Turkish coast cruise was. The staff went above and beyond to make our anniversary trip special. The local food experiences were outstanding!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/33.jpg"
  }
];
