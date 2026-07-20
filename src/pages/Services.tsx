import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Container } from '../components/common/Container';
import { SERVICES_DETAIL_DATA as dynamicServices } from '../constants/servicesData';
import { splitReveal, fadeIn, staggerReveal, hoverLift, hoverReset } from '../animations/helpers';
import { cn } from '../utils/cn';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Percent, 
  Calculator, 
  FileCheck2, 
  Building2, 
  Users, 
  Notebook, 
  Coins, 
  Compass,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';
import { CONTACT_DATA } from '../constants/data';

// Map icons to names
const IconMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  ShieldCheck,
  Percent,
  Calculator,
  FileCheck2,
  Building2,
  Users,
  Notebook,
  Coins,
  Compass
};

const ServiceIcon = ({ name, className, size = 20 }: { name: string; className?: string; size?: number }) => {
  const IconComponent = IconMap[name] || ShieldCheck;
  return <IconComponent className={className} size={size} />;
};

const getServiceImage = (slug: string) => {
  const imageMap: Record<string, string> = {
    'tax-planning-and-advisory': '/assets/images/services/tax_planning_hero.avif',
    'tax-audit-compliance': '/assets/images/services/tax_audit_hero.avif',
    'statutory-audit-compliance': '/assets/images/services/statutory_audit_hero.avif',
    'transfer-pricing-audit-compliance': '/assets/images/services/transfer_pricing_hero.avif',
    'internal-audit-compliance': '/assets/images/services/internal_audit_hero.avif',
    'income-tax-return-filing': '/assets/images/services/income_tax_return_hero.avif',
    'international-taxation-advisory': '/assets/images/services/international_tax_hero.avif',
    'gst-return-filing': '/assets/images/services/gst_return_hero.avif',
    'gst-annual-return-filing': '/assets/images/services/gst_annual_hero.avif',
    'tax-representation-litigation-assessments': '/assets/images/services/tax_litigation_hero.avif',
    'gst-representation-litigation-assessments': '/assets/images/services/gst_hero.png',
    'capital-gains-advisory': '/assets/images/services/tax_hero.png',
    'tds-tcs-services': '/assets/images/services/tax_hero.png',
    'virtual-cfo-services': '/assets/images/services/virtual_cfo_hero.png',
    'startup-advisory': '/assets/images/services/startup_hero.png',
    'accounting-services': '/assets/images/services/accounting_hero.png',
    'roc-compliance': '/assets/images/services/roc_hero.png',
    'company-llp-firms-trust-formation': '/assets/images/services/registration_hero.png',
    'direct-tax-consultancy': '/assets/images/services/tax_hero.png'
  };
  
  return imageMap[slug] || '/assets/images/services/services_hero.png';
};

const ServicesPage: React.FC = () => {
  const navigate = useNavigate();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  // Accordion active index
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // Header animations
    if (titleRef.current) {
      const anim = splitReveal(titleRef.current, 0.1);
      if (anim) cleanups.push(anim.kill);
    }
    if (subtitleRef.current) {
      const anim = fadeIn(subtitleRef.current, undefined, 0);
      if (anim) cleanups.push(anim.kill);
    }
    if (descRef.current) {
      const anim = fadeIn(descRef.current, undefined, 0.3);
      if (anim) cleanups.push(anim.kill);
    }

    // Grid reveal
    if (gridRef.current) {
      const anim = staggerReveal(gridRef.current, '.services-grid-item', 0.1);
      if (anim) cleanups.push(anim.kill);
    }

    // Timeline/Process reveal
    if (processRef.current) {
      const anim = staggerReveal(processRef.current, '.timeline-step-item', 0.15);
      if (anim) cleanups.push(anim.kill);
    }

    // Form reveal
    if (formRef.current) {
      const anim = fadeIn(formRef.current, undefined, 0.2);
      if (anim) cleanups.push(anim.kill);
    }

    // Hero image & badge reveal
    if (heroImageRef.current) {
      const anim = fadeIn(heroImageRef.current, undefined, 0.4);
      if (anim) cleanups.push(anim.kill);
    }
    if (badgeRef.current) {
      const anim = fadeIn(badgeRef.current, undefined, 0.7);
      if (anim) cleanups.push(anim.kill);
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  // Card hovers
  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const icon = card.querySelector('.card-icon-container');
    const arrow = card.querySelector('.card-cta-arrow');
    const title = card.querySelector('.card-title');
    const underline = card.querySelector('.card-cta-underline');
    const image = card.querySelector('.card-image');
    
    // 1. Lift and warm background color
    gsap.to(card, {
      y: -8,
      backgroundColor: '#FCFAF7',
      borderColor: '#C6A15B',
      boxShadow: '0 20px 40px -15px rgba(11,35,65,0.08)',
      duration: 0.45,
      ease: 'power3.out'
    });

    // 2. Icon scale and rotation
    if (icon) {
      gsap.to(icon, {
        scale: 1.08,
        rotate: 4,
        borderColor: '#C6A15B',
        backgroundColor: '#C6A15B',
        color: '#FFFFFF',
        duration: 0.45,
        ease: 'power3.out'
      });
    }

    // 3. Arrow slide
    if (arrow) {
      gsap.to(arrow, {
        x: 6,
        duration: 0.35,
        ease: 'power3.out'
      });
    }

    // 4. Underline reveal
    if (underline) {
      gsap.to(underline, {
        scaleX: 1,
        duration: 0.45,
        ease: 'power3.out'
      });
    }

    // 5. Title color contrast (darker navy #030E1C)
    if (title) {
      gsap.to(title, {
        color: '#030E1C',
        duration: 0.35
      });
    }

    // 6. Image scale and brightness increase
    if (image) {
      gsap.to(image, {
        scale: 1.05,
        filter: 'brightness(1.05)',
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const isFeatured = card.getAttribute('data-featured') === 'true';
    const icon = card.querySelector('.card-icon-container');
    const arrow = card.querySelector('.card-cta-arrow');
    const title = card.querySelector('.card-title');
    const underline = card.querySelector('.card-cta-underline');
    const image = card.querySelector('.card-image');

    // 1. Reset card positioning and colors
    gsap.to(card, {
      y: 0,
      backgroundColor: '#FFFFFF',
      borderColor: isFeatured ? 'rgba(198,161,91,0.3)' : 'rgba(230,230,230,1)',
      boxShadow: '0 4px 20px -10px rgba(0,0,0,0.03)',
      duration: 0.45,
      ease: 'power3.out'
    });

    // 2. Reset icon
    if (icon) {
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        borderColor: 'rgba(198,161,91,0.2)',
        backgroundColor: 'rgba(250,245,236,1)',
        color: '#0B2341',
        duration: 0.45,
        ease: 'power3.out'
      });
    }

    // 3. Reset arrow
    if (arrow) {
      gsap.to(arrow, {
        x: 0,
        duration: 0.35,
        ease: 'power3.out'
      });
    }

    // 4. Reset underline
    if (underline) {
      gsap.to(underline, {
        scaleX: 0,
        duration: 0.45,
        ease: 'power3.out'
      });
    }

    // 5. Reset title
    if (title) {
      gsap.to(title, {
        color: '#0B2341',
        duration: 0.35
      });
    }

    // 6. Reset image
    if (image) {
      gsap.to(image, {
        scale: 1,
        filter: 'brightness(0.95)',
        duration: 0.5,
        ease: 'power3.out'
      });
    }
  };

  const handleHeroMouseEnter = () => {
    if (heroImageRef.current) {
      hoverLift(heroImageRef.current, -8);
    }
  };

  const handleHeroMouseLeave = () => {
    if (heroImageRef.current) {
      hoverReset(heroImageRef.current);
    }
  };

  const handleCardClick = (slug: string) => {
    navigate(`/services/${slug}`);
  };

  // Form handlers
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Construct WhatsApp Message
    const { name, email, phone, company, service, message } = formData;
    let waText = `*New Consultation Request*\n\n`;
    waText += `*Name:* ${name}\n`;
    waText += `*Email:* ${email}\n`;
    waText += `*Phone:* ${phone}\n`;
    if (company) waText += `*Company:* ${company}\n`;
    waText += `*Practice Focus:* ${service}\n`;
    if (message) waText += `*Description:* ${message}\n`;
    
    const waNumber = CONTACT_DATA.phone.replace(/[^0-9]/g, '');
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waText)}`;
    
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 800);
  };

  // General Services FAQs
  const generalFaqs = [
    {
      question: "How do we transition our accounting to your firm?",
      answer: "We manage the transition completely. Our team coordinates with your outgoing accountants, gathers historical books, verifies trial balances, and maps your financial data onto our secure cloud portals with zero operational downtime."
    },
    {
      question: "What is your typical engagement model for virtual CFO services?",
      answer: "Virtual CFO engagements are structured on a monthly retainer based on complexity and required strategy hours. You receive a dedicated senior CA partner, weekly treasury briefs, monthly board MIS presentations, and unlimited guidance on transaction structures."
    },
    {
      question: "How do you ensure audit timeline guarantees?",
      answer: "We implement absolute project tracking. Upon defining the audit scope, we establish phase milestones and a collaborative portal list for document collection. We execute testing concurrently, ensuring final CARO and tax filings are signed ahead of statutory deadlines."
    },
    {
      question: "Are your compliance and tax planning frameworks secure?",
      answer: "Yes, we adhere strictly to ICAI professional confidentiality codes and utilize bank-grade encrypted storage. Access control is limited to your assigned audit and advisory team, ensuring absolute data integrity."
    }
  ];

  const onboardingSteps = [
    {
      step: "01",
      title: "Diagnostic Intake",
      description: "We review your corporate registers, historical direct/indirect tax filings, and internal control structures to identify regulatory gaps."
    },
    {
      step: "02",
      title: "Scope & Proposal",
      description: "Our managing partners outline a tailored service plan mapping your statutory deadlines, audit schedules, and accounting MIS frequencies."
    },
    {
      step: "03",
      title: "Secure Onboarding",
      description: "We transition ledgers to our secure platforms, assign your dedicated relationship manager, and establish filing milestones."
    },
    {
      step: "04",
      title: "Ongoing Advisory",
      description: "We execute audits, file tax compliance documents ahead of schedule, and conduct periodic executive strategy reviews."
    }
  ];

  return (
    <div className="w-full flex flex-col bg-bg-base select-text">
      
      {/* 1. HERO SECTION */}
      <section className="w-full bg-bg-canvas py-xxl border-hairline-b relative overflow-hidden" aria-label="Practice Directory Hero">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Editorial Content */}
            <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-xs mb-md select-none">
                <a href="/" className="font-sans text-[10px] font-bold text-text-muted hover:text-accent tracking-widest uppercase transition-colors">
                  Home
                </a>
                <span className="font-sans text-[10px] text-border">/</span>
                <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
                  Services
                </span>
              </div>

              <span 
                ref={subtitleRef}
                className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase mb-xs"
              >
                PRACTICE DIRECTORY
              </span>
              <h1 
                ref={titleRef}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary font-medium tracking-tight leading-tight"
              >
                Corporate Advisory &amp; Compliance Services
              </h1>
              <p 
                ref={descRef}
                className="font-sans text-sm md:text-base text-text-muted leading-relaxed mt-md max-w-[620px] opacity-0"
              >
                Providing statutory auditing, strategic direct tax planning, GST filings, and virtual CFO leadership. We help corporate enterprises, startups, and mid-market organizations insulate themselves from compliance risk and drive scalable business growth.
              </p>
            </div>

            {/* Right Visual Anchor Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end items-center w-full relative select-none">
              <div
                ref={heroImageRef}
                onMouseEnter={handleHeroMouseEnter}
                onMouseLeave={handleHeroMouseLeave}
                className="relative w-full max-w-[380px] md:max-w-[420px] aspect-video md:aspect-[4/5] lg:aspect-auto lg:h-[48vh] lg:max-h-[460px] p-[12px] border border-accent/20 bg-bg-canvas transition-premium cursor-pointer shadow-premium-lg"
              >
                <div className="relative w-full h-full overflow-hidden border border-border bg-bg-alt">
                  <img
                    src="/assets/images/boardroom_consultation.jpeg"
                    alt="Executive advisory consultation"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Corner brackets */}
                <div className="absolute top-0 left-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute top-0 left-0 w-[1.5px] h-md bg-accent" />
                <div className="absolute bottom-0 right-0 w-md h-[1.5px] bg-accent" />
                <div className="absolute bottom-0 right-0 w-[1.5px] h-md bg-accent" />

                {/* Floating credential badge */}
                <div
                  ref={badgeRef}
                  className="absolute -left-4 bottom-6 border border-border bg-bg-canvas shadow-lg px-md py-sm flex items-center gap-sm"
                >
                  <span className="font-serif text-2xl text-accent leading-none">18+</span>
                  <span className="font-sans text-[9px] uppercase tracking-[0.15em] text-text-muted leading-tight max-w-[70px]">
                    Years of Practice
                  </span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* 2. SERVICES ASYMMETRIC BENTO GRID */}
      <section className="w-full bg-bg-base py-section border-hairline-b" aria-label="Core Services Bento Grid">
        <Container>
          <div className="flex flex-col items-start mb-xl max-w-[700px]">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Core Practice Areas
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-tight mt-xs">
              Structured Compliance &amp; Advisory
            </h2>
          </div>

{/* Bento Grid */}
          <div 
            ref={gridRef}
            className="grid grid-cols-1 md:grid-cols-12 gap-sm md:gap-md w-full items-stretch"
          >
            {dynamicServices.map((srv) => {
              const isAudit = srv.slug === 'audit-assurance';
              const isCfo = srv.slug === 'virtual-cfo';
              const isTax = srv.slug === 'tax-advisory';
              const isLarge = isAudit || isCfo;
              const isFeatured = isLarge || isTax;

              return (
                <div
                  key={srv.id}
                  data-featured={isFeatured ? "true" : "false"}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleCardClick(srv.slug)}
                  className={cn(
                    "services-grid-item group relative overflow-hidden transition-premium select-none cursor-pointer flex flex-col justify-between rounded-card-sm shadow-[0_4px_20px_-10px_rgba(0,0,0,0.03)] opacity-0",
                    isFeatured 
                      ? "bg-[#FCFAF7] border border-[rgba(198,161,91,0.25)]" 
                      : "bg-white border border-[rgba(11,35,65,0.08)]",
                    isLarge 
                      ? "col-span-12 lg:col-span-8 lg:flex-row lg:items-stretch lg:gap-lg p-0" 
                      : "col-span-12 md:col-span-6 lg:col-span-4 p-md md:p-lg"
                  )}
                >
                  {isFeatured && (
                    <>
                      {/* Premium gold top accent strip */}
                      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent/80 via-accent/35 to-accent/80 z-20" />
                      {/* Gold corner brackets */}
                      <div className="absolute top-0 left-0 w-[14px] h-[1px] bg-accent/35 z-20" />
                      <div className="absolute top-0 left-0 w-[1px] h-[14px] bg-accent/35 z-20" />
                      <div className="absolute bottom-0 right-0 w-[14px] h-[1px] bg-accent/35 z-20" />
                      <div className="absolute bottom-0 right-0 w-[1px] h-[14px] bg-accent/35 z-20" />
                    </>
                  )}
                  {isLarge ? (
                    /* Variant 1: Featured Card (large) - Horizontal Layout on Desktop, Vertical on Mobile */
                    <>
                      {/* Content column: has padding to align with vertical cards */}
                      <div className="flex-1 flex flex-col justify-between p-md md:p-lg space-y-md z-10">
                        <div className="flex flex-col space-y-xs">
                          <span className="font-sans text-[9px] font-bold tracking-[0.25em] text-accent uppercase">
                            Featured Practice
                          </span>
                          <h3 className="card-title font-serif text-2xl md:text-3xl text-primary font-medium tracking-tight mt-xs transition-colors duration-300 leading-snug">
                            {srv.title}
                          </h3>

                          {/* Mobile Image: visible under title on mobile/tablet, hidden on desktop */}
                          <div className="block lg:hidden w-full aspect-[16/10] relative overflow-hidden rounded-card-sm my-md shrink-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10" />
                            <div className="absolute top-sm left-sm z-20 card-icon-container p-xs bg-[#FAF5EC] border border-accent/25 text-primary rounded-card-sm flex items-center justify-center w-[36px] h-[36px] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] select-none">
                              <ServiceIcon name={srv.iconName} size={16} />
                            </div>
                            <img 
                              src={getServiceImage(srv.slug)} 
                              alt={`${srv.title} corporate overview`} 
                              className="card-image w-full h-full object-cover transition-transform duration-500 scale-100 filter brightness-95" 
                            />
                          </div>

                          <div className="h-[1px] bg-accent/10 my-xs lg:my-sm w-full shrink-0" />
                          <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                            {srv.heroDescription}
                          </p>
                        </div>
                        <span className="relative inline-flex items-center font-sans text-[10px] md:text-xs font-semibold tracking-widest text-primary uppercase select-none pb-[2px] self-start mt-sm">
                          <span>{srv.ctaText}</span>
                          <ArrowRight size={10} className="card-cta-arrow ml-xs" />
                          <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-left scale-x-0 card-cta-underline" />
                        </span>
                      </div>

                      {/* Desktop Image: visible only on desktop */}
                      <div className="hidden lg:block lg:w-[40%] shrink-0 relative overflow-hidden rounded-r-card-sm self-stretch aspect-[16/10] lg:aspect-auto">
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10" />
                        <div className="absolute top-md left-md z-20 card-icon-container p-xs bg-[#FAF5EC] border border-accent/25 text-primary rounded-card-sm flex items-center justify-center w-[40px] h-[40px] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] select-none">
                          <ServiceIcon name={srv.iconName} size={20} />
                        </div>
                        <img 
                          src={getServiceImage(srv.slug)} 
                          alt={`${srv.title} corporate overview`} 
                          className="card-image w-full h-full object-cover transition-transform duration-500 scale-100 filter brightness-95" 
                        />
                      </div>
                    </>
                  ) : isTax ? (
                    /* Variant 2: Standard Card (medium) - Vertical Layout, Featured Style */
                    <>
                      <div className="flex flex-col space-y-xs">
                        <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-accent uppercase">
                          Featured Engagement
                        </span>
                        <h3 className="card-title font-serif text-2xl text-primary font-medium tracking-tight mt-xs transition-colors duration-300">
                          {srv.title}
                        </h3>

                        {/* Image: sits below the Title, taking ~35-40% height of card */}
                        <div className="w-full aspect-[16/10] relative overflow-hidden rounded-card-sm my-md shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent z-10" />
                          <div className="absolute top-sm left-sm z-20 card-icon-container p-xs bg-[#FAF5EC] border border-accent/25 text-primary rounded-card-sm flex items-center justify-center w-[36px] h-[36px] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.03)] select-none">
                            <ServiceIcon name={srv.iconName} size={16} />
                          </div>
                          <img 
                            src={getServiceImage(srv.slug)} 
                            alt={`${srv.title} corporate overview`} 
                            className="card-image w-full h-full object-cover transition-transform duration-500 scale-100 filter brightness-95" 
                          />
                        </div>

                        <div className="h-[1px] bg-accent/10 my-md w-full shrink-0" />
                        <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                          {srv.heroDescription}
                        </p>
                      </div>

                      <span className="relative inline-flex items-center font-sans text-[10px] md:text-xs font-semibold tracking-widest text-primary uppercase select-none pb-[2px] mt-lg self-start">
                        <span>Learn More</span>
                        <ArrowRight size={10} className="card-cta-arrow ml-xs" />
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-left scale-x-0 card-cta-underline" />
                      </span>
                    </>
                  ) : (
                    /* Variant 3: Compact Card (small) - Vertical Layout, White Style */
                    <>
                      <div className="flex flex-col space-y-xs">
                        <span className="font-sans text-[9px] font-bold tracking-[0.2em] text-text-muted/80 uppercase">
                          Practice Area
                        </span>
                        <h3 className="card-title font-serif text-xl text-primary font-medium tracking-tight mt-xs transition-colors duration-300">
                          {srv.title}
                        </h3>

                        {/* Image: sits below the Title, aspect 16/9 for consistent size and alignment */}
                        <div className="w-full aspect-[16/9] relative overflow-hidden rounded-card-sm my-md shrink-0">
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent z-10" />
                          <div className="absolute top-xs left-xs z-20 card-icon-container p-[6px] bg-[#FAF5EC] border border-accent/20 text-primary rounded-card-sm flex items-center justify-center w-[30px] h-[30px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] select-none">
                            <ServiceIcon name={srv.iconName} size={14} />
                          </div>
                          <img 
                            src={getServiceImage(srv.slug)} 
                            alt={`${srv.title} corporate overview`} 
                            className="card-image w-full h-full object-cover transition-transform duration-500 scale-100 filter brightness-95" 
                          />
                        </div>

                        <div className="h-[1px] bg-accent/10 my-sm w-full shrink-0" />
                        <p className="font-sans text-[11px] md:text-xs text-text-muted leading-relaxed">
                          {srv.heroDescription}
                        </p>
                      </div>

                      <span className="relative inline-flex items-center font-sans text-[9px] md:text-[10px] font-semibold tracking-widest text-primary uppercase select-none pb-[2px] mt-md self-start">
                        <span>Learn More</span>
                        <ArrowRight size={10} className="card-cta-arrow ml-xs" />
                        <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-accent origin-left scale-x-0 card-cta-underline" />
                      </span>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section data-theme="dark" className="w-full bg-primary py-section border-hairline-b relative overflow-hidden text-bg-canvas" aria-label="Why Choose Our Advisory">
        {/* Subtle decorative radial gradients for depth */}
        <div className="pointer-events-none absolute w-[50vw] max-w-[600px] h-[50vw] max-h-[600px] rounded-full bg-accent/[0.04] blur-3xl right-0 top-0" />
        <div className="pointer-events-none absolute w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-accent/[0.02] blur-3xl left-0 bottom-0" />
        
        {/* Subtle corporate watermark detail */}
        <div className="absolute right-0 top-1/2 pointer-events-none opacity-[0.015] select-none -translate-y-1/2 translate-x-[10%]">
          <span className="font-serif text-[18rem] font-bold text-bg-canvas">STANDARDS</span>
        </div>

        <Container>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-center">
            <div className="lg:col-span-5 flex flex-col space-y-md lg:pr-lg">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Service Excellence
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-bg-canvas font-medium tracking-tight">
                Our Corporate Standards
              </h2>
              <p className="font-sans text-xs md:text-sm text-[#B8C0CC] leading-relaxed">
                We believe corporate compliance is not merely an administrative checkbox. It represents a vital control center that protects capital, structures equity, and enables growth.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-md pt-sm lg:pt-0">
              <div className="border border-border/10 bg-primary-light/45 p-md flex flex-col justify-between rounded-card-sm hover:border-accent/30 transition-premium shadow-premium-sm">
                <span className="font-serif text-xl font-medium text-bg-canvas">Senior Oversight</span>
                <p className="font-sans text-xs text-[#B8C0CC] leading-relaxed mt-xs">
                  Every statutory audit, direct-tax dispute, and corporate structure is actively planned and reviewed by a senior managing partner.
                </p>
              </div>
              <div className="border border-border/10 bg-primary-light/45 p-md flex flex-col justify-between rounded-card-sm hover:border-accent/30 transition-premium shadow-premium-sm">
                <span className="font-serif text-xl font-medium text-bg-canvas">Deadline Protection</span>
                <p className="font-sans text-xs text-[#B8C0CC] leading-relaxed mt-xs">
                  Our internal trackers coordinate files and upload dates, guaranteeing zero delayed filings and complete penalty insulation.
                </p>
              </div>
              <div className="border border-border/10 bg-primary-light/45 p-md flex flex-col justify-between rounded-card-sm hover:border-accent/30 transition-premium shadow-premium-sm">
                <span className="font-serif text-xl font-medium text-bg-canvas">Secure Infrastructure</span>
                <p className="font-sans text-xs text-[#B8C0CC] leading-relaxed mt-xs">
                  We utilize dual-factor secure client portals and server-side encryption to guarantee corporate data safety.
                </p>
              </div>
              <div className="border border-border/10 bg-primary-light/45 p-md flex flex-col justify-between rounded-card-sm hover:border-accent/30 transition-premium shadow-premium-sm">
                <span className="font-serif text-xl font-medium text-bg-canvas">Regulatory Foresight</span>
                <p className="font-sans text-xs text-[#B8C0CC] leading-relaxed mt-xs">
                  We translate newly issued ICAI guidelines, GST circulars, and MCA notifications into proactive adjustments for your firm.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 4. PROCESS / ONBOARDING TIMELINE */}
      <section className="w-full bg-bg-base py-section border-hairline-b" aria-label="Firm Engagement Process">
        <Container>
          <div className="flex flex-col items-center text-center mb-xl max-w-[700px] mx-auto">
            <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
              Onboarding Cycle
            </span>
            <h2 className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-tight mt-xs">
              Engagement Lifecycle
            </h2>
            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed mt-xs">
              Our systematic approach guarantees clean transition cycles, strict regulatory alignment, and proactive advisory deliverables.
            </p>
          </div>

          <div 
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-4 gap-sm md:gap-md w-full relative"
          >
            {/* Timeline connectors */}
            <div className="hidden md:block absolute top-[36px] left-[8%] right-[8%] h-[1.5px] border-t border-dashed border-accent/20 z-0" />
            
            {onboardingSteps.map((step) => (
              <div 
                key={step.step}
                className="timeline-step-item group flex flex-col p-md bg-bg-canvas border border-border rounded-card-sm shadow-premium-sm relative z-10 hover:border-accent/30 transition-premium opacity-0"
              >
                <div className="flex items-center justify-between">
                  <span className="font-serif text-3xl font-bold text-accent/35 group-hover:text-accent transition-colors duration-300 bg-bg-canvas pr-sm relative z-10">{step.step}</span>
                  <div className="w-[8px] h-[8px] rounded-full border border-accent bg-bg-canvas z-10" />
                </div>
                <h3 className="font-serif text-lg font-medium text-primary mt-xs">{step.title}</h3>
                <p className="font-sans text-xs text-text-muted leading-relaxed mt-xs">{step.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. FAQ SECTION */}
      <section className="w-full bg-bg-canvas py-section border-hairline-b" aria-label="General FAQ Accordion">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl">
            
            {/* Left FAQ Intro */}
            <div className="lg:col-span-5 flex flex-col space-y-sm lg:pr-lg">
              <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                Practice Inquiry
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-primary font-medium tracking-tight">
                General Service FAQs
              </h2>
              <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                If you have further operational queries regarding transition cycles, compliance timelines, or billing structures, schedule a private partner review.
              </p>
              
              {/* Premium Supporting Image Frame */}
              <div className="relative group w-full aspect-[16/10] md:aspect-[4/3] p-[8px] border border-accent/15 bg-bg-canvas transition-premium shadow-premium-sm select-none mt-lg hidden lg:block">
                <div className="relative w-full h-full overflow-hidden border border-border bg-bg-alt">
                  <img
                    src="/assets/images/services/compliance_support.png"
                    alt="Corporate compliance archives and registers"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="absolute top-0 left-0 w-md h-[1px] bg-accent/40" />
                <div className="absolute top-0 left-0 w-[1px] h-md bg-accent/40" />
              </div>
            </div>

            {/* Right Accordion List */}
            <div className="lg:col-span-7 flex flex-col space-y-sm select-none">
              {generalFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-border bg-bg-canvas rounded-card-sm overflow-hidden transition-premium"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className={cn(
                        "w-full flex items-center justify-between p-md text-left font-serif text-base md:text-lg text-primary transition-all duration-300 focus:outline-none cursor-pointer hover:bg-bg-alt/30",
                        isOpen && "bg-bg-alt/20"
                      )}
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        size={16} 
                        className={cn("text-text-muted transition-transform duration-300 shrink-0 ml-sm", isOpen && "rotate-180 text-accent")}
                      />
                    </button>
                    
                    <div 
                      className={cn(
                        "transition-all duration-500 ease-in-out overflow-hidden max-h-0 border-t border-transparent px-md bg-bg-alt/40",
                        isOpen && "max-h-[200px] py-md border-border"
                      )}
                    >
                      <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </Container>
      </section>

      {/* 6. CALL TO ACTION CONSULTATION FORM */}
      <section data-theme="dark" className="w-full bg-primary py-section overflow-hidden relative text-bg-canvas" aria-label="Book Consultation Form">
        {/* Subtle decorative radial gradients for depth */}
        <div className="pointer-events-none absolute w-[60vw] max-w-[700px] h-[60vw] max-h-[700px] rounded-full bg-accent/[0.04] blur-3xl left-0 bottom-0" />
        <div className="pointer-events-none absolute w-[40vw] max-w-[500px] h-[40vw] max-h-[500px] rounded-full bg-accent/[0.02] blur-3xl right-0 top-0" />

        <Container>
          {/* Dark executive container card */}
          <div className="relative z-10 bg-primary-light/35 border border-border/10 rounded-card-lg p-md md:p-xl lg:p-xxl shadow-premium-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-xl lg:gap-xxl items-stretch">
              
              {/* Left CTA Info */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-lg pr-0 lg:pr-lg text-left">
                <div className="flex flex-col space-y-md">
                  <span className="font-sans text-[10px] md:text-xs font-bold tracking-[0.25em] text-accent uppercase">
                    Advisory Onboarding
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-bg-canvas font-medium tracking-tight leading-tight">
                    Discuss Your Compliance Structure
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#B8C0CC] leading-relaxed max-w-[480px]">
                    Schedule a private partner-led consultation to discuss statutory audits, direct corporate tax exposure structures, or ongoing MCA secretarial programs.
                  </p>

                  <div className="flex flex-col space-y-xs pt-xs">
                    <div className="flex items-start space-x-sm">
                      <div className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]">
                        <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-bg-canvas">Confidential Review</span>
                        <span className="font-sans text-[11px] text-[#B8C0CC]">Absolute adherence to ICAI confidentiality frameworks.</span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-sm">
                      <div className="w-[14px] h-[14px] text-accent shrink-0 mt-[4px]">
                        <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24" className="w-full h-full"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path></svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-sans text-xs md:text-sm font-semibold text-bg-canvas">Partner Oversight</span>
                        <span className="font-sans text-[11px] text-[#B8C0CC]">Corporate briefs are assigned directly to managing partners.</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-border/10 pt-xs" />

                {/* Contact Coordinates */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm pt-xs">
                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-primary-light/50 text-accent border border-border/10 rounded-none mt-xxs">
                      <Phone size={12} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-[#B8C0CC] tracking-wider uppercase">Direct Line</span>
                      <a href={`tel:${CONTACT_DATA.phone}`} className="font-sans text-xs font-semibold text-bg-canvas hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-sm">
                    <div className="p-xxs bg-primary-light/50 text-accent border border-border/10 rounded-none mt-xxs">
                      <Mail size={12} />
                    </div>
                    <div className="flex flex-col">
                      <span className="font-sans text-[9px] font-bold text-[#B8C0CC] tracking-wider uppercase">Secure Email</span>
                      <a href={`mailto:${CONTACT_DATA.email}`} className="font-sans text-xs font-semibold text-bg-canvas hover:text-accent transition-colors mt-xxs">
                        {CONTACT_DATA.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Scheduling Form */}
              <div className="lg:col-span-6 flex items-center justify-center mt-xl lg:mt-0 relative z-10">
                {formStatus === 'success' ? (
                  <div className="w-full bg-primary-light/45 border border-border/10 p-md md:p-lg flex flex-col items-center justify-center text-center rounded-card-sm shadow-premium-sm min-h-[400px] select-none text-bg-canvas">
                    <CheckCircle2 size={48} className="text-accent" />
                    <h3 className="font-serif text-xl md:text-2xl text-bg-canvas font-medium tracking-tight mt-md">
                      Consultation Request Logged
                    </h3>
                    <p className="font-sans text-xs md:text-sm text-[#B8C0CC] leading-relaxed max-w-[320px] mt-sm">
                      Thank you. Your corporate compliance brief has been logged. A senior managing partner will contact you directly within 24 business hours.
                    </p>
                    <button 
                      onClick={() => setFormStatus('idle')}
                      className="font-sans text-[10px] md:text-xs font-bold tracking-widest text-accent hover:text-bg-canvas uppercase mt-lg border-b border-accent hover:border-bg-canvas transition-colors pb-xxs cursor-pointer bg-transparent"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form 
                    ref={formRef}
                    onSubmit={handleFormSubmit}
                    className="w-full bg-primary-light/45 border border-border/10 p-md md:p-lg rounded-card-sm shadow-premium-sm flex flex-col justify-between space-y-md opacity-0 text-bg-canvas"
                  >
                    <div className="flex items-center justify-between border-b border-border/10 pb-sm select-none">
                      <div className="flex items-center space-x-xxs">
                        <span className="flex h-2 w-2 relative">
                          <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-accent opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="font-sans text-[10px] font-bold text-accent tracking-widest uppercase">
                          Partner Response Guaranteed
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-sm">
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="name" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="Rajesh Mehta"
                        />
                      </div>
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="email" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="rajesh@mehta.com"
                        />
                      </div>
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="phone" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      <div className="flex flex-col space-y-xxs">
                        <label htmlFor="company" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                          Company Name
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleFormChange}
                          className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none transition-colors placeholder-[#B8C0CC]/40"
                          placeholder="Mehta Industries"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="service" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                        Practice Focus *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleFormChange}
                        className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none cursor-pointer appearance-none"
                      >
                        <option value="" disabled className="bg-primary text-bg-canvas">Select Core practice area...</option>
                        <option value="audit" className="bg-primary text-bg-canvas">Audit &amp; Assurance</option>
                        <option value="tax" className="bg-primary text-bg-canvas">Tax Advisory</option>
                        <option value="gst" className="bg-primary text-bg-canvas">GST Compliance</option>
                        <option value="registration" className="bg-primary text-bg-canvas">Business Registration</option>
                        <option value="accounting" className="bg-primary text-bg-canvas">Accounting Services</option>
                        <option value="cfo" className="bg-primary text-bg-canvas">Virtual CFO Services</option>
                        <option value="startup" className="bg-primary text-bg-canvas">Startup Advisory</option>
                        <option value="roc" className="bg-primary text-bg-canvas">ROC Compliance</option>
                      </select>
                    </div>

                    <div className="flex flex-col space-y-xxs">
                      <label htmlFor="message" className="font-sans text-[10px] font-bold text-bg-canvas tracking-wider uppercase">
                        Brief Project Description
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleFormChange}
                        className="font-sans text-xs bg-primary-light/50 border border-border/10 p-xs rounded-none text-bg-canvas focus:border-accent focus:ring-0 focus:outline-none resize-none placeholder-[#B8C0CC]/40"
                        placeholder="Briefly state transaction parameters or audit timeline constraints..."
                      />
                    </div>

                    <div className="pt-xs flex flex-col space-y-xs">
                      <button
                        type="submit"
                        disabled={formStatus === 'submitting'}
                        className="w-full bg-accent text-primary hover:bg-bg-canvas hover:text-primary hover:border-bg-canvas text-xs font-semibold tracking-widest uppercase p-sm rounded-none border border-accent transition-all duration-300 flex items-center justify-center space-x-sm cursor-pointer select-none disabled:opacity-50"
                      >
                        <span>{formStatus === 'submitting' ? 'Submitting...' : 'Request Partner Callback'}</span>
                        <ArrowRight size={12} className="ml-xxs" />
                      </button>
                    </div>

                  </form>
                )}
              </div>

            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};

export default ServicesPage;