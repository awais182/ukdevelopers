import { Project, Executive, Testimonial, TeamMember, Service } from './types';

// utility for generating a URL to an asset and encoding spaces/unsafe chars
const asset = (path: string) => {
  // ensure leading slash
  if (!path.startsWith('/')) path = `/${path}`;
  return encodeURI(path);
};

// API base URL - change this when deploying backend separately
export const API_BASE = import.meta.env.VITE_API_BASE || '/api';

export const NAV_LINKS = [
  { label: 'Heritage', href: '#heritage' },
  { label: 'Portfolio', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export const EXECUTIVES: Executive[] = [
  {
    id: 6,
    name: "Haji Muhammad Ishaq",
    role: "Founder of UK Group of Companies",
    bio: "Haji Muhammad Ishaq founded the UK Group of Companies and laid the foundation for what would become one of Lahore's most trusted names in real estate. His vision for quality, integrity, and community-focused development continues to guide UK Developers after decades of growth.",
    imageUrl: '/assets/executives/Haji Muhammad Ishaq founder of UK group of companies.png',
    quote: "Build with purpose. Build for generations.",
    vision: "To create a lasting legacy of ethical development and excellence that serves the community and honors trust."
  },
  {
    id: 1,
    name: "Mian Muhammad Kashif",
    role: "Chairman & Founding Visionary",
    bio: "A seasoned industry leader whose stewardship has guided the firm's grandest projects. Mian Kashif's strategic foresight secures each development's legacy.",
    imageUrl: '/assets/executives/Mian Muhammad Kashif (chairman).jpeg',
    quote: "Leadership is the art of crafting permanence.",
    vision: "To steward enduring landmarks that define generations."
  },
  {
    id: 2,
    name: "Mian Usman",
    role: "Chief Executive Officer",
    bio: "An operational maestro, Mian Usman combines precision with visionary strategy to operationalize landmark developments across Lahore.",
    imageUrl: '/assets/executives/Mian Usman Cheif Executive.jpeg',
    quote: "Precision turns ambition into reality.",
    vision: "Delivering unmatched quality through elite execution and attention to detail."
  },
  {
    id: 3,
    name: "Asif Ishaq",
    role: "Director",
    bio: "Asif Ishaq brings decades of commercial expertise, overseeing premium partnerships and investment strategy for the portfolio.",
    imageUrl: '/assets/executives/Asif Ishaq Director.jpeg',
    quote: "Excellence is an investment, not an expense.",
    vision: "Curating partnerships that elevate value and preserve heritage."
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    role: "Director",
    bio: "Bilal Ahmed focuses on design integrity and client experience, ensuring every residence meets the highest standards of refinement.",
    imageUrl: '/assets/executives/Bilal Ahmed Director.jpeg',
    quote: "Design is the signature of intent.",
    vision: "To refine living spaces into timeless expressions of taste."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "His Excellency, Sheikh Ahmed",
    title: "International Industrialist",
    quote: "UK One is not just an address; it is a declaration of status. The attention to gold-leaf detail is unprecedented even by Lahore standards.",
    avatar: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 2,
    name: "Dr. Amara Sethi",
    title: "Global Tech Visionary",
    quote: "The AI integration in UK Seven is beyond anything I've seen in Silicon Valley. It feels as though the building anticipates my every need before I even conceive it.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: 3,
    name: "Raja Mansoor",
    title: "Heritage Asset Collector",
    quote: "I have invested in legacies across London and Paris, but the craftsmanship in UK Seventeen is the first time I've seen my own culture's majesty preserved so perfectly.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200"
  }
];

export const PROJECTS: Project[] = Array.from({ length: 17 }, (_, i) => {
  const num = i + 1;
  const names = [
    "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen"
  ];
  
  // Project image mappings from assets/projects_images folder
  const projectImages: Record<number, string> = {
    1: 'UK 1 Uk center.jpg',
    2: 'UK 2 Basit Commercial centre.jpg',
    3: 'UK 3 Bilal Centre.jpg',
    4: 'UK 4 Hamza Centre.jpg',
    5: 'UK 05 Uk plaza.jpg',
    6: 'UK 06 Bilal Housing Road Scheme.jpg',
    7: 'UK 07 Umair Centre.jpg',
    8: 'UK 08 Umer Center.jpg',
    9: 'UK 09 Shuraim Center.jpg',
    10: 'UK 10 Faizan Center.jpg',
    11: 'UK 11 Auto mall.jpg',
    12: 'UK 1 Uk center.jpg', // Fallback for missing images
    13: 'UK 2 Basit Commercial centre.jpg',
    14: 'UK 3 Bilal Centre.jpg',
    15: 'UK15 Luxury Homes.png',
    16: 'UK 05 Uk plaza.jpg',
    17: 'UK 06 Bilal Housing Road Scheme.jpg',
  };
  
  // All projects are in Lahore, Pakistan - Royal Coordinates
  const city = 'Lahore';
  const lahorLocations = ['Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Dasako chowk, Kot Abdul Malik, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Azam Cloth Market, Lahore, Pakistan', 'Main Circular Road Badami Bagh, Lahore, Pakistan', 'Hyde Park', 'Askari', 'Valencia', 'Cavalry Ground', 'Lawrence Road', 'Racecourse'];

  // Determine category and status based on project number
  let category: 'Residential' | 'Commercial' | 'Mixed-Use';
  let status: 'Delivered' | 'Under Construction' | 'Upcoming';
  
  if (num <= 11) {
    // UK 1-11: Completed and Delivered
    status = 'Delivered';
    // UK 1-11: All Commercial except UK 6 (Residential)
    category = num === 6 ? 'Residential' : 'Commercial';
  } else if (num === 15) {
    // UK 15: Under Construction
    status = 'Under Construction';
    category = 'Residential';
  } else {
    // UK 12-14, 16-17: Upcoming (Coming Soon)
    status = 'Upcoming';
    category = num === 15 ? 'Residential' : 'Commercial';
  }

  // Special category override for UK 15 (Residential villas)
  if (num === 15) {
    category = 'Residential';
  }

  // default metadata
  let projName = `UK ${names[i]}`;
  let projShortName = `UK ${num}`;
  let projDescription = `The standard of excellence in Lahore, Pakistan. A royal monument of distinction.`;
  let projFullDescription = `UK ${names[i]} represents the pinnacle of UK Developers' vision for 21st-century luxury. Situated in the heart of Lahore, Pakistan, this development combines neo-classical aesthetics with cutting-edge smart home technology. Every square inch has been designed to provide an unparalleled living experience for those who demand nothing but the absolute best.`;
  let projFeatures = ['Biometric Access', 'Climate Control', 'Infinity Deck', 'Gold-Plated Fixtures'];
  let projAmenities = ['Private Spa', 'Temperature Controlled Pool', 'Executive Lounge', '24/7 Security', 'Valet Parking'];
  // build and encode the image URL
  let projImageUrl = asset(`/assets/projects_images/${projectImages[num]}`);
  let projUnits = 50 + (num * 2);
  let projFloors: number | undefined;

  // Special override for UK 1 (Center)
  if (num === 1) {
    projName = 'UK 1\nUK Center';
    projShortName = 'UK 1 - UK Center';
    projFullDescription = `UK Center (UK 1) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 983;
    projFloors = 12;
  }

  // Special override for UK 2 (Basit Commercial Center)
  if (num === 2) {
    projName = 'UK 2\nBasit Commercial Center';
    projShortName = 'UK 2 - Basit Commercial Center';
    projFullDescription = `Basit Commercial Center (UK 2) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 7;
    projFloors = 7;
  }

  // Special override for UK 3 (Bilal Center)
  if (num === 3) {
    projName = 'UK 3\nBilal Center';
    projShortName = 'UK 3 - Bilal Center';
    projFullDescription = `Bilal Center (UK 3) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 14;
    projFloors = 8;
  }

  // Special override for UK 4 (Hamza Center)
  if (num === 4) {
    projName = 'UK 4\nHamza Center';
    projShortName = 'UK 4 - Hamza Center';
    projFullDescription = `Hamza Center (UK 4) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 24;
    projFloors = 7;
  }

  // Special override for UK 5 (UK Plaza)
  if (num === 5) {
    projName = 'UK 5\nUK Plaza';
    projUnits = 8;
    projFloors = 8;
    projShortName = 'UK 5 - UK Plaza';
    projFullDescription = `UK Plaza (UK 5) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
  }

  // Special override for UK 6 (Bilal Housing Road Scheme)
  if (num === 6) {
    projName = 'UK 6\nBilal Housing Road Scheme';
    projShortName = 'UK 6 - Bilal Housing Road Scheme';
    projFullDescription = `Bilal Housing Road Scheme (UK 6) represents the pinnacle of UK Developers' vision for 21st-century luxury residential space. Situated in the prestigious Dasako chowk area of Kot Abdul Malik, this development combines neo-classical aesthetics with cutting-edge smart home technology. Every square inch has been designed to provide an unparalleled residential experience for those who demand nothing but the absolute best.`;
  }

  // Special override for UK 7 (Umair Center)
  if (num === 7) {
    projName = 'UK 7\nUmair Center';
    projShortName = 'UK 7 - Umair Center';
    projFullDescription = `Umair Center (UK 7) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 86;
    projFloors = 9;
  }

  // Special override for UK 8 (Umer Center)
  if (num === 8) {
    projName = 'UK 8\nUmer Center';
    projShortName = 'UK 8 - Umer Center';
    projFullDescription = `Umer Center (UK 8) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projFloors = 8;
    projUnits = 68;
  }

  // Special override for UK 9 (Shuraim Center)
  if (num === 9) {
    projName = 'UK 9\nShuraim Center';
    projShortName = 'UK 9 - Shuraim Center';
    projFullDescription = `Shuraim Center (UK 9) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 5;
    projFloors = 5;
  }

  // Special override for UK 10 (Faizan Center)
  if (num === 10) {
    projName = 'UK 10\nFaizan Center';
    projShortName = 'UK 10 - Faizan Center';
    projFullDescription = `Faizan Center (UK 10) represents the pinnacle of UK Developers' vision for 21st-century luxury commercial space. Situated in the heart of Lahore's vibrant Azam Cloth Market, this development combines neo-classical aesthetics with cutting-edge smart building technology. Every square inch has been designed to provide an unparalleled commercial experience for those who demand nothing but the absolute best.`;
    projUnits = 20;
  }

  // Special luxury overrides for UK 15
  if (num === 15) {
    projName = 'UK 15 Luxury Homes Etihad Town';
    projShortName = 'UK 15 - Luxury Homes';
    projDescription = 'Luxury Homes Etihad Town - 3 & 5 Marla House 1 Year Payment Plan - 2 & Half Storeys';
    projFullDescription = `UK 15 Luxury Homes Etihad Town is an exclusive residential enclave featuring bespoke villas in 3 Marla and 5 Marla configurations. Situated in the prestigious Etihad Town Phase 1 near Thokar Main, Raiwind Road, Lahore, each villa is handcrafted for connoisseurs of true refinement. Featuring 2 & half story architecture with 4 bedrooms, smart home integration, private elevators, and fully orchestrated climate control systems. Every residence showcases the hallmark of UK Developers' commitment to excellence and luxury living.`;
    projFeatures = ['3 Marla & 5 Marla Options', '2 & Half Story Homes', '4 Bedroom Houses', 'Smart Home Integration', 'Private Elevator', 'Chef Kitchen', 'Home Theater', 'Gold-Plated Fixtures'];
    projAmenities = ['24/7 Concierge Service', 'Gated Security & CCTV', '24/7 Security Monitoring', 'Private Gardens', 'Valet Services', 'Premium Landscaping', 'Dedicated Parking', 'Smart Home Systems', 'Climate Control'];
    projImageUrl = `/assets/projects_images/${projectImages[num]}`;
  }

  // Special override for UK 11 (Auto Mall)
  if (num === 11) {
    projName = 'UK 11 Auto Mall';
    projShortName = 'UK 11 - Auto Mall';
    projFloors = 6;
    projFullDescription = `UK 11 Auto Mall represents the pinnacle of automotive retail luxury in Lahore. Strategically positioned at the heart of Main Circular Road, this development combines neo-classical aesthetics with cutting-edge commercial technology. Every square inch has been designed to provide an unparalleled automotive showroom experience.`;
    projFeatures = ['Premium Showroom Spaces', 'Climate Control', 'Executive Lounge', 'Gold-Plated Fixtures'];
    projAmenities = ['24/7 Security', 'Valet Parking', 'Service Center', 'VIP Lounge', 'Executive Parking'];
    projUnits = 346;
  }

  // Determine location (special override for UK 15)
  let location = lahorLocations[i % lahorLocations.length];
  if (num === 15) {
    location = 'Etihad Town Phase 1, Near Thokar Main, Raiwind Road';
  }

  // Build gallery images based on project number
  let galleryImages = [projImageUrl];
  
  if (num === 15) {
    // UK 15 - Multiple gallery images from subdirectories
    galleryImages = [
      asset('/assets/projects_images/UK15 Luxury Homes.png'),
      asset('/assets/projects_images/UK15_3_marla homes_images/3 Ground Floor Lounge 1.jpg'),
      asset('/assets/projects_images/UK15_3_marla homes_images/F Floor Lounge.jpg'),
      asset('/assets/projects_images/UK15_3_marla homes_images/F Floor Kitchen.jpg'),
      asset('/assets/projects_images/UK15_3_marla homes_images/F Floor Front Bed.jpg'),
      asset('/assets/projects_images/UK15_3_marla homes_images/Ground Floor Lounge 2.jpg'),
      asset('/assets/projects_images/UK15_3_marla homes_images/Ground Floor Kitchen.jpg'),
      asset('/assets/projects_images/UK15_5_marla homes_images/5marla_frontelevation.jpg'),
      asset('/assets/projects_images/UK15_5_marla homes_images/5MARLA_GroundFloor.jpg'),
      asset('/assets/projects_images/UK15_5_marla homes_images/5MARLA FirstFloor.jpg'),
      asset('/assets/projects_images/UK15_5_marla homes_images/5MARLA ROOFTOP.jpg'),
    ];
  } else if (num <= 11) {
    // For other completed projects, use their main image
    galleryImages = [projImageUrl];
  } else {
    // For upcoming/under construction projects
    galleryImages = [projImageUrl];
  }

  // Payment Plan Logic
  let paymentPlan: any = {
    downPayment: `${num % 2 === 0 ? 15 : 20}%`,
    monthlyInstallment: `${(num * 12) + 40},000 PKR`,
    quarterlyInstallment: `${(num * 45) + 180},000 PKR`,
    onPossession: '20%',
    totalPrice: `${10 + (num * 2)}M PKR onwards`
  };

  // UK 15 Special Payment Plans
  if (num === 15) {
    paymentPlan = {
      booking: { amount: 'PKR 995,000', percent: '5%' },
      confirmation: { amount: 'PKR 2,985,000', percent: '15%' },
      installments: { amount: 'PKR 597,000', percent: '3% in 10 Equal Installments' },
      greyWorks: { amount: 'PKR 3,980,000', percent: '20% on Grey Works Completion' },
      possession: { amount: 'PKR 5,970,000', percent: '30%' },
      downPayment: 'PKR 995,000 (5% Booking)',
      monthlyInstallment: 'Flexible - See Payment Structure',
      quarterlyInstallment: 'Available',
      onPossession: '30%',
      totalPrice: {
        '3Marla': 'PKR 19,900,000',
        '5Marla': 'PKR 29,900,000'
      },
      // Additional UK 15 specific info
      termsConditions: [
        'Payment should be made through cross cheque or payorder in favour of Uk developers Pvt Ltd.',
        '10% Extra Charges on each Category (Park facing / Corner)',
        '5% Rebate on Full Payment.',
        '1 Year Payment Plan'
      ]
    };
  }

  return {
    id: num,
    number: num,
    name: projName,
    title: projShortName,
    shortName: projShortName,
    description: projDescription,
    detailedDescription: projFullDescription,
    category: category as any,
    location: location,
    city: 'Lahore',
    imageUrl: projImageUrl,
    image: projImageUrl,
    status: status as any,
    type: status === 'Delivered' ? 'Completed Landmark' : (status === 'Under Construction' ? 'Under Development' : 'Upcoming Landmark'),
    features: projFeatures,
    amenities: projAmenities,
    completionYear: num <= 11 ? '2024' : (num < 15 ? '2026' : '2027'),
    floors: projFloors,
    units: projUnits,
    galleryImages: galleryImages,
    paymentPlan: paymentPlan
  } as Project;
});

// Keep a small SERVICES export for backward compatibility
export const SERVICES: Service[] = [
  { id: 's1', title: 'Architectural Excellence', description: 'Creating timeless structures that blend modern aesthetics with functional brilliance.', icon: 'building' },
  { id: 's2', title: 'Premium Construction', description: 'Using world-class materials and engineering standards to build foundations that last generations.', icon: 'construction' },
  { id: 's3', title: 'Interior Design', description: 'Bespoke interior solutions that reflect prestige and comfort in every corner.', icon: 'design' },
  { id: 's4', title: 'Project Management', description: 'Turnkey solutions from concept to delivery, ensuring timelines and budgets are met with precision.', icon: 'timeline' }
];

// Create a TEAM_MEMBERS alias for components that expect the old shape
export const TEAM_MEMBERS: TeamMember[] = EXECUTIVES.map(e => ({
  id: `t${e.id}`,
  name: e.name,
  role: e.role,
  image: e.imageUrl,
  bio: e.bio,
  philosophy: e.vision || e.quote || '',
  specialization: [],
  socials: { linkedin: '#' }
}));
