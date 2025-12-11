// Mock data for the website marketplace platform

export interface Developer {
  id: string;
  name: string;
  avatar: string;
  title: string;
  rating: number;
  reviewCount: number;
  completedProjects: number;
  specialization: string[];
  startingPrice: number;
  responseTime: string;
  portfolio: PortfolioItem[];
  bio: string;
  skills: string[];
  location: string;
  availability: 'Available' | 'Limited' | 'Busy';
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  completionTime: string;
  clientName: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientCompany: string;
  rating: number;
  content: string;
  projectType: string;
  date: string;
}

export interface ProjectRequest {
  id: string;
  businessOwner: string;
  businessType: string;
  projectType: string;
  budget: string;
  timeline: string;
  features: string[];
  description: string;
  status: 'Open' | 'In Progress' | 'Completed';
}

// Mock Developers
export const developers: Developer[] = [
  {
    id: 'dev-1',
    name: 'Alex Chen',
    avatar: '🧑‍💻',
    title: 'Full-Stack Developer & UX Specialist',
    rating: 4.8,
    reviewCount: 47,
    completedProjects: 15,
    specialization: ['Restaurant Websites', 'E-commerce', 'Landing Pages'],
    startingPrice: 2500,
    responseTime: '2 hours',
    location: 'San Francisco, CA',
    availability: 'Available',
    bio: 'Passionate about creating beautiful, functional websites that drive real business results. Specialized in restaurant and hospitality industry with 5+ years experience.',
    skills: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Figma', 'SEO'],
    portfolio: [
      {
        id: 'port-1',
        title: 'Modern Bakery Website',
        category: 'Restaurant',
        image: '🥐',
        description: 'Complete redesign with online ordering system',
        technologies: ['Next.js', 'Stripe', 'Tailwind'],
        completionTime: '4 weeks',
        clientName: 'Sweet Treats Bakery'
      },
      {
        id: 'port-2',
        title: 'Fine Dining Experience',
        category: 'Restaurant',
        image: '🍽️',
        description: 'Elegant website with reservation system',
        technologies: ['React', 'Node.js', 'MongoDB'],
        completionTime: '6 weeks',
        clientName: 'Le Bistro'
      }
    ]
  },
  {
    id: 'dev-2',
    name: 'Sarah Martinez',
    avatar: '👩‍💻',
    title: 'E-commerce Specialist',
    rating: 4.9,
    reviewCount: 63,
    completedProjects: 22,
    specialization: ['E-commerce', 'Fashion', 'Boutique Stores'],
    startingPrice: 3500,
    responseTime: '1 hour',
    location: 'New York, NY',
    availability: 'Limited',
    bio: 'E-commerce expert with proven track record of building high-converting online stores. Helped 20+ boutiques increase their online revenue.',
    skills: ['Shopify', 'React', 'WordPress', 'WooCommerce', 'Google Analytics', 'Marketing'],
    portfolio: [
      {
        id: 'port-3',
        title: 'Boutique Clothing Store',
        category: 'E-commerce',
        image: '👗',
        description: 'Full e-commerce platform with inventory management',
        technologies: ['Shopify', 'React', 'Stripe'],
        completionTime: '8 weeks',
        clientName: 'Urban Threads'
      },
      {
        id: 'port-4',
        title: 'Handmade Jewelry Shop',
        category: 'E-commerce',
        image: '💎',
        description: 'Custom marketplace with artist profiles',
        technologies: ['Next.js', 'PostgreSQL', 'Stripe'],
        completionTime: '10 weeks',
        clientName: 'Artisan Gems'
      }
    ]
  },
  {
    id: 'dev-3',
    name: 'Marcus Johnson',
    avatar: '🧔',
    title: 'Business Website Developer',
    rating: 4.7,
    reviewCount: 38,
    completedProjects: 18,
    specialization: ['Corporate Websites', 'Professional Services', 'B2B'],
    startingPrice: 2000,
    responseTime: '3 hours',
    location: 'Austin, TX',
    availability: 'Available',
    bio: 'Building professional websites for small businesses and consultants. Focus on SEO, speed, and conversion optimization.',
    skills: ['WordPress', 'PHP', 'JavaScript', 'SEO', 'Google Ads', 'Analytics'],
    portfolio: [
      {
        id: 'port-5',
        title: 'Law Firm Website',
        category: 'Professional Services',
        image: '⚖️',
        description: 'Professional website with case study showcase',
        technologies: ['WordPress', 'Custom Theme', 'SEO'],
        completionTime: '5 weeks',
        clientName: 'Johnson & Associates'
      },
      {
        id: 'port-6',
        title: 'Consulting Agency',
        category: 'B2B',
        image: '💼',
        description: 'Corporate website with blog and resources',
        technologies: ['Next.js', 'Contentful', 'Tailwind'],
        completionTime: '7 weeks',
        clientName: 'Strategy Solutions'
      }
    ]
  },
  {
    id: 'dev-4',
    name: 'Emily Wong',
    avatar: '👩‍🎨',
    title: 'Creative Designer & Developer',
    rating: 5.0,
    reviewCount: 29,
    completedProjects: 12,
    specialization: ['Portfolio Sites', 'Creative Agencies', 'Artists'],
    startingPrice: 3000,
    responseTime: '4 hours',
    location: 'Los Angeles, CA',
    availability: 'Available',
    bio: 'Award-winning designer who codes. Creating stunning, unique websites that make your brand unforgettable.',
    skills: ['Figma', 'React', 'Three.js', 'GSAP', 'Webflow', 'Brand Design'],
    portfolio: [
      {
        id: 'port-7',
        title: 'Photography Portfolio',
        category: 'Portfolio',
        image: '📷',
        description: 'Stunning portfolio with custom animations',
        technologies: ['React', 'Three.js', 'GSAP'],
        completionTime: '6 weeks',
        clientName: 'David Chen Photography'
      },
      {
        id: 'port-8',
        title: 'Creative Agency',
        category: 'Agency',
        image: '🎨',
        description: 'Bold, interactive agency website',
        technologies: ['Next.js', 'Framer Motion', 'Tailwind'],
        completionTime: '8 weeks',
        clientName: 'Bold Creative Studio'
      }
    ]
  },
  {
    id: 'dev-5',
    name: 'David Park',
    avatar: '👨‍💼',
    title: 'SaaS & Web App Developer',
    rating: 4.9,
    reviewCount: 52,
    completedProjects: 20,
    specialization: ['Web Applications', 'SaaS Platforms', 'Dashboards'],
    startingPrice: 5000,
    responseTime: '2 hours',
    location: 'Seattle, WA',
    availability: 'Busy',
    bio: 'Building scalable web applications and SaaS products. Expert in complex integrations and data visualization.',
    skills: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker', 'GraphQL'],
    portfolio: [
      {
        id: 'port-9',
        title: 'Project Management Tool',
        category: 'SaaS',
        image: '📊',
        description: 'Complete project management platform',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        completionTime: '16 weeks',
        clientName: 'TaskFlow'
      },
      {
        id: 'port-10',
        title: 'Analytics Dashboard',
        category: 'Web App',
        image: '📈',
        description: 'Real-time data visualization platform',
        technologies: ['Next.js', 'D3.js', 'GraphQL'],
        completionTime: '12 weeks',
        clientName: 'DataViz Pro'
      }
    ]
  },
  {
    id: 'dev-6',
    name: 'Lisa Thompson',
    avatar: '👩‍🏫',
    title: 'Educational Platform Developer',
    rating: 4.8,
    reviewCount: 41,
    completedProjects: 16,
    specialization: ['Educational Sites', 'Course Platforms', 'Non-Profits'],
    startingPrice: 2800,
    responseTime: '3 hours',
    location: 'Boston, MA',
    availability: 'Available',
    bio: 'Specializing in educational websites and learning platforms. Passionate about making education accessible online.',
    skills: ['React', 'Next.js', 'LMS Integration', 'Accessibility', 'Content Strategy'],
    portfolio: [
      {
        id: 'port-11',
        title: 'Online Course Platform',
        category: 'Education',
        image: '🎓',
        description: 'Complete LMS with video streaming',
        technologies: ['Next.js', 'Vimeo API', 'Stripe'],
        completionTime: '10 weeks',
        clientName: 'LearnHub'
      },
      {
        id: 'port-12',
        title: 'Non-Profit Website',
        category: 'Non-Profit',
        image: '❤️',
        description: 'Donation platform with volunteer management',
        technologies: ['WordPress', 'Stripe', 'Custom Plugin'],
        completionTime: '6 weeks',
        clientName: 'Hope Foundation'
      }
    ]
  }
];

// Mock Testimonials
export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Michael Rodriguez',
    clientCompany: 'Sweet Treats Bakery',
    rating: 5,
    content: 'Alex transformed our bakery\'s online presence! Our online orders increased by 300% in the first month. The website is beautiful and super easy for our customers to use.',
    projectType: 'Restaurant Website',
    date: '2024-11-15'
  },
  {
    id: 'test-2',
    clientName: 'Jennifer Lee',
    clientCompany: 'Urban Threads',
    rating: 5,
    content: 'Sarah is an e-commerce wizard! She built us an amazing online store that not only looks great but converts like crazy. Sales are up 250% since launch.',
    projectType: 'E-commerce',
    date: '2024-10-28'
  },
  {
    id: 'test-3',
    clientName: 'Robert Chen',
    clientCompany: 'Johnson & Associates',
    rating: 5,
    content: 'Marcus delivered exactly what we needed - a professional, SEO-optimized website that brings in qualified leads. We\'re getting 3-4 consultations per week from the site.',
    projectType: 'Professional Services',
    date: '2024-11-03'
  },
  {
    id: 'test-4',
    clientName: 'Amanda Foster',
    clientCompany: 'Bold Creative Studio',
    rating: 5,
    content: 'Emily is incredibly talented! She created a website that perfectly captures our agency\'s creative spirit. We\'ve received so many compliments from clients and partners.',
    projectType: 'Creative Agency',
    date: '2024-10-15'
  }
];

// Mock Project Requests
export const projectRequests: ProjectRequest[] = [
  {
    id: 'req-1',
    businessOwner: 'Sarah Martinez',
    businessType: 'Boutique Clothing Store',
    projectType: 'E-commerce Website',
    budget: '$5,000 - $8,000',
    timeline: '6 weeks',
    features: ['Online Store', 'Inventory Management', 'Customer Accounts', 'Payment Processing'],
    description: 'Looking for a modern e-commerce website for my clothing boutique. Need clean design, easy checkout, and mobile-friendly.',
    status: 'Open'
  },
  {
    id: 'req-2',
    businessOwner: 'Tom Anderson',
    businessType: 'Coffee Shop',
    projectType: 'Restaurant Website',
    budget: '$2,000 - $4,000',
    timeline: '4 weeks',
    features: ['Menu Display', 'Online Ordering', 'Location Info', 'Contact Form'],
    description: 'Need a simple, attractive website for my coffee shop with online ordering for pickup.',
    status: 'Open'
  }
];

// Helper functions
export const getDeveloperById = (id: string): Developer | undefined => {
  return developers.find(dev => dev.id === id);
};

export const getDevelopersBySpecialization = (specialization: string): Developer[] => {
  return developers.filter(dev =>
    dev.specialization.some(spec =>
      spec.toLowerCase().includes(specialization.toLowerCase())
    )
  );
};

export const getFeaturedDevelopers = (count: number = 3): Developer[] => {
  return developers
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};
