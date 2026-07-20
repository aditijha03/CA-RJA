import type { 
  NavLink, 
  Stat, 
  Service, 
  Industry, 
  Metric, 
  Testimonial, 
  Insight, 
  FooterSection, 
  ContactInfo, 
  SocialLink 
} from '../types';

// Global navigation settings
export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Contact', href: '/contact' },
];

export const BUTTON_LABELS = {
  consultation: 'Book Consultation',
  exploreServices: 'Explore Services',
  exploreIndustries: 'Explore All Industries',
  viewInsights: 'View All Insights',
  scheduleConsultation: 'Schedule Free Consultation',
  submitting: 'Submitting...',
  submit: 'Request Free Consultation',
};

// Hero Section Content
export const HERO_DATA = {
  tagline: 'ESTABLISHED TRUST. EXCELLENCE DRIVEN.',

  title: 'Accounting Excellence. Business Growth.',

  description:
    'R. Jhunjhunwala & Associates is a trusted Chartered Accountant firm offering Tax Consultancy, GST Services, Income Tax Filing, Audit & Assurance, Accounting, Company Registration, ROC Compliance, and Business Advisory solutions for startups, SMEs, and growing enterprises across India.',

  imageDesc:
    'R. Jhunjhunwala & Associates Chartered Accountant office with professionals discussing tax planning, audit and financial advisory services.',

  caption:
    'R. Jhunjhunwala & Associates – Chartered Accountants providing tax, audit, GST and business advisory services.',
};

// Stats Section Content
export const STATS_DATA: Stat[] = [
  { id: 'stat-1', value: 2500, suffix: '+', label: 'Clients Served Globally' },
  { id: 'stat-2', value: 18, suffix: '+', label: 'Years of Professional Practice' },
  { id: 'stat-3', value: 99, suffix: '%', label: 'Client Retention Rate' },
  { id: 'stat-4', value: 24, suffix: '/7', label: 'Dedicated Support Infrastructure' },
];

// Services Section Content
export const SERVICES_OVERVIEW = {
  tagline: 'PRACTICE DIRECTORY',
  title: 'Our Core Services',
  description: 'Providing comprehensive statutory auditing, corporate tax planning, ROC filings, and strategic capital advisory services tailored to Indian regulatory frameworks.'
};

export const SERVICES_DATA: Service[] = [
  {
    id: 'srv-audit',
    num: '01',
    title: 'Audit & Assurance',
    description: 'Independent statutory, internal, and tax audits evaluating operational control frameworks and ensuring strict compliance with ICAI and global auditing protocols.',
    href: '#services',
    iconName: 'ShieldCheck',
  },
  {
    id: 'srv-gst',
    num: '02',
    title: 'GST Consultancy',
    description: 'Comprehensive GST advisory, monthly/annual return filings, input tax credit reconciliation, refund processing, and expert representation before tax authorities.',
    href: '#services',
    iconName: 'Percent',
  },
  {
    id: 'srv-tax',
    num: '03',
    title: 'Income Tax Filing',
    description: 'Direct corporate tax planning, preparation and filing of returns, transfer pricing analysis, and robust litigation representation before appellate authorities.',
    href: '#services',
    iconName: 'Calculator',
  },
  {
    id: 'srv-roc',
    num: '04',
    title: 'ROC Compliance',
    description: 'Company secretarial support, Ministry of Corporate Affairs (MCA) filings, statutory registers maintenance, and board meeting corporate governance advisory.',
    href: '#services',
    iconName: 'FileCheck2',
  },
  {
    id: 'srv-incorp',
    num: '05',
    title: 'Company Incorporation',
    description: 'End-to-end incorporation of Private Limited and Public Limited companies, legal equity structuring, PAN/TAN allocation, and bank setup.',
    href: '#services',
    iconName: 'Building2',
  },
  {
    id: 'srv-llp',
    num: '06',
    title: 'LLP Registration',
    description: 'Structuring and drafting of Limited Liability Partnership agreements, LLP registry filings, partner capital advisory, and initial compliance setups.',
    href: '#services',
    iconName: 'Users',
  },
  {
    id: 'srv-msme',
    num: '07',
    title: 'MSME Registration',
    description: 'Fast-track Udyam MSME registrations, government compliance subsidy counseling, institutional lending support, and credit rating advisories.',
    href: '#services',
    iconName: 'Store',
  },
  {
    id: 'srv-acct',
    num: '08',
    title: 'Accounting & Bookkeeping',
    description: 'Outsourced day-to-day bookkeeping, general ledger maintenance, monthly financial closes, and preparation of structured MIS management reports.',
    href: '#services',
    iconName: 'Notebook',
  },
  {
    id: 'srv-payroll',
    num: '09',
    title: 'Payroll Management',
    description: 'Salary structuring, automated pay slip processing, TDS deductions, and statutory compliance management for Provident Fund (PF) and ESIC.',
    href: '#services',
    iconName: 'CreditCard',
  },
  {
    id: 'srv-adv',
    num: '10',
    title: 'Financial Advisory',
    description: 'Outsourced virtual CFO management, credit appraisals, mergers and acquisitions advisory, and strategic fund-raising project reports.',
    href: '#services',
    iconName: 'Coins',
  },
  {
    id: 'srv-taxplan',
    num: '11',
    title: 'Tax Planning',
    description: 'Advanced corporate tax optimization structuring, double taxation relief (DTAA) evaluations, and strategic planning for capital gains.',
    href: '#services',
    iconName: 'Briefcase',
  },
  {
    id: 'srv-startup',
    num: '12',
    title: 'Startup Advisory',
    description: 'Venture capital compliance support, equity valuation reports, shareholder agreements, ESOP design, and Startup India registration benefits.',
    href: '#services',
    iconName: 'Compass',
  },
];

// Why Choose Us Section Content
export const WHY_CHOOSE_US_DATA = {
  title: 'Why Businesses Trust Our Advisory',
  description: 'With over 10 years of rigorous compliance practice, we translate complex financial regulations into clear, actionable business strategies.',
  imageDesc: 'Executive boardroom meeting table in Mumbai, modern office interior with soft warm lighting.',
  caption: 'Fig 2. Executive compliance briefing, R. Jhunjhunwala & Associates.',
  items: [
    {
      id: 'wcu-1',
      num: '01',
      title: 'Experienced Chartered Accountants',
      description: 'Our team consists of senior specialists with multi-industry expertise in Indian tax, audit protocols, and international standards.',
    },
    {
      id: 'wcu-2',
      num: '02',
      title: 'Personalized Business Solutions',
      description: 'We do not believe in boilerplate services. We study your operational blueprint to deliver customized compliance frameworks.',
    },
    {
      id: 'wcu-3',
      num: '03',
      title: 'Transparent Pricing & Systems',
      description: 'Open communication, clear fee structures, and detailed task logs ensure you stay fully informed and in complete control of advisory costs.',
    },
    {
      id: 'wcu-4',
      num: '04',
      title: 'Timely Compliance Execution',
      description: 'Our digital tracking systems guarantee filings are executed ahead of deadlines, shielding your organization from penalties.',
    },
    {
      id: 'wcu-5',
      num: '05',
      title: 'Dedicated Relationship Managers',
      description: 'You gain a single, expert point of contact who understands your business history, ensuring seamless and proactive communication.',
    },
    {
      id: 'wcu-6',
      num: '06',
      title: 'Technology-Driven Processes',
      description: 'We utilize advanced accounting stacks and secure client portals to ensure prompt service execution and data protection.',
    },
  ],
};

// Industry Expertise Section Content
export const INDUSTRIES_DATA: Industry[] = [
  // { 
  //   id: 'ind-health', 
  //   name: 'Healthcare', 
  //   markets: 'Statutory audits and tax structural planning for hospitals, pharma developers, and clinical distributors.', 
  //   imageDesc: 'Modern medical research laboratory desk, warm high-end lighting.', 
  //   imageUrl: 'https://images.unsplash.com/photo-1584515901807-42881518e614?auto=format&fit=crop&q=80&w=600'
  // },
  { 
    id: 'ind-mfg', 
    name: 'Manufacturing', 
    markets: 'Inventory valuation, GST compliance, and import-export advisory for manufacturing lines and factories.', 
    imageDesc: 'Modern clean automation factory control floor.', 
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-re', 
    name: 'Real Estate', 
    markets: 'Joint venture structuring, project capital reports, and RERA compliance for developers and building contractors.', 
    imageDesc: 'Architectural structural blueprint, soft warm shadows.', 
    imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-it', 
    name: 'IT & Technology', 
    markets: 'Transfer pricing audits, STPI compliance, and VC-funding tax structures for SaaS providers and software houses.', 
    imageDesc: 'Software developer office workstations, modern setup.', 
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-retail', 
    name: 'Retail', 
    markets: 'GST return reconciliation, multi-store bookkeeping, and supply chain audits for franchise networks and e-retailers.', 
    imageDesc: 'Premium modern department store interior, ambient lighting.', 
    imageUrl: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-startups', 
    name: 'Startups', 
    markets: 'Shareholder equity structuring, Startup India registrations, ESOP valuations, and angel tax advisory.', 
    imageDesc: 'Collaborative startup boardroom team working session.', 
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-export', 
    name: 'Export Businesses', 
    markets: 'FEMA advisory, double tax relief (DTAA), custom duty audits, and SEZ regulatory compliance.', 
    imageDesc: 'Global shipping cargo logistics container port terminal.', 
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600'
  },
  { 
    id: 'ind-prof', 
    name: 'Professional Services', 
    markets: 'Service tax optimization, corporate filings, and cash flow advisory for consultancies, law firms, and creative agencies.', 
    imageDesc: 'High-end design studio meeting table with notes, professional.', 
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600'
  },
  // { 
  //   id: 'ind-nonprofit', 
  //   name: 'NGOs', 
  //   markets: 'Trust registration audits, FCRA compliance filings, Section 8 advisory, and income tax exemptions.', 
  //   imageDesc: 'Clean administrative office setting for charity trust.', 
  //   imageUrl: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&q=80&w=600'
  // },
  { 
    id: 'ind-hospitality', 
    name: 'Hospitality', 
    markets: 'Licensing audits, payroll management, and accounting systems for boutique hotels, resorts, and tourism operators.', 
    imageDesc: 'Premium hotel reception lobby desk, soft warm lighting.', 
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600'
  },
];

// Success Metrics Section Content
export const METRICS_DATA: Metric[] = [
  { id: 'm-tax', value: 12, suffix: 'Cr+', label: 'Direct Tax Savings for Clients', chartData: [10, 25, 45, 60, 85, 120] },
  { id: 'm-ret', value: 85, suffix: '%', label: 'Repeat Client Advisory Volume', chartData: [70, 72, 75, 80, 82, 85] },
  { id: 'm-comp', value: 99.9, suffix: '%', label: 'On-Time Compliance Filing Record', chartData: [99.0, 99.2, 99.5, 99.7, 99.8, 99.9] },
  { id: 'm-reg', value: 2000, suffix: '+', label: 'Businesses Incorporated', chartData: [200, 500, 900, 1300, 1700, 2000] },
];

// Testimonials Section Content
export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'R. Jhunjhunwala & Associates has been instrumental in our corporate restructuring and taxation planning. Their compliance foresight and audit transparency are exemplary. They operate with an elite degree of professional authority.',
    author: 'Vikram Mehta',
    role: 'Chief Executive Officer',
    company: 'Mehta Industries Group',
  },
  {
    id: 'test-2',
    quote: 'Navigating startup compliance, ROC regulations, and GST filings felt overwhelming until we partnered with this firm. Their tech-savvy client portals and prompt advisories saved us countless hours of administrative friction.',
    author: 'Dr. Ananya Roy',
    role: 'Co-Founder & CEO',
    company: 'Aether Bio-Tech',
  },
  {
    id: 'test-3',
    quote: 'Their statutory audit expertise gave our international investors complete confidence. The level of personalized detail and executive diligence they commit to is unparalleled in the Indian financial sector.',
    author: 'Sanjay Kapoor',
    role: 'Chief Financial Officer',
    company: 'Trident Logistics India',
  },
];

export const NEW_CLIENTS_DATA = [
  { id: 'client-1', name: 'Joinmay Mumbai Electronics Pvt. Ltd. (VIVO Mobiles)', logo: '/assets/images/clients/joinmay.jpg' },
  { id: 'client-2', name: 'Enpar Steels Pvt. Ltd.', logo: '/assets/images/clients/enpar.png' },
  { id: 'client-3', name: 'Saswat Financial Technologies Pvt. Ltd.', logo: '/assets/images/clients/saswat.png' },
  { id: 'client-4', name: 'SFT Finance Pvt. Ltd. (NBFC)', logo: '/assets/images/clients/stft.png' },
  { id: 'client-5', name: 'Stakall LLP', logo: '/assets/images/clients/Stakall.png' },
  { id: 'client-6', name: 'Lighthouse Technologies Pvt. Ltd', logo: '/assets/images/clients/lighthouse.png' }
];

// Insights Section Content
export const INSIGHTS_DATA: Insight[] = [
  {
    id: 'ins-1',
    title: 'Tax Planning Strategies for FY 2026-27: Critical Adjustments for Indian Corporates',
    category: 'Tax Advisory',
    date: 'July 2026',
    readTime: '7 min read',
    summary: 'An in-depth analysis of corporate direct tax structures, transfer pricing optimization, and DTAA treaty compliance strategies under the revised finance acts.',
    isFeatured: true,
    imageDesc: 'Corporate ledger and tax planning calculator on desk.',
    imageUrl: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=800',
    author: 'R. Jhunjhunwala (Managing Partner)',
  },
  {
    id: 'ins-2',
    title: 'GST Compliance Checklist: Reconciling Input Tax Credit Safely',
    category: 'Indirect Tax',
    date: 'June 2026',
    readTime: '4 min read',
    summary: 'A practical blueprint to streamline your monthly GST return reconciliation, GSTR-2B audits, and prevent supplier compliance friction.',
    imageDesc: 'Accounting invoice tables on computer display.',
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 'ins-3',
    title: 'Common ROC Filing Mistakes & Corporate Governance Hazards',
    category: 'MCA Compliance',
    date: 'June 2026',
    readTime: '5 min read',
    summary: 'Dangers of delayed filings, incorrect director disclosures, and secretarial oversights that lead to MCA fines and compliance holds.',
    imageDesc: 'Corporate board meeting paperwork.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600',
  },
];

// CTA Section Content
export const CTA_DATA = {
  title: "Let's Secure Your Business Compliance Together.",
  description: 'Schedule a private consultation with our senior partners to resolve your direct tax structure, GST issues, or company audits.',
  points: [
    { title: 'Expert Partner Guidance', description: 'Consult directly with experienced senior chartered accountants.' },
    { title: 'Deadlines Guaranteed', description: 'Zero delayed filings, avoiding costly penalties and regulatory checks.' },
    { title: 'Growth Aligned', description: 'Financial advisory tailored to raise capital and optimize cash flow.' },
  ],
};

// Contact details
export const CONTACT_DATA: ContactInfo = {
  phone: '+91 98765 43210',
  email: 'info@rjindia.com',
  address: `Registered Address:\nB-401/402, Sangam CHSLtd.,\nSuchidham, Near Dindoshi Bus Depot,\nFilm City Road, Malad East,\nMumbai - 400097.\n\nOffice Address:\nOffice No.028, Udyog Bhavan CHSLtd.,\nOpposite Zudio, Sonawala Road,\nJay Prakash Nagar, Goregaon East,\nMumbai - 400063`,
  mapsLink: 'https://www.google.com/maps?q=Office+No.028,+Udyog+Bhavan+Sonawala+Road+Goregaon+East+Mumbai',
};

// Socials
export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', href: 'https://linkedin.com' },
  { platform: 'Twitter', href: 'https://twitter.com' },
  { platform: 'Facebook', href: 'https://facebook.com' },
  { platform: 'Instagram', href: 'https://instagram.com' },
];

// Footer sections
export const FOOTER_LINKS: FooterSection[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Industries', href: '/industries' },
      { label: 'Insights', href: '/insights' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Our Services',
    links: [
      { label: 'Audit & Assurance', href: '/services/audit-assurance' },
      { label: 'Tax Advisory', href: '/services/tax-advisory' },
      { label: 'GST Compliance', href: '/services/gst-compliance' },
      { label: 'Business Registration', href: '/services/business-registration' },
      { label: 'Accounting Services', href: '/services/accounting-services' },
      { label: 'Virtual CFO', href: '/services/virtual-cfo' },
    ],
  },
];

export const FOOTER_DATA = {
  disclaimer: 'Disclaimer: R. Jhunjhunwala & Associates is a registered partnership firm of Chartered Accountants in India, regulated by the Institute of Chartered Accountants of India (ICAI). The content of this website is for informational purposes only and does not constitute professional advice.',
  legal: {
    privacy: '#privacy',
    terms: '#terms',
    copyright: '© 2026 R. Jhunjhunwala & Associates. All Rights Reserved.',
  }
};
