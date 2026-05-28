import { Service, Feature, ProcessStep, Testimonial } from '../types';

export const SERVICES_DATA: Service[] = [
  {
    id: 'itr',
    title: 'Income Tax Return',
    category: 'tax',
    description: 'Expert-assisted ITR filing for salaried professionals, freelancers, investors, and business owners.',
    longDescription: 'Ensure maximum tax savings and 100% compliance with expert review. We analyze your Form 26AS, AIS, and TIS to claim all legal deductions under Section 80C, 80D, etc.',
    iconName: 'Coins',
    price: '₹999 onwards',
    deliveryTime: '2-3 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I am interested in filing my Income Tax Return (ITR). Please guide me with the process and document checklist.'
  },
  {
    id: 'gst',
    title: 'GST Return Filing',
    category: 'tax',
    description: 'Timely and accurate monthly/quarterly GST returns (GSTR-1, GSTR-3B, GSTR-9) with ITC reconciliation.',
    longDescription: 'Avoid heavy late fees and license cancellation. Get complete input tax credit (ITC) reconciliation, error-free filings, and instant support on GST queries.',
    iconName: 'FileText',
    price: '₹1499/month',
    deliveryTime: 'Monthly Filing',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to discuss GST Return Filing for my business. Please provide details about your monthly compliance package.'
  },
  {
    id: 'tds',
    title: 'TDS / TCS Filing',
    category: 'tax',
    description: 'Quarterly filing for Salary/Non-Salary deductions, Form 16/16A generation, and interest correction.',
    longDescription: 'Accurate deduction mapping, quarterly returns (Form 24Q, 26Q, 27Q), and timely generation of certificates with zero defaults or compliance notices.',
    iconName: 'Layers',
    price: '₹1999 onwards',
    deliveryTime: '3-4 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I need professional support for complete TDS/TCS Filing & compliance. What are the pricing and required documents?'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Accounts',
    category: 'startup',
    description: 'End-to-end digital cloud bookkeeping, financial statement preparation, and general ledger maintenance.',
    longDescription: 'Keep your accounts investor-ready. Get Monthly P&L, Balance Sheets, and Cash Flow Statements curated by senior CAs to make informed business decisions.',
    iconName: 'TrendingUp',
    price: '₹4999/month',
    deliveryTime: 'Continuous Support',
    whatsappMessage: 'Hello FILINGUNIVERSE, I am looking for Bookkeeping & Cloud Accounting services for our company. Can we schedule a quick call?'
  },
  {
    id: 'trademark',
    title: 'Trademark Registration',
    category: 'registration',
    description: 'Brand name, logo, and slogan defense. Secure exclusive ownership and stop others from copying.',
    longDescription: 'Get TM application number within 24 hours. Includes detailed brand search, class selection, application filing, and replies to initial objections.',
    iconName: 'ShieldCheck',
    price: '₹1999 + Govt Fees',
    deliveryTime: '1-2 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to register a Trademark for my brand name and logo. Can you help me do a trademark search and explain the process?'
  },
  {
    id: 'iec',
    title: 'IEC Import Export Code',
    category: 'registration',
    description: 'Mandatory registration with DGFT for starting dynamic import-export business transactions.',
    longDescription: 'Unlock worldwide markets. Rapid Import Export Code registration enabling you to clear custom consignments, wire global funds, and scale internationally.',
    iconName: 'Globe',
    price: '₹1499 all-inclusive',
    deliveryTime: '1-2 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to obtain an Import Export Code (IEC) to start global trading. What is the list of documents needed?'
  },
  {
    id: 'company-reg',
    title: 'Company Registration',
    category: 'registration',
    description: 'Private Limited Company registration with digital signature, DIN, MOA, AOA, PAN & TAN.',
    longDescription: 'Incorporate your dream startup as a Private Limited Company. Includes name approval, incorporation certificate, and opening of a corporate bank account with partners.',
    iconName: 'Building2',
    price: '₹6999 all-inclusive',
    deliveryTime: '7-10 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to register a new Private Limited Company. Please share the timeline, requirements, and state-wise costs.'
  },
  {
    id: 'startup-comp',
    title: 'Startup Compliance',
    category: 'startup',
    description: 'DPIIT Startup India recognition, legal support, board resolutions, and annual corporate compliance.',
    longDescription: 'Register with Startup India to enjoy 3 years of income tax holiday, safe harbor provisions, simple self-certifications, and easy government funding access.',
    iconName: 'Sparkles',
    price: '₹9999 onwards',
    deliveryTime: 'Custom Timeline',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to apply for Startup India DPIIT recognition and setup full corporate compliance. How can we start?'
  },
  {
    id: 'llp',
    title: 'LLP Registration',
    category: 'registration',
    description: 'Limited Liability Partnership formulation with flexible partnership deed styling and active partners.',
    longDescription: 'The perfect balance of a limited company and partnership. Formulate an LLP to protect personal assets with less compliance burden than private companies.',
    iconName: 'Users2',
    price: '₹5999 all-inclusive',
    deliveryTime: '8-12 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to incorporate a Limited Liability Partnership (LLP). What are the key details and registration phases?'
  },
  {
    id: 'msme',
    title: 'MSME Registration',
    category: 'compliance',
    description: 'Udyam Registration certificate to claim bank credit benefits, subsidy schemes, and priority credit.',
    longDescription: 'Get complete security against delayed payments from buyers. Leverage low-interest business loans, electricity discounts, and exclusive government tenders.',
    iconName: 'Award',
    price: '₹799 all-inclusive',
    deliveryTime: '24 Hours',
    whatsappMessage: 'Hello FILINGUNIVERSE, I need an MSME / Udyam Registration Certificate for my business. Can we complete this today?'
  },
  {
    id: 'fssai',
    title: 'FSSAI License',
    category: 'compliance',
    description: 'Food Registration & State/Central Licenses for restaurants, cloud kitchens, and food startups.',
    longDescription: 'Ensure high quality food standards and legal peace. We handle standard registration, state level license, or central licenses based on operational turnover.',
    iconName: 'Zap',
    price: '₹1499 onwards',
    deliveryTime: '5-7 Business Days',
    whatsappMessage: 'Hello FILINGUNIVERSE, I want to secure an FSSAI Food license for my food business startup. Please share the details.'
  }
];

export const FEATURES_DATA: Feature[] = [
  {
    id: 'expert-team',
    title: 'Expert CA Team',
    description: 'Our top-tier team of dedicated Chartered Accountants, CS, and corporate legal specialists review every transaction.',
    iconName: 'Users'
  },
  {
    id: 'fast-online',
    title: 'Fast Online Process',
    description: 'Upload your documents securely in our digitally-enabled portal with 100% paperless virtual compliance operations.',
    iconName: 'Zap'
  },
  {
    id: 'affordable',
    title: 'Affordable Pricing',
    description: 'Transparent upfront flat quotations with absolutely no hidden maintenance, server, or legal consulting surcharges.',
    iconName: 'DollarSign'
  },
  {
    id: 'secure',
    title: '100% Secure & Private',
    description: 'Strict, bank-grade secure data transmission protocols keeping all corporate files and financial details private.',
    iconName: 'ShieldCheck'
  },
  {
    id: 'startup-friendly',
    title: 'Startup Friendly',
    description: 'Built specifically to accommodate agile growth, flexible legal styling, corporate advice, and seed funding support.',
    iconName: 'Sparkles'
  },
  {
    id: 'quick-support',
    title: 'Quick WhatsApp Support',
    description: 'Get straight to the point: connect directly with your filing agent on mobile without robot-voice IVRs.',
    iconName: 'MessageSquare'
  }
];

export const PROCESS_DATA: ProcessStep[] = [
  {
    step: 1,
    title: 'Select Service',
    description: 'Explore our fintech-inspired catalog and select the corporate, tax, or local compliance capability you need.',
    detailedInfo: 'Choose from GST, ITR, Company Registration, state licenses, or comprehensive legal-tech packages tailored to startups.',
    iconName: 'Briefcase'
  },
  {
    step: 2,
    title: 'Share Documents',
    description: 'Send your basic business info and documents easily to our expert CA team through WhatsApp or secure digital channels.',
    detailedInfo: 'We provide a clear checklist of needed templates, PANs, lease agreements, or financial files. No complicated onboarding forms.',
    iconName: 'FileText'
  },
  {
    step: 3,
    title: 'Expert Verification',
    description: 'Our certified professionals analyze and cross-verify details with government portals to prevent any errors.',
    detailedInfo: 'We meticulously double-check data entries, reconcile ITC credits, and run structural validity checks to ensure tax compliance.',
    iconName: 'ShieldCheck'
  },
  {
    step: 4,
    title: 'Filing & Completion',
    description: 'We submit your application/returns to the respective authority and send back the formal ARN and acknowledgment.',
    detailedInfo: 'Get successful confirmation, invoice records, and ongoing compliance reminders directly on your WhatsApp number.',
    iconName: 'CheckCircle2'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Aman Deep',
    role: 'Co-Founder & CEO',
    company: 'Zetta Technologies',
    feedback: 'FILINGUNIVERSE handled our incorporation and Startup India DPIIT recognition within days. The transition was completely smooth, completely digital, and 100% hassle-free. Our legal framework is solid!',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    role: 'Founder',
    company: 'NatureCrafts Handlooms',
    feedback: 'I was always confused about GST return filing and ITC reconciliations until I contacted the FILINGUNIVERSE team. Highly professional and their direct WhatsApp support saves so much operational time.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Vikram Aditya',
    role: 'MD',
    company: 'AeroLine Logistix',
    feedback: 'Filing dual tax returns, IEC, and export licensing became incredibly easy. Highly reliable, fast response times, and highly recommend their CA team for companies doing international commercial trades.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: '4',
    name: 'Neha Kapoor',
    role: 'Partner',
    company: 'CurryCloud Foods LLC',
    feedback: 'We launched three cloud kitchens using FILINGUNIVERSE FSSAI & GST solutions. Clear flat-pricing structure, absolute professional execution, and immediate support. Absolute compliance leaders.',
    rating: 5,
    avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80'
  }
];
