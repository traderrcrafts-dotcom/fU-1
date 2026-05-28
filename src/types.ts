export interface Service {
  id: string;
  title: string;
  category: 'tax' | 'compliance' | 'registration' | 'startup';
  description: string;
  longDescription: string;
  iconName: string; // Used to dynamically map Lucide icons
  price: string;
  deliveryTime: string;
  whatsappMessage: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  detailedInfo: string;
  iconName: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  rating: number;
  avatarUrl: string;
}

export interface LeadFormInput {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
