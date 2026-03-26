export interface Project {
  id: number;
  number: number;
  name: string;
  title: string;
  shortName?: string;
  description: string;
  detailedDescription: string;
  category: 'Residential' | 'Commercial' | 'Mixed-Use';
  location: string;
  city: 'Lahore';
  imageUrl?: string;
  image: string;
  status: 'Delivered' | 'Under Construction' | 'Upcoming';
  features: string[];
  amenities: string[];
  completionYear: string;
  units: number;
  floors?: number;
  type?: string;
  galleryImages: string[];
  paymentPlan?: {
    downPayment: string;
    monthlyInstallment: string;
    quarterlyInstallment: string;
    onPossession: string;
    totalPrice: string;
  };
}

export interface Executive {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
  quote: string;
  vision: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  philosophy: string;
  specialization: string[];
  socials: { linkedin: string };
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export type ViewState = 'home' | 'project-detail' | 'heritage' | 'portfolio' | 'contact' | 'coordinates' | 'executive-detail';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
