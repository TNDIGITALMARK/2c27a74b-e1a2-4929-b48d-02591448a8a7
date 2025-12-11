export interface Template {
  id: string;
  name: string;
  category: 'business' | 'ecommerce' | 'creative' | 'restaurant' | 'landing' | 'services';
  description: string;
  price: number;
  popularity: number;
  createdAt: Date;
  features: string[];
  pages: string[];
  customizationOptions: string[];
  previewImage: string;
  demoUrl?: string;
  tags: string[];
}

export const templateCategories = [
  { value: 'all', label: 'All Categories' },
  { value: 'business', label: 'Business' },
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'creative', label: 'Creative' },
  { value: 'restaurant', label: 'Restaurants' },
  { value: 'landing', label: 'Landing Pages' },
  { value: 'services', label: 'Services' },
];

export const sortOptions = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest First' },
];

export const templates: Template[] = [
  // Business Templates
  {
    id: 'biz-001',
    name: 'Corporate Pro',
    category: 'business',
    description: 'Professional business website with modern design. Perfect for consulting firms, agencies, and corporate services.',
    price: 299,
    popularity: 95,
    createdAt: new Date('2025-01-01'),
    features: [
      'Responsive design',
      'Contact forms',
      'Team showcase',
      'Services section',
      'Blog integration',
      'SEO optimized'
    ],
    pages: ['Home', 'About', 'Services', 'Team', 'Blog', 'Contact'],
    customizationOptions: ['Colors', 'Fonts', 'Logo', 'Content', 'Images'],
    previewImage: '/templates/corporate-pro.jpg',
    tags: ['professional', 'corporate', 'consulting']
  },
  {
    id: 'biz-002',
    name: 'Startup Launch',
    category: 'business',
    description: 'Modern startup-focused template with bold design and conversion-optimized layouts.',
    price: 399,
    popularity: 88,
    createdAt: new Date('2024-12-15'),
    features: [
      'Landing page focus',
      'Email capture',
      'Product showcase',
      'Pricing tables',
      'Testimonials',
      'Analytics ready'
    ],
    pages: ['Home', 'Product', 'Pricing', 'About', 'Contact'],
    customizationOptions: ['Brand colors', 'Typography', 'Layouts', 'CTAs'],
    previewImage: '/templates/startup-launch.jpg',
    tags: ['startup', 'modern', 'saas']
  },
  {
    id: 'biz-003',
    name: 'Professional Services',
    category: 'business',
    description: 'Clean and elegant template for professional service providers.',
    price: 249,
    popularity: 82,
    createdAt: new Date('2024-11-20'),
    features: [
      'Service listings',
      'Appointment booking',
      'Client testimonials',
      'Portfolio gallery',
      'FAQ section'
    ],
    pages: ['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'],
    customizationOptions: ['Colors', 'Images', 'Content'],
    previewImage: '/templates/professional-services.jpg',
    tags: ['services', 'professional', 'clean']
  },

  // E-Commerce Templates
  {
    id: 'ecom-001',
    name: 'Fashion Store Pro',
    category: 'ecommerce',
    description: 'Beautiful e-commerce template for fashion and apparel brands with advanced product filtering.',
    price: 599,
    popularity: 92,
    createdAt: new Date('2025-01-10'),
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment integration',
      'User accounts',
      'Wishlist',
      'Order tracking',
      'Product reviews'
    ],
    pages: ['Home', 'Shop', 'Product Details', 'Cart', 'Checkout', 'Account', 'About'],
    customizationOptions: ['Brand styling', 'Product layouts', 'Payment methods', 'Shipping zones'],
    previewImage: '/templates/fashion-store.jpg',
    tags: ['ecommerce', 'fashion', 'shopping']
  },
  {
    id: 'ecom-002',
    name: 'Digital Products Market',
    category: 'ecommerce',
    description: 'Specialized template for selling digital products, courses, and downloads.',
    price: 499,
    popularity: 86,
    createdAt: new Date('2024-12-20'),
    features: [
      'Digital delivery',
      'License management',
      'Download portal',
      'Secure checkout',
      'Email marketing'
    ],
    pages: ['Home', 'Products', 'Product Detail', 'Checkout', 'Downloads', 'Support'],
    customizationOptions: ['Branding', 'Product categories', 'Pricing display'],
    previewImage: '/templates/digital-market.jpg',
    tags: ['digital', 'downloads', 'courses']
  },
  {
    id: 'ecom-003',
    name: 'Multi-Vendor Marketplace',
    category: 'ecommerce',
    description: 'Complete marketplace solution with vendor management and multi-store support.',
    price: 899,
    popularity: 79,
    createdAt: new Date('2024-12-01'),
    features: [
      'Vendor dashboards',
      'Commission management',
      'Multi-store support',
      'Advanced search',
      'Review system'
    ],
    pages: ['Home', 'Vendors', 'Products', 'Vendor Dashboard', 'Admin Panel'],
    customizationOptions: ['Commission rates', 'Vendor features', 'Payment splits'],
    previewImage: '/templates/marketplace.jpg',
    tags: ['marketplace', 'multi-vendor', 'advanced']
  },

  // Creative Templates
  {
    id: 'cre-001',
    name: 'Portfolio Showcase',
    category: 'creative',
    description: 'Stunning portfolio template for designers, photographers, and creative professionals.',
    price: 199,
    popularity: 90,
    createdAt: new Date('2025-01-05'),
    features: [
      'Gallery layouts',
      'Lightbox viewer',
      'Project details',
      'Client logos',
      'Contact form'
    ],
    pages: ['Home', 'Portfolio', 'Project Details', 'About', 'Contact'],
    customizationOptions: ['Gallery styles', 'Colors', 'Typography', 'Layouts'],
    previewImage: '/templates/portfolio-showcase.jpg',
    tags: ['portfolio', 'creative', 'gallery']
  },
  {
    id: 'cre-002',
    name: 'Artist Studio',
    category: 'creative',
    description: 'Elegant template for artists to showcase and sell their work online.',
    price: 349,
    popularity: 84,
    createdAt: new Date('2024-12-10'),
    features: [
      'Artwork gallery',
      'Online shop',
      'Exhibition schedule',
      'Artist bio',
      'Commission requests'
    ],
    pages: ['Home', 'Gallery', 'Shop', 'Exhibitions', 'About', 'Contact'],
    customizationOptions: ['Gallery layouts', 'Shop integration', 'Branding'],
    previewImage: '/templates/artist-studio.jpg',
    tags: ['art', 'gallery', 'creative']
  },

  // Restaurant Templates
  {
    id: 'rest-001',
    name: 'Fine Dining',
    category: 'restaurant',
    description: 'Elegant restaurant template with online reservations and menu showcase.',
    price: 449,
    popularity: 87,
    createdAt: new Date('2025-01-08'),
    features: [
      'Digital menu',
      'Online reservations',
      'Gallery',
      'Chef profiles',
      'Special events',
      'Contact & hours'
    ],
    pages: ['Home', 'Menu', 'Reservations', 'About', 'Gallery', 'Contact'],
    customizationOptions: ['Menu styling', 'Reservation system', 'Branding', 'Colors'],
    previewImage: '/templates/fine-dining.jpg',
    tags: ['restaurant', 'dining', 'reservations']
  },
  {
    id: 'rest-002',
    name: 'Cafe & Bakery',
    category: 'restaurant',
    description: 'Warm and inviting template perfect for cafes, bakeries, and coffee shops.',
    price: 299,
    popularity: 85,
    createdAt: new Date('2024-12-05'),
    features: [
      'Menu display',
      'Online ordering',
      'Location map',
      'Instagram feed',
      'Daily specials'
    ],
    pages: ['Home', 'Menu', 'Order Online', 'Location', 'About'],
    customizationOptions: ['Menu layouts', 'Order system', 'Social feeds'],
    previewImage: '/templates/cafe-bakery.jpg',
    tags: ['cafe', 'bakery', 'casual']
  },

  // Landing Page Templates
  {
    id: 'land-001',
    name: 'Product Launch',
    category: 'landing',
    description: 'High-converting landing page template for product launches and campaigns.',
    price: 149,
    popularity: 93,
    createdAt: new Date('2025-01-12'),
    features: [
      'Hero section',
      'Feature highlights',
      'Pricing table',
      'Email capture',
      'Countdown timer',
      'Social proof'
    ],
    pages: ['Single Landing Page'],
    customizationOptions: ['All content', 'Colors', 'CTAs', 'Forms'],
    previewImage: '/templates/product-launch.jpg',
    tags: ['landing', 'launch', 'conversion']
  },
  {
    id: 'land-002',
    name: 'Lead Generation',
    category: 'landing',
    description: 'Optimized for capturing leads with compelling CTAs and form integration.',
    price: 129,
    popularity: 89,
    createdAt: new Date('2024-12-28'),
    features: [
      'Lead capture form',
      'Benefit highlights',
      'Trust badges',
      'CTA optimization',
      'Analytics tracking'
    ],
    pages: ['Single Landing Page'],
    customizationOptions: ['Form fields', 'Content', 'Design', 'Integrations'],
    previewImage: '/templates/lead-gen.jpg',
    tags: ['leads', 'marketing', 'conversion']
  },
  {
    id: 'land-003',
    name: 'Event Registration',
    category: 'landing',
    description: 'Purpose-built landing page for event registrations and ticket sales.',
    price: 179,
    popularity: 81,
    createdAt: new Date('2024-11-15'),
    features: [
      'Registration form',
      'Event details',
      'Speaker bios',
      'Schedule',
      'Ticket tiers'
    ],
    pages: ['Single Landing Page'],
    customizationOptions: ['Event details', 'Registration form', 'Branding'],
    previewImage: '/templates/event-registration.jpg',
    tags: ['event', 'registration', 'conference']
  },

  // Services Templates
  {
    id: 'serv-001',
    name: 'Agency Pro',
    category: 'services',
    description: 'Complete agency website with project showcase and client management.',
    price: 549,
    popularity: 91,
    createdAt: new Date('2025-01-03'),
    features: [
      'Service listings',
      'Case studies',
      'Team profiles',
      'Client portal',
      'Project inquiry',
      'Blog'
    ],
    pages: ['Home', 'Services', 'Portfolio', 'Team', 'Case Studies', 'Contact'],
    customizationOptions: ['Branding', 'Service categories', 'Portfolio items'],
    previewImage: '/templates/agency-pro.jpg',
    tags: ['agency', 'professional', 'services']
  },
  {
    id: 'serv-002',
    name: 'Consulting Firm',
    category: 'services',
    description: 'Professional template for consulting firms and advisory services.',
    price: 399,
    popularity: 83,
    createdAt: new Date('2024-12-12'),
    features: [
      'Service offerings',
      'Consultation booking',
      'Resources library',
      'Team expertise',
      'Client success stories'
    ],
    pages: ['Home', 'Services', 'Resources', 'Team', 'Book Consultation', 'Contact'],
    customizationOptions: ['Service areas', 'Booking system', 'Content'],
    previewImage: '/templates/consulting-firm.jpg',
    tags: ['consulting', 'advisory', 'professional']
  },
  {
    id: 'serv-003',
    name: 'Freelancer Portfolio',
    category: 'services',
    description: 'Personal brand template for freelancers and independent consultants.',
    price: 179,
    popularity: 88,
    createdAt: new Date('2024-11-25'),
    features: [
      'Services overview',
      'Project portfolio',
      'Testimonials',
      'Availability calendar',
      'Contact form'
    ],
    pages: ['Home', 'Services', 'Portfolio', 'Testimonials', 'Contact'],
    customizationOptions: ['Personal branding', 'Services', 'Portfolio projects'],
    previewImage: '/templates/freelancer-portfolio.jpg',
    tags: ['freelancer', 'personal', 'portfolio']
  },
];
