export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface Service {
  id: string;
  num: string;
  title: string;
  description: string;
  href: string;
  iconName: string; // Lucide icon identifier
}

export interface WhyChooseUsItem {
  id: string;
  num: string;
  title: string;
  description: string;
}

export interface Industry {
  id: string;
  name: string;
  markets: string;
  imageDesc: string; // Description for image generation/placeholder
  imageUrl: string; // High-quality Unsplash preview URL
}

export interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  chartData: number[]; // Points for drawing custom SVG graphs
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface Insight {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  isFeatured?: boolean;
  imageDesc: string; // Description for image generation/placeholder
  imageUrl: string; // Unsplash preview image URL
  author?: string; // Optional author name for featured briefings
}

export interface FooterSection {
  title: string;
  links: NavLink[];
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  mapsLink: string;
}

export interface SocialLink {
  platform: string;
  href: string;
}
